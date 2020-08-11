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
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Restart</Dropdown.Item>
            <Dropdown.Item href="#/action-2">About the Author</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LinkedIn</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
