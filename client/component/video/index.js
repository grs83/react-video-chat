import React from 'react';

const Video = () =>  {
    const style = {
        layout: {
            width: '90vw',
            height: '80vh',
            backgroundColor: '#f4f4f4',
            boxShadow: '0 0 25px #424242'
        },
        video: {
            width: '100%', 
            height: '100%'
        }
    }

    function getMedia() {
        const constraints = {audio:  true, video: true};

        navigator.getUserMedia(constraints, function(stream) {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            const videoArea = document.querySelector("video");
            videoArea.src = window.URL.createObjectURL(stream);
            videoArea.play();
        }, function(err) {
            console.log("Error", err);
        })
    }

    getMedia()

    return (
        <div style={style.layout}>
            <video style={style.video} autoPlay></video>
        </div>
    )
}

export default Video;