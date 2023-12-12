import CommentItem from "./CommentItem"

const CommentList = ({comments}) => {

    return (
        <div className="comment-container">
            <ul className="comment-list">
                {comments.map((comment) => {
                    return (
                        <li className="comment-item" key={comment.comment_id}><CommentItem key={comment.comment_id} comment={comment}/> </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default CommentList