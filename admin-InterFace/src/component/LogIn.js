import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <h1>Log In</h1>
          <form>
        <div class="card-body">
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
        </input>
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </input>
        </div>
        <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        </input>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        </div>

        <div class="row">
        <div class="col-md-2">
            <button type="submit" class="btn btn-success btn-block btn-lg"><i class="fas fa-database"></i> Submit</button>
        </div>
        </div>
        </form>
        </div>
      </div>
    )
  }
}
