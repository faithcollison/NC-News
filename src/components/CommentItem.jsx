import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { deleteComment } from "../api";

const CommentItem = ({article, comment, setComments}) => {
    const {user} = useContext(UserContext)
    
    const handleDelete = (id) => {
        deleteComment(id)
        setComments((currComments) => {
            const updatedCommentList = currComments.filter((comment) => comment.comment_id !== id);
            article.comment_count -= 1;
            return updatedCommentList
        })
    }
    return (
        <div>
            <p> Written by: {comment.author} </p>
            <p> {comment.body} </p>
            <p> {comment.votes} votes </p>
            {comment.author === user? (<>
                <button onClick={() => handleDelete(comment.comment_id)}> Delete comment </button>
            </>) : "" }
        </div>
    )
}
export default CommentItem