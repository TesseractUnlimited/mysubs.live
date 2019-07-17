import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import AddSubCard from '../../components/AddSubCard/AddSubCard';
import './AddSub.css';

export default class AddSub extends Component { 
    render() {
        return (
            <div className="page-parent">    
                <div className="add-sub__container">
                    <AddSubCard addSubHandler={this.props.addSubHandler} username={this.props.username}/>
                </div>
            </div>
        );
    }
}