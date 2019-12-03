import React, {Component} from 'react';
import { Formik, Form, Field, ErrorMessage} from "formik";
import Button from "react-bootstrap/Button";
import postModel from '../models/post.model'
import "./CreatePost.scss"
import { GoCloudUpload } from "react-icons/go";
import { FaRegShareSquare } from "react-icons/fa";
import config from '../config'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'



class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {tags: []}
    }

    handleTagsChange(tags) {
            this.setState({
                tags: tags
            });
        }

    convertToFormData(values) {
        const data = new FormData();
        for (let key in values) {
            Array.isArray(values[key])
                ? values[key].forEach(value => data.append(key + '[]', value))
                : data.append(key, values[key]) ;
        }
        return data;
    }

    submit(values) {
        const data = this.convertToFormData(values);

        fetch(config.apiUrl + '/api/posts', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(post => console.log('post:', post))
            .then(() => window.location.href = "/")
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="post-create">
                <h2 className="">Create Post</h2>
                <Formik initialValues={{image: '', title: '', tags: []}}
                        validationSchema={postModel}
                        onSubmit={this.submit.bind(this)}
                        >
                    {({setFieldValue}) => {
                        return <Form className="col-xs-12 col-md-6 m-auto">
                            <div className="row form-group ">
                                <input name="image" type="file" id="image" onChange={(event => {
                                    setFieldValue('image', event.currentTarget.files[0]);
                                })} />
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
                                <label>Tags:</label>
                                <TagsInput value={this.state.tags}
                                           onChange={(tags) => {
                                               this.handleTagsChange(tags);
                                               setFieldValue('tags', tags);
                                           }}
                                           className="tags-wrapper create-post-tags" />
                                <div><sub>Press Enter after each a tag</sub></div>
                            </div>
                            <div className="row form-group d-flex justify-content-end">
                                <Button type="submit"><FaRegShareSquare /> Share your post</Button>
                            </div>
                        </Form>
                    }}

                </Formik>
            </div>
        );
    }
}

export default CreatePost;