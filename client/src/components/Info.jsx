import React from 'react'
import '../style/Info.css';
// import { Link } from 'react-router-dom';

function Info() {
    return (
        <div className='infoPage'>
            <div className="info__name">
                Nukushare Agro Limited
            </div>
            <div className="info__contact">
                <div className='info_buttonContainer'>
                    <button className='info__button'>Call Us</button>
                </div>
                <div className='info_buttonContainer'>
                    <button className='info__button'>Contact Us</button>
                </div>
            </div>
            
        </div>
    )
}

export default Info
