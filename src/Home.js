import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

export class Home extends Component {
	render() {
		return (
			<div className="classPage">
			<h1>PlanetExplorer</h1>
				<div className="homeContainer">
					<p>This web app is a tool for exploring basic information about planets and colaberating with others in the community to learn!</p>
					<div className="imageContainer">
						<img className="solarSystemImage" src="https://firebasestorage.googleapis.com/v0/b/project-4-s.appspot.com/o/SolarSystemTopDown.png?alt=media&token=dd45e15d-fd8e-447c-a846-2f88b72e5e3c" alt="Solar System Top Down"></img>
						<input type="hidden" value="https://www.pinterest.com/pin/498421883740151399/" />
					</div>
					<p>Please make an account or sign in so that you can start posting!</p>
					<div className="inputBox"><Link to="/Authentication" className="btn btn-secondary">Log in or sign up!</Link></div>
				</div>
			</div>
		)
	}
}