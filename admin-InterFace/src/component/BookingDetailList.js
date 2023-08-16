import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class BookingDetailsList extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Booking Details List</h3>
                                    </div>



                                    <div class="card-body">
                                        <table id="example2" class="table table-bordered table-hover">
                                            <thead>
                                            <tr>
                                                <th>Booking Details Id</th>
                                                <th>Movie Name</th>
                                                <th>Quantity</th>
                                                <th>Ticket Price</th>
                                                <th>Seat Number</th>
                                                <th>Theater Number</th>
                                                <th>Booking Id</th>
                                                <th>Movie Id</th>
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
