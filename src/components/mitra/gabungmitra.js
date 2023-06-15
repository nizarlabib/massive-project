import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css'; 

const gabungmitra = () => {
    return (
        <div class="bg-image w-100 d-flex justify-content-center bg-mitra">
         <div class="position-absolute text-center">
        <div>
        <div class="mitra-margin-1">
            <h1 class="text-white">Ayo Gabung Bersama Vacalam</h1>
            </div>
            <div class="mitra-margin-2">
            <div class="d-flex justify-content-center">
                <h2 class="text-white mt-3 w-50">Untuk memajukan wisata lampung yang lebih populer 
                dan memudahkan pengelola wisata dalam mengelola tempat wisatanya</h2>
            </div>
            </div>
            <button type="button" class="btn btn-primary mt-5">Gabung Sekarang</button>
        </div>
        </div>
        </div>
       
    )
}

export default gabungmitra