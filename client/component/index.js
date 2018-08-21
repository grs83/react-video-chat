import React, { Component } from 'react';
import Video from './video';
import Home from './home';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'home',
        }
        this.handlePage = this.handlePage.bind(this)
    }

    handlePage(page) {
        this.setState({ page })
    }

    render() {
    const style = {
        layout: {
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(150deg, #b4a284, #5A7189 30%)',
            color: '#f4f4f4'
        }
    }

    return (
        <div style={style.layout}>
            {(() => {
                switch (this.state.page) {
                    case 'home':
                    return <Home handlePage={this.handlePage}/>;
                    case 'chat':
                    return <Video handlePage={this.handlePage}/>;
                    default:
                    return <Home handlePage={this.handlePage}/>;
                 }
            })()}
        </div>
    )
    }
}

export default Index;