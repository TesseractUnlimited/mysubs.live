import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import './Login.css';

const schema = yup.object({
    username: yup.string().required().trim().min(3),
    password: yup.string().required().trim().min(8)
});

class Login extends Component {
    render() {
        return (
            <Container>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={ schema } 
                    onSubmit = {(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >   
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
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
                            </Form.Row>
                            <Button type="submit" disabled={isSubmitting}>Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        );
    }
}

export default Login;