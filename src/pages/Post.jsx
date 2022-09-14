import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Comment from '../components/Comment';
import SinglePost from "../components/SinglePost";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostStyles from "./Post.module.css";

//OM det finns data i location.state, använd den och hämta endast kommentarer. ANNARS hämta data med aktuellt id OCH kommentarer. 

const Post = () => {
  const location = useLocation();
  const {id} = useParams();

  const [commentData, setCommentData] = useState(null);
  const [thisPost, setThisPost] = useState(null);


  useEffect(()=> {
    if(location.state){
      getComments(id)
      console.log("Det fanns data i location, så vi hämtar kommentarer")
    } else {
      console.log("Det fanns INTE data i location, så vi hämtar både kommentarer och post")
      getComments(id)
      getPost(id)
    }
  }, [id, location.state]);

  const getComments = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(response => response.json())
    .then(json => {
      console.log("Hämtat kommentarer: ", json)
      setCommentData(json)
    })
  }

  const getPost = (id)=> {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log("Fetchade post:", json)
      setThisPost(json)
    })
  }

  return (
    <>
      <Header />
      <main className={PostStyles.postMain}>
        <section className={PostStyles.section}>
      <Link to="/"><button className={PostStyles.button62}>Tillbaka till start</button></Link>
      <h3 className={PostStyles.smallHeading}>Inlägg #{id}</h3>
      {location.state ? <SinglePost key={id} title={location.state.title} body={location.state.body}/>
      : thisPost ? 
      <SinglePost key={id} title={thisPost.title} body={thisPost.body}/>
      : <h3 className={PostStyles.smallHeading}>Hämtar...</h3>
      }
      </section>
      <section className={PostStyles.section}>
      <h4 className={PostStyles.smallHeading}>Kommentarer</h4>
      {commentData ? commentData.map((comment, i) => {
        const { name, email, body } = comment;
      return <Comment key={i} name={name} email={email} body={body} />
        }) : <p>Det här inlägget har inga kommentarer.</p>
    } 
    </section>
    </main>
    <Footer />
    </>
  )
}

export default Post;