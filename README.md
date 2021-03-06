
# React with Rails User Authentication App 

This app is a React on Rails app that handles User Authentication. A user can securely sign up, login and logout


## How to Run

You must be in the correct folder for this to work

#### Server/Ruby on Rails Backend

1. Navigate to Terminal:

> open "auth_app-be" directory in your Terminal

2. Start the Rails server:

> type rails s

> press "enter"

#### Client/ReactJS Frontend

1. Navigate to a Seperate Terminal:

> open "reactjs-frontend" directory and then naviagate to "react-authFrontEnd" folder in your Terminal

2. Start the ReactJS client:

> type "npm run start"

> press enter

3. View/Use in your browser:

>  at localhost:3000 in your browser (may open automatically)


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

* Significant amount of refacoring work possible/needed/required
* On the ReactJS Front End, improve code clarity readability using more modern understandings of React (i.e. Hooks)
	- use of binding and props on many components can be improved
  - code that handles how data is retrieved and sent into state needs to be streamlined
* Set up a "Concurrency-like" React install so there is no need to start the server and frontend 
* Place the logout button on the Dashboard component 
* Implement this sign up, login, signout ability across another repo
* Style this visual monstrosity 
* Fix the ReactJS Front End directory so that it is not so deeply nested 
