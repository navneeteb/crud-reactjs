import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Create from './components/create';
import Edit from './components/edit';
import AllUsers from './components/listUsers';
import FormikCreate from './components/formikCreate';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'} className="navbar-brand text-center">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li> */}
                <li className="nav-item">
                  <Link to={'/formik-create'} className="nav-link">formik Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/all-users'} className="nav-link">All Users</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              {/* <Route exact path='/create' component={ Create } /> */}
              <Route path = '/formik-create' component ={ FormikCreate }/>
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/all-users' component={ AllUsers } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
