import React, {Component} from 'react';
import './PostForm.css'
import { connect } from "react-redux";
import { changePostsNum } from "../actions";



const categories = ['World', 'Economy', 'Science', 'Sport'];

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onSubmit({category: this.category.value, content: this.content.value})
        this.category.value = categories[0]; 
        this.content.value = '';
        this.total_news_num += 1;
        this.props.changeComponentPostsNum(this.props.num.data + 1);
        event.preventDefault();
    }

    render() {
        return (
            <div className="post-form">
                <form onSubmit={this.handleSubmit}>
                    <label className="category-label">
                        Category:
                        <select className="select-style" ref={(input) => this.category = input}>
                            {categories.map((category, index) =>
                                <option key={category} value={category}>{category}
                                </option>)}
                        </select>   
                    </label>
                    <label className="content-label">
                        Content:
                        <input type="text" size={40} ref={(input) => this.content = input} />
                    </label>
                    <button className="button">Post it!</button>
                </form>
            </div>
        )
    }
}

export default connect(
	state => ({num: state.num}),
	dispatch => ({
		changeComponentPostsNum(newnum) {
			dispatch(changePostsNum(newnum));
		}
	})
)(PostForm)

//export default PostForm;