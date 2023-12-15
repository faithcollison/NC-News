import { useState } from "react"
import { Button } from "react-bootstrap"
import { postComment } from "../api"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CommentAdder = ({ setComments, article_id}) => {
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
        <div className="comment-adder-submit">
            <Form onSubmit={handleSubmit}> 
                <div >
                    <div>
                    <label htmlFor="newComment"> Add a comment </label>
                        <textarea className="comment-text-box" id="newComment" multiline="true" value={input} onChange={handleChange} />
                    </div>
                <div className="warning-text">
                    {input.length > 50? <p> Message is too long, try again </p> : <p> {`${50 - input.length} characters remaining`} </p>}
                </div>
                    <div className="comment-adder-button" >
                        <Button variant="primary" type="submit" disabled={isDisabled || input.length>50}> Add </Button>{' '}
                    </div>
                </div>
                <div>
                    { success ? "✅" : ""}
                    { fail ? "Please enter a comment" : ""}
                </div>
            {/* </form> */}
            </Form>
        </div>
    )
}

export default CommentAdder;