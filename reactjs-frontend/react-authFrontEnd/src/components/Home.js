import React, { Component } from 'react';
import Registration from './auth/Registration'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
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

  render() {
    return(
      <div> 
        <h1>Home</h1>
        <h1>Status: { this.props.loggedInStatus }</h1>
        <Registration handleSuccessfulAuth={ this.handleSuccessfulAuth }/>
      </div>
    );
  }
}

