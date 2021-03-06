import React from 'react';
import './Slider.css';
import Headimage1 from '../images/headimages3.jpg';
import Headimage2 from '../images/headimagessss.jpg';
import Doctor3 from '../images/doctor.jpg';
import {Link} from 'react-router-dom';


function Slider (props) {
    return (
        <div>
           
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Headimage1} class="d-block w-100" alt="Headimage"/>
    </div>
    <div class="carousel-item">
      <img src={Headimage2} class="d-block w-100" alt="Headimage2"/>
    </div>
    <div class="carousel-item">
      
   <img src={Doctor3} class="d-block w-100" alt="Doctor3"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        
        );
    }
    
    export default Slider;