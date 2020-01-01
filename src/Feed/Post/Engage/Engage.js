import React, {Component} from 'react';
import { AiOutlineCloudDownload, AiOutlineShareAlt, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import config from "../../../config";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import "./Engage.scss"
import commentModel from "../../../models/comment.model";
import {ErrorMessage, Field, Form, Formik} from "formik";

class Engage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            liked: false,
            showModal: false
        }
    }

    componentDidMount() {
        this.setState({liked: this.props.isLiked})
    }

    likePost() {
        this.setState({liked: !this.state.liked});
        fetch(`${config.apiUrl}/api/posts/${this.props.postId}/like`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body:
                JSON.stringify({likeStatus: !this.state.liked}),
            credentials: 'include'
        })
            .then(res => res.json())
            .catch(e => console.log('Unexpected error: ', e))
    }

    handleClose = () => this.setState({
        showModal: false
    });

    handleShow = () => this.setState({
        showModal: true
    });

    submitComment(values) {
        fetch(`${config.apiUrl}/api/posts/${this.props.postId}/comments`, {
            method: 'POST',
            body: JSON.stringify(values),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(comment => console.log('comment: ', comment))
            .then(this.handleClose.bind(this))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <section className="engage">
                <div className="engageButtons">
                    <span className="post-action-buttons">
                        <button className="commentButton" onClick={this.handleShow.bind(this)}><FaRegComments /></button>
                        {/*<button className="shareButton"><AiOutlineShareAlt /></button>*/}
                        {/*<button className="saveButton"><AiOutlineCloudDownload/></button>*/}
                    </span>
                    <span className="post-likes">
                        <button className="likeButton" onClick={this.likePost.bind(this)}>
                            {this.state.liked ? <AiTwotoneHeart color="#a42e2e" /> : <AiOutlineHeart/>}
                        </button>
                        <span className="likesCount">{this.props.likes}</span></span>
                </div>

                <Modal show={this.state.showModal} onHide={this.handleClose.bind(this)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Please write your comment below:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik initialValues={{content: ''}}
                                validationSchema={commentModel}
                                onSubmit={this.submitComment.bind(this)}
                        >
                            <Form >
                                <div className="row form-group">
                                    {/*<label htmlFor="content">Comment:</label>*/}
                                    <Field name="content" id="content" as="textarea" placeholder="About this post..." className="form-control comment-form-input"/>
                                    <ErrorMessage className="alert alert-danger" name="content" component="div" />
                                </div>
                                {/*<div className="row form-group d-flex justify-content-end">*/}
                                {/*    <Button type="submit">Share your comment</Button>*/}
                                {/*</div>*/}
                                <Button variant="secondary" onClick={this.handleClose.bind(this)} className="modal-button modal-submit-button">
                                    Close
                                </Button>
                                <Button type="submit" variant="primary" className="modal-button modal-close-button">
                                    Save Changes
                                </Button>
                            </Form>

                        </Formik>
                    </Modal.Body>
                </Modal>
            </section>
        );
    }
}

export default Engage;


