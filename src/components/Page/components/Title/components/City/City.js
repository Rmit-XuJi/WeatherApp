import React from 'react';
import styles from './City.module.css'

const City = ({
    activeCity
}) => {
    return (
        <div className={styles.city}>
            <h2 className={styles.city_name}>{activeCity}</h2>
        </div>
    )
}

export default City;