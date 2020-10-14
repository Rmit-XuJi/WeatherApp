import React from 'react';
import styles from './DailyForecast.module.css';

const DailyForecast = ({
    day,
    dailyForecast,
}) => {
    return (
        <div className={styles.DailyForecast}>
            <label>{day}</label>
            <img src={`http://openweathermap.org/img/w/${dailyForecast.weather[0].icon}.png`}></img>
            <div>{dailyForecast.temp.day}</div>
        </div>
    )
}

export default DailyForecast;