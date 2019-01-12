import React, { Component } from 'react';
import './LoginPage.css';
import logo from './icons/instaLogo.png';

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: {
        username: "",
        password: ""
      },
      statement: ""
    }
  }
  
  handleUserInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      login: {...this.state.login, [name]: value}
    });
  }

  validateInput = event => {
    event.preventDefault();
            
    let storage = {
      username: window.localStorage.getItem('username'),
      password: window.localStorage.getItem('password')
    }

    storage = JSON.stringify(storage);

    if(JSON.stringify(this.state.login) === storage){
       this.props.compare(true);
      console.log("Congratulations!!");
    }
    else{
      this.setState({
        statement: "Invalid username or password. Please try again."
      })
      console.log("Invalid input");
    }

  }

  render(){
      return ( 
        <div className="login-container">
      <img className="logo" src={logo} alt="instagram Logo" />
      <form onSubmit={this.validateInput} >
        <input type="text" placeholder="Username" name="username" onChange={this.handleUserInput} value={this.state.login.username} />
        <input type="password" placeholder="Password" name="password" onChange={this.handleUserInput} value={this.state.login.password}/>
        <button type="submit" className="sub-button">Log in</button>
      </form>
      <p className="incorrect">{this.state.statement}</p>
      </div>
    );
  }
}
 
export default LoginPage;