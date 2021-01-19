import React from 'react';

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
            <div className="Profile">
                <p>My Orders</p>
                <p>User Info</p>
            </div>
        )
    }
}

export default Profile