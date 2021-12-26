import React, {useState, useEffect} from 'react';
import './App.css';
import rainy from './img/rainy.png';
import cloudSunny from './img/sun.png';
import snow from './img/snowman.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSnowman, faUmbrella, faMap} from '@fortawesome/free-solid-svg-icons';
import Info from './components/Info';
import Credit from './components/Credit';

function App(){
  const [weather, setWeather] = useState({});
  const [inputLocation, setInputLocation] = useState('');
  const [showCredit, setShowCredit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // // tell React that your component needs to do something after render
  useEffect(() => {
    getWeatherData();
  }, []);

  function getWeatherData() {
    if (inputLocation === '') {
      return null;
    }

    const city = inputLocation;
    console.log(city);

    // Call API to obtain the data
    fetch(
      {OpenweatherappApiKey}
    ).then((res) => {
      if (res.ok) {
        console.log(city);
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
      console.log(city);
      setWeather(object);
      console.log(weather);
    }).catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="header">
        <h1>ONEUL</h1>
      </div>
      <div className="search">
        <input id="city" type="text" placeholder="City, Country" value={inputLocation} onChange={(e) => setInputLocation(e.target.value)}></input>
        {/* 버튼을 클릭하면 텍스트 애니메이션 효과 보이게 하기! function 만들어서 처음에는 null로 하고 나중에 추가하기 */}
        <button onClick={getWeatherData}><FontAwesomeIcon icon={faMap}></FontAwesomeIcon></button>
      </div>
      {/* Get the input text from the input text */}
      <div className="result">
        <h2>{inputLocation}'s ONEUL...</h2>
      </div>
      <div className="weather">
        <div id="today">
          <h2>Today</h2>
          <img src={ rainy } alt="rainy"></img>
          <div id="today-info">
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
      {/* Make a separate credit page that displays all the references */}
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
