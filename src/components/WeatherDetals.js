import moment from 'moment/moment';
import React from 'react'
import styles from './WeatherDetals.module.css'

const WeatherDetals = ({ weather, pollution }) => {

  const sunrise = moment.unix(weather?.sys.sunrise).format('YYYY-MM-DD HH:mm');
  const sunset = moment.unix(weather?.sys.sunset).format('YYYY-MM-DD HH:mm');

  return (
    <div className={styles.root}>
      <div className={styles.main}> Pogoda na dziś</div>
      <div className={styles.detals}> <span className={styles.span}>Temperatura :</span>{weather?.main.temp} &#8451;</div>
      <div className={styles.detals}> <span className={styles.span}>Temperatura odczuwalna :</span>{weather?.main.feels_like} &#8451;</div>
      <div className={styles.detals}> <span className={styles.span}>Zachmurzenie :</span>{weather?.clouds.all} %</div>
      <div className={styles.detals}> <span className={styles.span}>Wilgotność :</span>{weather?.main.humidity} %</div>
      <div className={styles.detals}> <span className={styles.span}>Ciśnienie :</span>{weather?.main.pressure} hPa</div>
      <div className={styles.detals}> <span className={styles.span}>Opady :</span>{weather?.weather[0].description}</div>
      <div className={styles.detals}> <span className={styles.span}>Wschód Słonca :</span>{sunrise}</div>
      <div className={styles.detals}> <span className={styles.span}>Zachód Słońca :</span>{sunset}</div>
      <div className={styles.detals}> <span className={styles.span}>Siła wiatru :</span>{weather?.wind.speed}</div>
      <div className={styles.main}>Jakość powietrza </div>
      <div className={styles.detals}> <span className={styles.span} >CO : </span> {pollution?.list[0].components.co}</div>
      <div className={styles.detals}> <span className={styles.span} >NO : </span> {pollution?.list[0].components.no}</div>
      <div className={styles.detals}> <span className={styles.span} >NO2 : </span> {pollution?.list[0].components.no2}</div>
      <div className={styles.detals}> <span className={styles.span} >O3 : </span> {pollution?.list[0].components.o3}</div>
      <div className={styles.detals}> <span className={styles.span} >SO2 : </span> {pollution?.list[0].components.so2}</div>
      <div className={styles.detals}> <span className={styles.span} >PM2/5 : </span> {pollution?.list[0].components.pm2_5}</div>
      <div className={styles.detals}> <span className={styles.span} >PM10: </span> {pollution?.list[0].components.pm10}</div>
    </div>
  )
}

export default WeatherDetals