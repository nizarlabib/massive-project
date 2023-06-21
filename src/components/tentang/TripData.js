import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css'; 
import Trip from './Trip';
import TRIP1 from "../../assets/tentang/kain.jpeg";
import TRIP2 from "../../assets/tentang/kopi.jpeg";
import TRIP3 from "../../assets/tentang/Pantai.png";

const TripData = () => {
  return (
        <div className='tripcard'>
            <Trip
            image = {TRIP1}
            heading = "Kain Tapis"
            />

<Trip
            image = {TRIP2}
            heading = "Kopi Robusta"
            />

<Trip
            image = {TRIP3}
            heading = "Keindahan Alam Lampung"
            />
        </div>
           
  )
}

export default TripData

