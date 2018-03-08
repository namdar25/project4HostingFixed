import React, { Component } from 'react';
import { Planet } from './Planet';
import firebase from 'firebase';
import { HashRouter as Router, Route, Link } from "react-router-dom";

export class PlanetSelection extends Component {
	constructor(props) {
        super(props);
		this.state = {
			planets:{},
			planet:{}
		}
		this.setPlanet = this.setPlanet.bind(this)
	};

	componentDidMount() {
		this.planetRef = firebase.database().ref().child('Planets');
		this.planetRef.on('value', (snapshot) => {
			let planets = snapshot.val();
			this.setState({planets:planets})
		})
	}
    
	setPlanet(planet) {
		this.setState({planet:planet})
	}

	render() {
		let planets = this.state.planets;
		let planetCards = this.state.planets === null ? [] : Object.keys
		(this.state.planets).map((x) => {
			let planet = planets[x];
			planet.key = x;
			return planet;
			});
		return (
			<div className="classPage">
				<Route path="/PlanetSelection/Planet" render={(props) => (<Planet planet={this.state.planet} />)}/>
				<h1>Planet Selection</h1>
				<PlanetCards planetCards={planetCards} setPlanet={this.setPlanet}/>
			</div>
		)
	}
}

function PlanetCards(props) {
	return (
	<div className="container">
		<div className="row">
			{
			props.planetCards.map((d,i) => {
				return<PlanetCard key={i} planet={d} setPlanet={props.setPlanet}/>
				})
			}
		</div>
	</div>)
}


function PlanetCard(props) {
	return (
		<div className="col col-md-6 col-xl-3 .d-flex">
			<div className="card mb-4">
				<div className="card-body">
					<img className="pb-3 cardImage" src={props.planet.IMG} alt={props.planet.key}></img>
					<h2 className="card-title">{props.planet.key}</h2>
					<p className="card-text">{props.planet.Position}</p>
					<Link to="/PlanetSelection/Planet" className="btn btn-dark" onClick={() => props.setPlanet(props.planet)}>Explore</Link>
					
				</div>
			</div>
		</div>
	)
}
