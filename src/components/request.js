import React from 'react';

function Request () {
    return (
        <div className="Request">
            <p>Search for doctor</p>
            <input type="text"></input>
            <p>Search for specific medication</p>
            <input type="text"></input>
            <button type="submit">Search</button>
        </div>
    )
}

export default Request