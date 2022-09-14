import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StartStyles from "./Start.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Start = () => {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
  .then(response => response.json())
  .then(json => {
    setAllPosts(json)
    })
  }, []);

  return (
    <>
      <Header />
      <main className={StartStyles.startMain}>
      <section className={StartStyles.section}>
      <h2 className={StartStyles.heading}>Alla inlägg</h2>
      {allPosts && allPosts.map((post, i)=> {
      const { title, body, id } = post;
      return (     
        <Link to={`/post/${id}`} key={i} state={{title: title, 
        body: body}}><h4 className={StartStyles.titleLink}>{title}</h4></Link>
      )
    })
    } 
    </section>
    </main>
    <Footer />
    </>
  )
}

export default Start;