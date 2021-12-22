import './App.css';
import rainy from './img/rainy.png';
import cloudSunny from './img/sun.png';
import snow from './img/snowing.png';

// TODO: make a separate page for the credit

function App() {
  return (
    <div>
      <div className="header">
        <h1>ONEUL</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Location..?"></input>
        <button type="submit">&#x1F50D;</button>
      </div>
      <h2>Location</h2>
      <div className="weather">
        
        <div id="today">
          <h2>Today</h2>
          <img src={ rainy } alt="rainy"></img>
        </div>
        <div className="not-today">
          <div id="tmr">
            <h2>Tomorrow</h2>
            <img src={ cloudSunny } alt="Cloudy and Sunny"></img>
          </div>
          <div id="day-after-tmr">
            <h2>Friday</h2>
            <img src={ snow } alt="Snow"></img>
          </div>
          <div id="extra">
            <h2>Feedback?</h2>
          </div>
        </div>
        
      </div>
      {/* Make a separate credit page that displays all the references */}
      <footer>
        <button id="credit" type="button">Credit</button>
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/winnievinzence" title="winnievinzence">winnievinzence</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      </footer>
    </div>
  
  );
}

export default App;
