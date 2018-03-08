import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { PlanetSelection } from './PlanetSelection';
import { Authentication } from './Authentication';
import { ActivityFeed } from './ActivityFeed';
import { Home } from './Home';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';


class App extends Component { 
	render() { 
	return (
		<Router>
			<div className="parallaxHome">
				<div className="container frostedGlass">
					<nav className="navbar navbar-expand-lg navbar-toggleable-md navbar-dark bg-faded">
						<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<a className="navbar-brand" href="#">Planet Explorer</a>
						<div className="collapse navbar-collapse" id="navbarText">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<Link to="/ActivityFeed" className="nav-link">Activity Feed<span className="sr-only">(current)</span></Link>
								</li>
								<li className="nav-item">
									<Link to="/PlanetSelection" className="nav-link">Planet Selection<span className="sr-only">(current)</span></Link>
								</li>
								<li className="nav-item">
									<Link to="/Authentication" className="nav-link">Login<span className="sr-only">(current)</span></Link>
								</li>
							</ul>
						</div>
					</nav>
					<Route exact path="/" component={ Home } />
					<Route path="/ActivityFeed" component={ ActivityFeed } />
					<Route path="/PlanetSelection" component={ PlanetSelection } />
					<Route path="/Authentication" component={ Authentication } />
				</div>
			</div>
		</Router>
		); 
	} 
} export default App;