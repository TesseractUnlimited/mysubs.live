import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import SubDetailCard from '../../components/SubDetailCard/SubDetailCard.js';
import './SubDetail.css';

export default class SubDetail extends Component {
    state = {
        sub: null
    }

    componentDidMount() {
        fetch(`/sub/${this.props.username}/${this.props.subId}`, {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + this.props.token,
                ContentType: 'application/json'
            }
        })
            .then(res => {
                if (res.status === 400) {
                    throw new Error('Bad Request.');
                } else if (res.status === 404) {
                    throw new Error('Sub not found!');
                } else {
                    res.json()
                        .then(sub => {
                            this.setState({
                                sub: sub
                            });
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(err => {
                console.log("fetch: " + err);
            });
        }
    
    render() {
        return (
            <div className="page-parent">    
                <Container className="sub-detail-card__container">
                    <SubDetailCard sub={this.state.sub}/>
                </Container>
            </div>
        );
    }
}

