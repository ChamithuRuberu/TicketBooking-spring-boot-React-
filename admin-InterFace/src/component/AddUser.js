import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserService from "../services/User/UserService";
import SaveUserService from "../services/User/SaveUserService";
import UserList from "./UserList";

export default class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state={
            userName:'',
            userNic:'',
            memberContact:'',
            userEmail:'',
            password:'',

        }
    }
    SaveUser=(e)=>{
        e.preventDefault();
        let user={userName:this.state.userName,userNic: this.state.userNic,memberContact: this.state.memberContact,userEmail: this.state.userEmail,password: this.state.password};
        console.log('user===>'+JSON.stringify(user));
        SaveUserService.SaveUser(user).then(res=>{
            this.props.history.push()
        });alert("saved Successfully..!");
    }

    changeNameHandler=(event)=>{
        this.setState({userName:event.target.value});
    }
    changenicHandler=(event)=>{
        this.setState({userNic:event.target.value});
    }
    changecontactHandler=(event)=>{
        this.setState({memberContact:event.target.value});
    }
    changeemailHandler=(event)=>{
        this.setState({userEmail:event.target.value});
    }
    changepasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }


    render() {
    return (
      <div>
        <div className="content-wrapper">
        <h1>User</h1>
        <form>
        <div class="card-body">

            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" name="name"
                value={this.state.userName} onChange={this.changeNameHandler}/>
            </div>

            <div className="form-group">
                <label>NIC</label>
                <input type="text" className="form-control" placeholder="Enter nic" name="nic"
                       value={this.state.userNic} onChange={this.changenicHandler}/>
            </div>

            <div className="form-group">
                <label>Contact Number</label>
                <input type="text" className="form-control" placeholder="Enter memberContact" name="contact"
                       value={this.state.memberContact}  onChange={this.changecontactHandler}/>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email"
                       value={this.state.userEmail} onChange={this.changeemailHandler}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="password"
                       value={this.state.password} onChange={this.changepasswordHandler}/>
            </div>

            {/*<div className="form-group">*/}
            {/*    <label>Password</label>*/}
            {/*    <input type="text" className="form-control" placeholder="Enter file" name="file"*/}
            {/*           value={this.state.file} onChange={this.changefileHandler}/>*/}
            {/*</div>*/}



        <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <div class="input-group">
        <div class="custom-file">
        <input type="file" class="custom-file-input" id="exampleInputFile">
        </input>
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
            <button type="submit" class="btn btn-success btn-block btn-lg" onClick={this.SaveUser}> Submit </button>
        </div>
        <div class="col-md-2">
            <Link to="/user" class="btn btn-secondary btn-block btn-lg">
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
