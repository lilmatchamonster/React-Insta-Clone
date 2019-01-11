import React from 'react';
import './PostComment.css';

const PostComment = (props) =>{
	return ( 
		<div className="comment-input-area">
		<form onSubmit={props.addComment}>
			<input type="text" placeholder="Add a comment..." value={props.newComment} onChange={props.changeHandler} />
		</form>
		</div>
	);
}
 
export default PostComment;