import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../services/AuthService';
// import { AuthContext } from '../contexts/AuthStore';

const validators = {
  email: (value) => {
    if(!value) {
      return 'Email is required'
    } else if (value.length < 3 ){
      return 'At least 3 characters'
    } else {
      return false
    }
  },
  password: (value) => {
    let error;
    if(!value || value === "") {
      error = "password is required"
    } else if (!value.length >= 8) {
      error = "Password must cotains at least 8 characters"
    } else {return error}
  }
}

class Login extends Component {
  state = {
    user: {
      email:"",
      password: "",
    },
    errors: {},
    touch: {},
    isAuthenticated: false
  }

  handleChange = (event) => {
    const { name, value } = event.target
    const validationError = validators[name] && validators[name](value)
    this.setState({
      user: {
        // para no hacer un handleChange para cada input, esto suma lo que ya hay con el campo que estás editando
        ...this.state.user,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validationError
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("entra")
    AuthService.authenticate(this.state.user)
      .then(
        (response) => {
          this.setState({
          isAuthenticated: true
        })}, (error) => console.error(error)
      )
  }

  handleBlur = (event) => {

  }

  render() {

    if(this.state.isAuthenticated) {
      return(<Redirect to="/board"/>)
    }
    
    return(
      <div className="container text-center col-4">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
          <div className="mb-2">
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="text" name="email" className="form-control" placeholder="Email address" onChange={this.handleChange} onBlur={this.handleBlur} autoFocus/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" name="password" onChange={this.handleChange} onBlur={this.handleBlur} className="form-control" placeholder="Password"/>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;

// export default () => {
//   return (
//     <AuthContext.Consumer>
//       {(props) => (<Login {...props}/>)}
//     </AuthContext.Consumer>
//   )
// }