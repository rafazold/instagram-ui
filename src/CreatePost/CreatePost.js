import React, {Component} from 'react';
import { Formik, Form, Field, ErrorMessage} from "formik";
import Button from "react-bootstrap/Button";
import postModel from '../models/post.model'
import "./CreatePost.scss"

class CreatePost extends Component {

    submit(values) {
        console.log(values)
    }

    render() {
        return (
            <div className="post-create">
                <h2>Create Post</h2>
                <Formik initialValues={{image: '', title: '', tags: ''}}
                        validationSchema={postModel}
                        onSubmit={this.submit.bind(this)}>
                    <Form className="col-xs-12 col-sm-6">
                        <div className="form-group">
                            <label>Image:</label>
                            <Field name="image" type="file"/>
                        </div>
                        <div className="form-group">
                            <label>Title:</label>
                            <Field name="title" type="text" placeholder="add a title to your post..." className="form-control"/>
                            <ErrorMessage className="alert alert-danger" name="title" component="div" />
                        </div>
                        <div className="form-group">
                            <label>tags:</label>
                            <Field name="tags" type="text" placeholder="add tags separating with comma" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <Button type="submit">Post</Button>
                        </div>

                    </Form>
                </Formik>
            </div>
        );
    }
}

export default CreatePost;