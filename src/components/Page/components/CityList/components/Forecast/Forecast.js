import React from 'react';
import styles from './Forecast.module.css';
import DailyForecast from './components/DailyForecast';

const Forecast = ({
    activeCity,
    forecast,
}) => {
    let date = new Date();
    let day = date.getDay();
    let controller = 5;
    let index = 0;

    if(forecast === undefined)
        return(<div className={styles.Forecast}></div>);
    else
        return (
            <div className={styles.Forecast}>
                <h3>Forecast</h3>
                <div className={styles.WeekForecast}>
                    {forecast.map((dailyWeather, key) => {
                        let curr = '';
                        if(day > 7)
                            day = day - 7;
                        switch(day){
                            case 1:
                                curr = 'MON';
                                break;
                            case 2:
                                curr = 'TUS';
                                break;
                            case 3:
                                curr = 'WED';
                                break;
                            case 4:
                                curr = 'THU';
                                break;
                            case 5:
                                curr = 'FRI';
                                break;
                            case 6:
                                curr = 'STA';
                                break;
                            case 7:
                                curr = 'SUN';
                                break;
                            default:
                                curr = 'MON';
                        };
                        ++day;
                        ++index;
                        if (index <= controller)
                            return (<DailyForecast 
                                key={key}
                                day={curr} 
                                dailyForecast={dailyWeather}/>)
                    })}
                    
                    {/* <DailyForecast 
                        day='MON' 
                        dailyForecast={forecast.Monday}
                    /> */}
                
                </div>
            </div>
        )
}

export default Forecast;