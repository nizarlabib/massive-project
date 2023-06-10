import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css';

const Header = () => {
  return (
    <div class="container-fluid bg-registration py-5 bg-header-event">
        <div class="container py-5">
            <div class="row align-items-center mt-5">
                <div class="col-lg-7 mb-5 mb-lg-0">
                    <div class="mb-4">
                        <h1 class="text-white">Informasi agenda event</h1>
                        <h1 class="text-white">wisata yang ada di Lampung</h1>
                    </div>
                    <p class="text-white">Tidak hanya wisata, Lampung juga memiliki banyak event yang harus kamu kunjungi ketika berada di Lampung. Apa saja itu?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header