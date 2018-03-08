import React, { Component } from 'react';
import { Auth } from './Auth';
import firebase from 'firebase';

export class Authentication extends Component {
	constructor(props) {
        super(props);
		this.state = {
		}
		this.handleSignIn = this.handleSignIn.bind(this)
		this.handleSignUp = this.handleSignUp.bind(this)
		this.handleSignOut = this.handleSignOut.bind(this)
	};
    componentDidMount() {
        // Use the firebase onAuthstateChanged method to watch for changes in authentication
		this.stopWatchingAuth = firebase.auth().onAuthStateChanged(firebaseUser => {
			if(firebaseUser){
				this.setState({
					user:firebaseUser,
					email: '',
					password: '',
					username: ''
				})
			}
			else {
				this.setState({
					user:null
				})
			}
		
		})
    }

    // Add a handleSignUp() method
	handleSignUp(email, password, username) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(firebaseUser => {
			return firebaseUser.updateProfile({
				displayName:username
			})
		})
		.then(firebaseUser => {
			this.setState({user:firebase.auth().currentUser})
		})
		.catch(err => {
			this.setState({errorMessage:err.message})
		})
	}
    // Add a handleSignIn() method
	handleSignIn(email, password) {
		firebase.auth().signInWithEmailAndPassword(email, password)
		.catch(err => {
			this.setState({errorMessage:err.message})
		})
	}
    // Add a handleSignOut() method
	handleSignOut() {
		firebase.auth().signOut()
		.catch(err => {
			this.setState({errorMessage:err.message})
		})
	}
	render() {

			return (
            <div className="classPage">
                {this.state.errorMessage &&
                    <p className="alert alert-danger">{this.state.errorMessage}</p>
                }

                {this.state.user &&
                    <div className="alert alert-success"><h1>You are currently logged in as {this.state.user.displayName} enjoy exploring!</h1></div>
                }
				{!this.state.user &&
					<Auth handleSignIn = {this.handleSignIn} handleSignUp={this.handleSignUp}/>
                } 
				{this.state.user &&
				<div>
					<button className="btn btn-warning mr-2" onClick={() => this.handleSignOut()}>
						  Sign Out
					</button>
				</div>
				}
            </div>
		)
	}
}


