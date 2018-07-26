import React, {Component} from "react";
import {connect} from "react-redux";
import Recorder from './recorder';
import { actions } from '../store/actions';

const mapStateToProps = (state) => ({
    avatarIcon: state.settings.avatarIcon
})

const ChatBox = ({avatarIcon, dispatch}) => (
    <div>
        <article className="message is-dark">
            <div className="message-header withImg">
                <img src={avatarIcon}/>
                <p>ChatBot</p>
            </div>
            <div className="message-body messagesList">
                <section className="section" >
                    Message Box
                </section>
            </div>
        </article>
        <div className="control chatInput">
            <input className="input" type="text" placeholder="Text input" onChange={(event) => {
                dispatch(actions.addMessage(event.target.value))
            }}/>
            <a className="button is-success submit" >
                <span className="icon is-small">
                    Send
                </span>
            </a>
            <Recorder></Recorder>
        </div>
        <style jsx>
        {`
            .messagesList {
                height: 82vh;
                overflow: scroll;
                margin-bottom: 5px;
                overflow-x: hidden;
            }
        
            .withImg img{
                width: 5%;
            }
        
            .chatInput {
                position: absolute;
                bottom: 0;
                min-width: 50%;
            }

            .chatInput .input {
                width: 70%;
                margin-right: 10px;
            }

            .chatInput .submit {
                width: 15%;
                margin-right: 10px;
            }
        `}
        </style>
    </div>
)

export default connect(mapStateToProps)(ChatBox);