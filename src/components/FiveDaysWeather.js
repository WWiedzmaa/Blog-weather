import React from 'react'
import styles from './FiveDaysWeather.module.css'
import moment from 'moment'

const FiveDaysWeather = ({ weather }) => {
const date=moment.unix(weather.dt).format('YYYY-MM-DD HH:mm')

  return (
    <div className={styles.root}>
      <div className={styles.date}>{date}</div>
      <div className={styles.detals}>{Number(weather.main.temp).toFixed()}&#8451;, {weather.weather[0].description}, ciśnienie {weather.main.pressure}hPa</div>
    </div>

  )
}

export default FiveDaysWeather 