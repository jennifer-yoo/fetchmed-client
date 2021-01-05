import React from 'react';
import RequestList from './requestlist'

class Request extends React.Component {

    listMedication = () => {
        this.props.info.map((el)=>  {
            return (<RequestList key={el.id} med={el} />)
        })
    }

    render() {
        return (
            <div className="Request">
                <p>Refill your medication</p>
                {this.listMedication()}
                <p>Search for doctor</p>
                <input type="text"></input>
                <p>Search for specific medication</p>
                <input type="text"></input>
                <button type="submit">Search</button>
            </div>
        )
    }
}

export default Request