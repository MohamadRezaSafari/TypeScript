import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }

    // componentWillUnmount() {
    //     // fetch('https://api.github.com/users/hadley/org')
    //     //     .then(response => response.json())
    //     //     // .then(data => this.setState({ posts: data }))
    //     //     .then(data => console.log(data))
    //     //     ;
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // } 

  componentWillUnmount() {
    this.props.fetchPosts();
  }

  render() {

    const postItems = this.props.posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {console.log(post.title)}
        </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.protoTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);