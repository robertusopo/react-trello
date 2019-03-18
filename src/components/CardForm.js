import React, { Component } from 'react';
import service from '../services/TrelloService'
import {Redirect} from 'react-router-dom';

class CardForm extends Component {
  
  state={
      title:"",
      description: '',
      label: '',
      position: this.props.location.pos,
      column: this.props.location.id,
      attachment: "",
      toBoard: false
  }

  handleChange = (event) => {
    const {name, value, files} = event.target

    this.setState({
      [name]:files && files[0] ? files[0]: value
    })
  }

  handleSubmit= (event) => {
    console.log(this.state)
    event.preventDefault();
    service.createCard({ 
      ...this.state
    })
      .then(response => this.setState({toBoard: true}))
  }


  render = () => {

    if (this.state.toBoard) {
      return <Redirect to="/"/>
    }

    return(
      <form onSubmit={this.handleSubmit}>
        <div className="col-4">
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Card title</label>
                <input type="text" className="form-control" placeholder="title" name="title"
                value={this.state.title} onChange={this.handleChange}/>
                {/* <small id="emailHelp" className="form-text text-muted">validations</small> */}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Label</label>
                <input type="text" className="form-control" placeholder="label" name="label"
                value={this.state.label} onChange={this.handleChange}/>
                {/* <small id="emailHelp" className="form-text text-muted">validations</small> */}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Description</label>
                <input type="text" className="form-control" placeholder="description" name="description"
                value={this.state.description} onChange={this.handleChange}/>
                {/* <small id="emailHelp" className="form-text text-muted">validations</small> */}
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Example file input</label>
                <input 
                  type="file" 
                  className="form-control-file" 
                  id="attachment" 
                  name="attachment"
                  onChange={this.handleChange}/>
              </div>
              {this.state.attachment && <img src={URL.createObjectURL(this.state.attachment)} alt="Preview"/>}
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form >
    )
  }
}


export default CardForm;









