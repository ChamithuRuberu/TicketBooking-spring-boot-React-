import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from "../Components/Destinations/Sdata"
import EmptyFile from "../Common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
import HeadTitle from "../Common/HeadTitle/HeadTitle"
import "./singlepage.css"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <HeadTitle />

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/destinations' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className='content flex'>
              <div className='main-content'>
                

          <form>
            <input type='text' placeholder='Enter Your Name' />
            <div className='flex_space'>
              <input type='date' placeholder='Check In' />
              {/*<input type='date' placeholder='Check Out' />*/}
            </div>
            <div className='flex_space'>
              <input type='number' placeholder='Adult(s)(18+)' />
              <input type='number' placeholder='Children(0- 17)' />
            </div>
            <input type='number' placeholder='Seats' />
            <input type='Submit' value='Book' className='submit' />
          </form>
       
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className='side-content'>
                <div className='box'>
                  <h2>About Film</h2>
                  
                  <p>{item.sidepara}</p>
                  
                  
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> Contact Us
                  </button>
                </div>
              </div>
              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default SinglePage
