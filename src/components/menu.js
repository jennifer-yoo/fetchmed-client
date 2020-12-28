import React from 'react';
import Request from './request'

function Menu() {
    return (
        <div className="Menu">
            <p>Menu</p>
            <li>Profile</li>
            <li>Messages</li>
            <li>Request</li>
            <Request />
        </div>
    )
}
export default Menu