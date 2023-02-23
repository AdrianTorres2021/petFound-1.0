import React from 'react'
import './carousel.css'
const Carousel = () =>{
    return(
    <div id="inicio">
        <h3 id="h3-carousel">Estas mascotas ya han sido rescatadas!</h3>
        <div id="carouselExample" className="carousel slide mx-auto w-25 ">
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img src="https://img-cdn.pawboost.com/1660879888/lost_pet_4922-500x500.jpeg" class="d-block w-50" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://img-cdn.pawboost.com/1675816111/image_picker_FEC4A151-BE03-418A-935A-E94BB8B4A03A-6836-00000140AF4AA7E8-500x500.jpg" class="d-block w-50" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://img-cdn.pawboost.com/1675902336/lost_pet_7071-500x500.jpeg" class="d-block w-50" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    )
}

export default Carousel