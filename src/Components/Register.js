import React, { Component } from 'react'
// import Card from '@material-ui/core/Card'
import './CSS/Register.css'
import Card from './UIElements/Card'

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
            <Card className="item_content">
          <form onSubmit={this.handleSubmit} className="register-form">
            <h1>Register Here</h1>  
            <h4><label>First Name </label><input type="text" value={this.state.firstName} onChange={this.firstHandler} /></h4>
            <h4><label>Last Name </label><input type="text" value={this.state.lastName} onChange={this.secondHandler} /></h4>
            <h4><label>Email </label><input type="email" value={this.state.email} onChange={this.thirdHandler} /></h4>
            <h4><label>Password </label><input type="password" value={this.state.password} onChange={this.passwordHandler} /></h4>
            <hr></hr>
            <hr></hr>
            <input type="submit" value="submit" />
          </form>
          </Card>
          </div>  
        );
      }
    }






export default Register;