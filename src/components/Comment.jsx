import CommentStyles from "./Comment.module.css"

const Comment = ({ name, email, body }) => {
  return (
    <div className={CommentStyles.commentContainer}>
      <h5>Namn: {name}</h5>
      <h6>{email}</h6>
      <p>{body}</p>
    </div>
  )
}

export default Comment;