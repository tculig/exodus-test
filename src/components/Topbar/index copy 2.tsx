import * as React from "react"


const Topbar: React.FC = () => (
  <div className="x__topbar-header__wrapper">
  <nav
    id="headerNav"
    className="x__topbar-header x__topbar-header--default navbar navbar-expand-lg navbar-dark"
  >
    <div className="x__topbar-header-content container-fluid">
      <div className="x__topbar-header-left">
        <div className="x__topbar-header__logo">
          <a href="/">Exodus: Digital blockchain products</a>
        </div>
      </div>
      <div className="x__topbar-header-right">
        <div
          className="collapse navbar-collapse collapse"
          id="navbarSupportedContent"
        >
          <div className="x__topbar-header-container">
            <div className="x__topbar-header-logo-space" />
            <ul className="x__topbar-header-navigation" id="headernav">
              <li className="x__topbar-header-navigation-item x__topbar-header-navigation-item__home">
                <a href="/">Home</a>
              </li>
              <li className="x__topbar-header-navigation-item">
                <span
                  className="x__topbar-header-navigation-item__heading"
                  tabIndex={0}
                >
                  Products
                </span>
                <div className="x__topbar-header-navigation__menu-container collapse">
                  <i className="x__topbar-header-navigation__menu-container__picker" />
                  <div className="x__topbar-header-navigation__menu-container-wrapper">
                    <a
                      className="x__link x__link--web3-wallet"
                      href="/web3-wallet/"
                    >
                      <span>
                        <span className="x__title">Web3 Wallet</span>
                        <span className="x__description">
                          Explore the world of Web3 and DeFi
                        </span>
                      </span>
                    </a>
                    <a
                      href="https://exodus.com/mobile/"
                      className="x__link x__link--mobile-wallet"
                      target="_self"
                    >
                      <span>
                        <span className="x__title">Mobile Wallet</span>
                        <span className="x__description">
                          Control your wealth anywhere
                        </span>
                      </span>
                    </a>
                    <a
                      href="https://exodus.com/desktop/"
                      className="x__link x__link--desktop-wallet"
                      target="_self"
                    >
                      <span>
                        <span className="x__title">Desktop Wallet</span>
                        <span className="x__description">
                          Swap and transfer digital assets
                        </span>
                      </span>
                    </a>
                    <a
                      className="x__link x__link--trezor-hardware-wallet"
                      href="/trezor-wallet/"
                    >
                      <span>
                        <span className="x__title">
                          Trezor Hardware Wallet
                        </span>
                        <span className="x__description">
                          Advanced security made easy
                        </span>
                      </span>
                    </a>
                    <a
                      className="x__link x__link--earn-crypto-rewards"
                      href="/earn-crypto/"
                    >
                      <span>
                        <span className="x__title">
                          Earn Crypto Rewards
                        </span>
                        <span className="x__description">
                          Manage staking rewards for multiple assets
                        </span>
                      </span>
                    </a>
                    <span className="x__category">Exodus Enterprise</span>
                    <a
                      className="x__link x__link--xo-swap"
                      href="/xo-swap/"
                    >
                      <span>
                        <span className="x__title">XO Swap</span>
                        <span className="x__description">
                          Boost growth with the premium crypto swap engine
                        </span>
                      </span>
                    </a>
                    <a
                      href="https://passkeys.foundation/"
                      className="x__link x__link--passkeys-wallet--sdk"
                      target="_blank" rel="noreferrer"
                    >
                      <span>
                        <span className="x__title">
                          Passkeys Wallet &amp; SDK
                        </span>
                        <span className="x__description">
                          One-click web3 onboarding
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="x__topbar-header-navigation-item">
                <span
                  className="x__topbar-header-navigation-item__heading"
                  tabIndex={0}
                >
                  Support
                </span>
                <div className="x__topbar-header-navigation__menu-container collapse">
                  <i className="x__topbar-header-navigation__menu-container__picker" />
                  <div className="x__topbar-header-navigation__menu-container-wrapper">
                    <a
                      className="x__link x__link--support"
                      href="/contact-support/"
                    >
                      <span>
                        <span className="x__title">Support</span>
                        <span className="x__description">
                          Our customer support engineers are here to help
                        </span>
                      </span>
                    </a>
                    <a
                      href="https://www.exodus.com/support"
                      className="x__link x__link--knowledge-base"
                      target="_blank" rel="noreferrer"
                    >
                      <span>
                        <span className="x__title">Knowledge Base</span>
                        <span className="x__description">
                          Common questions and blockchain education
                        </span>
                      </span>
                    </a>
                    <a
                      className="x__link x__link--status"
                      href="/status/"
                    >
                      <span>
                        <span className="x__title">Status</span>
                        <span className="x__description">
                          Exodus and asset availability and reports
                        </span>
                      </span>
                    </a>
                    <a
                      href="https://www.youtube.com/c/exodus/"
                      className="x__link x__link--youtube"
                      target="_blank" rel="noreferrer"
                    >
                      <span>
                        <span className="x__title">YouTube</span>
                        <span className="x__description">
                          Crypto education and tutorials
                        </span>
                      </span>
                    </a>
                    <a
                      className="x__link x__link--newsletter"
                      href="/newsletter/"
                    >
                      <span>
                        <span className="x__title">Newsletter</span>
                        <span className="x__description">
                          Sign-up for product updates and crypto
                          highlights
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="x__topbar-header-navigation-item">
                <span
                  className="x__topbar-header-navigation-item__heading"
                  tabIndex={0}
                >
                  Company
                </span>
                <div className="x__topbar-header-navigation__menu-container collapse">
                  <i className="x__topbar-header-navigation__menu-container__picker" />
                  <div className="x__topbar-header-navigation__menu-container-wrapper">
                    <a
                      className="x__link x__link--about-us"
                      href="/about/"
                    >
                      <span>
                        <span className="x__title">About Us</span>
                        <span className="x__description">
                          Learn more about Exodus
                        </span>
                      </span>
                    </a>
                    <a
                      className="x__link x__link--investors"
                      href="/investors/"
                    >
                      <span>
                        <span className="x__title">Investors</span>
                        <span className="x__description">
                          Read about news, media, events and more
                        </span>
                      </span>
                    </a>
                    <a
                      className="x__link x__link--careers"
                      href="/careers/"
                    >
                      <span>
                        <span className="x__title">Careers</span>
                        <span className="x__description">
                          See our open positions
                        </span>
                      </span>
                    </a>
                    <a
                      className="x__link x__link--contact-us"
                      href="/contact/"
                    >
                      <span>
                        <span className="x__title">Contact Us</span>
                        <span className="x__description">
                          Get in touch
                        </span>
                      </span>
                    </a>
                    <a
                      className="x__link x__link--brand-guidelines"
                      href="/brand/"
                    >
                      <span>
                        <span className="x__title">Brand Guidelines</span>
                        <span className="x__description">
                          Exodus media kit
                        </span>
                      </span>
                    </a>
                    <a
                      className="x__link x__link--security"
                      href="/security/"
                    >
                      <span>
                        <span className="x__title">Security</span>
                        <span className="x__description">
                          How we keep your crypto safe
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <a className="x__download" href="/download/">
              <span className="x__button-align">
                <span className="x__button-align-text">Download</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
)

export default Topbar 
