import React from 'react';
import './Info.css';

function Info({onCloseInfo, showInfo}) {
    if (showInfo === false) {
        return null;
    }

    return (
        <div className="info">
            <div className="info-content">
                <div className="head">
                    <h1>Info</h1>
                </div>
                <div className="detail">
                    Developer: Rachel Seong <br></br>
                    <p>You can see minimum & maximum temperature, volume of rain and snow in 3 hours</p>
                </div>
                <div className="close">
                    <button id="close" onClick={onCloseInfo}>
                        Close!
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default Info;