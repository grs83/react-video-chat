import React from 'react';
import Overlay from '../overlay';

const Video = () =>  {
    (function getMedia() {
        const constraints = {audio: false, video: true};

        navigator.getUserMedia(constraints, function(stream) {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            const videoArea = document.querySelector("video");
            videoArea.src = window.URL.createObjectURL(stream);
            videoArea.play();
        }, function(err) {
            console.log("Error", err);
        })
    })()

    const style = {
        video: {
            height: '100vh',
            width: '100vw',
            boxShadow: '0 0 25px #424242'
        }
    }

    return (
        <div>
            <video style={style.video} autoPlay></video>
            <Overlay />
        </div>
    )
}

export default Video;