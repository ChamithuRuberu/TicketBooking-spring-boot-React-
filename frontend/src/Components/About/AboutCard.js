import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We <span>provide tickets</span> to watch your favourite movie
          </h1>
          <p>Sinhala, Tamil, Hindi, or any popular movie you can book tickets for all the regional language films released , right here at BookMyCinema. What's more along with booking movie tickets, you can also check out the latest and upcoming movies' trailers and previews in our “Videos & Trailer” section. Booking process is simply a breeze at BookMyShow. Within few minutes, any time anywhere you can book your tickets and your preferred seat for the latest movies at the lowest prices possible.</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' width={548} height={315}/>
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
