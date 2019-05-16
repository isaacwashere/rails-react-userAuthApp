
# Rails API 

This app is a React on Rails app that handles User Authentication. A user can securely sign up, login and logout


## How to Run

You must be in the correct folder for this to work

#### Server/Ruby on Rails Backend

1. Navigate to Terminal

> open "auth_app-be" directory in your Terminal

2. Start the server:

> type rails s

> press "enter"

#### Client/ReactJS Frontend

1. Navigate to a Seperate Terminal

> open "reactjs-frontend" directory and then naviagate to "react-authFrontEnd" folder in your Terminal

2. Start the ReactJS client

> type "npm run start"

> press enter

3. Open in your browser

> opens at "http://localhost:3000" (may open automatically)


## Abilities & Features

* A user can securely sign up
* A user can securely login
* A user can securely logout


## Notable Technologies/Functions/Methods

| Technology/Function                | Purpose                                                                                                                                  |
| ---------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------:|
| bcrypt Gem                         | Salt User data                                                                                                                           |
| rack-cors Gem                      | Allows the ability to whitelist certain domains                                                                                          |
| DevCamp JavaScript Project Builder | Use a default/boilerplate ReactJS app to setup a small FronE and test User Auth                                                          |
| Axios                              | make POST Req(user Login and Registration), GET Req(check user Login status), DELETE Req(Logout a user) to Rails Backend |         

* The Rails backend sets up the encryption of passwords and the password confirmation ability with digest for password confirmation and rack cors for setting up initial credential rules
* React is simply the frontend UI that sends and receives from Rails and displays something as a result


## Future Implementation(s)

* On the ReactJS Front End, improve code clarity readability using more modern understandings of React (i.e. Hooks)
	- use of binding and props on the input require refactoring
* Set up a "Concurrency-like" React install so there is no need to start the server and frontend 
* Place the logout button on the Dashboard component 
* Implement this sign up, login, signout ability across another repo
* Style this visual monstrosity 
* Fix the ReactJS Front End directory so that it is not so deeply nested 
