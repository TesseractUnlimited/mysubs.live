import React, { Component } from 'react';
import './CardGroup.css';

class CardGroup extends Component {
    render() {
        return (
            <div className="card-group w-100">
                {this.props.children}
            </div>
        );
    }
}

export default CardGroup;