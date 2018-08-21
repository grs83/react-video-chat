import React from 'react';

const Home = ({ handlePage }) =>  {

    const style = {
        layout: {
            width: '100vw',
            height: '100vh',
        },
        title: {
            fontWeight: '200',
            fontSize: '3em'
        }
    }

    return (
        <div style={style.layout} className='flexColumn'>   
            <h1 style={style.title}>Video Chat</h1>
            <button onClick={() => handlePage('chat')} >Start Chat</button>
        </div>
    )
}

export default Home;