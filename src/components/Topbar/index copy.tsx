import * as React from "react"
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Topbar: React.FC = () => (
  <div className="x__topbar-header__wrapper">
    <Navbar expand="lg" variant="dark" className="x__topbar-header x__topbar-header--default">
      <Container fluid className="x__topbar-header-content">
        <Navbar.Brand href="/">Exodus: Digital blockchain products</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto x__topbar-header-navigation">
            <Nav.Link href="/">Home</Nav.Link>
            
            <NavDropdown title="Products" id="products-nav-dropdown">
              <NavDropdown.Item href="/web3-wallet/">
                <span className="x__title">Web3 Wallet</span>
                <span className="x__description">Explore the world of Web3 and DeFi</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://exodus.com/mobile/">
                <span className="x__title">Mobile Wallet</span>
                <span className="x__description">Control your wealth anywhere</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://exodus.com/desktop/">
                <span className="x__title">Desktop Wallet</span>
                <span className="x__description">Swap and transfer digital assets</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/trezor-wallet/">
                <span className="x__title">Trezor Hardware Wallet</span>
                <span className="x__description">Advanced security made easy</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/earn-crypto/">
                <span className="x__title">Earn Crypto Rewards</span>
                <span className="x__description">Manage staking rewards for multiple assets</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/xo-swap/">
                <span className="x__title">XO Swap</span>
                <span className="x__description">Boost growth with the premium crypto swap engine</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://passkeys.foundation/" target="_blank" rel="noreferrer">
                <span className="x__title">Passkeys Wallet & SDK</span>
                <span className="x__description">One-click web3 onboarding</span>
              </NavDropdown.Item>
            </NavDropdown>
  
            <NavDropdown title="Support" id="support-nav-dropdown">
              <NavDropdown.Item href="/contact-support/">
                <span className="x__title">Support</span>
                <span className="x__description">Our customer support engineers are here to help</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.exodus.com/support" target="_blank" rel="noreferrer">
                <span className="x__title">Knowledge Base</span>
                <span className="x__description">Common questions and blockchain education</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/status/">
                <span className="x__title">Status</span>
                <span className="x__description">Exodus and asset availability and reports</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/c/exodus/" target="_blank" rel="noreferrer">
                <span className="x__title">YouTube</span>
                <span className="x__description">Crypto education and tutorials</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/newsletter/">
                <span className="x__title">Newsletter</span>
                <span className="x__description">Sign-up for product updates and crypto highlights</span>
              </NavDropdown.Item>
            </NavDropdown>
  
            <NavDropdown title="Company" id="company-nav-dropdown">
              <NavDropdown.Item href="/about/">
                <span className="x__title">About Us</span>
                <span className="x__description">Learn more about Exodus</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/investors/">
                <span className="x__title">Investors</span>
                <span className="x__description">Read about news, media, events and more</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/careers/">
                <span className="x__title">Careers</span>
                <span className="x__description">See our open positions</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/contact/">
                <span className="x__title">Contact Us</span>
                <span className="x__description">Get in touch</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/brand/">
                <span className="x__title">Brand Guidelines</span>
                <span className="x__description">Exodus media kit</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/security/">
                <span className="x__title">Security</span>
                <span className="x__description">How we keep your crypto safe</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/download/" className="x__download">
              <span className="x__button-align">
                <span className="x__button-align-text">Download</span>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  
)

export default Topbar 
