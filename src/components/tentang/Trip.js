import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css'; 
import TripData from './TripData';

function Trip (props) {
  return (
   <div className='t-card'>
    <div className='t-image'>
        <img src={props.image} alt="image"/>
    </div>
    <h4>{props.heading}</h4>

    </div>
  )
}

export default Trip