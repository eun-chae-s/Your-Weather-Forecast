import React from 'react';
import rainy from '/Users/macbookair/Desktop/University of Toronto/2nd Year/Courses/Winter Break Project/Weather App/weather-react-app/src/img/rainy.png';
import shower from '/Users/macbookair/Desktop/University of Toronto/2nd Year/Courses/Winter Break Project/Weather App/weather-react-app/src/img/shower.png';
import drizzle from '/Users/macbookair/Desktop/University of Toronto/2nd Year/Courses/Winter Break Project/Weather App/weather-react-app/src/img/drizzle.png';
import cloudSunny from '/Users/macbookair/Desktop/University of Toronto/2nd Year/Courses/Winter Break Project/Weather App/weather-react-app/src/img/sun.png';
import snow from '/Users/macbookair/Desktop/University of Toronto/2nd Year/Courses/Winter Break Project/Weather App/weather-react-app/src/img/snowman.png';
import sunny from '/Users/macbookair/Desktop/University of Toronto/2nd Year/Courses/Winter Break Project/Weather App/weather-react-app/src/img/sunny.png';
import clouds from '/Users/macbookair/Desktop/University of Toronto/2nd Year/Courses/Winter Break Project/Weather App/weather-react-app/src/img/clouds.png';
import lightCloud from '/Users/macbookair/Desktop/University of Toronto/2nd Year/Courses/Winter Break Project/Weather App/weather-react-app/src/img/cloudy.png';
import thunderstorm from '/Users/macbookair/Desktop/University of Toronto/2nd Year/Courses/Winter Break Project/Weather App/weather-react-app/src/img/thunderstorm.png';
import mist from '/Users/macbookair/Desktop/University of Toronto/2nd Year/Courses/Winter Break Project/Weather App/weather-react-app/src/img/mist.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSnowman, faUmbrella} from '@fortawesome/free-solid-svg-icons';

function WeatherCard({todayWeather, showWeatherCard}) {
    if (showWeatherCard === false) {
        return null;
    }
    if (todayWeather === {}) {
        return null;
    } else {

    var todayImage;
    const curr = todayWeather.main.temp;
    const todayMin = todayWeather.main.temp_min;
    const todayMax = todayWeather.main.temp_max;

    const weatherDescription = todayWeather.weather[0].id;
    if (weatherDescription === 800) {
        todayImage = sunny;
    } else if (weatherDescription === 801) {
        todayImage = cloudSunny;
    } else if (weatherDescription === 802) {
        todayImage = lightCloud;
    } else if (803 <= weatherDescription <= 804) {
        todayImage = clouds;
    } else if (600 <= weatherDescription <= 622) {
        todayImage = snow;
    } else if (500 <= weatherDescription <= 511) {
        todayImage = rainy;
    } else if (520 <= weatherDescription <= 531) {
        todayImage = shower;
    } else if (300 <= weatherDescription <= 321) {
        todayImage = drizzle;
    } else if (200 <= weatherDescription <= 232) {
        todayImage = thunderstorm;
    } else {
        todayImage = mist;
    }

    return (
        <div>
            <div className="weather">
                <div id="today">
                    <h2>Today</h2>
                    <img src={ todayImage }></img>
                    <div id="today-info">
                        <p>
                            <a><b>{curr} &#8451;</b></a>
                            <a>{todayMin} &#8451; </a>
                            <a>{todayMax} &#8451;</a>
                        </p>
                        <p>
                        <a>
                            <FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon>: 2 mm
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faSnowman}></FontAwesomeIcon>: 2 mm
                        </a>
                        </p>
                    </div>
                </div>
                <div className="not-today">
                    <div id="tmr">
                        <h2>Tomorrow</h2>
                        <img src={ cloudSunny } alt="Cloudy and Sunny"></img>
                        <div id="tmr-info">
                            <p>
                                <a>-5 &#8451; </a>
                                <a>20 &#8451;</a></p>
                            <p>
                                <a>
                                <FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon>: 2 mm
                                </a>
                                <a>
                                <FontAwesomeIcon icon={faSnowman}></FontAwesomeIcon>: 2 mm
                                </a>
                            </p>
                        </div>
                    </div>
                    <div id="day-after-tmr">
                        <h2>Friday</h2>
                        <img src={ snow } alt="Snow"></img>
                        <div id="after-tmr-info">
                            <p>
                            <a>-5 &#8451; </a>
                            <a>20 &#8451;</a>
                            </p>
                            <p>
                            <a>
                                <FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon>: 2 mm
                            </a>
                            <a>
                                <FontAwesomeIcon icon={faSnowman}></FontAwesomeIcon>: 2 mm
                            </a>
                            </p>
                        </div>
                    </div>
                    <div id="extra">
                        <h2>Feedback?</h2>
                    </div>
                </div>   
            </div>
        </div>
    );
    }

}

export default WeatherCard;