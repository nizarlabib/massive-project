import React from 'react'
import '../../styles/styles.css'; 
import EVENTKRAKATAU from '../../assets/event/event-krakatau.svg'
import EVENTTELUK from '../../assets/event/event-teluk.svg'
import EVENTWAYKAMBAS from '../../assets/event/event-waykambas.svg'
import EVENTBAMBOO from '../../assets/event/event-bamboo.svg'
import EVENTFASHION from '../../assets//event/event-fashion.svg'
import EVENTDANAU from '../../assets/event/event-danau.svg'
import EVENTSEKALA from '../../assets/event/event-sekala.svg'
import EVENTSEMANGKA from '../../assets/event/event-semangka.svg'
import EVENTBEGAWI from '../../assets/event/event-begawi.svg'


const Pantai = () => {
  return (
    <section class="container-fluid mt-5">        
        <div class="row justify-content-around mb-5 mx-1">
        
            <div class="col-xl-auto col-md-6 mb-4">
                <div class="image-container position-relative">
                    <a href="">
                        <img src={EVENTKRAKATAU} alt="Gambar"/>
                        <div class="image-text position-absolute">
                            <h4>Lampung Krakatau Festival</h4>
                        </div>
                    </a>
                </div>
            </div>
        
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={EVENTTELUK} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Festival Teluk Stabas</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={EVENTWAYKAMBAS} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Festival Way Kambas</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={EVENTBAMBOO} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Bamboo Rafting Way Besay</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={EVENTFASHION} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Lampung Fashion Week</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={EVENTDANAU} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Festival Danau Ranau</h4>
                </div>
            </a>
            </div>
            </div>

            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={EVENTSEKALA} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Festival Sekala Bekhak</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={EVENTSEMANGKA} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Festival Teluk Semangka</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={EVENTBEGAWI} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Festival Begawi</h4>
                </div>
            </a>
            </div>
            </div>
        
        </div>
    </section>
  )
}

export default Pantai