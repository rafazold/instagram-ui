import React, {Component} from 'react';
import Tag from "./Tag/Tag";
import "./Tags.scss";

class Tags extends Component {
    render() {
        // const tags = {this.props.tags};
        return (
            <div className="tags">
                {this.props.tags.map(tag => {
                    return <span>
                        <Tag>
                            {tag}
                        </Tag>
                    </span>
                })}
            </div>
        );
    }
}

export default Tags;