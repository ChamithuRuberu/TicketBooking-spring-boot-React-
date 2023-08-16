import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserService from "../services/User/UserService";

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state={
            Users: []
        }
    }
    componentDidMount() {
        UserService.getUsers().then((res)=>{
            console.log('>>>> RESPONSE IS <<<<');
            console.log(res);
            this.setState({Users:res.data.data});
            console.log('>>>> USERS ARE <<<<');
            console.log(this.Users);
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
        <h3 class="card-title">UserList</h3>
        </div>
        <div class="container-fluid pt-4">

        <Link to='/userForm' class="btn btn-outline-success">
        <i class="fas fa-plus"></i> Add User
        </Link>
        </div>

        <div class="card-body">
        <table id="example2" class="table table-bordered table-hover">
        <thead>
        <tr>
        <th>User Id</th>
        <th>Name</th>
        <th>Nic</th>
        <th>Contact</th>
        <th>Email</th>
        <th>Password</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {
            this.state.Users.map(user=>
                <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.userName}</td>
                    <td>{user.userNic}</td>
                    <td>{user.memberContact}</td>
                    <td>{user.userEmail}</td>
                    <td>{user.password}</td>
                    <td>
                        <Link to='' class="btn text-secondary px-0">
                            <i className="fa fa-edit fa-lg"></i>
                        </Link>
                        <Link to='' class="btn text-secondary px-0">
                            <i className="fas fa-trash-alt fa-lg text-danger float-right"></i>
                        </Link>
                    </td>
                </tr>
            )
        }
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
