import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthStore extends Component {
  state = {
    user: {}
  }

  handleUserChange = (user) => {
    this.setStatate({ user: user })
  }

  render() {
    return (
      <AuthContext.Provider value={{
        user: this.state.user,
        onUserChange: this.handleUserChange
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export {AuthStore, AuthContext}