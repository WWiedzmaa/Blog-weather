import React, { useEffect } from 'react'
import MainTemplate from './../templates/MainTemplate';
import { useLocation, } from 'react-router-dom';
import styles from "./PostPage.module.css"


const PostPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  const { state: { post } } = useLocation();

  return (
    <MainTemplate>
      <div>
        <div className={styles.root} >
          <img src={post.postPageImg} alt='' />
          <div className={styles.titleText}><strong>{post.title}</strong></div>
        </div>
        <div className={styles.text}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className={styles.author}>
            <img src={`https://i.pravatar.cc/90?img=${post.authorImg}`} alt="" className={styles.authorImg} />
            <div className={styles.name}><b> Autor :{post.author}</b></div>
          </div>
        </div>

      </div>
    </MainTemplate>

  )
}

export default PostPage