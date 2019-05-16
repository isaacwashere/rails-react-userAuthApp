import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import axios from 'axios';

export default class App extends Component {
  //TODO: refactor the bindings away 
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() { 
    //created the logged_in endpoint in the Rails API
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        //if the logged_in is true and state says not logged in, change it to logged in and set user to THAT particular user
        if(response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          })
        } 
        //if the logged_in is false and loggedInStatus says they're logged in, then turn it off/change it 
        //if local state is saying a user is logged in but the system/API says they are not logged in then defer to the API
        else if(!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          })
        } 
      }).catch(error => {
        console.log("check login error", error)
      })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }


  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }


  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route 
              exact path={ "/" } 
              render={ props => (
                <Home { ...props } handleLogin={ this.handleLogin } loggedInStatus={ this.state.loggedInStatus } handleLogout={ this.handleLogout }/>
              )}
            />
            <Route 
              exact path={ "/dashboard" }
              render={ props => (
                <Dashboard { ...props } loggedInStatus={ this.state.loggedInStatus }/>
              )}
              />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
