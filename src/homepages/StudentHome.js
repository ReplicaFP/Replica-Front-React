import React from 'react'
import FooterStudent from '../layout/FooterStudent'
import NavbarStudent from '../layout/NavbarStudent'



export default function StudentHome() {

  return (
    <div>

    <NavbarStudent/>
    
    <div class="container">


     
      
      <div class="container mt-5 mb-5">
      <h2>STUDENT<i class="fa-solid fa-graduation-cap"></i></h2>
      </div>
      
     
      
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className='container'>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="nervion.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="clases.PNG" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="alumnoController.PNG" class="d-block w-100" alt="..." />
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

    </div>
    <FooterStudent/>
    </div>
  )
}