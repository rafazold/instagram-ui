import React, {Component} from 'react';
import { Formik, Form, Field, ErrorMessage} from "formik";
import Button from "react-bootstrap/Button";
import postModel from '../models/post.model'
import "./CreatePost.scss"
import { GoCloudUpload } from "react-icons/go";
import { FaRegShareSquare } from "react-icons/fa";
import Tags from "./Tags/Tags";




class CreatePost extends Component {

    submit(values) {
        console.log(values)
    }

    render() {
        return (
            <div className="post-create">
                <h2 className="">Create Post</h2>
                <Formik initialValues={{image: '', title: '', tags: ''}}
                        validationSchema={postModel}
                        onSubmit={this.submit.bind(this)}>
                    <Form className="col-xs-12 col-md-6 m-auto">
                        <div className="row form-group ">
                            <Field name="image" type="file" id="image"/>
                            <label htmlFor="image" className="upload-button">
                                <span>
                                    <GoCloudUpload /> Select image
                                </span>
                            </label>
                            <div className="container-fluid row">
                                <ErrorMessage className="alert alert-danger mt-2" name="image" component="div" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label>Title:</label>
                            <Field name="title" as="textarea" placeholder="About this post..." className="form-control"/>
                            <ErrorMessage className="alert alert-danger" name="title" component="div" />
                        </div>
                        <div className="row form-group">
                            <label>tags:</label>
                            <Tags name="tags" />
                            <div><sub>Press Enter after each a tag</sub></div>
                        </div>
                        <div className="row form-group d-flex justify-content-end">
                            <Button type="submit"><FaRegShareSquare /> Share your post</Button>
                        </div>

                    </Form>
                </Formik>
            </div>
        );
    }
}

export default CreatePost;