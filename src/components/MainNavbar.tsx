import React from "react";
import Link from 'next/link'
import {
  Navbar,
  Nav,
} from 'react-bootstrap'
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

require('@solana/wallet-adapter-react-ui/styles.css');

class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar sticky="top" variant="dark" expand="lg" className="navbar-global">
        <Link href="#home" passHref>
          <Navbar.Brand href="#home">
            <img src="/solanaLogo.svg" height="30" className="d-inline-block align-top" alt=""/>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" style={{padding:5}}>
                <Link href="#mintView"passHref>
                  <Nav.Link>Mint!</Nav.Link>
                </Link>
                <Link href="#home" passHref>
                  <Nav.Link>Home</Nav.Link>
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
                <WalletModalProvider>
                    <WalletMultiButton style={{height:40}}>
                      Connect Wallet
                    </WalletMultiButton>
                </WalletModalProvider>
              </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MainNavbar


