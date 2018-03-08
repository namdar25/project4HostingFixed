import React, { Component } from 'react';
import { PostList } from './PostList';
import firebase from 'firebase';
import { HashRouter as Router, Route, Link } from "react-router-dom";

export class Planet extends Component {
	constructor(props) {
        super(props);
		this.state = {
			postComment:'',
			posts:{},
			user:{}
		}
	};


	componentDidMount() {
		let user = firebase.auth().currentUser;
		this.setState({
			user:user
		})
		this.postRef = firebase.database().ref('Posts');
		this.postRef.on('value', (snapshot) => {
			let posts = snapshot.val();
			this.setState({posts:posts})
		})
	}

	updatePostComment(event) {
		let postComment = event.target.value;
		this.setState({
			postComment:postComment
		})
	}

	addPost() {
		let post ={
			postComment:this.state.postComment,
			user:this.state.user.displayName,
			timestamp:firebase.database.ServerValue.TIMESTAMP,
			planet:this.props.planet.key,
			likes:0
		}
		this.postRef.push(post);
		this.setState({
			postComment:''
		})
	}

	render() {
	let posts = this.state.posts === null ? [] : Object.keys
		(this.state.posts).map((d) => {
			let post = this.state.posts[d]
			post.key = d;
			return post;
		}).filter(post => post.planet == this.props.planet.key)

	let input = null;
		if(this.state.user != null){
			input = <div className="inputBox"><input className="form-control"
					name="postComment"
					value={this.state.postComment}
					onChange={(event) => { this.updatePostComment(event) }}
				/>
			<button className="btn btn-primary mr-2" onClick={() => this.addPost()}>
					Post
			</button></div>
		} else {
			input = <div className="inputBox"><Link to="/Authentication" className="btn btn-dark">Log in or sign up to comment</Link></div>

		}

		return (
			<div className="classPage">
				<h1>{this.props.planet.key}</h1>
				<img className="pb-3 planetImage" src={this.props.planet.IMG} alt={this.props.planet.key}></img>
				<p>Radius: {this.props.planet.Radius}</p>
				<p>Mass: {this.props.planet.Mass}</p>
				<p>Gravity: {this.props.planet.Gravity}</p>
				<div className="postView">
				{input}
				<PostList posts={posts}/>
				</div>
			</div>
		)
	}
}