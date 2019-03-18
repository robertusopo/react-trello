import React, { Component } from 'react';
import Card from './Card';
import service from '../services/TrelloService'
import { Link,Redirect } from 'react-router-dom';

class Column  extends Component {

  state= {
    toBoard: false
  }
  
  cardList = this.props.cards.map(card => <Card key={card.position} {...card} />)

  onDelete = () => {
    service.deleteColumn(this.props.id)
    .then(response => this.setState({toBoard: true}))
  }

  render() {

    if (this.state.toBoard) {
      return <Redirect to="/board"/>
    }

    return(
      <div className="col-3">
      <div className="card">
      <button type="button" className="btn btn-outline-danger m-3" onClick={this.onDelete} aria-label="Close">
            Close
          </button>
        <div className="card-body">

          <h5 className="card-subtitle mb-2">{this.props.title}</h5>
          <div>
            {this.cardList}
            <Link to={{
              pathname: '/new-card',
              id: this.props.id,
              pos: this.props.cards.length + 1
              }}>New Card </Link>
          </div>
        </div>
    </div>
    </div>
    )
  }
}

export default Column;