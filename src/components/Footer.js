import React from 'react'
import Divider from '@mui/material/Divider';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <Divider  className={styles.divider} sx={{ borderBottomWidth: '2px' }} />
            <img src="/plain.png" alt="" className={styles.logo}/>
            <span className={styles.footer}>Designed by Wiedźma</span>
        </div>
    )
}

export default Footer