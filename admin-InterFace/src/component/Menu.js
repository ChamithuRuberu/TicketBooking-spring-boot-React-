import React, { Component } from 'react'
import {FaUsers} from 'react-icons/fa'
import {MdMovieCreation} from 'react-icons/md'
import {FaTicketAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import BookingDetailsList from "./BookingDetailList";

export default class Menu extends Component {
  render() {
    return (
        <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <Link to="/add" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
            <span className="brand-text font-weight-light">PvR Cinema</span>
          </Link>
          {/* Sidebar */}

          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/boxed-bg.jpg" className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <Link to="/add" className="d-block">Cinema Ticket Booking</Link>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">
                  <Link to="/add" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    
                    <p>
                      <t> </t>Dashboard
                    </p>
                  </Link>
                  <a href="src/component/Menu"></a>
                </li>


                <li className="nav-item">
                  <Link to="/user" className="nav-link">

                    <FaUsers className='icon'/>
                    <p>
                    <t>  </t>Users
                    </p>
                  </Link>
                  <a href="src/component/Menu"></a>
                </li>


                <li className="nav-item has-treeview">
                  <Link to="/movies" className="nav-link">
                  <MdMovieCreation className='icon'/>
                    <p>
                    <t>  </t>Movies
                    </p>
                  </Link>
                  <a href="src/component/Menu"></a>
                </li>


                <li className="nav-item has-treeview">
                  <Link to="/booking" className="nav-link">
                    <FaTicketAlt className='IoTicketOutline'/>
                    <p>
                    <t>  </t>Bookings
                    </p>
                  </Link>
                  <a href="src/component/Menu"></a>
                </li>

                <li className="nav-item has-treeview">
                  <Link to="/BookingDetailsList" className="nav-link">
                    <FaTicketAlt className='IoTicketOutline'/>
                    <p>
                      <t>  </t>Booking Details
                    </p>
                  </Link>
                  <a href="src/component/Menu"></a>
                </li>


                <li className="nav-item has-treeview">
                  <Link to="/LogIn" className="nav-link">
                    <FaTicketAlt className='IoTicketOutline'/>
                    <p>
                      <t>  </t>LogIn
                    </p>
                  </Link>
                  <a href="src/component/Menu"></a>
                </li>

              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>




    )
  }
}
