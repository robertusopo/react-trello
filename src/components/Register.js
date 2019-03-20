import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
// import { AuthContext } from '../contexts/AuthStore';

const validators = {
  email: (value) => {
    if(!value) {
      return 'Email is required'
    } else {
      return false
    }
  },
  password: (value) => {
    let error;
    if(!value || value === "") {
      error = "password is required"
    } else {return error}
  }
}

class Register extends Component {
  state = {
    user: {
      email:"",
      password: "",
    },
    errors: {},
    touch: {},
    toLogin: false
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
    AuthService.register(this.state.user)
      .then(
        (user) => this.setState({
          toLogin: true
        }), (error) => console.error(error)
      )
  }

  handleBlur = (event) => {

  }

  render() {

    if(this.state.toLogin) {
      return(<Redirect to="/authenticate"/>)
    }
    
    return(
      
      <div className="container text-center col-4">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
          <div className="mb-2">
            <label className="sr-only">Email address</label>
            <input type="text" name="email" className="form-control" placeholder="Email address" onChange={this.handleChange} onBlur={this.handleBlur} autoFocus/>
          </div>
          <div className="mb-3">
            <label className="sr-only">Password</label>
            <input type="password" name="password" onChange={this.handleChange} onBlur={this.handleBlur} className="form-control" placeholder="Password"/>
          </div>
          <button className="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
        </form>
      </div>
    )
  }
}

export default Register;

// export default () => {
//   return (
//     <AuthContext.Consumer>
//       {(props) => (<Login {...props}/>)}
//     </AuthContext.Consumer>
//   )
// }