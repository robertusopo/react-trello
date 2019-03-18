import React, { Component } from 'react';
import Login 
import AuthService from '../services/AuthService';

const validators = {
  email: (value) => {
    if(!value) {
      return 'Email is required'
    } else if (value.length < 3 ){
      return 'At least 3 characters'
    } else {
      return false
    }
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
    toBoard: false
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
    AuthService.authenticate(this.state.user)
      .then(
        (user) => this.setState({
          isAuthenticated: true
        }), (error) => console.error(error)
      )
  }

  handleBlur = (event) => {

  }

  render() {

    if(this.state.isAuthenticated) {
      return(<Redirect to="/board"/>)
    }
    
    return(
      
        <div className="row">
          <div className="col-4">
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="email" onChange={this.handleChange} onBlur={this.handleBlur}/>
              <input type="password" name="password" onChange={this.handleChange} onBlur={this.handleBlur}/>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>


    )
  }
}
