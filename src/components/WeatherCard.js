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

function WeatherCard({todayDate, todayWeather, notTodayWeather, showWeatherCard}) {
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
    const year = todayDate.slice(0, 4);
    const month = todayDate.slice(5,7);
    const lastDigit = todayDate.slice(9, 10);
    const lastTwoDigit = todayDate.slice(8, 10);
    var tomorrowDate;
    var dayAfterDate;
    const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];

    if (parseInt(month) === 2) {
        if (parseInt(lastTwoDigit) <= 27) {
            tomorrowDate = todayDate.slice(0, 9) + (parseInt(lastDigit) + 1);
            dayAfterDate = todayDate.slice(0, 9) + (parseInt(lastDigit) + 2);
        } else if (parseInt(lastTwoDigit) === 28 && parseInt(year.slice(2,4)) % 4 === 0) {
            tomorrowDate = year + '-02-29';
            dayAfterDate = year + '-03-01';
        } else {
            tomorrowDate = year + '-03-01';
            dayAfterDate = year + '-03-02';
        }
    } else {
        if (parseInt(lastTwoDigit) <= 29) {
            tomorrowDate = todayDate.slice(0, 8) + (parseInt(lastTwoDigit) + 1).toLocaleString('en-CA', {minimumIntegerDigits: 2, useGrouping: false});
            dayAfterDate = todayDate.slice(0, 8) + (parseInt(lastTwoDigit) + 2).toLocaleString('en-CA', {minimumIntegerDigits: 2, useGrouping: false});
        } else if (parseInt(lastTwoDigit) === 30 && monthsWith31Days.includes(parseInt(month))) {
            tomorrowDate = todayDate.slice(0, 8) + '31';
            dayAfterDate = year + '-' + (parseInt(month) + 1).toLocaleString('en-CA', {minimumIntegerDigits: 2, useGrouping: false}) + '-' + '01';
        } else {
            tomorrowDate = year + '-' + (parseInt(month) + 1).toLocaleString('en-CA', {minimumIntegerDigits: 2, useGrouping: false}) + '-' + '01';
            dayAfterDate = year + '-' + (parseInt(month) + 1).toLocaleString('en-CA', {minimumIntegerDigits: 2, useGrouping: false}) + '-' + '02';
        }
    }

    const days = {0: 'Monday', 1: 'Tuesday', 2:'Wednesday', 3:'Thursday', 4:'Friday', 5:'Saturday', 6:'Sunday'}
    const day = days[new Date(dayAfterDate).getDay()];

    var tmrMin;
    var tmrMax;
    var tmrImage;
    var tmrPop;
    var daMin;
    var daMax;
    var daImage;
    var daPop;

    // Find Tomorrow and Day After Tomorrow's Weather
    notTodayWeather.list.forEach((element) => {
        if (element.dt_txt === tomorrowDate + ' 09:00:00' || element.dt_txt === tomorrowDate + ' 12:00:00') {
            tmrMin = element.main.temp_min;
            tmrMax = element.main.temp_max;
            tmrImage = findRightImage(element.weather[0].id);
            tmrPop = element.pop;
        }
        if (element.dt_txt === dayAfterDate + ' 09:00:00' || element.dt_txt === dayAfterDate + ' 12:00:00') {
            daMin = element.main.temp_min;
            daMax = element.main.temp_max;
            daImage = findRightImage(element.weather[0].id);
            daPop = element.pop;
        }
    })
 
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
                        {/* <a>
                            <FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon>: 2 mm
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faSnowman}></FontAwesomeIcon>: 2 mm
                        </a> */}
                        </p>
                        <p>
                            <a>max: {todayMax} &#8451;</a>
                        </p>
                    </div>
                </div>
                <div className="not-today">
                    <div id="tmr">
                        <h2>Tomorrow</h2>
                        <img src={ tmrImage } alt="Cloudy and Sunny"></img>
                        <div id="tmr-info">
                            <p>
                                <a>min: {tmrMin} &#8451; </a>
                            </p>
                            <p>
                                <a>max: {tmrMax} &#8451;</a></p>
                            <p>
                                <a>
                                <FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon>: {tmrPop} &#37;
                                </a>
                                {/* <a>
                                <FontAwesomeIcon icon={faSnowman}></FontAwesomeIcon>: 2 mm
                                </a> */}
                            </p>
                        </div>
                    </div>
                    <div id="day-after-tmr">
                        <h2>{ day }</h2>
                        <img src={ daImage } alt="Snow"></img>
                        <div id="after-tmr-info">
                            <p>
                                <a>min: {daMin} &#8451; </a>
                            </p>
                            <p>
                                <a>max: {daMax} &#8451;</a></p>
                            <p>
                            <a>
                                <FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon>: {daPop} &#37;
                            </a>
                            {/* <a>
                                <FontAwesomeIcon icon={faSnowman}></FontAwesomeIcon>: 2 mm
                            </a> */}
                            </p>
                        </div>
                    </div>
                    {/* <div id="extra">
                        <h2>Feedback?</h2>
                    </div> */}
                </div>   
            </div>
        </div>
    );
    }

}

export default WeatherCard;