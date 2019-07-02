import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Formik } from 'formik';
import * as yup from 'yup';
import classes from './Signup.css';

const schema = yup.object({
    email: yup.string().email().trim().required(),
    username: yup.string().required().trim().min(3).max(24),
    password: yup.string().required().trim().min(8).max(24),
    passConfirm: yup.string().required().trim().min(8).oneOf([yup.ref('password'), 'Passwords do not match.']).max(24),
    name: yup.string().required().trim().max(36),
});

class Signup extends Component {
    render() {
        return (
            <Container>
                <Formik
                    initialValues={{ email: '', username: '', password: '', passConfirm: '', name: '' }}
                    validationSchema={schema}
                    onSubmit={(values, bag) => this.props.onSignup(values, bag)}
                >   
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group>
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
                            <Form.Row>
                                <Form.Group>
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
                            <Form.Row>
                                <Form.Group>
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
                            <Form.Row>
                                <Col>
                                    <Form.Group>
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
                                </Col>
                                <Col>
                                    <Form.Group>
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
                                </Col>
                            </Form.Row>
                            <Button type="submit" disabled={isSubmitting}>Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        );
    }
}

export default Signup;