import React, { Component } from 'react';
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import './SignupCard.css';

const schema = yup.object().shape({
    email: yup.string().email().trim().required(),
    username: yup.string().required().trim().min(3).max(24),
    password: yup.string().required().trim().min(8).max(24),
    passConfirm: yup.string().required().trim().min(8).oneOf([yup.ref('password'), 'Passwords do not match.']).max(24),
    name: yup.string().required().trim().max(36),
});

class SignupCard extends Component {
    render() {
        return (
            <Card bsPrefix="signup-card__card col-6">
                <Row bsPrefix="signup-card__card__top-row">
                    <h1>Sign Up</h1>
                </Row>
                <Row bsPrefix="signup-card__card__bottom-row">
                    <Formik
                        initialValues={{ email: '', username: '', password: '', passConfirm: '', name: '' }}
                        validationSchema={schema}
                        onSubmit={(values, bag) => this.props.onSignup(values, bag)}
                    >   
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <Form className="signup-card__card__bottom-row__form" onSubmit={handleSubmit}>
                                <Form.Row bsPrefix="signup-card__card__form__form-row">
                                    <Form.Group bsPrefix="signup-card__card__form__form-row__form-group">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            isValid={touched.name && !errors.name}
                                            isInvalid={touched.name && errors.name}
                                        />
                                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Please enter a valid name.</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row bsPrefix="signup-card__card__form__form-row">
                                    <Form.Group bsPrefix="signup-card__card__form__form-row__form-group">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            isValid={touched.email && !errors.email}
                                            isInvalid={touched.email && errors.email}
                                        />
                                        <Form.Control.Feedback type="valid">Awesome!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row bsPrefix="signup-card__card__form__form-row">
                                    <Form.Group bsPrefix="signup-card__card__form__form-row__form-group">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                            isValid={touched.username && !errors.username}
                                            isInvalid={touched.username && errors.username}
                                        />
                                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Please enter a valid username.</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row id="password-field" bsPrefix="signup-card__card__form__form-row">
                                    <div className="signup-card__card__form__form-row__form-col">
                                        <Form.Group bsPrefix="signup-card__card__form__form-row__form-group">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            isValid={touched.password && !errors.password}
                                                isInvalid={touched.password && errors.password}
                                            />
                                            <Form.Control.Feedback type="valid">Perfect!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">Please enter a valid password.</Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="signup-card__card__form__form-row__form-col">
                                        <Form.Group bsPrefix="signup-card__card__form__form-row__form-group">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="passConfirm"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.passConfirm}
                                                isValid={touched.passConfirm && !errors.passConfirm}
                                                isInvalid={touched.passConfirm && errors.passConfirm}
                                            />
                                            <Form.Control.Feedback type="valid">Perfect!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">Please enter a valid password.</Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </Form.Row>
                                <Button type="submit" disabled={isSubmitting}>Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Row>
            </Card>
        );
    }
}

export default SignupCard;

