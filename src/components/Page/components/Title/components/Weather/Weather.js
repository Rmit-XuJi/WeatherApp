import React from 'react';
import styles from './Weather.module.css';

const Weather = ({
    activeCity,
    weatherDetail,
}) => {
    return (
        <div className={styles.weather}>
            <div className={styles.degree}> {weatherDetail.degree} </div>
            <span>{weatherDetail.type}</span>
            <img src={`http://openweathermap.org/img/w/${weatherDetail.icon}.png`}></img>
            <div className={styles.humidityWind}>
                <div className={styles.humidity}>
                    <div>HUMIDITY</div>
                    <div>{weatherDetail.humidity}%</div>
                </div>
                <div className={styles.wind}>
                    <div>WIND</div>
                    <div>{weatherDetail.wind}m/s</div>
                </div>
            </div>
        </div>
    )
}

export default Weather;