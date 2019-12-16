import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import editProfileModel from '../models/editProfile.models';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import config from "../config";
import "./EditProfile.scss";

class EditPofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }

    componentDidMount() {
        fetch(config.apiUrl + '/api/users/me', {
            credentials: 'include'

        })
            .then(res => res.json())
            .then(user => {
                this.setState({user});
            })
            .catch(e => console.log(e))
    }

    convertToFormData(values) {
        const data = new FormData();
        for (let key in values) {
            if (values[key]) {
                Array.isArray(values[key])
                ? values[key].forEach(value => data.append(key + '[]', value))
                : data.append(key, values[key]) ;}
        }
        return data;
    }

    submit(values) {
        const data = this.convertToFormData(values);
        fetch(config.apiUrl + '/api/users/' + this.state.user._id, {
            method: 'PUT',
            body: data,
            credentials: 'include'
        })
            .then(res => res.json())
            .then(user => console.log('user:', user))
            // .then(() => window.location.href = "/")
            .catch(err => console.log(err));
    }

    render() {
        console.log('test', this.state.user);
        return (
            <div className="register-new">
                <h2>Profile</h2>
                <Formik initialValues={{name: '', username: '', password: '', birthDate: new Date(), gender: 'm', about: '', avatar: ''}}
                        validationSchema={editProfileModel}
                        onSubmit={this.submit.bind(this)}
                >
                        {({setFieldValue}) => {
                            return <Form className="col-xs-12 col-md-6" >
                            <div className="row form-group">
                                <label htmlFor="name">Name:</label>
                                <Field name="name" id="name" className="form-control" />
                                <ErrorMessage className="alert alert-danger mt-2" name="name" component="div" />
                            </div>
                            <div className="row form-group">
                                <label htmlFor="username">Username:</label>
                                <Field name="username" id="username" className="form-control" />
                                <ErrorMessage className="alert alert-danger mt-2" name="username" component="div" />
                            </div>
                            <div className="row form-group">
                                <label htmlFor="password">Password:</label>
                                <Field type="password" name="password" id="password" className="form-control" />
                                <ErrorMessage className="alert alert-danger mt-2" name="password" component="div" />
                            </div>
                            <div className="row form-group ">
                                <input name="avatar" type="file" id="avatar" onChange={(event => {
                                    setFieldValue('avatar', event.currentTarget.files[0]);
                                })} />
                                <label htmlFor="avatar" className="upload-button">
                                    <span>
                                        Select avatar image
                                    </span>
                                </label>
                                <div className="container-fluid row">
                                    <ErrorMessage className="alert alert-danger mt-2" name="avatar" component="div" />
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="birthDate">Birth Date:</label>
                                <Field type="date" name="birthDate" id="birthDate" className="form-control" />
                                <ErrorMessage className="alert alert-danger mt-2" name="birthDate" component="div" />
                            </div>
                            <div className="row form-group">
                                <label htmlFor="gender">Gender:</label>
                                <Field component="select" name="gender" id="gender" className="form-control">
                                    <option value="m">Male</option>
                                    <option value="f">Female</option>
                                </Field>
                                <ErrorMessage className="alert alert-danger mt-2" name="birthDate" component="div" />
                            </div>
                            <div className="row form-group">
                                <label htmlFor="about">About:</label>
                                <Field as="textarea" id="about" name="about" className="form-control" />
                                <ErrorMessage className="alert alert-danger mt-2" name="about" component="div" />
                            </div>
                            <div className="row form-group d-flex justify-content-end">
                                <Button type="submit">Register</Button>
                            </div>
                        </Form>
                    }}
                </Formik>
            </div>
        );
    }
}

export default withRouter(EditPofile);