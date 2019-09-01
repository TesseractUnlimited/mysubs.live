import React, { Component } from 'react';
import { Container, Form , Row, Image, Col } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import SVG from 'react-inlinesvg';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import './Landing.css';

const sal = require('../../static/images/sal.png');
const logo = require('../../static/images/logo-white.png');
const productImage = require('../../static/images/undraw_options.svg');
const linked = require('../../static/images/linkedin-logo.png');
const email = require('../../static/images/email-icon.png');

const schema = yup.object({
    name: yup.string().required().trim(),
    email: yup.string().email().trim().required(),
    message: yup.string().required()
});

class landingPage extends Component {    
    render() {
        return (
            <div>
                <div id="home" className="landing__home">
                    <Row className="landing__home__row cont">
                        <Col className="landing__home__row__col">
                            <Image className="large-logo" src={logo} />
                            <h1 className="landing__home__title">The best way to manage your subscriptions.</h1>        
                            <PrimaryButton class="landing__home__try-now-btn" sendTo={'/signup'}>
                                Try mysubs.live!
                            </PrimaryButton>
                        </Col>
                    </Row>
                </div>
                <div id="product" className="landing__product">
                    <Row className="landing__product__row cont">
                        <Col className="landing__product__left-col">
                            <h2 className="landing__product__title">Product</h2>
                            <h6 className="text-muted">Login Once. Access Forever.</h6>
                            <h4 className="landing__product__text">
                                mysubs.live is a subscription management web-app that allows you to control 
                                all aspects of your online subscriptions in one convenient place.
                            </h4>
                        </Col>
                        <Col className="landing__product__right-col">
                            
                        </Col>
                    </Row>  
                </div>
                <div id="about" className="landing__about">
                    <Row className="landing__about__row cont">
                        <Col className="landing__about__left-col cont">
                            <h2 className="landing__info__title">About</h2>
                            <h6 className="text-muted">Teamwork makes the dream work.</h6>    
                           <h4>mysubs.live is made by a community college student based in sunny SoCal.</h4>
                        </Col>
                        <Col className="landing__about__right-col">
                            <Image className="landing__about__right-col__profile-pic" src={sal} roundedCircle></Image>
                            <h3>Salvador Salcedo</h3>
                            <h5>Founder & Developer</h5>
                        </Col>
                    </Row>
                </div>
                <div id="contact" className="landing__contact">
                    <Row className="landing__contact__row col-5 cont">
                        <Col>
                            <h2 className="landing__contact__title">Contact</h2>
                            <h6 className="text-muted">Hit me up.</h6>
                            <div className="landing__contact__links-col">
                                <div>
                                    <Image className="landing__contact__linked-img" src={linked} />
                                    <a href="https://www.linkedin.com/in/salvador-salcedo/" target="_blank">LinkedIn</a>
                                </div>
                                <div>
                                    <Image className="landing__contact__email-img" src={email} />
                                    <a href="mailto: salsalcedo4321@gmail.com">Email: salsalcedo4321@gmail.com</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div id="feedback" className="landing__feedback">
                    <Row className="landing__feedback__row cont">
                        <Col className="landing__feedback__row__col"> 
                            <h2 className="landing__info__title">Feedback</h2>
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
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default landingPage;