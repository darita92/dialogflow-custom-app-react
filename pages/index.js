import React from 'react'
import style from '../styles/style.scss'
import Head from 'next/head'
import ChatBox from '../components/chatBox'

export default () => (
    <div>
        <Head>
            <title>Custom DialogFlow Bot</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"></link>
            <style dangerouslySetInnerHTML={{ __html: style }} />
            <script src="/static/js/recorder.js"></script>
            <script src='https://code.responsivevoice.org/responsivevoice.js'></script>
        </Head>
        
        <div className="columns">
            <div className="column">
                <ChatBox></ChatBox>
            </div>
            <div className="column">
                Customization Form
            </div>
        </div>
    </div>
)