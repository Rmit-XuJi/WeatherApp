import React from 'react';
import styles from './Title.module.css';
import City from './components/City';
import Weather from './components/Weather';

const Title = ({
    activeCity,
    weatherDetail,
}) => {
    return (
        <div className={styles.title}>
            <Weather 
                activeCity={activeCity} 
                weatherDetail={weatherDetail}
            />
            <City activeCity={activeCity} />
        </div>
    )
}

export default Title;