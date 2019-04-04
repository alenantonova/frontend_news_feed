import React, {Component} from 'react';
import './Post.css';

class Post extends Component {
    render() {
        return (
            <div className="post">
                <span className="label">{this.props.value.category}: </span>
                <span className="content">{this.props.value.content}</span>
                <button className="remove-button" onClick={this.props.onRemove}>Remove</button>
            </div>
        )
    }
}

export default Post;