import React, { Component, useState } from 'react'
// import Card from '@material-ui/core/Card'
import './CSS/Register.css'
import Card from './UIElements/Card'
import Axios from 'axios'

        function App(){
          const {firstnameReg, setFirstnameReg} = useState('')
          const {lastnameReg, setLastnameReg} = useState('')
          const {usernameReg, setUsernameReg} = useState('')
          const {emailReg, setEmailReg} = useState('')
          const {passwordReg, setPasswordReg} = useState('')
      
 
        const register = () => {
          Axios.post("https://localhost3000/register", {
            firstName: firstnameReg,
            lastName: lastnameReg,
            username: usernameReg,
            email: emailReg,
            password: passwordReg,
          }).then((response) =>{
            console.log(response);
          });
        };
      // render() {
        return (
          <div>
            <Card className="item_content">
          <form onSubmit={this.handleSubmit} className="register-form">
            <h1>Register Here</h1>  
            <h4><label>First Name </label><input type="text" value={this.state.firstName} 
            onChange={(e) => {
              setUsernameReg(e.target.value)
            } }/></h4>
            <h4><label>Last Name </label><input type="text" value={this.state.lastName} 
            onChange={(e) => {
              setLastnameReg(e.target.value)
            }} /></h4>
            <h4><label>User Name </label><input type="text" value={this.state.lastName} onChange={(e) => {
              setUsernameReg(e.target.value)
            } } /></h4>
            <h4><label>Email </label><input type="email" value={this.state.email} 
            onChange={(e) => {
              setEmailReg(e.target.value)
            }}
            /></h4>
            <h4><label>Password </label><input type="password" value={this.state.password} 
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }} /></h4>
            <hr></hr>
            <hr></hr>
            <input type="submit" value="submit" />
          </form>
          </Card>
          </div>  
        );
      }
    //   }
    // }






export default Register;