import React, { Component } from 'react';
import './PostPage.css';
import dummyData from './dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostPage extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      searchResults: []
    };
  }
  search = event =>{
    const filtered = this.state.data.filter(filtered =>{
      if(filtered.username.includes(event.target.value)){
        return filtered
      }
    })
    this.setState({
      searchResults: filtered
    })
  }
  componentDidMount() {
    this.setState({data: dummyData})
  }
  
  render() {
    const display = (this.state.searchResults.length > 0 ? this.state.searchResults : this.state.data)
    return (
      <div className="container">
        <header>
          <SearchBar search={this.search}/>
        </header>
        {display.map(post => (
        <PostContainer key = {post.timestamp} username = {post.username} imageUrl = {post.imageUrl} likes = {post.likes} comments = {post.comments} thumbnailUrl = {post.thumbnailUrl} />
        ))}
      </div>
    );
  }
}

export default PostPage;

