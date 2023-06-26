import React from 'react'
import '../../styles/styles.css'; 
import BukitAslan from '../../assets/gunung/BukitAslan.svg'
import BukitIdaman from '../../assets/gunung/BukitIdaman.svg'
import BukitKabut from '../../assets/gunung/BukitKabut.svg'
import BukitPangonan from '../../assets/gunung/BukitPangonan.svg'
import BukitSakura from '../../assets/gunung/BukitSakura.svg'
import BukitSelalau from '../../assets/gunung/BukitSelalau.svg'

const dashboardgunung = () => {
  return (
    <section class="container-fluid mt-5">        
        <div class="row justify-content-around mb-5 mx-1">
        
            <div class="col-xl-auto col-md-6 mb-4">
                <div class="image-container position-relative">
                    <a href="">
                        <img src={BukitAslan} alt="Gambar"/>
                        <div class="image-text position-absolute">
                            <h4>
                                Bukit Aslan
                                </h4>
                        </div>
                    </a>
                </div>
            </div>
        
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={BukitIdaman} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Bukit Idaman</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={BukitKabut} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Bukit Kabut</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={BukitPangonan} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Bukit Pangonan</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={BukitSakura} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Bukit Sakura</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={BukitSelalau} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Bukit Selalau</h4>
                </div>
            </a>
            </div>
            </div>
        
        </div>
    </section>
  )
}

export default dashboardgunung