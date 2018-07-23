import React from 'react'
import axios from 'axios'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recording: false,
            data: {},
            recorder: null
        };
    }

    componentDidMount() {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
            window.URL = window.URL || window.webkitURL;

            this.audio_context = new AudioContext;
            console.log('Audio context set up.');
            console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
        } catch (e) {
            console.log(e);
            alert('No web audio support in this browser!');
        }
        const that = this;
        navigator.getUserMedia({
            audio: true
        }, function (stream) {
            that.startUserMedia(stream)
        }, function (e) {
            console.log('No live audio input: ' + e);
        });
    }

    startUserMedia = (stream) => {
        const input = this.audio_context.createMediaStreamSource(stream);
        // Media stream created
        this.setState({
            recorder: new Recorder(input)
        });
        // Recorder initialised
    }

    toggleRecording = () => {
        if (!this.state.recording) {
            this.state.recorder && this.state.recorder.record();
            this.setState({
                recording: true
            });
        }
        else {
            this.state.recorder && this.state.recorder.stop();
            this.setState({
                recording: false
            });
            this.processRecording();
            this.state.recorder.clear();
        }
    }

    processRecording = () => {
        const vm = this;

        this.state.recorder && this.state.recorder.exportWAV(function (blob) {
            var reader = new window.FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const baseData = reader.result;
                const base64Data = baseData.replace("data:audio/wav;base64,", "");
                vm.setState({
                    data:{
                        "audio": {
                            "content": base64Data
                        },
                        "config": {
                            "encoding": "LINEAR16",
                            "sampleRateHertz": 48000,
                            "languageCode": 'es'
                        }
                    }
                });
                axios.post(
                    `https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyBc5Utbfnp10qVwUfu633nODylekvtpIos`,
                    vm.state.data
                ).then(response => {
                    const result = response.data.results[0].alternatives[0];
                    const textResult = result.transcript
                    responsiveVoice.speak(textResult);
                    /*vm.$store.state.messages.push({
                        text: textResult,
                        type: 'right'
                    });
                    axios.post('/handlers/message', {
                        sessionId: vm.$store.state.sessionId,
                        query: textResult
                    })
                    .then(message => {
                        responsiveVoice.speak(message.text, voiceLanguage);
                        vm.$store.state.messages.push({
                            text: message.text,
                            type: 'left'
                        });
                    });
                    */
                }).catch(error => {
                    console.log("ERROR:" + error);
                })
            }
        });
    }

    render() {
        return (
            <a className="button is-rounded is-danger" onClick={this.toggleRecording}>
                <span className="icon is-small">
                    {!this.state.recording && <i className="fas fa-microphone"></i>}
                    {this.state.recording && <i className="fas fa-microphone-slash"></i>}
                </span>
                <style jsx>{`
                    .button {
                        width: 5%;
                    }
                `}</style>
            </a>
        )
    }
}