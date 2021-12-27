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
      {OpenWeatherApi}
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
      setShowWeather(true);
      setShowWeatherCard(true);
    }).catch((error) => console.log(error));

    fetch(
      {OpenWeatherApi}
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
      setShowWeather(true);
      setShowWeatherCard(true);
    }).catch((error) => console.log(error));
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
