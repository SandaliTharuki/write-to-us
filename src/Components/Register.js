import React, { Component } from 'react'
import './CSS/Register.css'

class Register extends Component{
    constructor(props){
        super(props)

        this.state = {
            firstName: "",
            LastName: "",
            email: "",
            password: "",
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    firstHandler = (event) => {
        this.setState({
            firstName: event.target.value
          });
        }
    secondHandler = (event) => {
        this.setState({
            lastName: event.target.value
            });   
        }
    thirdHandler = (event) => {
        this.setState({
            email: event.target.value
                });
        }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
                    });            
      } 

    handleSubmit(event) {
        // alert('${this.state.firstName} ${this.state.lastName} Registered successfully')
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        })
        event.preventDefault();
      }  


      render() {
        return (
          <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Register Here!</h1>  
            <label>First Name: </label><input type="text" value={this.state.firstName} onChange={this.firstHandler} /><br />
            <label>Last Name: </label><input type="text" value={this.state.lastName} onChange={this.secondHandler} /><br />
            <label>Email: </label><input type="email" value={this.state.email} onChange={this.thirdHandler} /><br />
            <label>Password: </label><input type="password" value={this.state.password} onChange={this.passwordHandler} /><br />
            
            <hr></hr>
            <input type="submit" value="submit" />
          </form>
          </div>  
        );
      }
    }






export default Register;