import React, { Component } from 'react';

class Overlay extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render () {
        const style = {
            layout: {
                position: 'relative',
            }
        }

        return (
            <div style={style.layout}>
                {/* <h1>Testing</h1>
                <p>Did we make it to the screen???</p>
                <p>maybe?</p> */}
            </div>
        )
    }
}

export default Overlay;