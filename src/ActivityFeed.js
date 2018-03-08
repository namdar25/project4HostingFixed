import React, { Component } from 'react';
import firebase from 'firebase';
import { PostList } from './PostList';

export class ActivityFeed extends Component {
	constructor(props) {
        super(props);
		this.state = {
			posts:{}
		}
	};
	componentDidMount() {
		this.postRef = firebase.database().ref('Posts');
		this.postRef.on('value', (snapshot) => {
			let posts = snapshot.val();
			this.setState({posts:posts})
		})
	}

	render() {
	let posts = this.state.posts === null ? [] : Object.keys
		(this.state.posts).map((d) => {
			let post = this.state.posts[d]
			post.key = d;
			return post;
		})

		return (
			<div className="classPage">
			<h1>Activity Feed</h1>
			<PostList posts={posts}/>
			</div>
		)
	}
}