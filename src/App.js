import React, { Component } from 'react';
import Header from './components/misc/Header';
import Board from './components/Board';
import { Switch, Route, Redirect} from 'react-router-dom';
import CardForm from './components/CardForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ Board}/>
          <Route exact path="/new-card" component={ CardForm}/>
        </Switch>
      </div>
    );
  }
}

export default App;
