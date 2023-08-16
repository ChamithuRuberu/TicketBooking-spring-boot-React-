import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SaveUserService from "../services/User/SaveUserService";
import SaveMovieService from "../services/Movie/SaveMovieService";
import SaveBookingService from "../services/booking/SaveBookingService";
import BookingList from "./BookingList";

export default class AddBooking extends Component {



    constructor(props) {
        super(props);
        this.state={
            date:'',
            bookingId:'',
            movieId:'',
            movieName:'',
            seatNumber:'',
            theaterNumber:'',
            ticketPrice:'',
            totalPrice:'',
            userid:'',

        }
    }
    saveBooking=(e)=>{
        e.preventDefault();
        let booking={date:this.state.date,bookingId:this.state.bookingId,movieId: this.state.movieId,movieName: this.state.movieName,seatNumber: this.state.seatNumber,
            theaterNumber : this.state.theaterNumber,ticketPrice : this.state.ticketPrice,totalPrice : this.state.totalPrice,userid : this.state.userid};
        console.log('user===>'+JSON.stringify(booking));
        SaveBookingService.saveBooking(booking).then(res=>{
            this.props.history.push()
        });alert("saved Successfully..!");
    }

    changedateHandler=(event)=>{
        this.setState({date:event.target.value});
    }
    changebookingIdHandler=(event)=>{
        this.setState({bookingId:event.target.value});
    }

    changemovieIdnHandler=(event)=>{
        this.setState({movieId:event.target.value});
    }

    changemovieNameHandler=(event)=>{
        this.setState({movieName:event.target.value});
    }

    changeseatNumberHandler=(event)=>{
        this.setState({seatNumber :event.target.value});
    }

    changetheaterNumberHandler=(event)=>{
        this.setState({theaterNumber:event.target.value});

    }

    changeticketPriceHandler=(event)=>{
        this.setState({ticketPrice:event.target.value});

    }

    changetotalPriceHandler=(event)=>{
        this.setState({totalPrice:event.target.value});

    }

    changeuseridHandler=(event)=>{
        this.setState({userid:event.target.value});
    }




    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <h1>Add Booking</h1>
                    <form>

                        <div class="card-body">

                            <div className="form-group">

                                <input type="date" className="form-control" placeholder="Date" name="name"
                                       value={this.state.date} onChange={this.changedateHandler}/>
                            </div>

                            <div className="form-group">

                                <input type="text" className="form-control" placeholder="Booking Id" name="name"
                                       value={this.state.bookingId} onChange={this.changebookingIdHandler}/>
                            </div>

                            <div className="form-group">

                                <input type="text" className="form-control" placeholder="Movie Id" name="nic"
                                       value={this.state.movieId} onChange={this.changemovieIdnHandler}/>
                            </div>

                            <div className="form-group">

                                <input type="text" className="form-control" placeholder="Movie Name" name="contact"
                                       value={this.state.movieName} onChange={this.changemovieNameHandler}/>
                            </div>

                            <div className="form-group">

                                <input type="text" className="form-control" placeholder="Seat Number" name="email"
                                       value={this.state.seatNumber} onChange={this.changeseatNumberHandler}/>
                            </div>

                            <div className="form-group">

                                <input type="text" className="form-control" placeholder="Theater Number" name="email"
                                       value={this.state.theaterNumber} onChange={this.changetheaterNumberHandler}/>
                            </div>

                            <div className="form-group">

                                <input type="email" className="form-control" placeholder="Ticket Price" name="email"
                                       value={this.state.ticketPrice} onChange={this.changeticketPriceHandler}/>
                            </div>

                            <div className="form-group">

                                <input type="email" className="form-control" placeholder="Total Price" name="email"
                                       value={this.state.totalPrice} onChange={this.changetotalPriceHandler}/>
                            </div>

                            <div className="form-group">

                                <input type="email" className="form-control" placeholder="User Id" name="email"
                                       value={this.state.userid} onChange={this.changeuseridHandler}/>
                            </div>



                            <div class="form-group">
                                <label for="exampleInputFile">Upload</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputfile"></input>
                                        <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                    </div>
                                    <div class="input-group-append">
                                        <span class="input-group-text">Upload</span>
                                    </div>
                                </div>
                            </div>

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                </input>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-2">
                                <button type="submit" class="btn btn-success btn-block btn-lg"onClick={this.saveBooking}> Submit</button>
                            </div>
                            <div class="col-md-2">
                                <Link to="/BookingList" class="btn btn-secondary btn-block btn-lg">
                                    <i class="fas fa-stream"></i> Back to list
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
