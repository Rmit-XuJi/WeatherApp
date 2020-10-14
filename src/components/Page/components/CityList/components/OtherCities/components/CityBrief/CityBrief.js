import React from 'react';
import styles from './CityBrief.module.css';

const CityBrief = ({
    cityName,
    onCityClick,
    weatherToday,
}) => {
    if(weatherToday === undefined)
        return ( <div className={styles.CityBrief}></div>)
    else
        return (
            <div className={styles.CityBrief}>
                <div 
                    className={styles.cityLink}
                    onClick={onCityClick}
                    >{cityName} 
                </div>
                <div>{weatherToday.temp}</div> 
                <img src={`http://openweathermap.org/img/w/${weatherToday.weather[0].icon}.png`}></img>
            </div>
        )
}

export default CityBrief;