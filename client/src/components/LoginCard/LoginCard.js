import React, { Component } from 'react';
import { Form, Button, Card, Row } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import './LoginCard.css';

const schema = yup.object().shape({
    username: yup.string()
        .required('Username is required.')
        .trim()
        .min(3, 'Username must be at least 3 characters.'),
    password: yup.string()
        .required('Password is required.')
        .trim()
        .min(8, 'Password must be at least 8 characters.')
});

class LoginCard extends Component {
    render() {
        return (
            <Card bsPrefix="login-card__card col-4">
                <Row bsPrefix="login-card__card__top-row">
                    <h1>Login</h1>
                </Row>
                <Row bsPrefix="login-card__card__bottom-row">
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validationSchema={schema}
                        onSubmit={(values, bag) => this.props.onLogin(values, bag)}
                        
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit} className="w-100">
                                <Form.Row bsPrefix="login-card__card__form__form-row">
                                    <Form.Group className="w-100">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                            isValid={touched.username && !errors.username}
                                        />
                                        { errors.username && touched.username ? ( <div className="text-danger">{errors.username}</div> ) : null }
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row bsPrefix="login-card__card__form__form-row">
                                    <Form.Group className="w-100">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            isValid={touched.password && !errors.password}
                                        />
                                        { errors.password && touched.password ? ( <div className="text-danger">{errors.password}</div> ) : null }
                                    </Form.Group>
                                </Form.Row>
                                <Button
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Row>
            </Card>
        );
    }
}

export default LoginCard;

