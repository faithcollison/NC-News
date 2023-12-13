import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { deleteComment } from "../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CommentItem = ({article, comment, setComments}) => {
    const {user} = useContext(UserContext)
    
    const handleDelete = (id) => {
        deleteComment(id)
        setComments((currComments) => {
            const updatedCommentList = currComments.filter((comment) => comment.comment_id !== id);
            article.comment_count -= 1;
            toast.success("Your comment has been deleted", {
                position: toast.POSITION.TOP_CENTER,
              });
            return updatedCommentList
        })
    }
    return (
        <div>
            <p> Written by: {comment.author} </p>
            <p> {comment.body} </p>
            <p> {comment.votes} votes </p>
            {comment.author === user? (<>
                <button className="delete-comment-button" onClick={() => handleDelete(comment.comment_id)}> Delete </button>
            </>) : "" }
            
        </div>
    )
}
export default CommentItem