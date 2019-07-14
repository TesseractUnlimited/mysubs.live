import React, { Component } from 'react';
import { Form, Button, Card, Row } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import './AddSubCard.css';

const schema = yup.object().shape({
    name: yup.string()
        .required('Sub name is required.')
        .trim(),
    url: yup.string()
        .required('Sub URL is required.')
        .trim(),
    price: yup.number()
        .required('Price is required.'),
    renewal: yup.string()
        .required('Renewal is required.'),
    nextPayment: yup.date()
        .required('Next payment date is required.'),
    lastUsed: yup.date()
        .required('Last used date is required.')
});

class AddSubCard extends Component {
    render() {
        return (
            <Card bsPrefix="add-sub-card__card col-6">
                <Row bsPrefix="add-sub-card__card__top-row">
                    <h1>Add A Sub</h1>
                </Row>
                <Row bsPrefix="add-sub-card__card__bottom-row">
                    <Formik
                        initialValues={{ name: '', url: '' }}
                        validationSchema={schema}
                        onSubmit={(values, bag) => this.props.onadd-sub(values, bag)}
                        
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit} className="w-100">
                                <Form.Row bsPrefix="add-sub-card__card__form__form-row">
                                    <Form.Group className="w-100">
                                        <Form.Label>Sub Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            isValid={touched.name && !errors.name}
                                        />
                                        { errors.name && touched.name ? ( <div className="text-danger">{errors.name}</div> ) : null }
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row bsPrefix="add-sub-card__card__form__form-row">
                                    <Form.Group className="w-100">
                                        <Form.Label>URL</Form.Label>
                                        <Form.Control
                                            type="url"
                                            name="url"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.url}
                                            isValid={touched.url && !errors.url}
                                        />
                                        { errors.url && touched.url ? ( <div className="text-danger">{errors.url}</div> ) : null }
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row bsPrefix="add-sub-card__card__form__form-row">
                                    <Form.Group className="w-100">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="price"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.price}
                                            isValid={touched.price && !errors.price}
                                        />
                                        { errors.price && touched.price ? ( <div className="text-danger">{ errors.price }</div> ) : null }
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row bsPrefix="add-sub-card__card__form__form-row">
                                    <Form.Group className="w-100">
                                        <Form.Label>Renewal Rate</Form.Label>
                                        <Form.Control
                                            as="select"
                                            placeholder="Monthly"
                                            name="renewal"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.renewal}
                                            isValid={touched.renewal && !errors.renewal}
                                        >
                                            <option>Weekly</option>
                                            <option>Bi-Weekly</option>
                                            <option>Monthly</option>
                                            <option>Yearly</option>
                                        </Form.Control>
                                        { errors.renewal && touched.renewal ? ( <div className="text-danger">{ errors.renewal }</div> ) : null }
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row bsPrefix="add-sub-card__card__form__form-row">
                                    <Form.Group className="w-100">
                                        <Form.Label>Next Payment</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="nextPayment"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.nextPayment}
                                            isValid={touched.nextPayment && !errors.nextPayment}
                                        />
                                        { errors.nextPayment && touched.nextPayment ? ( <div className="text-danger">{ errors.nextPayment }</div> ) : null }
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row bsPrefix="add-sub-card__card__form__form-row">
                                    <Form.Group className="w-100">
                                        <Form.Label>Last Used</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="lastUsed"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastUsed}
                                            isValid={touched.lastUsed && !errors.lastUsed}
                                        />
                                        { errors.lastUsed && touched.lastUsed ? ( <div className="text-danger">{ errors.lastUsed }</div> ) : null }
                                    </Form.Group>
                                </Form.Row>
                                <Button
                                    type="submit"
                                >
                                    Add Sub!
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Row>
            </Card>
        );
    }
}

export default AddSubCard;

