import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css'; 
import BANNER1 from '../../assets/tentang/orang.png'

const bannerTentang = () => {
  return (
    <section>
    <div class="bg-image w-100 d-flex align-items-center justify-content-center bg-bannerTentang">
       
   
        <div className='two-dev-reverse'>
      
         <div className='dev-text'>
            <h1>Apasih Lampung Tourism itu?</h1>
            <p>Lampung Tourism merupakan trobosan Inovatif buat panduan kamu  menikmati indahnya destinasi pariwisata Lampung, 
            dapat mengeksplor tempat-tempat wisata lampung  dan terdapat informasi terkait destinasi populer yang ada di lampung.
            Jadi buat temen-temen yang ingin berkunjung ke lampung jangan lupa cek website kami ya!!!!!</p>
            </div>

            <div class="carousel-tentang active custom-carousel-height">
            <img src={BANNER1} alt="Image 1"/>
           
            </div>
            </div>
            </div>
          
       
</section>
  )
}

export default bannerTentang