import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    
    delete() {
      if(window.confirm() === true){
        axios.delete('http://localhost:3000/users/'+this.props.obj.id)
        .then(window.location.reload())
        
        .catch(err => console.log(err))
        
      }else{
        console.log('not deleted');
      }
        
            
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.firstname}
          </td>

          <td>
            <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;