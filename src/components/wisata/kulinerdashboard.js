import React from 'react'
import '../../styles/styles.css'; 
import BenjakEnjak from '../../assets/kuliner/BenjakEnjak.svg'
import Durian from '../../assets/kuliner/Durian.svg'
import Emping from '../../assets/kuliner/Emping.svg'
import GulaiTaboh from '../../assets/kuliner/GulaiTaboh.svg'
import KripikPisang from '../../assets/kuliner/KripikPisang.svg'
import Pisro from '../../assets/kuliner/Pisro.svg'
import SerbatKweni from '../../assets/kuliner/SerbatKweni.svg'
import Seruit from '../../assets/kuliner/Seruit.svg'
import Tempoyak from '../../assets/kuliner/Tempoyak.svg'

const dashboardkuliner = () => {
  return (
    <section class="container-fluid mt-5">        
        <div class="row justify-content-around mb-5 mx-1">
        
            <div class="col-xl-auto col-md-6 mb-4">
                <div class="image-container position-relative">
                    <a href="">
                        <img src={BenjakEnjak} alt="Gambar"/>
                        <div class="image-text position-absolute">
                            <h4>
                                Benjak Enjak
                                </h4>
                        </div>
                    </a>
                </div>
            </div>
        
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={GulaiTaboh} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Gulai Taboh</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={Durian} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Durian Kopi Luwak</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={Emping} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Emping</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={KripikPisang} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Kripik Pisang</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={Pisro} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Pisro</h4>
                </div>
            </a>
            </div>
            </div>
        
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={SerbatKweni} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>SerbatKweni</h4>
                </div>
            </a>
            </div>
            </div>

            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={Seruit} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Seruit</h4>
                </div>
            </a>
            </div>
            </div>

            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={Tempoyak} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Tempoyak</h4>
                </div>
            </a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default dashboardkuliner