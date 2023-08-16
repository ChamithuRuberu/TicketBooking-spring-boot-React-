import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SaveUserService from "../services/User/SaveUserService";
import SaveMovieService from "../services/Movie/SaveMovieService";

export default class AddMovies extends Component {



    constructor(props) {
        super(props);
        this.state={
            movieName:'',
            description:'',
            releaseDate:'',
            director:'',
            duration:'',

        }
    }
    SaveMovie=(e)=>{
        e.preventDefault();
        let movie={movieName:this.state.movieName,description: this.state.description,releaseDate: this.state.releaseDate,director: this.state.director,duration : this.state.duration};
        console.log('user===>'+JSON.stringify(movie));
        SaveMovieService.SaveMovie(movie).then(res=>{
            this.props.history.push()
        });alert("saved Successfully..!");
    }

    changeMovieHandler=(event)=>{
        this.setState({movieName:event.target.value});
    }
    changedescriptionHandler=(event)=>{
        this.setState({description:event.target.value});
    }
    changeReleaseDateHandler=(event)=>{
        this.setState({releaseDate:event.target.value});
    }
    changededirectorHandler=(event)=>{
        this.setState({director :event.target.value});
    }
    changedurationHandler=(event)=>{
        this.setState({duration:event.target.value});
    }




    render() {
    return (
      <div>
        <div className="content-wrapper">
          <h1>Movies</h1>
          <form>

        <div class="card-body">
            <div className="form-group">

                <input type="text" className="form-control" placeholder="Movie Name" name="name"
                       value={this.state.userName} onChange={this.changeMovieHandler}/>
            </div>

            <div className="form-group">

                <input type="text" className="form-control" placeholder="Description" name="nic"
                       value={this.state.userNic} onChange={this.changedescriptionHandler}/>
            </div>

            <div className="form-group">

                <input type="date" className="form-control" placeholder="Release Date" name="contact"
                       value={this.state.memberContact} onChange={this.changeReleaseDateHandler}/>
            </div>

            <div className="form-group">

                <input type="text" className="form-control" placeholder="Director" name="email"
                       value={this.state.userEmail} onChange={this.changededirectorHandler}/>
            </div>

            <div className="form-group">

                <input type="email" className="form-control" placeholder="Duration (min:)" name="email"
                       value={this.state.userEmail} onChange={this.changedurationHandler}/>
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
            <button type="submit" class="btn btn-success btn-block btn-lg"onClick={this.SaveMovie}> Submit</button>
        </div>
        <div class="col-md-2">
            <Link to="/movies" class="btn btn-secondary btn-block btn-lg">
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
