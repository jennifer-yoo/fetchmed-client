import React from 'react';

class Medlist extends React.Component {

    renderMeds = () => {
        return this.props.orders.map(el => 
            <Medcard key={el.id} info={el} />
        )
    }
    
    render() {
        return (
            <div className="medlist-div">
                {this.renderMeds()}
            </div>
        )
    }
}

export default Medlist