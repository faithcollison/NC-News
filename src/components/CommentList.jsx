import CommentItem from "./CommentItem"

const CommentList = ({article, comments, setComments}) => {

    return (
        <div className="comment-container">
            <ul className="comment-list">
                {comments.map((comment) => {
                    return (
                        <li className="comment-item" key={comment.comment_id}><CommentItem key={comment.comment_id} comment={comment} comments={comments} setComments={setComments} article={article}/> </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default CommentList