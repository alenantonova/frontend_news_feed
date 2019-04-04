import React, {Component} from 'react';
import './Feed.css';
import Post from '../post/Post.js';
import pic from './news2.jpg';
import PostForm from '../post-form/PostForm.js';
import { connect } from "react-redux";
import { changePostsNum } from "../actions";

const categories = ['World', 'Economy', 'Science', 'Sport'];

class Feed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [
          {category: categories[0], content: 'This is first post!'},
          {category: categories[1], content: 'This is second post!'}
        ]
      }
      
      this.removePost = this.removePost.bind(this);
      this.handleNewPost = this.handleNewPost.bind(this);
    }

    removePost(removeIndex) {
      this.setState({posts:
          this.state.posts.filter((item, index) =>
            index !== removeIndex)})
      
      this.props.changeComponentPostsNum(this.props.num.data - 1);
    }  

    handleNewPost(post) {
      this.setState({
        posts: this.state.posts.concat([post])
      });
    }

    render() {
      const posts = this.state.posts.map((post, index) =>
        <Post key={index} value={post} onRemove={() => this.removePost(index)}/>
      );
      return (
        <div className="feed">
          <PostForm onSubmit={this.handleNewPost} />
          <div className="posts-num">
            Current number of posts : {this.props.num.data}
          </div>
          <img src={pic} className="pic"/>
          {posts}
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
  )(Feed);
  

  //export default Feed;