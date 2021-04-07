import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeDescription= this.onChangeDescription.bind(this);
    this.onChangeEmail= this.onChangeEmail.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      phone:'',
      description:'',
      email:''
    }
  }

  handleValidation() {
  
    let errors = {};
    let formIsValid = true;

    //FirstName
    if (!this.state.firstname) {
      formIsValid = false;
      errors = "Cannot be empty";
    }    
      if (!this.state.firstname.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors= "Only letters are allowed";
      }

      //LastName
    if (!this.state.lastname) {
      formIsValid = false;
      errors = "Cannot be empty";
    }    
      if (!this.state.lastname.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors= "Only letters are allowed";
      }
    

    // //LastName
    // if (!users["lastname"]) {
    //   formIsValid = false;
    //   errors["lastname"] = "Cannot be empty";
    // }

    // if (typeof users["lastname"] !== "undefined") {
    //   if (!users["lastname"].match(/^[a-zA-Z]+$/)) {
    //     formIsValid = false;
    //     errors["lastname"] = "Only letters";
    //   }
    // }

    // // description
    // if (!users["description"]) {
    //   formIsValid = false;
    //   errors["description"] = "Cannot be empty";
    // }

    // // phone
    // if (!users["phone"]) {
    //   formIsValid = false;
    //   errors["phone"] = "Cannot be empty";
    // }

    // if (typeof users["phone"] !== "undefined") {
    //   if (!users["phone"].match(/^[0-9]{10}$/)) {
    //     formIsValid = false;
    //     errors["phone"] = "Only numbers and not more than 10 digits";
    //   }
    // }

    // //Email
    // if (!users["email"]) {
    //   formIsValid = false;
    //   errors["email"] = "Cannot be empty";
    // }

    // if (typeof users["email"] !== "undefined") {
    //   let lastAtPos = users["email"].lastIndexOf('@');
    //   let lastDotPos = users["email"].lastIndexOf('.');

    //   if (!(lastAtPos < lastDotPos && lastAtPos > 0 && users["email"].indexOf('@@') == -1 && lastDotPos > 2 && (users["email"].length - lastDotPos) > 2)) {
    //     formIsValid = false;
    //     errors["email"] = "Email is not valid";
    //   }
    // }

    this.setState({ errors: errors });
    return formIsValid;
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

    if(this.handleValidation()) {
      alert("form submitted")

      window.location.reload()
    
    const obj = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      description: this.state.description,
      email: this.state.email
    };
    axios.post('http://localhost:3000/users', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      firstname: '',
      lastname: '',
      phone: '',
      description:'',
      email:''
    })
  } else {
    alert('form has error')
  }

  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>First Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.firstname}
                      onChange={this.onChangeFirstName}
                      />
                      <small style={{ color: "red" }}>{this.state.errors}  
                      </small>
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.lastname}
                      onChange={this.onChangeLastName}
                      />
                      <small style={{ color: "red" }}>{this.state.errors}   
                      </small>
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
                      value="Add User " 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}