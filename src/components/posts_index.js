import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    /*
        reduxblog.herokuapp.com is a free post API and only takes title, categories and content as parameters.
        Therefor:
        title = namn
        categories = email
        content = meddelande
    */
    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <h5>{post.title}</h5>
                    <span>{post.categories}</span>
                    <p> {post.content}</p>

                </li>
            )
        });
    }


    render() {
        return (
            <div>
                <ul className="list-group comments__list">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
