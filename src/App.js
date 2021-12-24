import React, {useState} from 'react';
import './App.css';
import rainy from './img/rainy.png';
import cloudSunny from './img/sun.png';
import snow from './img/snowman.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSnowman, faUmbrella, faMap} from '@fortawesome/free-solid-svg-icons';
import Info from './components/Info';
import Credit from './components/Credit';

function App() {
  const [inputLocation, setInputLocation] = useState('');
  const [showCredit, setShowCredit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const inputLocationHandler = (e) => {
    setInputLocation(e.target.value);
  }

  const getWeatherData = () => {
    return "Hello";
  };

  return (
    <div>
      <div className="header">
        <h1>ONEUL</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Location..?" onChange={inputLocationHandler}></input>
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
