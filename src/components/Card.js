import React, { Component } from 'react';
import service from '../services/TrelloService'
import {Redirect} from 'react-router-dom';

class Card extends Component {
  
  state= {
    toBoard: false
  }

  onDelete= (event) => {
    service.deleteCard(this.props.id)
    .then(response => this.setState({toBoard: true}))
  }
  render() {

    if (this.state.toBoard) {
      return <Redirect to="/board"/>
    }
    return(
      <div className="card mx-auto mb-2" >
        <div className="card-body">
          <button type="button" className="close" onClick={this.onDelete} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <p><span className="badge badge-primary">{this.props.label}</span></p>
          {this.props.imageUrl && (<img className="img-fluid rounded mx-auto" src={this.props.imageUrl}alt={this.props.title}/>)}
      
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>)
    }
}

export default Card;