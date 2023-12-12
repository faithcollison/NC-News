const CommentItem = ({comment}) => {
    return (
        <div>
            <h3> Comment: </h3>
            <p className="comment-text"> {comment.body} </p>
            <p> Written by: {comment.author} </p>
            <p> {comment.votes} Votes </p>
        </div>
    )
}
export default CommentItem