import React, {useState, useEffect} from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMap} from '@fortawesome/free-solid-svg-icons';
import Info from './components/Info';
import Credit from './components/Credit';
import City from './components/City';
import WeatherCard from './components/WeatherCard';

function App(){
  const [todayWeather, setTodayWeather] = useState({});
  const [notTodayWeather, setNotTodayWeather] = useState({});
  const [inputLocation, setInputLocation] = useState('');
  const [showCredit, setShowCredit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showWeatherCard, setShowWeatherCard] = useState(false);
  const [todayDate, setTodayDate] = useState('');

  const weatherAPIKey = '684d6190d51254617c2a54e8dcec9715';
  const googleAPIKey = 'AIzaSyDUZUhzX63lF-AXdRxUOJxh7u5s22p2AXQ';

  const inputLocationHandler = (e) => {
    setInputLocation(e.target.value);
    setShowWeather(false);
  }

  // // tell React that your component needs to do something after render
  function getWeatherData() {
    if (inputLocation === '') {
      return null;
    }

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=${weatherAPIKey}&units=metric`
    ).then((res) => {
      if (res.ok) {
        console.log(res.status);
        return res.json();
      } else {
        if (res.status === 404) {
          return alert("Oops, there seems to be an error! (wrong location)");
        } else {
          throw new Error("You have an error");
        }
      }
    }).then((object) => {
      setTodayWeather(object);
      console.log("today");
      console.log(object);
      
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${inputLocation}&appid=${weatherAPIKey}&units=metric`
      ).then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error! (wrong location)");
          } else {
            throw new Error("You have an error");
          }
        }
      }).then((object) => {
        setNotTodayWeather(object);
        console.log("not today");
        console.log(object);
      }).catch((error) => console.log(error));
    }).catch((error) => console.log(error));

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${inputLocation}&key=${googleAPIKey}`
    ).then((res) => {
      if (res.ok) {
          console.log(res.status);
          return res.json();
      } else {
          console.log("There is an error for obtaining longitude and latitude!");
      }
    }).then((object) => {
      console.log(object);
      const geocode_lat = object.results[0].geometry.location.lat;
      const geocode_lng = object.results[0].geometry.location.lng;
      console.log(geocode_lat);
      console.log(geocode_lng);
      const timestamp = new Date().getTime() * 0.001;
      console.log(timestamp);

      var axios = require('axios');
      var config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/timezone/json?location=${geocode_lat}%2C${geocode_lng}&timestamp=${timestamp}&key=${googleAPIKey}`,
        headers: {}
      };

      axios(config).then(
        function(response) {
          console.log(response.data);
          const timezone = response.data["timeZoneId"];
          console.log(timezone);
          setTodayDate(new Date().toLocaleDateString('en-CA', {timeZone: timezone}));
          setShowWeather(true);
          setShowWeatherCard(true);
        }
      ).catch(function(error) {
        console.log(error);
      });
    });
  };

  return (
    <div>
      <div className="header">
        <h1>ONEUL</h1>
      </div>
      <div className="search">
        <input id="city" type="text" placeholder="City, Country" value={inputLocation} onChange={inputLocationHandler}></input>
        <button onClick={getWeatherData}><FontAwesomeIcon icon={faMap}></FontAwesomeIcon></button>
      </div>
      <City 
        inputLocation={inputLocation}
        showWeather={showWeather}>
      </City>
      <WeatherCard
        todayDate={todayDate}
        todayWeather={todayWeather}
        notTodayWeather={notTodayWeather}
        showWeatherCard={showWeatherCard}>
      </WeatherCard>
      <footer>
        <button id="credit" type="button" onClick={() => setShowCredit(true)}>Credit</button>
        <Credit
          onCloseCredit={() => setShowCredit(false)}
          showCredit={showCredit}>
        </Credit>
        <button id="info" type="button" onClick={() => setShowInfo(true)}>Info</button>
        <Info
          onCloseInfo={() => setShowInfo(false)}
          showInfo={showInfo}>
        </Info>
      </footer>
    </div>
  
  );
}

export default App;
