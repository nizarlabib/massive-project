
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css'; 

const Banner = () => {
    return (
    <section>
        <div class="bg-image w-100 d-flex align-items-center justify-content-center bg-banner">
            <div class="position-absolute text-center">
                <div>
                <h1 class="font-weight-bold text-white font-weight-bold mb-4">Nikmati Liburanmu bersama Vacalam</h1>
                </div>
                <div class="mt-2 width-banner">
                <p class="font-weight-bold text-white font-weight-bold">Langsung pesan tiket wisata mu di “ Vacalam Apps”</p>
                </div>
                <button type="button" class="btn btn-primary text-white mt-3">Download Sekarang</button>
            </div>
        </div>
    </section>
  )
}

export default Banner