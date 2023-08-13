import React from 'react'
import styles from './Post.module.css'
import { useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const navigation = useNavigate();
    const handleNavigation = (x) => {
        navigation(`/blog/${post.slug}`, { state: { post } })
    }
    return (

        <div >

            <div className={styles.root}>
                <img src={post.postImg} alt=""/>

                <div className={styles.title}>{post.title}</div>
            </div>
            <div className={styles.authorImg}>
                <img src={`https://i.pravatar.cc/90?img=${post.authorImg}`} alt="" className={styles.author} />
                <div className={styles.name}><b> author: {post.author}</b></div>
            </div>

            <div className={styles.short} >
                {post.short}
            </div>

            <button onClick={() => handleNavigation()}className={styles.bnt}>
                więcej
            </button>
            <div></div>
        </div>
    )
}
export default Post