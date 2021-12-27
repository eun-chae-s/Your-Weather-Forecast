import React from 'react';
import './City.css';

function City({inputLocation, showWeather}) {
    if (showWeather === false) {
        return null;
    }
    return (
        <div className="result">
            <h2>{inputLocation}'s ONEUL...</h2>
        </div>
    );
}

export default City;