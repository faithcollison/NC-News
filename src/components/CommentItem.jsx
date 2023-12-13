import { useContext} from "react";
import { UserContext } from "./contexts/UserContext";
import { deleteComment } from "../api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CommentItem = ({article, comment, setComments}) => {
    const {user} = useContext(UserContext)
    
    const handleDelete = (id) => {
        deleteComment(id)
        .then(() => {
            setComments((currComments) => {
                const updatedCommentList = currComments.filter((comment) => comment.comment_id !== id);
                article.comment_count -= 1;
                toast.success("Your comment has been deleted", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                return updatedCommentList
            })
        })
        .catch((err )=> {
            console.log(err)
            setComments((currComments) => {
                toast.error("Message was not successfully deleted, please try again", {
                    position: toast.POSITION.TOP_LEFT,
                  })
                return currComments})
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