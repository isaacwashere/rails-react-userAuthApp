import React, { Component } from 'react';
import Registration from './auth/Registration'
import Login from './auth/Login'
import axios from 'axios'

export default class Home extends Component {
  //TODO: Refactor the binds
  constructor(props){
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    //1st needs to call the parent app component(render props)
    this.props.handleLogin(data);

    //2nd need to redirect the user (this is available because home is defined inside of a route)
    //when you pass in the spread operator of props in the app.js component, you're saying, take all...
    //...of the props that react router has and include them when you send  = gives you acccess to history
    //once registered, will be redirected to the dashboard
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    axios.delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        //if it works just going to send back the status code
        this.props.handleLogout();
      }).catch(error => {
        console.log("logout error", error);
      });
  }

  render() { 
    return(
      <div> 
        <h1>Home</h1>
        <h1>Status: { this.props.loggedInStatus }</h1>
        <button onClick={ () => this.handleLogoutClick() }>Logout</button>
        <Registration handleSuccessfulAuth={ this.handleSuccessfulAuth }/>
        <Login handleSuccessfulAuth={ this.handleSuccessfulAuth }/>
      </div>
    );
  }
}

