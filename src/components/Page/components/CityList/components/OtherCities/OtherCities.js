import React from 'react';
import styles from './OtherCities.module.css';
import CityBrief from "./components/CityBrief";

const OtherCities = ({
    activeCity,
    cities,
    onCityClick,
}) => {
    return (
        <div className={styles.OtherCities}>
            <h3>Other Cities</h3>
            {cities.map((city,key) => {
                return(activeCity === city.name || 
                    <CityBrief 
                    key = {key}
                    cityName = {city.name} 
                    onCityClick={onCityClick(city.id)} 
                    weatherToday={city.current}
                    />)
            })}
        </div>
    )
}
export default OtherCities;