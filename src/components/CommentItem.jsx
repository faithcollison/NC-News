const CommentItem = ({comment}) => {
    return (
        <div>
            <h3> Comment: </h3>
            <p> Written by: {comment.author} </p>
            <p> {comment.body} </p>
            <p> Votes: {comment.votes} </p>
        </div>
    )
}
export default CommentItem