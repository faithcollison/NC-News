import { CommentItem } from './index'

export const CommentList = ({ article, comments, setComments }) => {
  return (
    <div className="comment-container">
      <ul className="comment-list">
        {comments.map((comment) => {
          return (
            <li className="comment-item" key={comment.comment_id}>
              <CommentItem
                key={comment.comment_id}
                comment={comment}
                setComments={setComments}
                article={article}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

