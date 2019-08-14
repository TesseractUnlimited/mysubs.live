import React, { Component } from 'react';
import { Container, Form , Row, Image, Col } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import './Landing.css';

const sal = require('../../../public/images/sal.png');
const logo = require('../../../public/images/logo-white.png')

const schema = yup.object({
    name: yup.string().required().trim(),
    email: yup.string().email().trim().required(),
    message: yup.string().required()
});

class landingPage extends Component {    
    render() {
        return (
            <div>
                <div className="landing__home">
                    <Container className="landing__home__container">
                        <Image className="large-logo" src={logo} />
                        <h1 className="landing__home__title">The best way to manage your subscriptions.</h1>        
                        <PrimaryButton class="landing__home__try-now-btn" sendTo={'/signup'}>
                            Try mysubs.live!
                        </PrimaryButton>
                    </Container>
                </div>
                <div className="landing__product">
                    <Container>
                        <h1 className="landing__product__title">Product</h1>
                        <h6 className="text-muted">Login Once. Access Forever.</h6>
                        <div className="landing__product__text-container">
                            <h3 className="landing__product__text">
                                mysubs.live is a subscription management web-app that allows you to control 
                                all aspects of their online subscriptions in one convenient place.
                            </h3>
                        </div>
                        
                    </Container>
                </div>
                <div className="landing__about">   
                        <Container>
                            <h1 className="landing__info__title">About</h1>
                        <h6 className="text-muted">Teamwork makes the dream work.</h6>
                        <div className="landing__about__container">
                            <Col className="team-profile">
                                <Image className="team-profile__pic" src={sal} roundedCircle></Image>
                                <h3>Salvador Salcedo</h3>
                                <h5>Founder & Developer</h5>
                            </Col>
                           <h3>mysubs.live is made by a community college student based in sunny SoCal.</h3>
                        </div>  
                        </Container>
                    </div>
                <div className="landing__contact">
                        <Container>
                            <h1 className="landing__info__title">Contact</h1>
                            <h6 className="text-muted">Hit us up.</h6>
                        </Container>
                    </div>
                <div className="landing__feedback">
                        <Container>
                            <h1 className="landing__info__title">Feedback</h1>
                            <h6 className="text-muted">Help us improve our product!</h6>
                            <Formik
                                validationSchema={schema}
                                onSubmit={console.log}
                                initialValues={{ name: '', email: '', message: '' }}
                            >
                                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
                                    <Form className="feedback__form">
                                        <Form.Group bsPrefix="feedback__form-group">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Name"
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Email@domain.com"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as = "textarea"
                                                rows = "5"
                                                type="text"
                                                placeholder="Feedback :)"
                                                name="message"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.message}
                                            />
                                        </Form.Group>
                                    </Form>
                                )}
                            </Formik>
                        </Container>
                    </div>
            </div>
        );
    }
}

export default landingPage;