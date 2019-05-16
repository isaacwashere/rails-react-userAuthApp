import React, { Component } from 'react';
import axios from 'axios';


export default class Registration extends Component {

  //TODO: refactor this initialization of state 
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    }

    //TODO: PLEASE FOR THE LOVE OF GOD REFACTOR THIS LINE
    //TODO: REFACTOR ME!!
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  } 

  //TODO: REFACTOR THIS PLEASE
  //TODO: The setting of state looks terrible
  handleChange(event) {
    event.preventDefault();
    console.log('handle change', event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });

  }

  //Make the call to the Rails API
  handleSubmit(event) {
    event.preventDefault();
    const {
      email,
      password,
      password_confirmation
    } = this.state
    //takes endpoint and user data (email, password and password confirmation and they need to be passed in as an object)
    axios.post('http://localhost:3001/registrations', { 
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
     },
     //withCredentials tells the API that it is okay to set the cookie in the client
     { withCredentials: true }
     ).then(response => {
       console.log("registration response", response);
     }).catch(error => {
       console.log("registration error", error);
     });
  }



  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={ this.state.email } 
            onChange={ this.handleChange } 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={ this.state.password } 
            onChange={ this.handleChange } 
            required 
          />
          <input 
            type="password" 
            name="password_confirmation" 
            placeholder="Password Confirmation" 
            value={ this.state.password_confirmation } 
            onChange={ this.handleChange } 
            required 
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}


