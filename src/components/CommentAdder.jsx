import { useState } from "react"
import { postComment } from "../api"

const CommentAdder = ({article, setComments, article_id}) => {
    // const [newComment, setNewComment] = useState("")
    const [success, setSuccess] = useState(undefined)
    const [fail, setFail] = useState(undefined)
    const [isDisabled, setIsDisabled] = useState(false)
    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
    if(input.length > 0){
        event.preventDefault();
    
        setFail(false)
        setSuccess(true)
        setIsDisabled(true)
        setTimeout(() => {
            setSuccess(false);
            setIsDisabled(false);
            }, 1000);
        postComment(article_id, input)
        .then((newCommentFromApi) => {
            setIsDisabled(false)
            setInput("")
            setComments((currComments) => {
                return [newCommentFromApi, ...currComments]
            })
        })
        .catch((err) => {
            setSuccess(false)
        })
    }
    else {
        event.preventDefault();
        setFail(true)
    }
    }

    return (
        <div className="comment-adder">
        <form  onSubmit={handleSubmit}>
            <div><label htmlFor="newComment"> Add a comment </label></div>
            <textarea className="comment-text-box" id="newComment" multiline="true" value={input} onChange={handleChange} /> 
            {input.length > 50? <p> Message is too long, try again </p> : <p> {`${50 - input.length} characters remaining`} </p>}
            <p> **Max 50 characters </p>
            <button className="comment-adder-button" disabled={isDisabled || input.length>50}>
                Add
            </button>
            { success ? "✅" : ""}
            { fail ? "Please enter a comment" : ""}
        </form>
        </div>
    )
}

export default CommentAdder;