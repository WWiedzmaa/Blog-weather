import React from 'react'
import MainTemplate from '../templates/MainTemplate'
import { posts } from "../fakeDb"
import Post from '../components/Post'
import styles from '../templates/MainTemplate.module.css'
import { Grid } from '@mui/material'

const HomePages = () => {

  return (
    <MainTemplate>
      <div className={styles.main}>
        <div >
          <div className={styles.mainText}><strong> Wakacje 2023</strong></div>
          <div className={styles.where}> <strong>Gdzie warto pojechać </strong></div>
        </div>
      </div>
      <Grid container direction={"row"} className={styles.grid}>
        {posts.map((post) => (
          <Grid item sm={12} md={4} key={post.id} ><Post post={post} /></Grid>
        ))}

      </Grid>
    </MainTemplate>
  )
}

export default HomePages