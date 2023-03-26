import "./Navbar.css";
import React, { Component } from "react";
import { Collapse, Navbar, Nav } from "reactstrap";
import { BsList } from 'react-icons/bs';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="container">
        <Navbar expand="md">
          <a href="/" className="navbar-brand">
            Loopstudios
          </a>
          <button
            aria-label="Toggle navigation"
            type="button"
            className="navbar-toggler"
            onClick={this.toggle}
          >
           <span>
             <BsList className="list-button"/>
           </span>
          </button>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  Careers
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  Events
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  Support
                </a>
              </li>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
