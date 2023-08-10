import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import KRAKATAU from '../assets/acara/acara.svg'
import '../styles/styles.css';

const AcaraKrakatauPage = ()  => {
    return (
      <div>
          <Navbar/>
          <div class="container">
            <div class="text-center">
                <img src={KRAKATAU} class="mt-5 img-fluid rounded image-acara-size" alt="..."/>
            </div>
            <div class="text-start mb-5">
                <h5 class="text-primary">Waktu : 21 Agustus - 28 Agustus</h5>
                <h5 class="text-primary mb-2">Lokasi : Kota Bandar Lampung dan Kabupaten Lampung Selatan</h5>
                <p class="text-primary">Lampung Krakatau Festival merupakan salah satu perayaan kebudayaan yang rutin diadakan di Provinsi Lampung. Festival yang rutin dilakukan di Provinsi Lampung ini merupakan festival yang  mengangkat kekayaan budaya dan tradisi yang dimiliki oleh Provinsi Lampung. Festival ini sudah digelar sejak tahun 1990.
             </p>
             <p class="text-primary">
             Sejarah dilaksanakannya Lampung Krakatau Festival ini dikarenakan erupsi gunung Krakatau yang terjadi pada tahun 1883 yang lalu, tepatnya pada 27 Agustus 1883. Hingga saat ini, Lampung Krakatau Festival ini diadakan untuk menjadi ruang kreativitas, khususnya para seniman dan masyarakat umum.
             </p>
             <p class="text-primary">
             Sesuai namanya, festival ini merupakan festival yang menunjukkan keindahan tradisi dan budaya Lampung. Bagian terbaik festival bagi pengunjung adalah parade di mana berbagai suku di daerah ini menampilkan tarian dan musik serta memamerkan pakaian tradisional mereka yang indah. Karnaval diisi dengan parade busana tradisional dari dua suku besar di Lampung, yaitu Sai Batin dan Pepadun. Ditampilkan pula kesenian topeng tradisional tupping dan sekura yang menjadi salah satu kekhasan seni tradisional Lampung. Karnaval juga dimeriahkan peragaan busana kreasi kontemporer dari bahan kain tapis. Selain itu, atraksi unik seperti parade baris berbaris polisi cilik, marching band, dan gajah-gajah dari Taman Nasional Way Kambas juga ikut meramaikan Festival Krakatau.
             </p>
            </div>
          </div>
          <Footer/>
      </div>
    )
}
  
export default AcaraKrakatauPage;