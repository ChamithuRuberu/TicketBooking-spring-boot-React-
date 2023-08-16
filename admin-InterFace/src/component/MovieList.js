import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Getmovieservice from "../services/Movie/MovieService";
import AddMovies from "./AddMovies";

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state={
            movies: []
        }
    }
    componentDidMount() {
        Getmovieservice.getMovies().then((res)=>{
            console.log('>>>> RESPONSE IS <<<<');
            console.log(res);
            this.setState({movies:res.data.data});
            console.log('>>>> MOVIES ARE <<<<');
            console.log(this.movies);
        });
    }



  render() {

    return (
        <div>
        <div className="content-wrapper">
        <div class="container-fluid">
        <div class="row">
        <div class="col-12">
        <div class="card">
        <div class="card-header">
        <h3 class="card-title"> MovieList</h3>
        </div>
        <div class="container-fluid pt-4">
        </div>

            <div className="container-fluid pt-4">

                <Link to='/movieForm' class="btn btn-outline-success">
                    <i className="fas fa-plus"></i> Add Movie
                </Link>
            </div>

        <div class="card-body">
        <table id="example2" class="table table-bordered table-hover">

        <thead>
        <tr>
        <th>Movie id </th>
        <th>MovieName</th>
        <th>Description</th>
        <th>ReleaseDate</th>
        <th>Director</th>
        <th>Duration (min:)</th>
        <th>Action</th>
        </tr>
        </thead>

        <tbody>
      {
        this.state.movies.map(movie=>
              <tr key={movie.movieId}>
                  <td>{movie.movieId}</td>
                  <td>{movie.movieName}</td>
                  <td>{movie.description}</td>
                  <td>{movie.releaseDate}</td>
                  <td>{movie.director}</td>
                  <td>{movie.duration}</td>
                  <td>
                  <Link to='' class="btn text-secondary px-0">
                    <i class="fa fa-edit fa-lg"></i>
                  </Link>
                  <Link to='' class="btn text-secondary px-0">
                    <i class="fas fa-trash-alt fa-lg text-danger float-right"></i>
                  </Link>
                  </td>
              </tr>
          )
      }
        </tbody>

        <tfoot>
        <tr>
        </tr>
        </tfoot>
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


