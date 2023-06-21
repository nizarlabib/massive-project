import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css'; 


const ContactSection = () => {
  return (
   <form>
    <h1>Contact <span> Here</span></h1>
    <input type='text' name='name' id='' placeholder='Enter name'/>
    <input type='text' name='email' id='' placeholder='example@gmail.com'/>
    <input type='text' name='phone' id=''placeholder='08123456'/>
    <textarea name="message" id="" cols="30" rows="10" placeholder='type here...'/>
    <button type="submit">Send</button>

   </form>
   

    )
}

export default ContactSection