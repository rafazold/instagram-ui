import React, {Component} from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {tags: []}
    }

    handleChange(tags) {
        this.setState({tags})
    }

    render() {
        return <TagsInput className="create-post-tags" value={this.state.tags} onChange={this.handleChange.bind(this)} />
    }
}

export default Tags;