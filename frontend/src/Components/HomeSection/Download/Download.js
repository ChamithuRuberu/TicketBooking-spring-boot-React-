import React from "react"
import "./download.css"

const Download = () => {
  return (
    <>
      <section className='download top'>
        <div className='container flex_space'>
          <div className='row'>
            <h3>Download our app</h3>
            <h1>Wow! Get This App For Your Mobile</h1>
            <ul>
              <li>&#10003; User-friendly interface:</li>
              <li>&#10003; Real-time availability</li>
              <li>&#10003; Multiple payment options</li>
              <li>&#10003; Information about the movies, including trailers, reviews, and ratings.</li>
              <li>&#10003; A rewards program can incentivize users to book more movies through the platform.</li>
              <li>&#10003; A clear refund policy is important for any online booking system.</li>
              <li>&#10003; Customer support is essential for any online booking system.</li>
            </ul>
            <div className='img flex'>
              <img src='/images/appstore-button.png' alt='' />
              <img src='/images/google-play-button.png' alt='' />
            </div>
          </div>
          <div className='row row2'>
            <img src='/images/app-image-1.png' alt='' className='image' width={500} height={550} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Download
