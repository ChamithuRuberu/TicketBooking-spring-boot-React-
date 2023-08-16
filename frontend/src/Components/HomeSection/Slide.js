import React, { useState } from "react"
import Data from "./Data"

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>
      <section className='slider'>
        <div className='control-btn'>
          <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
          </button>
          <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              {index === current && <img src={slide.image} alt='Home Image' />}
            </div>
          )
        })}
      </section>

      <section className='slide-form'>
        <div className='container'>
          <h2>Enjoy Your Movie</h2>
          <span> Search and Book Movie</span>

          <form>
            <input type='text' placeholder='Search Movie' />
            <div className='flex_space'>
              <input type='date' placeholder='Check In' />
              {/*<input type='date' placeholder='Check Out' />*/}
            </div>
            <div className='flex_space'>
              <input type='number' placeholder='Adult(s)(18+)' />
              <input type='number' placeholder='Children(0- 17)' />
            </div>
            <input type='number' placeholder='Seats' />
            <input type='Submit' value='Search' className='submit' />
          </form>
        </div>
      </section>
    </>
  )
}

export default Home
