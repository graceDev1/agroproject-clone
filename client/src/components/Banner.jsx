import React from 'react'
import '../style/Banner.css'
function Banner() {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://media-eu.camilyo.software/media-eu/static/1521/130.jpg" 
            className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://media-eu.camilyo.software/media-eu/static/1521/135.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://media-eu.camilyo.software/media-eu/static/1521/145.png" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
    )
}

export default Banner;
