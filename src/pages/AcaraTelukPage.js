import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import TELUK from '../assets/acara/acara2.svg'
import '../styles/styles.css';

const AcaraTelukPage = ()  => {
    return (
      <div>
          <Navbar/>
          <div class="container">
            <div class="text-center">
                <img src={TELUK} class="mt-5 img-fluid rounded image-acara-size" alt="..."/>
            </div>
            <div class="text-start mb-5">
                <h5 class="text-primary">Waktu : 13 April - 22 April</h5>
                <h5 class="text-primary mb-2">Lokasi : Kabupaten Lampung Barat</h5>
                <p class="text-primary">Teluk Stabas berada di sekitar Krui, Kabupaten Pesisir Barat. Konon, nama teluk ini berasal dari kata Sebastian, seorang nakhoda kapal dagang bangsa Belanda. Waktu itu Sebastian bersama anak buahnya berlabuh di sekitar teluk untuk berdagang. Oleh karena tidak terbiasa menyebut kata Sebastian, masyarakat setempat menyapanya dengan sebutan “Stabas”. Dan, teluk tempat kapal Sang Stabas berlabuh lama-kelamaan pun dinamakan menjadi Teluk Stabas.
             </p>
             <p class="text-primary">
             Festival Teluk Sabas adalah event tahunan yang diselenggarakan oleh Pemerintah Lampung Barat. Festival ini juga sering disebut dengan Pesta Sekura. Di festival merupakan suatu wadah untuk menampikan kesenian yang ada di Lampung Barat seperti tarian dan seni lainnya. Festival Teluk Stabas XIV akan menampilkan aktraksi budaya yakni Hahiwang, Betetah, Nyambai, tari kreasi, pawai budaya dan jenis budaya lain.Kegiatan tahunan tersebut selain menampilkan aktrasi budaya, juga memamerkan aneka jajanan khas masyarakat Lampung Barat.
             </p>
             <p class="text-primary">
             Adapun tujuan Festival Teluk Stabas  dimaksudkan untuk melestarikan dan mempertahankan adat budaya asli negeri para sai bathin dan ulama. Didalam festival ini, beberapa ibu kenakan pakaian kebaya, kenakan sinjang (sarung) tapis dan selendang penutup kepala akan jalan bersama-sama sambil menanggung bakul anyaman bambu berisi beras, gula, kue, telur, dan sayur mayor.
             </p>
            </div>
          </div>
          <Footer/>
      </div>
    )
}
  
export default AcaraTelukPage;