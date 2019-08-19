import React, { Component, Fragment } from 'react';
import SubCardItem from '../../components/SubCardItem/SubCardItem';
import * as moment from 'moment';
import './SubList.css';

class SubList extends Component {
    state = {
        subs: []
    }
    
    componentDidMount() {
        fetch('/subs/' + this.props.username, {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + this.props.token,
                ContentType: 'application/json'
            }})
        .then(res => {
            if (res.status === 400) {
                throw new Error('Bad Request.');
            }
            else if (res.status === 404) {
                throw new Error ('User not found!');
            }
            else {
                res.json()
                    .then(subs => {
                        this.setState({
                            subs: subs
                        });
                    })
                    .catch(err => console.log(err));
            }})
            .catch(err => {
                console.log("fetch: " + err);
            });
    }

    render() {
        return (
            <div className="sub-list__sub-holder">
                {this.state.subs.map((sub, index) => {
                    const nextDate = moment(sub.nextPayment).toDate();
                    const lastDate = moment(sub.lastUsed).toDate();
                    return <SubCardItem
                        key={index}
                        sub={sub}
                        nextPayment={`${nextDate.getUTCMonth()}/${nextDate.getUTCDay()}/${nextDate.getUTCFullYear()}`}
                        lastUsed={`${lastDate.getUTCMonth()}/${lastDate.getUTCDay()}/${lastDate.getUTCFullYear()}`}
                    />
                })}
            </div>
        );
    }
}

export default SubList;