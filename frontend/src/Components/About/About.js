import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Features</span>
            </h1>
            <p>Our online booking system offers a range of features designed to provide our users with a seamless and convenient movie-going experience. Our user-friendly interface allows users to easily browse through the selection of movies, select their desired showtime, and book their tickets with just a few clicks. Real-time availability of movie showtimes and available seats ensures that users can make informed decisions when booking their tickets. We offer multiple payment options, including credit/debit cards, digital wallets, and online banking, to provide our users with flexibility and convenience when booking their movie tickets. Our platform also offers comprehensive movie information, including trailers, reviews, and ratings, helping users make informed decisions about which movies to watch.</p>
            <p>Our rewards program incentivizes users to book more movies through our platform, allowing them to earn points for each booking that can be redeemed for discounts on future movie purchases. A clear refund policy is in place in case of any unforeseen circumstances. Our mobile-friendly platform allows users to book their movie tickets on-the-go using their smartphones or tablets. We also provide email and SMS notifications confirming users' bookings, reminding them of their showtime, and informing them about any changes or cancellations. And finally, our dedicated customer support team is always ready to assist users with any issues or queries they may have. With these features, our online booking system provides an enjoyable movie-going experience for our users.</p>
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
