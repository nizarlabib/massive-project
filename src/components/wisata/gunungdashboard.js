import React from 'react'
import '../../styles/styles.css'; 
import GigiHiu from '../../assets/pantai/pantai-gigi-hiu.svg'
import Kiara from '../../assets/pantai/pantai-klara.svg'
import SariRinggung from '../../assets/pantai/pantai-sari.svg'
import TegalMas from '../../assets/pantai/pantai-tegalmas.svg'
import PasirPutih from '../../assets/pantai/pantai-pasir-putih.svg'
import TelukKilauan from '../../assets/pantai/pantai-teluk.svg'

const dashboardgunung = () => {
  return (
    <section class="container-fluid mt-5">        
        <div class="row justify-content-around mb-5 mx-1">
        
            <div class="col-xl-auto col-md-6 mb-4">
                <div class="image-container position-relative">
                    <a href="">
                        <img src={GigiHiu} alt="Gambar"/>
                        <div class="image-text position-absolute">
                            <h4>
                                Pantai Gigi Hiu
                                </h4>
                        </div>
                    </a>
                </div>
            </div>
        
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={Kiara} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Pantai Kiara</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={SariRinggung} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Pantai Sari Ringgung</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={TegalMas} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Pantai Tegal Mas</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={PasirPutih} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Pantai Pasir Putih</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={TelukKilauan} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Pantai Teluk Kilauan</h4>
                </div>
            </a>
            </div>
            </div>
        
        </div>
    </section>
  )
}

export default dashboardgunung