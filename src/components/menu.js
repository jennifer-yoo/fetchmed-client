import React from 'react';
import Request from './request'

class Menu extends React.Component {

    state = {
        info: ""
    }

    componentWillMount() {
        fetch("http://localhost:3001/")
        .then(resp => resp.json())
        .then(json => this.setState({ info: json}))
    }

    render() {
        return (
            <div className="Menu">
                <p>Menu</p>
                <li>Profile</li>
                <li>Messages</li>
                <li>Request</li>
                <Request info={this.state.info}/>
            </div>
        )
    }
}

export default Menu