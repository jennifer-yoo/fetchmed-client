import React from 'react';
import Medlist from './medlist.js'

class Profile extends React.Component {

    state = {
        info: ""
    }
    
    componentDidMount() {
        fetch("http://localhost:3001/api/v1/orders")
        .then(resp => resp.json())
        .then(data => {
            this.setState({ info: json})
        })
    }
    
    render() {
        return (
            <div className="Profile">
                <p>My Orders</p>
                <Medlist orders={this.state.info} />
                <p>User Info</p>
            </div>
        )
    }
}

export default Profile