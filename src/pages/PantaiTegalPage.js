import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PANTAI from '../assets/acara/pantai1.svg'
import '../styles/styles.css';

const PantaiTegalPage = ()  => {
    return (
      <div>
          <Navbar/>
          <div class="container">
            <div class="text-center">
                <img src={PANTAI} class="mt-5 img-fluid rounded image-acara-size" alt="..."/>
            </div>
            <div class="text-start mb-5">
                <p class="text-primary">Pantai Tegal Mas adalah sebuah pantai yang terletak di Provinsi Lampung, Indonesia. Pantai ini terletak di Desa Way Muli, Kecamatan Sidomulyo, Kabupaten Lampung Selatan. Pantai Tegal Mas terkenal karena keindahan alamnya, pasir putihnya, serta ombak yang cocok untuk berbagai jenis aktivitas pantai.
             </p>
             <p class="text-primary">
Pantai Tegal Mas menawarkan pemandangan yang menakjubkan dengan garis pantai yang panjang dan luas. Pasir putih yang halus dan bersih menjadi daya tarik utama pantai ini. Pengunjung dapat menikmati berjalan-jalan di sepanjang pantai, berjemur di bawah sinar matahari, atau sekadar bersantai sambil menikmati pemandangan alam sekitarnya.
             </p>
            </div>
          </div>
          <Footer/>
      </div>
    )
}
  
export default PantaiTegalPage;