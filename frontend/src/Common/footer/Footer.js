import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>We are a film booking system that provides a convenient and easy-to-use platform for moviegoers to book their favorite films online. Our platform offers a seamless experience, allowing users to browse through a vast selection of movies, check showtimes, and book tickets quickly and easily.</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>At our core, we are passionate about bringing the magic of cinema to our users, providing them with a hassle-free and enjoyable movie-going experience.</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 February 2023</span>
              </li>
              <li>
                <p>We are committed to keeping our users informed about the latest movie news, releases, and updates.</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 March 2023</span>
              </li>
              <li>
                <p>Our platform is user-friendly, and we pride ourselves on offering excellent customer service. Our team is dedicated to providing users with the support they need.</p>
                <label className='fa fa-calendar-alt'></label>
                <span>31 January 2023</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>We are thrilled to announce the latest updates and news from our platform. We have been working hard to improve your movie-going experience and we have some exciting news to share!</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
