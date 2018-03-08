import React, { Component } from 'react';
import {Post} from './Post';

export class PostList extends Component {
	render() {
		return (<div>
			{
				this.props.posts.map((d,i) => {
					return<Post key={"item-" +i} info={d}/>
				})
			}
		</div>)
	}
}