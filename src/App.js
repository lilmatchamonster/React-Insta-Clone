import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/LoginPage/LoginPage';

class App extends Component {
  constructor(){
    super();
    this.state = {
      validated: false
    };
  }

  compare = value =>{
    console.log(value)
    this.setState({
      validated: value
    })
  }
  
  render() {
    return (
      <div className="app">
        <Authenticate compare={this.compare} validated={this.state.validated}>
          <PostPage />
        </Authenticate>
      </div>
    );
  }
}

const Authenticate = props =>{
  return props.validated ? (
    <div>{props.children}</div>
  ) : (
    <LoginPage compare={props.compare}/>
  )
}
export default App;
