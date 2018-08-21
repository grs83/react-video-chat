import React from 'react';
import Overlay from './overlay';
import Video from './video';

const Index = () =>  {
    const style = {
        layout: {
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(150deg, #b4a284, #5A7189 30%)',
            color: '#f4f4f4'
        },
        title: {
            fontWeight: '200',
            fontSize: '3em'
        }
    }

    return (
        <div style={style.layout} className='flexColumn'>
            <h1 style={style.title}>Video Chat</h1>
            <Video />
            <Overlay />
        </div>
    )
}

export default Index;