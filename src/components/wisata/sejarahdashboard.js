import React from 'react'
import '../../styles/styles.css'; 
import BatuBedil from '../../assets/sejarah/BatuBedil.svg'
import BuayPernong from '../../assets/sejarah/BuayPernong.svg'
import GedungAir from '../../assets/sejarah/GedungAir.svg'
import GoaWarak from '../../assets/sejarah/GoaWarak.svg'
import MasjidJami from '../../assets/sejarah/MasjidJami.svg'
import Museum from '../../assets/sejarah/Museum.svg'
import RumahDaswati from '../../assets/sejarah/RumahDaswati.svg'
import Taman from '../../assets/sejarah/Taman.svg'
import Vihara from '../../assets/sejarah/Vihara.svg'

const dashboardsejarah = () => {
  return (
    <section class="container-fluid mt-5">        
        <div class="row justify-content-around mb-5 mx-1">
        
            <div class="col-xl-auto col-md-6 mb-4">
                <div class="image-container position-relative">
                    <a href="">
                        <img src={BatuBedil} alt="Gambar"/>
                        <div class="image-text position-absolute">
                            <h4>
                                Situs Batu Bedil
                                </h4>
                        </div>
                    </a>
                </div>
            </div>
        
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={RumahDaswati} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Rumah Daswati</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={BuayPernong} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Buay Pernong</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={MasjidJami} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Masjid Jami' Al-Anwar</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={Taman} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Taman Purbakala Pujung Raharjo</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={Museum} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Museum Lampung</h4>
                </div>
            </a>
            </div>
            </div>
        
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={GoaWarak} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Goa Warak</h4>
                </div>
            </a>
            </div>
            </div>

            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={GedungAir} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Gedung Air</h4>
                </div>
            </a>
            </div>
            </div>

            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={Vihara} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Vihara Tay Hin Bio</h4>
                </div>
            </a>
            </div>
            </div>

        </div>
    </section>
  )
}

export default dashboardsejarah