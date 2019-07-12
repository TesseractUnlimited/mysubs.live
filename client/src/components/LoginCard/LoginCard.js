import React, { Component } from 'react';
import { Form, Button, Card, Row } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import './LoginCard.css';

const schema = yup.object({
    username: yup.string().required().trim().min(3),
    password: yup.string().required().trim().min(8)
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
                                            isInvalid={touched.username && errors.username}
                                        />
                                        <Form.Control.Feedback type="invalid">Uh oh. Try again!</Form.Control.Feedback>
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
                                            isInvalid={touched.password && errors.password}
                                        />
                                        <Form.Control.Feedback type="invalid">Uh oh. Try again!</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Button type="submit">Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Row>
            </Card>
        );
    }
}

export default LoginCard;

