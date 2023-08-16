import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddBooking from "./AddBooking";


export default class BookingList extends Component {
  render() {
    return (
        <div>
        <div className="content-wrapper">
        <div class="container-fluid">
        <div class="row">
        <div class="col-12">
        <div class="card">
        <div class="card-header">
        <h3 class="card-title">Booking List</h3>
        </div>
            <div className="container-fluid pt-4">

                <Link to='/AddBooking' class="btn btn-outline-success">
                    <i className="fas fa-plus"></i> Add Booking
                </Link>
            </div>
        <div class="card-body">
        <table id="example2" class="table table-bordered table-hover">
        <thead>
        <tr>
        <th>Booking Id</th>
        <th>User Id</th>
        <th>Date</th>
        <th>Total Fee</th>
        <th>Acton</th>

        </tr>
        </thead>
        <tbody>



        </tbody>
        </table>
        </div>

        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
  }
}
