import React, { useState } from 'react';
import './CommentSection.css';

function CommentSection({ username }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() !== '') {
            const comment = {
                username: username,
                text: newComment,
                date: new Date().toLocaleString(),
            };
            setComments([...comments, comment]);
            setNewComment('');
        }
    };

    return (
        <div className="comment-section">
            <h5 className="text-light">Comments</h5>
            <form onSubmit={handleCommentSubmit}>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        rows="3"
                        value={newComment}
                        onChange={handleCommentChange}
                        placeholder="Add a comment..."
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
            <div className="comments-list mt-4">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p className="comment-username text-light">{comment.username}</p>
                        <p className="comment-text text-light">{comment.text}</p>
                        <p className="comment-date text-light">{comment.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentSection;