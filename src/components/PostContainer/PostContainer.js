import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PostComment from '../PostComment/PostComment';

class PostContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			comments: props.comments,
			newComment: "",
			likes: this.props.likes
		}
	}
	changeHandler = event => {
    this.setState({
      newComment: event.target.value
		})
	}
	addComment = event =>{
		event.preventDefault()
		const newComment = {
			text: this.state.newComment,
			username: window.localStorage.getItem('username')
		}
		const originalComments = this.state.comments.slice()
		originalComments.push(newComment)
		this.setState({
			comments: originalComments, 
			newComment: ""
		})
	}
	incrementLikes = event =>{
		let old = this.props.likes;
		if(this.state.likes = old ){
			this.setState( (prevState) =>{
				return {likes: prevState.likes + 1}
			})
		}
		if(this.state.likes > old ){
			console.log("nope")
		}
  }
	render(){
		return (  
			<div className="post-wrapper">
				<div className="poster-id">
					<img className="avatar" src={this.props.thumbnailUrl} alt="Avatar Image" />
					<h1>{this.props.username}</h1>
				</div>

				<img className="post-img" src={this.props.imageUrl} alt ="Post Image"/>

				<div className="post-text">
					<p className="like-comment"><i className="far fa-heart" onClick={this.incrementLikes}></i> <i className="far fa-comment"></i></p>
					<div className="likes-icon">{this.state.likes} likes</div>
					<div className="comments-holder">
						{this.state.comments.map((comment, index) => (
							<CommentSection text = {comment.text} username = {comment.username} key = {index} comment = {comment}/>
							))}
						<div className="timestamp">2 HOURS AGO</div>
					</div>
					<PostComment data={this.props.comments} newComment={this.state.newComment} changeHandler={this.changeHandler} addComment={this.addComment}/>
				</div>
			</div>
		);
	}
}
 
export default PostContainer;
