import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/index.css';


export default class NavBar extends Component {
  render() {
    return (
      <div className='navBar'>
        <Dropdown className="dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
