import React, { Component } from 'react';
import firebase from 'firebase';

export class Post extends Component {
	likeItem() {
		let postRef = firebase.database().ref('Posts/' + this.props.info.key + '/likes');
		postRef.transaction((likes) => likes +1);
	}
	render() {
		return (
		<div>
			<div className="container">
				<div className="card-body">
					<h3 className="card-title">{this.props.info.postComment}</h3>
					<p className="card-text">posted by {this.props.info.user} on {this.props.info.planet}'s page</p>
					<p className="card-text">This posts has {this.props.info.likes} likes</p>
					<p className="card-text">
					<button className="btn btn-secondary mr-2" onClick={() => this.likeItem()}>like</button>
					</p>
				</div>
			</div>
		</div>
		)
	}
}