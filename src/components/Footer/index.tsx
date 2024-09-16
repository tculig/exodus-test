import React from 'react';
import { Container, Row, Col, Nav, Collapse, Button } from 'react-bootstrap';
import "./style.css"

const Footer = () => {
  return (
    <footer className="t-footer">
      <Container >
        <div className="t-footer-content">
        <Row className="t-footer-content-top">
          <Col md={9} xs={12}>
            <div className="t-footer-navigation" id="footernav">
              {/* Products Section */}
              <div className="t-footer-navigation-col">
                <div id="footernavheading0">
                  <p className="t-footer-navigation-heading" tabIndex={0}>
                    Products
                  </p>
                </div>
                <Collapse in={true}>
                  <Nav className="flex-column" >
                    <Nav.Link href="/web3-wallet/" className="t-footer-navigation-link">
                      Web3 Wallet
                    </Nav.Link>
                    <Nav.Link href="https://exodus.com/mobile/" target="_self" className="t-footer-navigation-link">
                      Mobile Wallet
                    </Nav.Link>
                    <Nav.Link href="https://exodus.com/desktop/" target="_self" className="t-footer-navigation-link">
                      Desktop Wallet
                    </Nav.Link>
                    <Nav.Link href="/trezor-wallet/" className="t-footer-navigation-link">
                      Trezor Hardware Wallet
                    </Nav.Link>
                    <Nav.Link href="/earn-crypto/" className="t-footer-navigation-link">
                      Earn Crypto Rewards
                    </Nav.Link>
                    <Nav.Link href="/xo-swap/" className="t-footer-navigation-link">
                      XO Swap
                    </Nav.Link>
                    <Nav.Link href="https://passkeys.foundation/" target="_blank" rel="noreferrer" className="t-footer-navigation-link">
                      Passkeys Wallet &amp; SDK
                    </Nav.Link>
                  </Nav>
                </Collapse>
              </div>

              {/* Support Section */}
              <div className="t-footer-navigation-col">
                <div id="footernavheading1">
                  <p className="t-footer-navigation-heading" tabIndex={0}>
                    Support
                  </p>
                </div>
                <Collapse in={true}>
                  <Nav className="flex-column">
                    <Nav.Link href="/contact-support/" className="t-footer-navigation-link">
                      Support
                    </Nav.Link>
                    <Nav.Link href="https://www.exodus.com/support" target="_blank" rel="noreferrer" className="t-footer-navigation-link">
                      Knowledge Base
                    </Nav.Link>
                    <Nav.Link href="/legal-inquiries/" className="t-footer-navigation-link">
                      Legal Inquiries
                    </Nav.Link>
                    <Nav.Link href="/status/" className="t-footer-navigation-link">
                      Status
                    </Nav.Link>
                    <Nav.Link href="https://www.youtube.com/c/exodus/" target="_blank" rel="noreferrer" className="t-footer-navigation-link">
                      YouTube
                    </Nav.Link>
                    <Nav.Link href="/newsletter/" className="t-footer-navigation-link">
                      Newsletter
                    </Nav.Link>
                  </Nav>
                </Collapse>
              </div>

              {/* Company Section */}
              <div className="t-footer-navigation-col">
                <div id="footernavheading2">
                  <p className="t-footer-navigation-heading" tabIndex={0}>
                    Company
                  </p>
                </div>
                <Collapse in={true}>
                  <Nav className="flex-column">
                    <Nav.Link href="/about/" className="t-footer-navigation-link">
                      About Us
                    </Nav.Link>
                    <Nav.Link href="/investors/" className="t-footer-navigation-link">
                      Investors
                    </Nav.Link>
                    <Nav.Link href="/careers/" className="t-footer-navigation-link">
                      Careers
                    </Nav.Link>
                    <Nav.Link href="/contact/" className="t-footer-navigation-link">
                      Contact Us
                    </Nav.Link>
                    <Nav.Link href="/brand/" className="t-footer-navigation-link">
                      Brand Guidelines
                    </Nav.Link>
                    <Nav.Link href="/security/" className="t-footer-navigation-link">
                      Security
                    </Nav.Link>
                  </Nav>
                </Collapse>
              </div>
            </div>
          </Col>
          <Col md={3} xs={12} className="t-subscribe-module">
            <p className="t-subscribe-module-heading">Subscribe to Exodus</p>
            <p className="t-subscribe-module-copy">
              Sign up to receive our newsletter with updates about your wallet.
            </p>
            <a href="/newsletter/" className="t-button t-download t-button_signup">
              Sign me up
            </a>
          </Col>
        </Row>

        {/* Footer Center */}
        <Row className="t-footer-content-center">
          <Col md={6} xs={12}>
            <div className="t-copyright">
              <div className="t-copyright-logo">
                <img
                  alt="Exodus Logo"
                  src="/asset-page/img/btc/exodus-logo.webp"
                  style={{ maxWidth: '100%' }}
                />
              </div>
              <div className="t-copyright-copy">
                Copyright © 2024 Exodus Movement, Inc.
                <br />
                Exodus was co-founded by Daniel Castagnoli and JP Richardson.
              </div>
            </div>
          </Col>
          <Col md={5} xs={12}>
            <div className="t-social">
              <a className="t-social-link t-social-link--large" target="_blank" rel="noreferrer noopener" href="http://discord.gg/exodus" title="Discord">
                {/* SVG for Discord */}
              </a>
              <a className="t-social-link t-social-link--large" target="_blank" rel="noreferrer noopener" href="https://github.com/ExodusMovement" title="Github">
                {/* SVG for Github */}
              </a>
              <a className="t-social-link t-social-link--large" target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/c/exodus" title="YouTube">
                {/* SVG for YouTube */}
              </a>
              {/* Add other social links similarly */}
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="t-footer-content-bottom">
          <Col xs={12}>
            <div className="t-terms">
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
