import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeDescription= this.onChangeDescription.bind(this);
    this.onChangeEmail= this.onChangeEmail.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      phone:'',
      description:'',
      email:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:3000/users/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                firstname: response.data.firstname, 
                lastname: response.data.lastname,
                phone: response.data.phone,
                description: response.data.description,
                email: response.data.email
              });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value
    })  
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeEmail(e) {
  
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      description: this.state.description,
      email: this.state.email
    };
    axios.put('http://localhost:3000/users/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/all-users');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>First Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.firstname}
                      onChange={this.onChangeFirstName}
                      />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.lastname}
                      onChange={this.onChangeLastName}
                      />
                </div>
                <div className="form-group">
                    <label>Phone: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.onChangePhone}
                      />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update User" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}