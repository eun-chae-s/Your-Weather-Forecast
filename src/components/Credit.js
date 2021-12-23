import React from 'react';
import './Credit.css';

function Credit({onCloseCredit, showCredit}) {
    if (showCredit === false) {
        return null;
    }
    
    return (
        <div className="credit">
            <div className="credit-content">
                <div className="head">
                    <h1>Credit</h1>
                </div>
                <div className="detail">
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/winnievinzence" title="winnievinzence">winnievinzence</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
                <div className="close">
                    <button id="close" onClick={onCloseCredit}>
                        Close!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Credit;