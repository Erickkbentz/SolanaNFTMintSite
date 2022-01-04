import React from "react";
import Link from 'next/link'
import { Wallet } from './Wallet'
import {
  Navbar,
  Nav,
} from 'react-bootstrap'

class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar sticky="top" variant="dark" expand="lg" className="navbar-global">
        <Link href="/" passHref>
          <Navbar.Brand href="#home">
            <img src="/solanaLogo.svg" height="30" className="d-inline-block align-top" alt=""/>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" style={{padding:5}}>
                <Link href="/" passHref>
                  <Nav.Link>MINT!</Nav.Link>
                </Link>
                <Link href="/" passHref>
                  <Nav.Link>Story</Nav.Link>
                </Link>
                <Link href="/" passHref>
                  <Nav.Link>FAQ</Nav.Link>
                </Link>
                <Link href="/" passHref>
                  <Nav.Link>Contact</Nav.Link>
                </Link>
                <Wallet/>
              </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MainNavbar


