import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';

class ResultNavBar extends Component {
  render() {
    return (
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/results/stats">Statistics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Weather</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Map
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default ResultNavBar;