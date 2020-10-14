import React from 'react';
import styles from './Page.module.css';
import Title from './components/Title';
import CityList from './components/CityList';

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherData : {
                name: '',
                temp:'',
                humidity:'',
                wind:'',
                type: '',
                icon: '',
                forecast: undefined,
            },
        };
        this.cityList = [
            {
                name: 'Melbourne',
                id: 0,
                lat:-37.83,
                lon:144.96,
                current: undefined,
            },
            {
                name: 'Sydney',
                id: 1,
                lat:-33.867851,
                lon:151.207321,
                current: undefined,
            },
            {
                name: 'Brisbane',
                id: 2,
                lat:-27.467939,
                lon:153.028091,
                current: undefined,
            },
            {
                name: 'Perth',
                id: 3,
                lat:-31.98333,
                lon:115.866669,
                current: undefined,
            },
        ];
        this.handOnCityClick = this.handOnCityClick.bind(this);
    };

    handOnCityClick(cityID){
        return ((event) => {
            event.preventDefault();
            this.setWeatherData(cityID);
        })
    }

    setWeatherData(cityID) {
        const apiKey = '9c7c6ec4ba5e33517bae2aad5de1e14a';
        this.cityList.map((city) => {
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+city.lat+'&lon='+city.lon+'&units=metric&appid='+apiKey)
            .then(function(response){
                return response.json();
            })
            .then((data) => {
                city.current = data.current;

                if(cityID === city.id)
                    this.setState({
                        weatherData : {
                            name: city.name,
                            temp: data.current.temp,
                            humidity: data.current.humidity,
                            wind: data.current.wind_speed,
                            type: data.current.weather[0].main,
                            icon: data.current.weather[0].icon,
                            forecast: data.daily,
                        }
                    });       
            })
            .then(() => {
                this.setState({
                    done:true,
                });
            });
        });
    }

    componentDidMount(){
        this.setWeatherData(this.cityList[0].id);
    }
    componentWillUpdate(){
        console.log('Will Update');
    }

    render() {
        const {weatherData} = this.state;
        const cityList = this.cityList;
        const forecast = weatherData.forecast;
        const weatherDetail = {
            degree: weatherData.temp,
            humidity: weatherData.humidity,
            wind: weatherData.wind,
            type: weatherData.type,
            icon: weatherData.icon,
        };
        return (
            <div className = {styles.weatherPage} >
                <Title 
                    activeCity={weatherData.name}
                    weatherDetail={weatherDetail}
                />
                <CityList 
                    activeCity={weatherData.name}
                    cities={cityList}
                    forecast={forecast}
                    onCityClick={this.handOnCityClick}
                />
            </div>
        )
    }
}

export default Page;