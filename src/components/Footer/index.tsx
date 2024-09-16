import React from 'react';
import { Container, Row, Col, Nav, Collapse, Button } from 'react-bootstrap';
import "./style.css"

const Footer = () => {
  return (
    <footer className="x__footer">
      <Container >
        <div className="x__footer__content">
        <Row className="x__footer__content-top">
          <Col md={9} xs={12}>
            <div className="x__footer-navigation" id="footernav">
              {/* Products Section */}
              <div className="x__footer-navigation-col">
                <div id="footernavheading0">
                  <p className="x__footer-navigation__heading" tabIndex={0}>
                    Products
                  </p>
                </div>
                <Collapse in={true}>
                  <Nav className="flex-column" >
                    <Nav.Link href="/web3-wallet/" className="t__footer-navigation__link">
                      Web3 Wallet
                    </Nav.Link>
                    <Nav.Link href="https://exodus.com/mobile/" target="_self" className="t__footer-navigation__link">
                      Mobile Wallet
                    </Nav.Link>
                    <Nav.Link href="https://exodus.com/desktop/" target="_self" className="t__footer-navigation__link">
                      Desktop Wallet
                    </Nav.Link>
                    <Nav.Link href="/trezor-wallet/" className="t__footer-navigation__link">
                      Trezor Hardware Wallet
                    </Nav.Link>
                    <Nav.Link href="/earn-crypto/" className="t__footer-navigation__link">
                      Earn Crypto Rewards
                    </Nav.Link>
                    <Nav.Link href="/xo-swap/" className="t__footer-navigation__link">
                      XO Swap
                    </Nav.Link>
                    <Nav.Link href="https://passkeys.foundation/" target="_blank" rel="noreferrer" className="t__footer-navigation__link">
                      Passkeys Wallet &amp; SDK
                    </Nav.Link>
                  </Nav>
                </Collapse>
              </div>

              {/* Support Section */}
              <div className="x__footer-navigation-col">
                <div id="footernavheading1">
                  <p className="x__footer-navigation__heading" tabIndex={0}>
                    Support
                  </p>
                </div>
                <Collapse in={true}>
                  <Nav className="flex-column">
                    <Nav.Link href="/contact-support/" className="t__footer-navigation__link">
                      Support
                    </Nav.Link>
                    <Nav.Link href="https://www.exodus.com/support" target="_blank" rel="noreferrer" className="t__footer-navigation__link">
                      Knowledge Base
                    </Nav.Link>
                    <Nav.Link href="/legal-inquiries/" className="t__footer-navigation__link">
                      Legal Inquiries
                    </Nav.Link>
                    <Nav.Link href="/status/" className="t__footer-navigation__link">
                      Status
                    </Nav.Link>
                    <Nav.Link href="https://www.youtube.com/c/exodus/" target="_blank" rel="noreferrer" className="t__footer-navigation__link">
                      YouTube
                    </Nav.Link>
                    <Nav.Link href="/newsletter/" className="t__footer-navigation__link">
                      Newsletter
                    </Nav.Link>
                  </Nav>
                </Collapse>
              </div>

              {/* Company Section */}
              <div className="x__footer-navigation-col">
                <div id="footernavheading2">
                  <p className="x__footer-navigation__heading" tabIndex={0}>
                    Company
                  </p>
                </div>
                <Collapse in={true}>
                  <Nav className="flex-column">
                    <Nav.Link href="/about/" className="t__footer-navigation__link">
                      About Us
                    </Nav.Link>
                    <Nav.Link href="/investors/" className="t__footer-navigation__link">
                      Investors
                    </Nav.Link>
                    <Nav.Link href="/careers/" className="t__footer-navigation__link">
                      Careers
                    </Nav.Link>
                    <Nav.Link href="/contact/" className="t__footer-navigation__link">
                      Contact Us
                    </Nav.Link>
                    <Nav.Link href="/brand/" className="t__footer-navigation__link">
                      Brand Guidelines
                    </Nav.Link>
                    <Nav.Link href="/security/" className="t__footer-navigation__link">
                      Security
                    </Nav.Link>
                  </Nav>
                </Collapse>
              </div>
            </div>
          </Col>
          <Col md={3} xs={12} className="x__subscribe-module">
            <p className="x__subscribe-module__heading">Subscribe to Exodus</p>
            <p className="x__subscribe-module__copy">
              Sign up to receive our newsletter with updates about your wallet.
            </p>
            <a href="/newsletter/" className="x__button x__download x__button_signup">
              Sign me up
            </a>
          </Col>
        </Row>

        {/* Footer Center */}
        <Row className="x__footer__content-center">
          <Col md={6} xs={12}>
            <div className="x__copyright">
              <div className="x__copyright__logo">
                <img
                  alt="Exodus Logo"
                  src="/asset-page/img/btc/exodus-logo.webp"
                  style={{ maxWidth: '100%' }}
                />
              </div>
              <div className="x__copyright__copy">
                Copyright © 2024 Exodus Movement, Inc.
                <br />
                Exodus was co-founded by Daniel Castagnoli and JP Richardson.
              </div>
            </div>
          </Col>
          <Col md={5} xs={12}>
            <div className="x__social">
              <a className="x__social-link x__social-link--large" target="_blank" rel="noreferrer noopener" href="http://discord.gg/exodus" title="Discord">
                {/* SVG for Discord */}
              </a>
              <a className="x__social-link x__social-link--large" target="_blank" rel="noreferrer noopener" href="https://github.com/ExodusMovement" title="Github">
                {/* SVG for Github */}
              </a>
              <a className="x__social-link x__social-link--large" target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/c/exodus" title="YouTube">
                {/* SVG for YouTube */}
              </a>
              {/* Add other social links similarly */}
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="x__footer__content-bottom">
          <Col xs={12}>
            <div className="x__terms">
              <span>
              Exodus is a software platform ONLY and does not conduct any independent diligence on or substantive review of any blockchain asset, digital currency, cryptocurrency or associated funds. You are fully and solely responsible for evaluating your investments, for determining whether you will swap blockchain assets based on your own, and for all your decisions as to whether to swap blockchain assets with the Exodus in app swap feature. In many cases, blockchain assets you swap on the basis of your research may not increase in value, and may decrease in value. Similarly, blockchain assets you swap on the basis of your research may increase in value after your swap.
              </span>
              <span>
                Past performance is not indicative of future results...
              </span>
              <span>
                Exodus users are responsible for storing their own recovery phrase...
              </span>
              <span>
                <a target="_blank" rel="noreferrer noopener" href="/privacy/">Privacy Policy</a>
                <a target="_blank" rel="noreferrer noopener" href="/terms/">Terms of Service</a>
                <a target="_blank" rel="noreferrer noopener" href="/trademarks/">Trademarks</a>
              </span>
            </div>
          </Col>
        </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
