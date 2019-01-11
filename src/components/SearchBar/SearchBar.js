// import React from 'react';
import React, { Component } from 'react';
import logo from './icons/instaLogo.png';
import './SearchBar.css';

// const SearchBar = () => {
class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchString:""
		};
	}
	changeHandler = event => {
    this.setState({
			searchString: event.target.value
		})
  }

	render(){
		return ( 
			<div className="search-container">
				<div className="logo-container">
					<i className="fab fa-instagram"></i>
					<img className="insta-logo" src={logo} alt="instagram Logo" />
				</div>
				<input className="search-bar" type="search" placeholder="Search" value={this.state.searchString} onChange={this.changeHandler} onKeyUp={this.props.search}></input>
				<div className="icons">
					<i className="far fa-compass"></i>
					<i className="far fa-heart"></i>
					<i className="far fa-user"></i>
				</div>
			</div>
		);
	}
}
 
export default SearchBar;