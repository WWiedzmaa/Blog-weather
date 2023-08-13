
import React, { useEffect, useState } from 'react'
import MainTemplate from '../templates/MainTemplate'
import ApiUtil from '../api/ApiUtil'
import { Grid, TextField } from '@mui/material'
import WeatherDetals from '../components/WeatherDetals'
import FiveDaysWeather from '../components/FiveDaysWeather'
import styles from './Weather.module.css'

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [pollution, setPollution] = useState(null);
  const [weather5days, setWeather5days] = useState(null);
  const [city, setCity] = useState(null);
  useEffect(() => {
    async function getWeather() {
      if (query !== "") {
        const cords = await ApiUtil.getCityCord(query);
        if (cords && cords.length > 0) {
          setWeather(await ApiUtil.getWeather(cords[0].lat, cords[0].lon));
          setPollution(await ApiUtil.getPollution(cords[0].lat, cords[0].lon));
          setWeather5days(await ApiUtil.get5DaysWeather(cords[0].lat, cords[0].lon));
          setCity(cords[0]);
          setQuery("");
        }
      }
    }
    let timeout = setTimeout(() => {
      getWeather()
    }, 1000)
    return () => clearTimeout(timeout);
  }, [query])

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  }
console.log(weather5days);
  return (
    <MainTemplate>
      <div>
        <div className={styles.root}>Pogoda &#9788;</div>
        <TextField label='wpisz miasto' onChange={handleChange} value={query}
          InputProps={{ className: styles.inputText }} InputLabelProps={{ style: { color: '#b9aaaa' } }} />
        <div>
          <div className={styles.city}>{city?.name} {city?.country}</div>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <WeatherDetals weather={weather} pollution={pollution} />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
              <div className={styles.fiveDaysRoot}>
                <div className={styles.fiveDays}> Szczegółowa pogoda 5 dniowa</div>
                <div> {weather5days?.list.map((temp) => (
                  <FiveDaysWeather weather={temp} key={temp.dt} />
                ))}</div>
              </div>
            </Grid>
          </Grid>
        </div>

      </div>
    </MainTemplate>
  )
}

export default Weather