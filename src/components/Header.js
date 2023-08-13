import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import Grid from '@mui/material/Grid';

const Header = () => {
  return (
    <header className={styles.test}>
      <Grid container spacing={2} className={styles.container}>
        <Grid item xs={2}>
          <img src="/plain.png" alt="" className={styles.logo} />
        </Grid>
        <Grid item xs={10} className={styles.grid}>
          <span className={styles.link}>
            <Link to="/" >Strona główna</Link>
          </span>
          <span className={styles.link}>
            <Link to="/weather">Pogoda</Link>
          </span>
          <span className={styles.link}>
            <Link to="/contact">Kontakt</Link>
          </span>
        </Grid>
      </Grid>
    </header>
  )
}

export default Header