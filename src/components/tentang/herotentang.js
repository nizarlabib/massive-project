import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css'; 

import IMAGE1 from "../../assets/tentang/background1.jpg"
import IMAGE2 from "../../assets/tentang/img2.jpg"
// import IMAGE2 from "../../assets/tentang/img2.jpeg"

const herotentang = () => {
  return (
    <section class="section tour container">
        <div class="section-title">
            <h3 class="fw-bolder text-black">Mari Berkenalan dengan daerah Lampung!</h3>
            </div> 

            <div className='first-dev'>
              <div className='des-text'>
                <h3>Tentang Lampung</h3>
                <p>Lampung adalah sebuah provinsi di ujung Pulau Sumatera, Indonesia.
                   Provinsi ini memiliki ibukota bernama Bandar Lampung. 
                   Lampung memiliki keanekaragaman budaya, suku, dan bahasa yang kaya. 
                   Wilayah ini terkenaldengan keindahan alamnya, termasuk pantai-pantai yang menakjubkan, gunung-gunung, dan taman nasional yang memikat. 
                   Lampung juga terkenal dengan produk khasnya, seperti kain tapis dan kopi robusta.</p>

                </div>

              <div className='image'>
                <img alt="img" src=
                {IMAGE1}/>

                <img alt="img" src=
                {IMAGE2}/>
             
                </div>
          
                </div>
          
              
        </section>
  )
}




export default herotentang