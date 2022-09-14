import SinglePostStyles from "./SinglePost.module.css";

const SinglePost = ({ title, body }) => {
  return (
    <div>
    <h3 className={SinglePostStyles.bigHeading}>{title}</h3>
    <p>{body}</p>
    </div>
  )
}

export default SinglePost;