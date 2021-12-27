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

function WeatherCard({todayWeather, notTodayWeather, showWeatherCard}) {
    if (showWeatherCard === false) {
        return null;
    }
    if (todayWeather === {}) {
        return null;
    } else {

    //  Choose the right image of the weather
    function findRightImage(id) {
        if (id === 800) {
            return sunny;
        } else if (id === 801) {
            return cloudSunny;
        } else if (id === 802) {
            return lightCloud;
        } else if (id >= 803 && id <= 804) {
            return clouds;
        } else if (id >= 600 && id <= 622) {
            return snow;
        } else if (id >= 500 && id <= 511) {
            return rainy;
        } else if (id >= 520 && id <= 531) {
            return shower;
        } else if (id >= 300 && id <= 321) {
            return drizzle;
        } else if (id >= 200 && id <= 232) {
            return thunderstorm;
        } else {
            return mist;
        }
    }
        
    const curr = todayWeather.main.temp;
    const todayMin = todayWeather.main.temp_min;
    const todayMax = todayWeather.main.temp_max;
    const todayImage = findRightImage(todayWeather.weather[0].id);

    // Find the specific timezone and use it to convert
    const todayDate = new Date().toLocaleDateString('en-CA');
    console.log(todayDate);
    const lastDigit = new Date().toLocaleDateString('en-CA').slice(9, 10);
    const lastTwoDigit = new Date().toLocaleDateString('en-CA').slice(8, 10);
    var tomorrowDate;
    var dayAfterDate;
    if (parseInt(lastDigit) <= 7) {
        tomorrowDate = new Date().toLocaleDateString('en-CA').slice(0, 9) + (parseInt(lastDigit) + 1);
        dayAfterDate = new Date().toLocaleDateString('en-CA').slice(0, 9) + (parseInt(lastDigit) + 2);
    } else if (parseInt(lastDigit) === 8) {
        tomorrowDate = new Date().toLocaleDateString('en-CA').slice(0, 9) + (parseInt(lastDigit) + 1);
        dayAfterDate = new Date().toLocaleDateString('en-CA').slice(0, 8) + (parseInt(lastTwoDigit) + 2);
    } else {
        tomorrowDate = new Date().toLocaleDateString('en-CA').slice(0, 8) + (parseInt(lastTwoDigit) + 1);
        dayAfterDate = new Date().toLocaleDateString('en-CA').slice(0, 8) + (parseInt(lastTwoDigit) + 2);
    }

    // Filter Tomorrow's data
    // 1. Find the min and max temperature & population

    // Filter Day after tomorrow's data
    
    return (
        <div>
            <div className="weather">
                <div id="today">
                    <h2>Today</h2>
                    <img src={ todayImage }></img>
                    <div id="today-info">
                        <p>
                            <a><b>now: {curr} &#8451;</b></a>
                            
                        </p>
                        <p>
                            <a>min: {todayMin} &#8451; </a>
                            <a>max: {todayMax} &#8451;</a>
                        {/* <a>
                            <FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon>: 2 mm
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faSnowman}></FontAwesomeIcon>: 2 mm
                        </a> */}
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