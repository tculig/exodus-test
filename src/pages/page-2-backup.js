import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../style/global.css"

const SecondPage = () => (

    <div id="___gatsby">
      <div style={{ outline: "none" }} tabIndex={-1} id="gatsby-focus-wrapper">
        <div className="x__asset-page">
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
                  <button
                    type="button"
                    className="x__hamburger-button"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="x__icon-bar x__icon-bar--top" />
                    <span className="x__icon-bar x__icon-bar--middle" />
                    <span className="x__icon-bar x__icon-bar--bottom" />
                  </button>
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
                                target="_blank"
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
                                target="_blank"
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
                                target="_blank"
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
          <main className="x">
            <div
              className="x__asset-page__background-container btc-rellax"
              data-rellax-speed={-4}
              role="presentation"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <div className="x__asset-page__background">
                <div
                  className=" gatsby-image-wrapper"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <div
                    aria-hidden="true"
                    style={{ width: "100%", paddingBottom: "56.2429696287964%" }}
                  />
                   <img
                      src="/images/header-bg-lsize.jpg"
                      alt="Best Bitcoin Wallet | BTC Wallet App"
                      loading="lazy"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 1,
                        transition: "opacity 1600ms"
                      }}
                    />
                </div>
              </div>
            </div>
            <header className="x__asset-page__header x-active">
              <div className="x__asset-page__header__content">
                <i className="x__asset-icon__wrapper">
                  <img
                    className="x__asset-icon x__asset-icon--largest"
                    src="data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient x1='115.077%25' y1='77.227%25' x2='27.227%25' y2='34.923%25' id='a'%3e%3cstop stop-color='%23FE9D39' offset='0%25'/%3e%3cstop stop-color='%23FFC82D' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath d='m22 1.155 13.32 7.69a4 4 0 0 1 2 3.464v15.382a4 4 0 0 1-2 3.464L22 38.845a4 4 0 0 1-4 0l-13.32-7.69a4 4 0 0 1-2-3.464V12.309a4 4 0 0 1 2-3.464L18 1.155a4 4 0 0 1 4 0z' fill='url(%23a)'/%3e%3cpath d='M24.198 26.417c-1.176.425-2.267.264-2.752.2a16.982 16.982 0 0 1-1.074-.194l-.715 2.667-1.642-.44.703-2.624-1.25-.335-.703 2.624-1.642-.44.703-2.624-3.23-.866.866-1.882.982.264c.33.088.476.094.649.001.173-.094.257-.285.3-.446l1.82-6.794c.115-.426.111-.55-.026-.821-.137-.272-.59-.424-.849-.493l-.949-.255.457-1.704 3.23.865.705-2.632 1.642.44-.705 2.632 1.25.335.706-2.632 1.642.44-.714 2.664c1.204.404 2.053.881 2.69 1.682.825 1.035.418 2.34.31 2.649-.107.308-.407.877-.788 1.194-.381.318-1.161.528-1.161.528s.752.383 1.2.955c.446.572.662 1.427.346 2.51-.314 1.084-.827 2.106-2.001 2.532zm-3.408-5.7c-.799-.271-1.856-.497-1.856-.497l-.944 3.522s1.083.315 1.827.457c.743.141 1.544.159 1.976.052.43-.107.97-.308 1.186-1.113.216-.806-.23-1.287-.497-1.523-.265-.236-.893-.626-1.692-.897zm-.053-1.765c.605.137 1.279.17 1.807.04s.896-.46 1.041-1.062c.145-.602-.118-1.216-.738-1.604-.62-.388-1.068-.525-1.58-.67-.512-.145-1.046-.24-1.046-.24l-.85 3.17s.762.228 1.366.366z' fill='white'/%3e%3c/g%3e%3c/svg%3e"
                    alt="Bitcoin (BTC)"
                  />
                </i>
                <h1 className="x__asset-page__header__heading">
                  Exodus
                  <span className="x-break-sm" /> Bitcoin
                  <span className="x-break-sm" /> Wallet
                </h1>
                <h2 className="x__asset-page__header__subheading">
                  Send, Receive, and Swap
                  <span className="x-break-sm" /> With Exodus' Free and
                  <span className="x-break-sm" /> Secure BTC Wallet
                </h2>
                <div className="x__asset-page__header__actions">
                  <div className="x__platform-dropdown x__platform-dropdown--Desktop">
                    <div
                      className="x__toggle"
                      style={{
                        background: "linear-gradient(to right, #FFC82D,#FE9D39)"
                      }}
                    >
                      <i className="x__toggle__icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <title>Desktop</title>
                          <path
                            d="M4 5H20V15H22V4C22 3.448 21.552 3 21 3H3C2.448 3 2 3.448 2 4V15H4V5Z"
                            fill="white"
                          />
                          <path
                            d="M15 18H9V17H0V19C0 19.552 0.448 20 1 20H23C23.552 20 24 19.552 24 19V17H15V18Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                      <span className="x__toggle__label">Download Desktop</span>
                      <span className="x__toggle__picker">
                        <svg width={11} height={7} viewBox="0 0 11 7" fill="none">
                          <path
                            opacity="0.8"
                            d="M1 1L5.5 5.5L10 1"
                            stroke="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="x__menu x__menu--to-bottom">
                      <ul>
                        <li className="x__menu__item">
                          <a href="https://downloads.exodus.com/releases/exodus-windows-x64-24.37.2.exe">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none">
                                <title>Download Windows (64-bit)</title>
                                <path
                                  d="M3 5.5485L10.356 4.54977L10.3592 11.6234L3.00672 11.6651L3 5.5485ZM10.3525 12.4384L10.3582 19.5182L3.00571 18.5105L3.0053 12.391L10.3525 12.4384ZM11.2442 4.4191L20.9977 3V11.5334L11.2442 11.6106V4.4191ZM21 12.505L20.9977 21L11.2442 19.6276L11.2306 12.489L21 12.505Z"
                                  fill="white"
                                />
                              </svg>
                            </i>
                            <span>Download Windows (64-bit)</span>
                          </a>
                        </li>
                        <li className="x__menu__item">
                          <a href="https://downloads.exodus.com/releases/exodus-macos-24.37.2.dmg">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none">
                                <title>Download Mac (Intel)</title>
                                <path
                                  d="M19.6646 17.4214C19.3774 18.0975 19.0373 18.7199 18.6434 19.2921C18.1064 20.0721 17.6667 20.6121 17.3278 20.9119C16.8025 21.4041 16.2397 21.6561 15.6371 21.6704C15.2044 21.6704 14.6827 21.545 14.0754 21.2906C13.466 21.0373 12.906 20.9119 12.394 20.9119C11.857 20.9119 11.2811 21.0373 10.665 21.2906C10.048 21.545 9.55103 21.6776 9.17099 21.6907C8.59306 21.7158 8.01701 21.4566 7.44201 20.9119C7.07502 20.5858 6.61598 20.0267 6.06613 19.2347C5.47612 18.389 4.99106 17.4083 4.61099 16.2901C4.20401 15.0824 4 13.913 4 12.7808C4 11.4838 4.27506 10.3653 4.82603 9.42795C5.25904 8.67503 5.83509 8.08112 6.55612 7.64506C7.2771 7.20905 8.05606 6.98686 8.89508 6.97264C9.35412 6.97264 9.95607 7.1173 10.7042 7.4016C11.4501 7.68686 11.9291 7.83152 12.1391 7.83152C12.2961 7.83152 12.8282 7.66238 13.7303 7.32514C14.5833 7.01241 15.3032 6.88292 15.893 6.93393C17.4911 7.06533 18.6918 7.70716 19.4903 8.86353C18.061 9.74583 17.354 10.9816 17.3681 12.5669C17.381 13.8017 17.8207 14.8293 18.6847 15.6452C19.0764 16.0239 19.5137 16.3165 20.0003 16.5244C19.8948 16.8362 19.783 17.1347 19.6646 17.4214ZM16.3077 2.41589C16.3077 3.45562 15.9874 4.42635 15.3489 5.32494C14.5784 6.39313 13.6464 7.01035 12.6358 6.913C12.6229 6.78826 12.6154 6.65698 12.6154 6.51903C12.6154 5.5209 12.9818 4.45269 13.6326 3.57934C13.9574 3.13712 14.3706 2.76942 14.8717 2.4761C15.3717 2.18715 15.8446 2.02736 16.2894 2C16.3024 2.13899 16.3077 2.27798 16.3077 2.41589Z"
                                  fill="white"
                                />
                              </svg>
                            </i>
                            <span>Download Mac (Intel)</span>
                          </a>
                        </li>
                        <li className="x__menu__item">
                          <a href="https://downloads.exodus.com/releases/exodus-macos-arm64-24.37.2.dmg">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none">
                                <title>Download Mac (Apple Silicon)</title>
                                <path
                                  d="M15.258 18.523V6H12.221L8.664 14.878H8.595L5.037 6.001H2V18.523H4.334V10.07H4.404L7.805 18.4H9.454L12.856 10.07H12.925V18.522H15.259L15.258 18.523ZM20.369 18.523H22.964V6H20.361L17.124 8.25V10.61L20.317 8.406H20.369V18.524V18.523Z"
                                  fill="white"
                                />
                              </svg>
                            </i>
                            <span>Download Mac (Apple Silicon)</span>
                          </a>
                        </li>
                        <li className="x__menu__item">
                          <a href="https://downloads.exodus.com/releases/exodus-linux-x64-24.37.2.deb">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none">
                                <title>Download Linux (.deb)</title>
                                <path
                                  d="M3.03345 9.96707C1.91005 9.96707 1 10.8771 1 12.0004C1 13.1231 1.91005 14.0333 3.03333 14.0333C4.15614 14.0333 5.06619 13.1231 5.06619 12.0004C5.06619 10.8771 4.15614 9.96707 3.03345 9.96707ZM17.5487 19.2069C16.5764 19.7686 16.243 21.0112 16.8047 21.983C17.3657 22.9555 18.6083 23.2888 19.5807 22.7272C20.553 22.1661 20.8865 20.9234 20.3249 19.9509C19.7638 18.9792 18.5205 18.6459 17.5487 19.2069ZM7.44931 12.0004C7.44931 9.9914 8.44725 8.21638 9.9741 7.14164L8.48792 4.65227C6.7092 5.84126 5.38568 7.65802 4.83567 9.78592C5.47727 10.3095 5.88811 11.1067 5.88811 12.0003C5.88811 12.8934 5.47739 13.6906 4.83567 14.2143C5.38485 16.3427 6.70836 18.1597 8.4878 19.3487L9.97398 16.8586C8.44713 15.7844 7.44931 14.0095 7.44931 12.0004ZM13.3874 6.06177C16.4896 6.06177 19.0348 8.44023 19.3019 11.4736L22.1988 11.431C22.0563 9.19154 21.078 7.18111 19.5748 5.7028C18.8018 5.99486 17.9088 5.95014 17.1372 5.50531C16.364 5.05917 15.8794 4.30654 15.7467 3.48963C14.9783 3.27697 14.1846 3.16906 13.3872 3.16883C12.0296 3.16746 10.6901 3.48024 9.47346 4.0827L10.8861 6.61428C11.6695 6.24965 12.5233 6.06109 13.3874 6.06189V6.06177ZM13.3874 17.9386C12.5233 17.9393 11.6695 17.7508 10.8861 17.3862L9.47358 19.9174C10.6901 20.5205 12.0298 20.8336 13.3876 20.8322C14.185 20.832 14.9787 20.7238 15.747 20.5106C15.8795 19.6937 16.3644 18.9418 17.1373 18.4949C17.9096 18.0492 18.802 18.0053 19.5749 18.2974C21.0781 16.8191 22.0565 14.8087 22.199 12.5693L19.3014 12.5266C19.0349 15.5608 16.4898 17.9384 13.3875 17.9384L13.3874 17.9386ZM17.548 4.79275C18.5204 5.35421 19.7632 5.02173 20.3243 4.04931C20.8859 3.07688 20.5533 1.83411 19.5807 1.27241C18.6083 0.711424 17.3657 1.04463 16.8038 2.01705C16.243 2.98899 16.5763 4.23165 17.548 4.79275Z"
                                  fill="white"
                                />
                              </svg>
                            </i>
                            <span>Download Linux (.deb)</span>
                          </a>
                        </li>
                        <li className="x__menu__item">
                          <a href="https://downloads.exodus.com/releases/exodus-linux-x64-24.37.2.zip">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none">
                                <title>Download Linux (.zip)</title>
                                <path
                                  d="M20.581 19.049C20.031 18.603 20.245 17.618 19.674 17.132C20.227 13.767 18.677 10.801 16.829 8.9C15.278 7.305 15.778 5.753 15.778 4.41C15.778 2.264 14.897 0 12.228 0C9.375 0 8.593 2.38 8.565 3.738C8.497 7 9.224 7.848 7.315 10.222C5.069 13.015 4.738 15.801 5.245 17.279C5.008 17.555 4.688 17.861 4.09 18.114C2.438 18.834 3.649 20.039 3.192 20.894C3.062 21.137 3 21.391 3 21.634C3 22.384 3.596 23.033 4.679 22.936C6.14 22.806 7.488 23.841 8.36 23.841C9.13 23.841 9.762 23.403 10.056 22.8C11.433 22.461 13.133 22.504 14.509 22.859C14.756 23.55 15.426 24 16.171 24C17.802 24 18.116 22.151 19.987 21.525C20.661 21.3 21 20.646 21 20.037C21 19.647 20.861 19.276 20.581 19.049ZM11.434 8.584C11.115 8.584 10.851 8.326 10.434 8.016C9.906 7.624 9.369 7.398 9.375 6.986C9.375 6.703 9.754 6.616 10.244 6.305C10.77 5.972 10.975 5.634 11.493 5.634C12.023 5.634 12.183 5.902 12.903 6.213C13.611 6.52 14.104 6.64 14.104 6.986C14.104 7.341 13.363 7.595 12.946 7.854C12.333 8.232 12.018 8.584 11.434 8.584ZM13.099 3.369C13.981 3.51 14.08 5.06 13.658 5.823L13.303 5.678C13.487 5.135 13.484 4.241 12.868 4.184C12.477 4.148 12.225 4.664 12.171 5.106C12.018 5.042 11.851 4.996 11.648 4.979C11.71 4.056 12.306 3.242 13.099 3.369ZM9.696 3.7C10.372 3.532 10.771 4.318 10.774 5.135L10.464 5.325C10.422 4.982 10.269 4.428 9.885 4.546C9.474 4.674 9.541 5.629 9.77 5.825L9.464 5.995C9.044 5.288 9.045 3.862 9.696 3.7ZM7.581 22.943C5.618 22.05 4.951 22.253 4.576 22.253C3.799 22.253 3.545 21.674 3.837 21.126C4.085 20.661 4.008 20.174 3.947 19.783C3.853 19.184 3.836 18.989 4.425 18.731C5.24 18.385 5.602 17.94 5.872 17.607C6.63 16.67 7.395 18.144 8.022 19.457C8.429 20.308 9.23 20.739 9.477 21.682C9.704 22.553 8.767 23.483 7.581 22.943ZM14.568 21.069C13.184 21.742 11.421 22.051 10.102 21.368C9.907 20.805 9.595 20.441 9.259 20.075C9.798 19.933 10.198 19.261 9.719 18.586C9.208 17.865 8.164 17.362 7.109 16.546C6.122 15.783 5.81 13.902 7.154 11.8C6.499 13.662 6.882 15.378 7.211 15.869C7.279 14.881 7.357 13.231 8.707 11.254C9.388 10.256 9.398 8.938 9.413 8.114L10.033 8.538C10.489 8.875 10.871 9.246 11.419 9.246C12.229 9.246 12.677 8.78 13.301 8.393C13.545 8.243 13.914 8.091 14.224 7.88C14.744 10.356 16.898 13.334 17.019 15.03C17.52 13.998 16.877 11.516 16.877 11.516C17.719 12.801 17.786 13.872 17.823 15.186C18.412 15.427 19.044 16.055 19.102 16.882L18.857 16.854C18.731 15.935 16.25 14.585 16.027 16.315C14.837 16.496 15.27 18.381 15.03 19.603C14.92 20.162 14.716 20.604 14.568 21.069ZM19.414 21.028C18.429 21.408 17.764 22.215 17.307 22.716C16.427 23.682 15.263 23.219 15.139 22.315C15.008 21.349 15.499 20.822 15.711 19.741C15.904 18.754 15.688 17.235 16.142 17.073C16.437 18.826 18.208 18.089 18.612 17.611C19.269 17.611 19.324 17.833 19.471 18.448C19.563 18.833 19.69 19.157 20.049 19.538C20.467 19.985 20.339 20.671 19.414 21.028ZM11.414 8.022C10.763 8.022 10.276 7.589 9.88 7.253C9.677 7.082 9.93 6.766 10.133 6.938C10.52 7.266 10.91 7.613 11.414 7.613C12.021 7.613 12.556 7.094 13.281 6.808C13.528 6.711 13.669 7.093 13.424 7.19C12.72 7.467 12.155 8.022 11.414 8.022Z"
                                  fill="white"
                                />
                              </svg>
                            </i>
                            <span>Download Linux (.zip)</span>
                          </a>
                        </li>
                      </ul>
                      <span className="x__menu__disclaimer">
                        By downloading Exodus, you agree to the{" "}
                        <a target="_blank" rel="noreferrer noopener" href="/terms/">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          target="_blank"
                          rel="noreferrer noopener"
                          href="/privacy/"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="x__platform-dropdown x__platform-dropdown--Mobile">
                    <div
                      className="x__toggle"
                      style={{
                        background: "linear-gradient(to right, #FFC82D,#FE9D39)"
                      }}
                    >
                      <i className="x__toggle__icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <title>Mobile</title>
                          <path
                            d="M17 0H7C6.20435 0 5.44129 0.31607 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V21C4 21.7956 4.31607 22.5587 4.87868 23.1213C5.44129 23.6839 6.20435 24 7 24H17C17.7956 24 18.5587 23.6839 19.1213 23.1213C19.6839 22.5587 20 21.7956 20 21V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.31607 17.7956 0 17 0ZM18 21C18 21.2652 17.8946 21.5196 17.7071 21.7071C17.5196 21.8946 17.2652 22 17 22H7C6.73478 22 6.48043 21.8946 6.29289 21.7071C6.10536 21.5196 6 21.2652 6 21V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V21Z"
                            fill="white"
                          />
                          <path
                            d="M9.85355 2.85355L9 2H15L14.1464 2.85355C14.0527 2.94732 13.9255 3 13.7929 3H10.2071C10.0745 3 9.94732 2.94732 9.85355 2.85355Z"
                            stroke="white"
                          />
                          <circle cx={12} cy={19} r={1} fill="white" />
                        </svg>
                      </i>
                      <span className="x__toggle__label">Download Mobile</span>
                      <span className="x__toggle__picker">
                        <svg width={11} height={7} viewBox="0 0 11 7" fill="none">
                          <path
                            opacity="0.8"
                            d="M1 1L5.5 5.5L10 1"
                            stroke="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="x__menu x__menu--to-bottom">
                      <ul>
                        <li className="x__menu__item">
                          <a href="https://apps.apple.com/app/apple-store/id1414384820?pt=118366236&ct=download&mt=8">
                            <svg
                              width={96}
                              height={24}
                              viewBox="0 0 96 24"
                              fill="none"
                            >
                              <path
                                opacity="0.8"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.6265 0C12.7192 1.21107 12.3362 2.4106 11.5588 3.34385C10.8046 4.28194 9.66176 4.82227 8.45813 4.80988C8.38159 3.63367 8.77573 2.47527 9.55375 1.58983C10.3417 0.692389 11.4388 0.124745 12.6265 0ZM47.9135 0.415859H47.0622V6.41335H47.9135V0.415859ZM28.7062 1.48009C28.1852 0.929919 27.445 0.642377 26.6892 0.696612H24.6245V6.41256H26.6892C28.3918 6.41256 29.3787 5.36289 29.3787 3.53679C29.474 2.78509 29.2272 2.03027 28.7062 1.48009ZM26.5891 5.60366H25.5114V1.50383H26.5891C27.1263 1.47401 27.6488 1.68585 28.0136 2.0814C28.3784 2.47695 28.5473 3.01482 28.4741 3.5479C28.553 4.0832 28.3865 4.62554 28.0208 5.02434C27.6551 5.42315 27.1292 5.63595 26.5891 5.60366ZM31.3384 2.32426C30.6784 2.7338 30.3076 3.48207 30.3816 4.25525C30.3062 5.02926 30.6766 5.77898 31.3372 6.1894C31.9977 6.59982 32.834 6.59982 33.4945 6.1894C34.1551 5.77898 34.5255 5.02926 34.4501 4.25525C34.5241 3.48207 34.1533 2.7338 33.4934 2.32426C32.8334 1.91472 31.9983 1.91472 31.3384 2.32426ZM32.419 2.77363C33.1562 2.77363 33.5762 3.32043 33.5762 4.25546C33.5762 5.19424 33.1562 5.74057 32.419 5.74058C31.679 5.74058 31.2627 5.19799 31.2627 4.25547C31.2627 3.32043 31.679 2.77363 32.419 2.77363ZM38.9755 6.4132H39.8586L41.0429 2.09961H40.1916L39.4226 5.39113H39.3553L38.4684 2.09961H37.6517L36.7649 5.39113H36.7013L35.9286 2.09961H35.0651L36.2541 6.4132H37.1288L38.0166 3.23624H38.0839L38.9755 6.4132ZM42.0429 2.09996H42.8624V2.78521H42.926C43.1472 2.28068 43.6642 1.97206 44.2133 2.01669C44.6384 1.98473 45.055 2.14783 45.3455 2.45994C45.6359 2.77205 45.7687 3.19931 45.7063 3.62107V6.4135H44.855V3.83485C44.855 3.14164 44.5538 2.79691 43.9242 2.79691C43.6358 2.78347 43.3559 2.89665 43.158 3.10676C42.96 3.31687 42.8636 3.60297 42.8942 3.89004V6.41355H42.0429L42.0429 2.09996ZM50.0535 2.32423C49.3934 2.73377 49.0226 3.48206 49.0965 4.25529C49.0213 5.02933 49.3917 5.77903 50.0523 6.18943C50.7129 6.59983 51.5491 6.59983 52.2097 6.18943C52.8703 5.77903 53.2408 5.02933 53.1655 4.25529C53.2394 3.48206 52.8686 2.73377 52.2086 2.32423C51.5486 1.91468 50.7135 1.91468 50.0535 2.32423ZM51.1338 2.77363C51.871 2.77363 52.291 3.32043 52.291 4.25546C52.291 5.19424 51.871 5.74057 51.1338 5.74058C50.3938 5.74058 49.9775 5.19799 49.9775 4.25547C49.9775 3.32043 50.3938 2.77363 51.1338 2.77363ZM54.0629 5.19403C54.0629 4.41756 54.6411 3.96992 55.6673 3.90631L56.8358 3.83895V3.46663C56.8358 3.01103 56.5345 2.75377 55.9526 2.75377C55.4774 2.75377 55.1481 2.92825 55.0536 3.23322H54.2295C54.3165 2.4923 55.0134 2.01707 55.9919 2.01707C57.0734 2.01707 57.6833 2.55544 57.6833 3.46663V6.41392H56.8638V5.80772H56.7965C56.5181 6.25041 56.0232 6.50914 55.5008 6.48499C55.1346 6.52308 54.7694 6.40449 54.4954 6.15852C54.2215 5.91256 54.0644 5.56219 54.0629 5.19403ZM56.8366 4.82551V4.46488L55.7833 4.53224C55.1892 4.57199 54.9198 4.77406 54.9198 5.15434C54.9198 5.54257 55.2566 5.76849 55.7197 5.76849C55.9938 5.79625 56.2675 5.71155 56.4781 5.53379C56.6886 5.35603 56.818 5.10044 56.8366 4.82551ZM60.5923 2.02848C59.5025 2.02848 58.8018 2.89195 58.8018 4.25498C58.8018 5.62127 59.495 6.48476 60.5924 6.48472C61.1487 6.50522 61.6705 6.21533 61.947 5.73211H62.0143V6.41363H62.8301V0.416133H61.9788V2.78527H61.9151C61.6581 2.29801 61.1427 2.00313 60.5923 2.02848ZM60.8328 5.72082C60.1115 5.72082 59.6803 5.17028 59.6803 4.25535H59.6802C59.6802 3.34791 60.1162 2.79363 60.8328 2.79363C61.5457 2.79363 61.9938 3.36008 61.9938 4.2591C61.9938 5.16233 61.5503 5.72082 60.8328 5.72082ZM66.3538 4.25521C66.2799 3.48203 66.6506 2.73376 67.3106 2.32422C67.9705 1.91469 68.8056 1.91469 69.4656 2.32422C70.1255 2.73376 70.4963 3.48203 70.4223 4.25521C70.4977 5.02922 70.1273 5.77894 69.4667 6.18936C68.8062 6.59978 67.97 6.59978 67.3094 6.18936C66.6489 5.77894 66.2785 5.02922 66.3538 4.25521ZM69.5483 4.25546C69.5483 3.32043 69.1282 2.77363 68.3911 2.77363C67.6511 2.77363 67.2348 3.32043 67.2348 4.25547C67.2348 5.19799 67.6511 5.74058 68.3911 5.74058C69.1282 5.74057 69.5483 5.19424 69.5483 4.25546ZM71.5638 2.09996H72.3833V2.78521H72.4469C72.6682 2.28068 73.1851 1.97206 73.7342 2.01669C74.1593 1.98473 74.576 2.14783 74.8664 2.45994C75.1569 2.77205 75.2897 3.19931 75.2272 3.62107V6.4135H74.3759V3.83485C74.3759 3.14164 74.0747 2.79691 73.4451 2.79691C73.1567 2.78347 72.8769 2.89665 72.6789 3.10676C72.4809 3.31687 72.3846 3.60297 72.4151 3.89004V6.41355H71.5638V2.09996ZM80.0346 2.11977V1.02617H79.1824V2.11973H78.4976V2.8368H79.1824V5.27287C79.1824 6.10453 79.5594 6.43757 80.5061 6.43757C80.6614 6.43597 80.8163 6.42142 80.9692 6.39407V5.68496C80.8614 5.6977 80.753 5.70426 80.6445 5.70461C80.2208 5.70461 80.0346 5.50676 80.0346 5.05491V2.83684H80.9692V2.11977H80.0346ZM82.136 0.415859H82.9798V2.79297H83.0472C83.279 2.28403 83.805 1.97501 84.3625 2.02025C84.7852 1.99725 85.1962 2.16394 85.4835 2.47492C85.7707 2.7859 85.9044 3.20878 85.848 3.62837V6.41336H84.9959V3.83839C84.9959 3.14939 84.675 2.80044 84.0735 2.80044C83.7773 2.77615 83.4855 2.88382 83.2761 3.09467C83.0667 3.30552 82.961 3.59804 82.9874 3.89404V6.41334H82.136L82.136 0.415859ZM90.8087 5.24933C90.57 6.063 89.7826 6.58872 88.9395 6.49729C88.3643 6.51247 87.8116 6.27406 87.4278 5.8453C87.0441 5.41654 86.8683 4.84079 86.9469 4.2708C86.8703 3.69923 87.0455 3.12256 87.4271 2.69018C87.8087 2.2578 88.3591 2.01226 88.9358 2.01718C90.136 2.01718 90.8601 2.83719 90.8601 4.19173V4.48879H87.8141V4.53649C87.7872 4.85658 87.8965 5.17319 88.1152 5.40846C88.3339 5.64373 88.6417 5.77582 88.9629 5.77225C89.3794 5.82225 89.7848 5.61566 89.9892 5.24931L90.8087 5.24933ZM87.8156 3.85948H89.9943C90.016 3.56673 89.9131 3.27843 89.7109 3.06563C89.5087 2.85282 89.226 2.7353 88.9325 2.74203C88.6351 2.73829 88.3487 2.85484 88.1384 3.06523C87.9281 3.27563 87.8117 3.56203 87.8156 3.85948ZM26.4401 17.917H30.9745L32.0625 21.1323H34.0158L29.7209 9.23645H27.7255L23.4306 21.1323H25.3512L26.4401 17.917ZM30.5067 16.4337H26.9125L28.6853 11.2155H28.7349L30.5067 16.4337ZM43.2884 16.7956C43.2884 19.4908 41.8459 21.2224 39.669 21.2224C38.5438 21.2813 37.4838 20.6919 36.9401 19.705H36.8989V24.0008H35.1187V12.4586H36.8419V13.9012H36.8746C37.4425 12.9205 38.5036 12.3314 39.6362 12.3679C41.8374 12.3679 43.2884 14.1079 43.2884 16.7956ZM41.4586 16.7954C41.4586 15.0395 40.5512 13.885 39.1666 13.885C37.8064 13.885 36.8915 15.0638 36.8915 16.7954C36.8915 18.5429 37.8064 19.7132 39.1666 19.7132C40.5512 19.7132 41.4586 18.5672 41.4586 16.7954ZM49.2162 21.2224C51.3931 21.2224 52.8357 19.4908 52.8357 16.7956C52.8357 14.1079 51.3847 12.3679 49.1834 12.3679C48.0508 12.3314 46.9897 12.9205 46.4218 13.9012H46.3891V12.4586H44.6659V24.0008H46.4462V19.705H46.4874C47.0311 20.6919 48.091 21.2813 49.2162 21.2224ZM48.7138 13.885C50.0984 13.885 51.0058 15.0395 51.0058 16.7954C51.0058 18.5672 50.0984 19.7132 48.7138 19.7132C47.3536 19.7132 46.4387 18.5429 46.4387 16.7954C46.4387 15.0638 47.3536 13.885 48.7138 13.885ZM61.9872 19.7708C60.4212 19.7708 59.2752 18.9962 59.1433 17.8166L57.3209 17.8165C57.436 19.9681 59.2172 21.3293 61.8553 21.3293C64.6749 21.3293 66.4477 19.9354 66.4477 17.7098C66.4477 15.9698 65.4336 14.9894 62.9929 14.4122L61.6822 14.0904C60.149 13.7115 59.5222 13.2167 59.5222 12.3756C59.5222 11.3204 60.5035 10.5954 61.9376 10.5954C63.3718 10.5954 64.3531 11.312 64.4607 12.4991H66.2578C66.1998 10.4466 64.4766 9.03684 61.9629 9.03684C59.423 9.03684 57.6344 10.4466 57.6344 12.4991C57.6344 14.1568 58.6484 15.1784 60.8328 15.706L62.3745 16.0774C63.9162 16.4563 64.5674 17.0092 64.5674 17.9325C64.5674 18.9962 63.4878 19.7708 61.9872 19.7708ZM70.2904 10.4056V12.4581H71.9396V13.8679H70.2904V18.6492C70.2904 19.392 70.6206 19.7381 71.3456 19.7381C71.5414 19.7347 71.7369 19.721 71.9312 19.697V21.0983C71.6053 21.1592 71.2739 21.1868 70.9424 21.1807C69.1865 21.1807 68.5017 20.5211 68.5017 18.8391V13.8679H67.2406V12.4581H68.5016V10.4056H70.2904ZM72.8956 16.7955C72.8956 14.0666 74.5028 12.3518 77.009 12.3518C79.5237 12.3518 81.1234 14.0666 81.1234 16.7955C81.1234 19.5318 79.5321 21.2391 77.009 21.2391C74.4869 21.2391 72.8956 19.5318 72.8956 16.7955ZM79.3103 16.7948C79.3103 14.9229 78.4524 13.8181 77.0099 13.8181C75.5674 13.8181 74.7104 14.9313 74.7104 16.7948C74.7104 18.6743 75.5674 19.7707 77.0099 19.7707C78.4524 19.7707 79.3103 18.6743 79.3103 16.7948ZM82.5913 12.4582H84.2892V13.9344H84.3304C84.5672 12.9841 85.4379 12.3301 86.4165 12.3674C86.6217 12.3667 86.8263 12.389 87.0265 12.4338V14.099C86.7675 14.0199 86.4973 13.9836 86.2266 13.9915C85.7032 13.9702 85.1967 14.1788 84.8401 14.5624C84.4834 14.9461 84.3122 15.4664 84.3715 15.9869V21.1312H82.5912L82.5913 12.4582ZM95.2359 18.5841C94.9964 20.1586 93.4631 21.2391 91.5014 21.2391C88.9783 21.2391 87.4123 19.5486 87.4123 16.8366C87.4123 14.1162 88.9867 12.3518 91.4265 12.3518C93.8261 12.3518 95.3351 14.0002 95.3351 16.6299V17.2398H89.2094V17.3474C89.1522 17.9931 89.3752 18.6322 89.8216 19.1023C90.268 19.5723 90.8948 19.8279 91.5425 19.804C92.4065 19.885 93.221 19.3889 93.5455 18.5841L95.2359 18.5841ZM89.2161 15.9964L93.5521 15.9964C93.5844 15.4162 93.3732 14.8488 92.9694 14.4309C92.5656 14.0131 92.0058 13.7826 91.4248 13.7951C90.8392 13.7916 90.2765 14.0222 89.8618 14.4355C89.447 14.8489 89.2146 15.4108 89.2161 15.9964ZM14.1751 11.0932C14.1961 9.46804 15.0481 7.9669 16.4326 7.1157C15.5552 5.86259 14.1383 5.09658 12.6093 5.04874C11.6253 4.94546 10.6597 5.32869 9.87053 5.64189C9.36957 5.84072 8.93971 6.01132 8.6214 6.01132C8.25929 6.01132 7.81709 5.8337 7.32161 5.63468C6.67372 5.37445 5.93474 5.07762 5.16462 5.09347C3.37643 5.15124 1.74977 6.14328 0.879777 7.70664C-0.972904 10.9143 0.409029 15.6284 2.18374 18.2212C3.07167 19.4908 4.1094 20.909 5.46725 20.8587C6.08321 20.8332 6.52028 20.6493 6.97172 20.4593C7.49412 20.2394 8.03576 20.0114 8.89615 20.0114C9.70741 20.0114 10.2258 20.2323 10.7234 20.4442C11.2003 20.6474 11.6581 20.8424 12.3362 20.8268C13.762 20.8036 14.6603 19.5515 15.517 18.2699C16.155 17.3652 16.6459 16.3654 16.9716 15.3074C15.2782 14.5911 14.1771 12.9318 14.1751 11.0932Z"
                                fill="white"
                              />
                            </svg>
                            <em>
                              <svg viewBox="0 0 16 15" fill="none">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8 11.978l-4.702 2.468.898-5.227L.392 5.518l5.257-.763L8 0l2.351 4.755 5.257.763-3.804 3.701.898 5.227L8 11.978z"
                                  fill="url(#gradient)"
                                />
                                <defs>
                                  <linearGradient
                                    id="gradient"
                                    x1={24}
                                    y1="7.985"
                                    x2="8.029"
                                    y2="-8.014"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#FF9F1A" />
                                    <stop offset={1} stopColor="#FC3" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <span>4.6</span>
                            </em>
                          </a>
                        </li>
                        <li className="x__menu__item">
                          <a href="https://play.google.com/store/apps/details?id=exodusmovement.exodus&referrer=utm_source%3Dexodus-website%26utm_content%3Dbtc-wallet%26utm_campaign%3Dbtc-wallet%26referrer%3Dhttps%3A%2F%2Fgithub.com%2F">
                            <svg
                              width={104}
                              height={26}
                              viewBox="0 0 104 26"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M52.5726 1.58644C53.082 1.05071 53.7946 0.755967 54.5336 0.77531C55.2711 0.763642 55.9807 1.05716 56.4945 1.58644C57.0123 2.11315 57.2952 2.82681 57.2789 3.56524C57.3026 4.30496 57.0186 5.02141 56.4945 5.54403C55.9746 6.06439 55.2692 6.35676 54.5336 6.35676C53.798 6.35676 53.0925 6.06439 52.5726 5.54403C52.0486 5.02141 51.7646 4.30496 51.7882 3.56524C51.7646 2.82551 52.0486 2.10907 52.5726 1.58644ZM54.4985 5.70541C55.0446 5.70541 55.5679 5.48662 55.9514 5.09794C56.3635 4.69514 56.5922 4.14096 56.5843 3.56481C56.6016 2.99389 56.386 2.44046 55.9871 2.03169C55.6035 1.64301 55.0802 1.42421 54.5342 1.42421C53.9881 1.42421 53.4648 1.64301 53.0813 2.03169C52.6823 2.44046 52.4667 2.99389 52.4841 3.56481C52.4572 4.13062 52.6597 4.68334 53.0456 5.09794C53.4292 5.48662 53.9525 5.70541 54.4985 5.70541ZM30.5216 4.0195V3.37773L33.1511 3.38664C33.1592 3.52022 33.1592 3.65417 33.1511 3.78775C33.1807 4.44828 32.9392 5.09223 32.4826 5.57045C31.9705 6.09921 31.2572 6.38452 30.5216 6.35484C29.7823 6.37132 29.0692 6.0809 28.5518 5.55262C28.0156 5.03244 27.7215 4.3117 27.7406 3.56491C27.7215 2.81813 28.0156 2.09739 28.5518 1.5772C29.3637 0.783824 30.5726 0.555406 31.618 0.997824C31.9394 1.12995 32.2261 1.33429 32.4559 1.59503L31.9835 2.06744C31.6246 1.6351 31.0828 1.39726 30.5216 1.42567C29.9591 1.42291 29.4196 1.64948 29.0278 2.05313C28.6359 2.45678 28.4254 3.00266 28.4448 3.56491C28.4254 4.12716 28.6359 4.67305 29.0278 5.0767C29.4196 5.48035 29.9591 5.70691 30.5216 5.70415C31.0787 5.71758 31.6169 5.50167 32.0102 5.10695C32.2884 4.81147 32.4499 4.42507 32.4648 4.0195H30.5216ZM33.861 16.81V15.2056H39.2804C39.337 15.5353 39.3638 15.8694 39.3606 16.2039C39.4049 17.5936 38.9061 18.946 37.9701 19.9743C36.8983 21.0849 35.4032 21.6849 33.861 21.6233C31.703 21.7073 29.672 20.6039 28.568 18.7477C27.464 16.8916 27.464 14.5802 28.568 12.7241C29.672 10.8679 31.703 9.76455 33.861 9.84854C35.3703 9.82462 36.8256 10.4093 37.8988 11.4708L36.7668 12.6028C35.9814 11.8499 34.931 11.4368 33.8432 11.453C31.4802 11.453 29.5647 13.3685 29.5647 15.7314C29.5647 18.0944 31.4802 20.0099 33.8432 20.0099C34.9573 20.0567 36.0391 19.6292 36.8203 18.8333C37.3371 18.2787 37.6512 17.5657 37.7116 16.81H33.861ZM39.9492 17.8426C39.9442 15.7455 41.6403 14.0415 43.7374 14.0365C44.7495 14.0171 45.7262 14.4094 46.4437 15.1235C47.1613 15.8377 47.5581 16.8125 47.5434 17.8248C47.5484 19.9219 45.8523 21.6259 43.7552 21.6308C41.6581 21.6357 39.9541 19.9397 39.9492 17.8426ZM52.0449 14.0365C49.9478 14.0415 48.2517 15.7455 48.2567 17.8426C48.2616 19.9397 49.9656 21.6357 52.0627 21.6308C54.1598 21.6259 55.8559 19.9219 55.8509 17.8248C55.8656 16.8125 55.4688 15.8377 54.7512 15.1235C54.0337 14.4094 53.057 14.0171 52.0449 14.0365ZM52.0446 20.1255C51.1026 20.1914 50.2161 19.6748 49.8091 18.8228C49.4021 17.9708 49.5572 16.9565 50.2004 16.2651C50.8435 15.5738 51.8439 15.3458 52.7231 15.6903C53.6023 16.0347 54.1815 16.8816 54.1838 17.8259C54.2128 18.4165 54.002 18.9939 53.5992 19.4269C53.1964 19.8599 52.6358 20.1118 52.0446 20.1255ZM43.7371 20.1255C42.7951 20.1914 41.9086 19.6748 41.5016 18.8228C41.0946 17.9708 41.2497 16.9565 41.8929 16.2651C42.536 15.5738 43.5364 15.3458 44.4156 15.6903C45.2948 16.0347 45.874 16.8816 45.8763 17.8259C45.9053 18.4165 45.6945 18.9939 45.2917 19.4269C44.8889 19.8599 44.3283 20.1118 43.7371 20.1255ZM74.2483 16.4523C73.7724 15.0522 72.4816 14.0912 71.0038 14.0368C70.0183 14.0349 69.0759 14.4409 68.4005 15.1586C67.7251 15.8762 67.3768 16.8414 67.4384 17.825C67.4227 19.4961 68.509 20.9782 70.1073 21.4663C71.7056 21.9545 73.4346 21.3322 74.3553 19.9375L73.0628 19.0462C72.6708 19.6996 71.9619 20.0965 71.1999 20.0891C70.4091 20.1217 69.6796 19.6649 69.3637 18.9392L74.4355 16.8445L74.2483 16.4523ZM69.6072 16.1949C69.233 16.611 69.0426 17.1605 69.0791 17.719L72.4662 16.3106C72.2029 15.7868 71.652 15.471 71.0668 15.5084C70.5077 15.5312 69.9814 15.7787 69.6072 16.1949ZM64.9608 21.3907H66.6277V10.2488H64.9608V21.3907ZM62.1712 14.8835H62.2336V14.2595H63.7756V21.0516C63.7756 23.8505 62.1623 25.0003 60.2102 25.0003C58.7329 25.0201 57.3964 24.1268 56.8498 22.7541L58.2938 22.1569C58.6008 22.9525 59.3577 23.4841 60.2102 23.5028C61.4581 23.5028 62.2336 22.7274 62.2336 21.2745V20.7307H62.1712C61.6718 21.3106 60.9397 21.6374 60.1746 21.6221C58.1513 21.524 56.5613 19.855 56.5613 17.8294C56.5613 15.8038 58.1513 14.1348 60.1746 14.0367C60.9312 14.0174 61.6592 14.3261 62.1712 14.8835ZM60.3152 20.1259C59.103 20.0503 58.1586 19.0452 58.1586 17.8307C58.1586 16.6162 59.103 15.611 60.3152 15.5355C60.8919 15.5603 61.4338 15.8182 61.8169 16.25C62.2 16.6818 62.3915 17.2506 62.3475 17.8262C62.3966 18.4039 62.2072 18.9764 61.8233 19.4109C61.4394 19.8453 60.8945 20.1036 60.3152 20.1259ZM78.0639 10.2512H82.0572C83.352 10.1581 84.5904 10.7962 85.2661 11.9046C85.9419 13.0131 85.9419 14.4061 85.2661 15.5146C84.5904 16.623 83.352 17.2611 82.0572 17.168H79.7307V21.393H78.0639V10.2512ZM82.0562 15.5981H79.7297V11.801H82.0918C83.1453 11.801 83.9993 12.655 83.9993 13.7085C83.9993 14.7619 83.1453 15.616 82.0918 15.616L82.0562 15.5981ZM89.3747 15.7048C89.9351 14.5953 91.1022 13.9258 92.3429 14.0023L92.3786 14.0202C94.2772 14.0202 95.7568 15.1522 95.7568 17.1042V21.3916H94.1524V20.5003H94.0989C93.6399 21.2192 92.8291 21.6348 91.9775 21.5877C91.2822 21.6415 90.5947 21.4111 90.0723 20.9492C89.5499 20.4872 89.2371 19.8332 89.2054 19.1365C89.2054 17.5142 90.8276 16.6229 92.4142 16.6229C93.0198 16.6222 93.6164 16.769 94.1524 17.0507V16.9438C94.1098 16.5156 93.8971 16.1224 93.5619 15.8525C93.2267 15.5827 92.7971 15.4588 92.3697 15.5087C91.7461 15.4548 91.149 15.7725 90.8455 16.3198L89.3747 15.7048ZM92.1378 20.1086C91.5941 20.1086 90.8364 19.8323 90.8364 19.1638C90.8364 18.2724 91.7813 17.9693 92.6191 17.9693C93.1486 17.9563 93.6719 18.0856 94.1344 18.3437C94.0187 19.3448 93.181 20.1063 92.1735 20.1264L92.1378 20.1086ZM99.6968 19.0923L101.604 14.2612H103.458L98.9391 24.7702H97.1564L98.85 21.0176L95.8818 14.2612H97.6645L99.6433 19.0923H99.6968ZM86.6287 21.3907H88.2866V10.2488H86.6287V21.3907ZM34.1316 6.23864H37.2603V5.57904H34.8269V3.88548H37.0196V3.2437H34.8269V1.55014H37.2603V0.890539H34.1316V6.23864ZM39.4706 1.55014H37.9732V0.890539H41.6455V1.55014H40.157V6.23864H39.4706V1.55014ZM44.3106 0.890539H44.9969V6.23864H44.3106V0.890539ZM47.3593 1.55014H45.8619V0.890539H49.5342V1.55014H48.0457V6.23864H47.3593V1.55014ZM61.6839 4.01918V0.890539H62.3703V6.23864H61.6572L58.9386 1.87994H58.9029L58.9386 2.90499V6.23864H58.2522V0.890539H59.0812L61.6839 5.05314H61.7107L61.6839 4.01918Z"
                                fill="white"
                              />
                              <path
                                d="M54.5336 0.77531L54.5309 0.875364L54.5351 0.875297L54.5336 0.77531ZM52.5726 1.58644L52.6432 1.65727L52.6451 1.65535L52.5726 1.58644ZM56.4945 1.58644L56.4228 1.65609L56.4232 1.65654L56.4945 1.58644ZM57.2789 3.56524L57.1788 3.56303L57.179 3.56843L57.2789 3.56524ZM56.4945 5.54403L56.4239 5.47323L56.4238 5.47335L56.4945 5.54403ZM52.5726 5.54403L52.6433 5.47335L52.6432 5.47323L52.5726 5.54403ZM51.7882 3.56524L51.8884 3.56844L51.8881 3.56204L51.7882 3.56524ZM55.9514 5.09794L55.8815 5.02642L55.8803 5.0277L55.9514 5.09794ZM56.5843 3.56481L56.4842 3.56178L56.4843 3.56619L56.5843 3.56481ZM55.9871 2.03169L56.0586 1.96184L56.0583 1.96145L55.9871 2.03169ZM53.0813 2.03169L53.0101 1.96145L53.0097 1.96184L53.0813 2.03169ZM52.4841 3.56481L52.5843 3.56957L52.584 3.56178L52.4841 3.56481ZM53.0456 5.09794L52.9724 5.1661L52.9744 5.16817L53.0456 5.09794ZM30.5216 3.37773L30.522 3.27773L30.4216 3.27739V3.37773H30.5216ZM30.5216 4.0195H30.4216V4.1195H30.5216V4.0195ZM33.1511 3.38664L33.2509 3.38064L33.2453 3.28696L33.1515 3.28664L33.1511 3.38664ZM33.1511 3.78775L33.0508 3.78172L33.0512 3.79222L33.1511 3.78775ZM32.4826 5.57045L32.5544 5.64003L32.5549 5.63951L32.4826 5.57045ZM30.5216 6.35484L30.5257 6.25472L30.5194 6.25486L30.5216 6.35484ZM28.5518 5.55262L28.6232 5.48263L28.6214 5.48085L28.5518 5.55262ZM27.7406 3.56491L27.8407 3.56748L27.8406 3.56235L27.7406 3.56491ZM28.5518 1.5772L28.6214 1.64897L28.6216 1.64872L28.5518 1.5772ZM31.618 0.997824L31.579 1.08992L31.58 1.09031L31.618 0.997824ZM32.4559 1.59503L32.5266 1.66574L32.593 1.59935L32.5309 1.52892L32.4559 1.59503ZM31.9835 2.06744L31.9065 2.13132L31.9766 2.21573L32.0542 2.13815L31.9835 2.06744ZM30.5216 1.42567L30.5211 1.52582L30.5267 1.52554L30.5216 1.42567ZM29.0278 2.05313L29.0995 2.12278L29.0278 2.05313ZM28.4448 3.56491L28.545 3.56837L28.5447 3.56146L28.4448 3.56491ZM29.0278 5.0767L29.0995 5.00704L29.0995 5.00704L29.0278 5.0767ZM30.5216 5.70415L30.524 5.60414L30.5211 5.60415L30.5216 5.70415ZM32.0102 5.10695L32.0811 5.17756L32.083 5.1755L32.0102 5.10695ZM32.4648 4.0195L32.5647 4.02316L32.5685 3.9195H32.4648V4.0195ZM33.861 15.2056V15.1056H33.761V15.2056H33.861ZM33.861 16.81H33.761V16.91H33.861V16.81ZM39.2804 15.2056L39.379 15.1886L39.3647 15.1056H39.2804V15.2056ZM39.3606 16.2039L39.2605 16.2029L39.2607 16.207L39.3606 16.2039ZM37.9701 19.9743L38.0421 20.0437L38.0441 20.0416L37.9701 19.9743ZM33.861 21.6233L33.865 21.523L33.8571 21.5233L33.861 21.6233ZM28.568 18.7477L28.654 18.6966L28.568 18.7477ZM28.568 12.7241L28.654 12.7752L28.568 12.7241ZM33.861 9.84854L33.8571 9.94861L33.8626 9.94852L33.861 9.84854ZM37.8988 11.4708L37.9695 11.5415L38.0406 11.4704L37.9691 11.3997L37.8988 11.4708ZM36.7668 12.6028L36.6976 12.675L36.7683 12.7428L36.8375 12.6735L36.7668 12.6028ZM33.8432 11.453V11.553L33.8446 11.553L33.8432 11.453ZM33.8432 20.0099L33.8474 19.9099H33.8432V20.0099ZM36.8203 18.8333L36.8917 18.9034L36.8934 18.9015L36.8203 18.8333ZM37.7116 16.81L37.8113 16.8179L37.8199 16.71H37.7116V16.81ZM43.7374 14.0365L43.7376 14.1365L43.7393 14.1365L43.7374 14.0365ZM39.9492 17.8426L39.8492 17.8428L39.9492 17.8426ZM46.4437 15.1235L46.3732 15.1944L46.4437 15.1235ZM47.5434 17.8248L47.4434 17.8233L47.4434 17.825L47.5434 17.8248ZM43.7552 21.6308L43.755 21.5308L43.7552 21.6308ZM48.2567 17.8426L48.1567 17.8428L48.2567 17.8426ZM52.0449 14.0365L52.0451 14.1365L52.0468 14.1365L52.0449 14.0365ZM55.8509 17.8248L55.7509 17.8233L55.7509 17.825L55.8509 17.8248ZM54.7512 15.1235L54.6807 15.1944L54.7512 15.1235ZM49.8091 18.8228L49.7189 18.8659L49.8091 18.8228ZM52.0446 20.1255L52.0423 20.0255L52.0376 20.0258L52.0446 20.1255ZM50.2004 16.2651L50.1271 16.197L50.2004 16.2651ZM52.7231 15.6903L52.7596 15.5972V15.5972L52.7231 15.6903ZM54.1838 17.8259L54.0837 17.8261L54.084 17.8308L54.1838 17.8259ZM53.5992 19.4269L53.526 19.3588V19.3588L53.5992 19.4269ZM41.5016 18.8228L41.4114 18.8659L41.5016 18.8228ZM43.7371 20.1255L43.7348 20.0255L43.7301 20.0258L43.7371 20.1255ZM44.4156 15.6903L44.4521 15.5972L44.4156 15.6903ZM45.8763 17.8259L45.7762 17.8261L45.7765 17.8308L45.8763 17.8259ZM71.0038 14.0368L71.0075 13.9368L71.004 13.9368L71.0038 14.0368ZM74.2483 16.4523L74.153 16.4848L74.1581 16.4954L74.2483 16.4523ZM68.4005 15.1586L68.3277 15.09L68.4005 15.1586ZM67.4384 17.825L67.5386 17.826L67.5382 17.8188L67.4384 17.825ZM70.1073 21.4663L70.1365 21.3707L70.1073 21.4663ZM74.3553 19.9375L74.4387 19.9926L74.4927 19.9108L74.412 19.8552L74.3553 19.9375ZM73.0628 19.0462L73.1196 18.9639L73.0319 18.9034L72.9771 18.9947L73.0628 19.0462ZM71.1999 20.0891L71.2009 19.9889L71.1958 19.9891L71.1999 20.0891ZM69.3637 18.9392L69.3255 18.8468L69.2313 18.8857L69.272 18.9791L69.3637 18.9392ZM74.4355 16.8445L74.4737 16.937L74.5712 16.8967L74.5257 16.8015L74.4355 16.8445ZM69.0791 17.719L68.9793 17.7255L68.9884 17.865L69.1175 17.8113L69.0791 17.719ZM69.6072 16.1949L69.6816 16.2617L69.6072 16.1949ZM72.4662 16.3106L72.5046 16.403L72.6039 16.3617L72.5556 16.2657L72.4662 16.3106ZM71.0668 15.5084L71.0709 15.6083L71.0732 15.6082L71.0668 15.5084ZM66.6277 21.3907V21.4907H66.7277V21.3907H66.6277ZM64.9608 21.3907H64.8609V21.4907H64.9608V21.3907ZM66.6277 10.2488H66.7277V10.1488H66.6277V10.2488ZM64.9608 10.2488V10.1488H64.8609V10.2488H64.9608ZM62.2336 14.8835V14.9835H62.3336V14.8835H62.2336ZM62.1712 14.8835L62.0976 14.9511L62.1273 14.9835H62.1712V14.8835ZM62.2336 14.2595V14.1595H62.1336V14.2595H62.2336ZM63.7756 14.2595H63.8756V14.1595H63.7756V14.2595ZM60.2102 25.0003V24.9003L60.2089 24.9003L60.2102 25.0003ZM56.8498 22.7541L56.8116 22.6617L56.7204 22.6994L56.7569 22.7911L56.8498 22.7541ZM58.2938 22.1569L58.3871 22.1209L58.3502 22.0253L58.2556 22.0645L58.2938 22.1569ZM60.2102 23.5028L60.208 23.6028H60.2102V23.5028ZM62.2336 20.7307H62.3336V20.6307H62.2336V20.7307ZM62.1712 20.7307V20.6307H62.1253L62.0954 20.6655L62.1712 20.7307ZM60.1746 21.6221L60.1697 21.722L60.1726 21.7221L60.1746 21.6221ZM60.1746 14.0367L60.172 13.9367L60.1697 13.9368L60.1746 14.0367ZM60.3152 20.1259L60.3089 20.2262L60.319 20.2258L60.3152 20.1259ZM60.3152 15.5355L60.3195 15.435L60.309 15.4356L60.3152 15.5355ZM62.3475 17.8262L62.2478 17.8186L62.2471 17.8267L62.2478 17.8347L62.3475 17.8262ZM61.8233 19.4109L61.8983 19.4771L61.8233 19.4109ZM82.0572 10.2512V10.3514L82.0643 10.3509L82.0572 10.2512ZM78.0639 10.2512V10.1511H77.9639V10.2512H78.0639ZM85.2661 11.9046L85.1808 11.9567V11.9567L85.2661 11.9046ZM85.2661 15.5146L85.1808 15.4625V15.4625L85.2661 15.5146ZM82.0572 17.168L82.0643 17.068H82.0572V17.168ZM79.7307 17.168V17.068H79.6307V17.168H79.7307ZM79.7307 21.393V21.493H79.8307V21.393H79.7307ZM78.0639 21.393H77.9639V21.493H78.0639V21.393ZM79.7297 15.5981H79.6297V15.6981H79.7297V15.5981ZM82.0562 15.5981L82.1009 15.5087L82.0798 15.4981H82.0562V15.5981ZM79.7297 11.801V11.701H79.6297V11.801H79.7297ZM82.0918 15.616L82.0471 15.7054L82.0682 15.716H82.0918V15.616ZM92.3429 14.0023L92.3876 13.9129L92.3694 13.9038L92.3491 13.9025L92.3429 14.0023ZM89.3747 15.7048L89.2855 15.6597L89.237 15.7556L89.3361 15.7971L89.3747 15.7048ZM92.3786 14.0202L92.3339 14.1096L92.355 14.1202H92.3786V14.0202ZM95.7568 21.3916V21.4916H95.8568V21.3916H95.7568ZM94.1524 21.3916H94.0524V21.4916H94.1524V21.3916ZM94.1524 20.5003H94.2524V20.4003H94.1524V20.5003ZM94.0989 20.5003V20.4003H94.0441L94.0146 20.4465L94.0989 20.5003ZM91.9775 21.5877L91.983 21.487L91.9698 21.488L91.9775 21.5877ZM90.0723 20.9492L90.0061 21.0241L90.0723 20.9492ZM89.2054 19.1365H89.1053L89.1055 19.141L89.2054 19.1365ZM92.4142 16.6229V16.7229H92.4144L92.4142 16.6229ZM94.1524 17.0507L94.1058 17.1393L94.2524 17.2163V17.0507H94.1524ZM94.1524 16.9438H94.2529L94.2519 16.9339L94.1524 16.9438ZM93.5619 15.8525L93.4992 15.9304L93.5619 15.8525ZM92.3697 15.5087L92.361 15.6083L92.3712 15.6092L92.3813 15.608L92.3697 15.5087ZM90.8455 16.3198L90.8069 16.4121L90.8895 16.4466L90.9329 16.3683L90.8455 16.3198ZM92.1378 20.1086L92.1825 20.0191L92.1614 20.0086H92.1378V20.1086ZM92.6191 17.9693V18.0694L92.6216 18.0693L92.6191 17.9693ZM94.1344 18.3437L94.2338 18.3552L94.2414 18.2889L94.1832 18.2564L94.1344 18.3437ZM92.1735 20.1264L92.1287 20.2159L92.1508 20.2269L92.1755 20.2264L92.1735 20.1264ZM101.604 14.2612V14.1612H101.536L101.511 14.2245L101.604 14.2612ZM99.6968 19.0923V19.1923H99.7648L99.7898 19.129L99.6968 19.0923ZM103.458 14.2612L103.55 14.3007L103.61 14.1612H103.458V14.2612ZM98.9391 24.7702V24.8702H99.005L99.031 24.8097L98.9391 24.7702ZM97.1564 24.7702L97.0653 24.7291L97.0016 24.8702H97.1564V24.7702ZM98.85 21.0176L98.9411 21.0588L98.9594 21.0182L98.9415 20.9774L98.85 21.0176ZM95.8818 14.2612V14.1612H95.7286L95.7902 14.3014L95.8818 14.2612ZM97.6645 14.2612L97.757 14.2233L97.7316 14.1612H97.6645V14.2612ZM99.6433 19.0923L99.5508 19.1302L99.5762 19.1923H99.6433V19.0923ZM88.2866 21.3907V21.4907H88.3866V21.3907H88.2866ZM86.6287 21.3907H86.5287V21.4907H86.6287V21.3907ZM88.2866 10.2488H88.3866V10.1488H88.2866V10.2488ZM86.6287 10.2488V10.1488H86.5287V10.2488H86.6287ZM37.2603 6.23864V6.33864H37.3603V6.23864H37.2603ZM34.1316 6.23864H34.0316V6.33864H34.1316V6.23864ZM37.2603 5.57904H37.3603V5.47904H37.2603V5.57904ZM34.8269 5.57904H34.7269V5.67904H34.8269V5.57904ZM34.8269 3.88548V3.78548H34.7269V3.88548H34.8269ZM37.0196 3.88548V3.98548H37.1196V3.88548H37.0196ZM37.0196 3.2437H37.1196V3.1437H37.0196V3.2437ZM34.8269 3.2437H34.7269V3.3437H34.8269V3.2437ZM34.8269 1.55014V1.45014H34.7269V1.55014H34.8269ZM37.2603 1.55014V1.65014H37.3603V1.55014H37.2603ZM37.2603 0.890539H37.3603V0.790539H37.2603V0.890539ZM34.1316 0.890539V0.790539H34.0316V0.890539H34.1316ZM37.9732 1.55014H37.8732V1.65014H37.9732V1.55014ZM39.4706 1.55014H39.5706V1.45014H39.4706V1.55014ZM37.9732 0.890539V0.790539H37.8732V0.890539H37.9732ZM41.6455 0.890539H41.7455V0.790539H41.6455V0.890539ZM41.6455 1.55014V1.65014H41.7455V1.55014H41.6455ZM40.157 1.55014V1.45014H40.057V1.55014H40.157ZM40.157 6.23864V6.33864H40.257V6.23864H40.157ZM39.4706 6.23864H39.3706V6.33864H39.4706V6.23864ZM44.9969 0.890539H45.0969V0.790539H44.9969V0.890539ZM44.3106 0.890539V0.790539H44.2106V0.890539H44.3106ZM44.9969 6.23864V6.33864H45.0969V6.23864H44.9969ZM44.3106 6.23864H44.2106V6.33864H44.3106V6.23864ZM45.8619 1.55014H45.7619V1.65014H45.8619V1.55014ZM47.3593 1.55014H47.4593V1.45014H47.3593V1.55014ZM45.8619 0.890539V0.790539H45.7619V0.890539H45.8619ZM49.5342 0.890539H49.6342V0.790539H49.5342V0.890539ZM49.5342 1.55014V1.65014H49.6342V1.55014H49.5342ZM48.0457 1.55014V1.45014H47.9457V1.55014H48.0457ZM48.0457 6.23864V6.33864H48.1457V6.23864H48.0457ZM47.3593 6.23864H47.2593V6.33864H47.3593V6.23864ZM61.6839 0.890539V0.790539H61.5839V0.890539H61.6839ZM61.6839 4.01918H61.5839L61.5839 4.02176L61.6839 4.01918ZM62.3703 0.890539H62.4702V0.790539H62.3703V0.890539ZM62.3703 6.23864V6.33864H62.4702V6.23864H62.3703ZM61.6572 6.23864L61.5723 6.29156L61.6017 6.33864H61.6572V6.23864ZM58.9386 1.87994L59.0234 1.82702L58.994 1.77994H58.9386V1.87994ZM58.9029 1.87994V1.77994H58.7994L58.803 1.88341L58.9029 1.87994ZM58.9386 2.90499H59.0386L59.0385 2.90151L58.9386 2.90499ZM58.9386 6.23864V6.33864H59.0386V6.23864H58.9386ZM58.2522 6.23864H58.1522V6.33864H58.2522V6.23864ZM58.2522 0.890539V0.790539H58.1522V0.890539H58.2522ZM59.0812 0.890539L59.166 0.837522L59.1366 0.790539H59.0812V0.890539ZM61.6839 5.05314L61.5991 5.10616L61.6285 5.15314H61.6839V5.05314ZM61.7107 5.05314V5.15314H61.8133L61.8106 5.05056L61.7107 5.05314ZM54.5362 0.675344C53.7689 0.65526 53.029 0.961293 52.5001 1.51753L52.6451 1.65535C53.135 1.14013 53.8202 0.856673 54.5309 0.875275L54.5362 0.675344ZM56.5663 1.51678C56.0333 0.967718 55.2971 0.663219 54.532 0.675322L54.5351 0.875297C55.2451 0.864066 55.9282 1.14661 56.4228 1.65609L56.5663 1.51678ZM57.3789 3.56744C57.3958 2.80203 57.1026 2.06229 56.5658 1.51633L56.4232 1.65654C56.9221 2.16401 57.1947 2.85159 57.1789 3.56303L57.3789 3.56744ZM56.5651 5.61484C57.1088 5.07267 57.4034 4.32943 57.3789 3.56204L57.179 3.56843C57.2017 4.28049 56.9284 4.97014 56.4239 5.47323L56.5651 5.61484ZM54.5336 6.45676C55.2957 6.45676 56.0266 6.15385 56.5653 5.61472L56.4238 5.47335C55.9226 5.97494 55.2426 6.25676 54.5336 6.25676V6.45676ZM52.5018 5.61472C53.0405 6.15385 53.7714 6.45676 54.5336 6.45676V6.25676C53.8245 6.25676 53.1445 5.97494 52.6433 5.47335L52.5018 5.61472ZM51.6882 3.56204C51.6637 4.32943 51.9583 5.07267 52.502 5.61484L52.6432 5.47323C52.1388 4.97014 51.8654 4.28049 51.8881 3.56843L51.6882 3.56204ZM52.502 1.51563C51.9583 2.05781 51.6637 2.80104 51.6882 3.56843L51.8881 3.56204C51.8654 2.84998 52.1388 2.16033 52.6432 1.65724L52.502 1.51563ZM55.8803 5.0277C55.5155 5.39733 55.0178 5.60541 54.4985 5.60541V5.80541C55.0713 5.80541 55.6203 5.5759 56.0226 5.16817L55.8803 5.0277ZM56.4843 3.56619C56.4918 4.11495 56.274 4.64278 55.8815 5.02643L56.0213 5.16944C56.4529 4.74749 56.6926 4.16697 56.6843 3.56344L56.4843 3.56619ZM55.9155 2.10154C56.2955 2.49087 56.5008 3.01799 56.4843 3.56178L56.6842 3.56785C56.7024 2.96978 56.4766 2.39004 56.0586 1.96184L55.9155 2.10154ZM54.5342 1.52421C55.0535 1.52421 55.5511 1.73229 55.9159 2.10193L56.0583 1.96145C55.6559 1.55373 55.107 1.32421 54.5342 1.32421V1.52421ZM53.1525 2.10193C53.5172 1.73229 54.0149 1.52421 54.5342 1.52421V1.32421C53.9614 1.32421 53.4124 1.55373 53.0101 1.96145L53.1525 2.10193ZM52.584 3.56178C52.5675 3.01799 52.7729 2.49087 53.1528 2.10154L53.0097 1.96184C52.5918 2.39004 52.366 2.96978 52.3841 3.56785L52.584 3.56178ZM53.1188 5.0298C52.7512 4.63491 52.5584 4.10846 52.584 3.56956L52.3842 3.56007C52.356 4.15277 52.5681 4.73177 52.9724 5.16607L53.1188 5.0298ZM54.4985 5.60541C53.9792 5.60541 53.4816 5.39733 53.1168 5.0277L52.9744 5.16817C53.3768 5.5759 53.9257 5.80541 54.4985 5.80541V5.60541ZM30.4216 3.37773V4.0195H30.6216V3.37773H30.4216ZM33.1515 3.28664L30.522 3.27773L30.5213 3.47773L33.1508 3.48664L33.1515 3.28664ZM33.2509 3.79375C33.2592 3.65617 33.2592 3.51822 33.2509 3.38064L33.0513 3.39264C33.0591 3.52223 33.0591 3.65216 33.0513 3.78175L33.2509 3.79375ZM32.5549 5.63951C33.0304 5.14157 33.2818 4.47105 33.251 3.78328L33.0512 3.79222C33.0796 4.42551 32.8481 5.0429 32.4103 5.50139L32.5549 5.63951ZM30.5176 6.45476C31.2816 6.48559 32.0225 6.18924 32.5544 5.64002L32.4108 5.50088C31.9184 6.00918 31.2327 6.28346 30.5257 6.25492L30.5176 6.45476ZM28.4803 5.6226C29.0171 6.17063 29.7569 6.47191 30.5239 6.45481L30.5194 6.25486C29.8078 6.27072 29.1213 5.99117 28.6232 5.48265L28.4803 5.6226ZM27.6407 3.56235C27.6208 4.33706 27.9259 5.08476 28.4821 5.62439L28.6214 5.48085C28.1053 4.98012 27.8222 4.28633 27.8406 3.56747L27.6407 3.56235ZM28.4821 1.50543C27.9259 2.04507 27.6208 2.79276 27.6407 3.56747L27.8406 3.56235C27.8222 2.84349 28.1053 2.1497 28.6214 1.64897L28.4821 1.50543ZM31.657 0.90573C30.5744 0.447606 29.3226 0.684133 28.4819 1.50568L28.6216 1.64872C29.4048 0.883514 30.5707 0.663206 31.579 1.08992L31.657 0.90573ZM32.5309 1.52892C32.291 1.25666 31.9916 1.04329 31.656 0.905333L31.58 1.09031C31.8872 1.2166 32.1612 1.41192 32.3808 1.66114L32.5309 1.52892ZM32.0542 2.13815L32.5266 1.66574L32.3852 1.52432L31.9127 1.99673L32.0542 2.13815ZM30.5267 1.52554C31.0564 1.49873 31.5677 1.72322 31.9065 2.13132L32.0604 2.00357C31.6814 1.54697 31.1092 1.2958 30.5166 1.3258L30.5267 1.52554ZM29.0995 2.12278C29.4724 1.73865 29.9858 1.52304 30.5211 1.52567L30.5221 1.32567C29.9323 1.32278 29.3668 1.5603 28.956 1.98347L29.0995 2.12278ZM28.5447 3.56146C28.5263 3.0264 28.7266 2.50691 29.0995 2.12278L28.956 1.98347C28.5452 2.40664 28.3245 2.97892 28.3449 3.56836L28.5447 3.56146ZM29.0995 5.00704C28.7266 4.62291 28.5263 4.10342 28.5447 3.56836L28.3449 3.56146C28.3245 4.1509 28.5452 4.72318 28.956 5.14635L29.0995 5.00704ZM30.5211 5.60415C29.9858 5.60678 29.4724 5.39117 29.0995 5.00704L28.956 5.14635C29.3668 5.56952 29.9323 5.80705 30.5221 5.80415L30.5211 5.60415ZM31.9394 5.03636C31.5654 5.41167 31.0537 5.61695 30.524 5.60418L30.5192 5.80412C31.1037 5.81821 31.6683 5.59168 32.081 5.17753L31.9394 5.03636ZM32.3648 4.01584C32.3509 4.39721 32.199 4.76055 31.9374 5.0384L32.083 5.1755C32.3778 4.86239 32.549 4.45293 32.5647 4.02316L32.3648 4.01584ZM30.5216 4.1195H32.4648V3.9195H30.5216V4.1195ZM33.761 15.2056V16.81H33.961V15.2056H33.761ZM39.2804 15.1056H33.861V15.3056H39.2804V15.1056ZM39.4606 16.2048C39.4639 15.8643 39.4365 15.5242 39.379 15.1886L39.1818 15.2225C39.2374 15.5463 39.2638 15.8744 39.2606 16.2029L39.4606 16.2048ZM38.0441 20.0416C38.9976 18.9941 39.5057 17.6164 39.4606 16.2007L39.2607 16.207C39.3041 17.5708 38.8147 18.8979 37.8962 19.907L38.0441 20.0416ZM33.857 21.7232C35.4277 21.7859 36.9504 21.1749 38.0421 20.0437L37.8982 19.9048C36.8462 20.9949 35.3787 21.5838 33.865 21.5234L33.857 21.7232ZM28.4821 18.7988C29.6048 20.6865 31.6703 21.8086 33.8649 21.7232L33.8571 21.5233C31.7357 21.6059 29.7392 20.5212 28.654 18.6966L28.4821 18.7988ZM28.4821 12.673C27.3594 14.5606 27.3594 16.9112 28.4821 18.7988L28.654 18.6966C27.5687 16.872 27.5687 14.5998 28.654 12.7752L28.4821 12.673ZM33.8649 9.74861C31.6702 9.6632 29.6048 10.7853 28.4821 12.673L28.654 12.7752C29.7392 10.9506 31.7357 9.8659 33.8571 9.94846L33.8649 9.74861ZM37.9691 11.3997C36.8768 10.3193 35.3955 9.72421 33.8594 9.74855L33.8626 9.94852C35.345 9.92504 36.7744 10.4993 37.8285 11.5419L37.9691 11.3997ZM36.8375 12.6735L37.9695 11.5415L37.8281 11.4001L36.6961 12.5321L36.8375 12.6735ZM33.8446 11.553C34.9062 11.5372 35.9312 11.9403 36.6976 12.675L36.836 12.5306C36.0316 11.7595 34.9558 11.3364 33.8417 11.353L33.8446 11.553ZM29.6647 15.7314C29.6647 13.4237 31.5354 11.553 33.8432 11.553V11.353C31.425 11.353 29.4647 13.3133 29.4647 15.7314H29.6647ZM33.8432 19.9099C31.5354 19.9099 29.6647 18.0392 29.6647 15.7314H29.4647C29.4647 18.1496 31.425 20.1099 33.8432 20.1099V19.9099ZM36.7489 18.7633C35.9876 19.539 34.9332 19.9556 33.8474 19.91L33.839 20.1098C34.9814 20.1578 36.0907 19.7194 36.8916 18.9034L36.7489 18.7633ZM37.6119 16.802C37.5534 17.5352 37.2486 18.2271 36.7471 18.7652L36.8934 18.9015C37.4256 18.3304 37.7491 17.5961 37.8113 16.8179L37.6119 16.802ZM33.861 16.91H37.7116V16.71H33.861V16.91ZM43.7371 13.9365C41.5848 13.9416 39.8441 15.6905 39.8492 17.8428L40.0492 17.8424C40.0444 15.8005 41.6957 14.1413 43.7376 14.1365L43.7371 13.9365ZM46.5143 15.0527C45.7776 14.3194 44.7747 13.9166 43.7355 13.9365L43.7393 14.1365C44.7244 14.1176 45.6749 14.4994 46.3732 15.1944L46.5143 15.0527ZM47.6434 17.8262C47.6585 16.7869 47.251 15.7859 46.5143 15.0527L46.3732 15.1944C47.0715 15.8894 47.4577 16.8382 47.4435 17.8233L47.6434 17.8262ZM43.7554 21.7308C45.9078 21.7258 47.6485 19.9769 47.6434 17.8245L47.4434 17.825C47.4482 19.8669 45.7969 21.526 43.755 21.5308L43.7554 21.7308ZM39.8492 17.8428C39.8542 19.9952 41.6031 21.7359 43.7554 21.7308L43.755 21.5308C41.7131 21.5356 40.054 19.8842 40.0492 17.8424L39.8492 17.8428ZM48.3567 17.8424C48.3519 15.8005 50.0032 14.1413 52.0451 14.1365L52.0446 13.9365C49.8923 13.9416 48.1516 15.6905 48.1567 17.8428L48.3567 17.8424ZM52.0625 21.5308C50.0206 21.5356 48.3615 19.8842 48.3567 17.8424L48.1567 17.8428C48.1617 19.9952 49.9106 21.7359 52.0629 21.7308L52.0625 21.5308ZM55.7509 17.825C55.7557 19.8669 54.1044 21.526 52.0625 21.5308L52.0629 21.7308C54.2153 21.7258 55.956 19.9769 55.9509 17.8245L55.7509 17.825ZM54.6807 15.1944C55.379 15.8894 55.7652 16.8382 55.751 17.8233L55.9509 17.8262C55.966 16.7869 55.5585 15.7859 54.8218 15.0527L54.6807 15.1944ZM52.0468 14.1365C53.0319 14.1176 53.9824 14.4994 54.6807 15.1944L54.8218 15.0527C54.0851 14.3194 53.0822 13.9166 52.043 13.9365L52.0468 14.1365ZM49.7189 18.8659C50.1436 19.755 51.0687 20.294 52.0516 20.2253L52.0376 20.0258C51.1366 20.0888 50.2887 19.5946 49.8993 18.7797L49.7189 18.8659ZM50.1271 16.197C49.456 16.9185 49.2941 17.9768 49.7189 18.8659L49.8993 18.7797C49.51 17.9647 49.6584 16.9946 50.2736 16.3333L50.1271 16.197ZM52.7596 15.5972C51.8421 15.2377 50.7982 15.4756 50.1271 16.197L50.2736 16.3333C50.8887 15.6719 51.8456 15.4539 52.6866 15.7834L52.7596 15.5972ZM54.2838 17.8256C54.2814 16.8403 53.677 15.9566 52.7596 15.5972L52.6866 15.7834C53.5275 16.1129 54.0816 16.9229 54.0838 17.8261L54.2838 17.8256ZM53.6724 19.495C54.0936 19.0422 54.314 18.4386 54.2837 17.821L54.084 17.8308C54.1116 18.3945 53.9104 18.9455 53.526 19.3588L53.6724 19.495ZM52.0469 20.2255C52.6651 20.2112 53.2513 19.9477 53.6724 19.495L53.526 19.3588C53.1416 19.772 52.6065 20.0125 52.0423 20.0256L52.0469 20.2255ZM41.4114 18.8659C41.8361 19.755 42.7612 20.294 43.7441 20.2253L43.7301 20.0258C42.8291 20.0888 41.9812 19.5946 41.5918 18.7797L41.4114 18.8659ZM41.8196 16.197C41.1485 16.9185 40.9866 17.9768 41.4114 18.8659L41.5918 18.7797C41.2025 17.9647 41.3509 16.9946 41.9661 16.3333L41.8196 16.197ZM44.4521 15.5972C43.5346 15.2377 42.4907 15.4756 41.8196 16.197L41.9661 16.3333C42.5812 15.6719 43.5381 15.4539 44.3791 15.7834L44.4521 15.5972ZM45.9763 17.8256C45.9739 16.8403 45.3695 15.9566 44.4521 15.5972L44.3791 15.7834C45.2201 16.1129 45.7741 16.9229 45.7763 17.8261L45.9763 17.8256ZM45.365 19.495C45.7861 19.0422 46.0065 18.4386 45.9762 17.821L45.7765 17.8308C45.8041 18.3945 45.6029 18.9455 45.2185 19.3588L45.365 19.495ZM43.7394 20.2255C44.3576 20.2112 44.9438 19.9477 45.365 19.495L45.2185 19.3588C44.8341 19.772 44.299 20.0125 43.7348 20.0256L43.7394 20.2255ZM71.0001 14.1367C72.4365 14.1896 73.6911 15.1237 74.1536 16.4845L74.343 16.4202C73.8537 14.9808 72.5267 13.9928 71.0075 13.9369L71.0001 14.1367ZM68.4733 15.2271C69.1298 14.5296 70.0457 14.1349 71.0036 14.1368L71.004 13.9368C69.9908 13.9348 69.0221 14.3523 68.3277 15.09L68.4733 15.2271ZM67.5382 17.8188C67.4783 16.8628 67.8168 15.9246 68.4733 15.2271L68.3277 15.09C67.6333 15.8278 67.2753 16.8201 67.3386 17.8313L67.5382 17.8188ZM70.1365 21.3707C68.5806 20.8955 67.5231 19.4528 67.5384 17.826L67.3384 17.8241C67.3223 19.5395 68.4374 21.0609 70.0781 21.562L70.1365 21.3707ZM74.2718 19.8824C73.3755 21.2402 71.6925 21.8459 70.1365 21.3707L70.0781 21.562C71.7188 22.063 73.4936 21.4243 74.4387 19.9926L74.2718 19.8824ZM73.006 19.1285L74.2985 20.0198L74.412 19.8552L73.1196 18.9639L73.006 19.1285ZM71.1989 20.189C71.9964 20.1968 72.7383 19.7815 73.1486 19.0976L72.9771 18.9947C72.6033 19.6178 71.9274 19.9961 71.2009 19.9891L71.1989 20.189ZM69.272 18.9791C69.6044 19.7427 70.372 20.2233 71.204 20.189L71.1958 19.9891C70.4462 20.0201 69.7548 19.5871 69.4554 18.8993L69.272 18.9791ZM74.3973 16.7521L69.3255 18.8468L69.4019 19.0316L74.4737 16.937L74.3973 16.7521ZM74.1581 16.4954L74.3452 16.8876L74.5257 16.8015L74.3386 16.4093L74.1581 16.4954ZM69.1789 17.7124C69.1442 17.1809 69.3254 16.6578 69.6816 16.2617L69.5329 16.128C69.1407 16.5642 68.9411 17.1402 68.9793 17.7255L69.1789 17.7124ZM72.4279 16.2183L69.0407 17.6266L69.1175 17.8113L72.5046 16.403L72.4279 16.2183ZM71.0732 15.6082C71.6183 15.5733 72.1315 15.8675 72.3769 16.3555L72.5556 16.2657C72.2742 15.706 71.6856 15.3686 71.0604 15.4086L71.0732 15.6082ZM69.6816 16.2617C70.0377 15.8656 70.5387 15.63 71.0709 15.6083L71.0627 15.4085C70.4767 15.4324 69.9251 15.6918 69.5329 16.128L69.6816 16.2617ZM66.6277 21.2907H64.9608V21.4907H66.6277V21.2907ZM66.5277 10.2488V21.3907H66.7277V10.2488H66.5277ZM64.9608 10.3488H66.6277V10.1488H64.9608V10.3488ZM65.0608 21.3907V10.2488H64.8609V21.3907H65.0608ZM62.2336 14.7835H62.1712V14.9835H62.2336V14.7835ZM62.1336 14.2595V14.8835H62.3336V14.2595H62.1336ZM63.7756 14.1595H62.2336V14.3595H63.7756V14.1595ZM63.8756 21.0516V14.2595H63.6756V21.0516H63.8756ZM60.2102 25.1003C61.2054 25.1003 62.1245 24.807 62.7951 24.1468C63.4663 23.486 63.8756 22.4704 63.8756 21.0516H63.6756C63.6756 22.4317 63.2783 23.3904 62.6548 24.0043C62.0307 24.6187 61.1671 24.9003 60.2102 24.9003V25.1003ZM56.7569 22.7911C57.3188 24.2023 58.6928 25.1207 60.2116 25.1003L60.2089 24.9003C58.773 24.9196 57.4739 24.0513 56.9427 22.7171L56.7569 22.7911ZM58.2556 22.0645L56.8116 22.6617L56.888 22.8465L58.332 22.2493L58.2556 22.0645ZM60.2124 23.4029C59.4004 23.385 58.6795 22.8787 58.3871 22.1209L58.2005 22.1929C58.522 23.0263 59.3149 23.5832 60.208 23.6028L60.2124 23.4029ZM62.1336 21.2745C62.1336 21.9838 61.9444 22.5136 61.6167 22.8653C61.2898 23.2161 60.813 23.4028 60.2102 23.4028V23.6028C60.8553 23.6028 61.3902 23.4018 61.763 23.0017C62.135 22.6024 62.3336 22.018 62.3336 21.2745H62.1336ZM62.1336 20.7307V21.2745H62.3336V20.7307H62.1336ZM62.1712 20.8307H62.2336V20.6307H62.1712V20.8307ZM60.1726 21.7221C60.9675 21.738 61.7281 21.3985 62.247 20.796L62.0954 20.6655C61.6155 21.2228 60.9119 21.5369 60.1766 21.5221L60.1726 21.7221ZM56.4613 17.8294C56.4613 19.9083 58.0932 21.6213 60.1697 21.722L60.1794 21.5222C58.2095 21.4267 56.6613 19.8017 56.6613 17.8294H56.4613ZM60.1697 13.9368C58.0932 14.0375 56.4613 15.7504 56.4613 17.8294H56.6613C56.6613 15.8571 58.2095 14.2321 60.1794 14.1366L60.1697 13.9368ZM62.2448 14.8158C61.7133 14.2372 60.9575 13.9167 60.172 13.9367L60.1771 14.1367C60.9048 14.1181 61.6051 14.4151 62.0976 14.9511L62.2448 14.8158ZM58.0586 17.8307C58.0586 19.098 59.0441 20.1469 60.309 20.2257L60.3214 20.0261C59.162 19.9538 58.2586 18.9924 58.2586 17.8307H58.0586ZM60.309 15.4356C59.0441 15.5145 58.0586 16.5634 58.0586 17.8307H58.2586C58.2586 16.669 59.162 15.7075 60.3214 15.6353L60.309 15.4356ZM61.8917 16.1837C61.4907 15.7316 60.9233 15.4616 60.3195 15.4355L60.3109 15.6354C60.8605 15.6591 61.377 15.9048 61.7421 16.3164L61.8917 16.1837ZM62.4472 17.8338C62.4932 17.2312 62.2928 16.6358 61.8917 16.1837L61.7421 16.3164C62.1072 16.7279 62.2897 17.27 62.2478 17.8186L62.4472 17.8338ZM61.8983 19.4771C62.3002 19.0222 62.4986 18.4226 62.4471 17.8177L62.2478 17.8347C62.2947 18.3851 62.1142 18.9307 61.7484 19.3446L61.8983 19.4771ZM60.319 20.2258C60.9256 20.2025 61.4963 19.932 61.8983 19.4771L61.7484 19.3446C61.3826 19.7586 60.8633 20.0048 60.3113 20.026L60.319 20.2258ZM82.0572 10.1511H78.0639V10.3512H82.0572V10.1511ZM85.3515 11.8526C84.6562 10.7122 83.3822 10.0557 82.05 10.1514L82.0643 10.3509C83.3218 10.2606 84.5245 10.8802 85.1808 11.9567L85.3515 11.8526ZM85.3515 15.5666C86.0468 14.4262 86.0468 12.993 85.3515 11.8526L85.1808 11.9567C85.8371 13.0331 85.8371 14.386 85.1808 15.4625L85.3515 15.5666ZM82.05 17.2678C83.3822 17.3635 84.6562 16.707 85.3515 15.5666L85.1808 15.4625C84.5245 16.539 83.3218 17.1586 82.0643 17.0683L82.05 17.2678ZM79.7307 17.268H82.0572V17.068H79.7307V17.268ZM79.8307 21.393V17.168H79.6307V21.393H79.8307ZM78.0639 21.493H79.7307V21.293H78.0639V21.493ZM77.9639 10.2512V21.393H78.1639V10.2512H77.9639ZM79.7297 15.6981H82.0562V15.4981H79.7297V15.6981ZM79.6297 11.801V15.5981H79.8297V11.801H79.6297ZM82.0918 11.701H79.7297V11.901H82.0918V11.701ZM84.0993 13.7085C84.0993 12.5998 83.2005 11.701 82.0918 11.701V11.901C83.0901 11.901 83.8993 12.7102 83.8993 13.7085H84.0993ZM82.0918 15.716C83.2005 15.716 84.0993 14.8172 84.0993 13.7085H83.8993C83.8993 14.7067 83.0901 15.516 82.0918 15.516V15.716ZM82.0114 15.6876L82.0471 15.7054L82.1365 15.5265L82.1009 15.5087L82.0114 15.6876ZM92.3491 13.9025C91.0685 13.8236 89.8639 14.5145 89.2855 15.6597L89.464 15.7499C90.0064 14.676 91.136 14.0281 92.3368 14.1021L92.3491 13.9025ZM92.4233 13.9307L92.3876 13.9129L92.2982 14.0918L92.3339 14.1096L92.4233 13.9307ZM95.8568 17.1042C95.8568 16.1009 95.4756 15.3017 94.8452 14.7546C94.2164 14.2089 93.3471 13.9202 92.3786 13.9202V14.1202C93.3086 14.1202 94.1284 14.3974 94.7141 14.9057C95.2982 15.4126 95.6568 16.1555 95.6568 17.1042H95.8568ZM95.8568 21.3916V17.1042H95.6568V21.3916H95.8568ZM94.1524 21.4916H95.7568V21.2916H94.1524V21.4916ZM94.0524 20.5003V21.3916H94.2524V20.5003H94.0524ZM94.0989 20.6003H94.1524V20.4003H94.0989V20.6003ZM91.9719 21.6876C92.8596 21.7367 93.7048 21.3034 94.1832 20.5541L94.0146 20.4465C93.5751 21.1349 92.7985 21.533 91.983 21.4879L91.9719 21.6876ZM90.0061 21.0241C90.5488 21.504 91.2629 21.7433 91.9852 21.6874L91.9698 21.488C91.3014 21.5397 90.6407 21.3183 90.1386 20.8743L90.0061 21.0241ZM89.1055 19.141C89.1384 19.8648 89.4634 20.5442 90.0061 21.0241L90.1386 20.8743C89.6364 20.4302 89.3357 19.8016 89.3053 19.132L89.1055 19.141ZM92.4142 16.5229C91.6039 16.5229 90.7807 16.7502 90.1572 17.1896C89.5315 17.6306 89.1054 18.2874 89.1054 19.1365H89.3054C89.3054 18.3634 89.6903 17.7634 90.2724 17.3531C90.8568 16.9412 91.638 16.7229 92.4142 16.7229V16.5229ZM94.1989 16.9622C93.6485 16.6729 93.0359 16.5221 92.4141 16.5229L92.4144 16.7229C93.0036 16.7222 93.5842 16.8651 94.1058 17.1393L94.1989 16.9622ZM94.0524 16.9438V17.0507H94.2524V16.9438H94.0524ZM93.4992 15.9304C93.8135 16.1834 94.013 16.5521 94.0528 16.9537L94.2519 16.9339C94.2067 16.479 93.9807 16.0613 93.6246 15.7746L93.4992 15.9304ZM92.3813 15.608C92.7821 15.5612 93.1848 15.6774 93.4992 15.9304L93.6246 15.7746C93.2685 15.4879 92.8121 15.3564 92.3581 15.4094L92.3813 15.608ZM90.9329 16.3683C91.2174 15.8555 91.7768 15.5578 92.361 15.6083L92.3783 15.4091C91.7154 15.3517 91.0807 15.6895 90.758 16.2713L90.9329 16.3683ZM89.3361 15.7971L90.8069 16.4121L90.884 16.2276L89.4133 15.6125L89.3361 15.7971ZM90.7364 19.1638C90.7364 19.5431 90.954 19.8078 91.2322 19.9729C91.508 20.1364 91.8518 20.2086 92.1378 20.2086V20.0086C91.8801 20.0086 91.5732 19.9426 91.3342 19.8009C91.0978 19.6606 90.9364 19.4529 90.9364 19.1638H90.7364ZM92.6191 17.8693C92.1907 17.8693 91.7265 17.9464 91.3655 18.1446C90.9996 18.3455 90.7364 18.6742 90.7364 19.1638H90.9364C90.9364 18.762 91.1457 18.4935 91.4617 18.32C91.7826 18.1438 92.2097 18.0693 92.6191 18.0693V17.8693ZM94.1832 18.2564C93.7051 17.9895 93.1641 17.8559 92.6167 17.8694L92.6216 18.0693C93.1332 18.0567 93.6388 18.1816 94.0857 18.431L94.1832 18.2564ZM92.1755 20.2264C93.233 20.2053 94.1123 19.406 94.2338 18.3552L94.0351 18.3322C93.9251 19.2836 93.129 20.0073 92.1715 20.0264L92.1755 20.2264ZM92.0931 20.198L92.1287 20.2159L92.2182 20.037L92.1825 20.0191L92.0931 20.198ZM101.511 14.2245L99.6038 19.0556L99.7898 19.129L101.697 14.2979L101.511 14.2245ZM103.458 14.1612H101.604V14.3612H103.458V14.1612ZM99.031 24.8097L103.55 14.3007L103.366 14.2217L98.8473 24.7307L99.031 24.8097ZM97.1564 24.8702H98.9391V24.6702H97.1564V24.8702ZM98.7588 20.9765L97.0653 24.7291L97.2476 24.8114L98.9411 21.0588L98.7588 20.9765ZM95.7902 14.3014L98.7584 21.0579L98.9415 20.9774L95.9733 14.221L95.7902 14.3014ZM97.6645 14.1612H95.8818V14.3612H97.6645V14.1612ZM99.7358 19.0544L97.757 14.2233L97.572 14.2991L99.5508 19.1302L99.7358 19.0544ZM99.6968 18.9923H99.6433V19.1923H99.6968V18.9923ZM88.2866 21.2907H86.6287V21.4907H88.2866V21.2907ZM88.1866 10.2488V21.3907H88.3866V10.2488H88.1866ZM86.6287 10.3488H88.2866V10.1488H86.6287V10.3488ZM86.7287 21.3907V10.2488H86.5287V21.3907H86.7287ZM37.2603 6.13864H34.1316V6.33864H37.2603V6.13864ZM37.1603 5.57904V6.23864H37.3603V5.57904H37.1603ZM34.8269 5.67904H37.2603V5.47904H34.8269V5.67904ZM34.7269 3.88548V5.57904H34.9269V3.88548H34.7269ZM37.0196 3.78548H34.8269V3.98548H37.0196V3.78548ZM36.9196 3.2437V3.88548H37.1196V3.2437H36.9196ZM34.8269 3.3437H37.0196V3.1437H34.8269V3.3437ZM34.7269 1.55014V3.2437H34.9269V1.55014H34.7269ZM37.2603 1.45014H34.8269V1.65014H37.2603V1.45014ZM37.1603 0.890539V1.55014H37.3603V0.890539H37.1603ZM34.1316 0.990539H37.2603V0.790539H34.1316V0.990539ZM34.2316 6.23864V0.890539H34.0316V6.23864H34.2316ZM37.9732 1.65014H39.4706V1.45014H37.9732V1.65014ZM37.8732 0.890539V1.55014H38.0732V0.890539H37.8732ZM41.6455 0.790539H37.9732V0.990539H41.6455V0.790539ZM41.7455 1.55014V0.890539H41.5455V1.55014H41.7455ZM40.157 1.65014H41.6455V1.45014H40.157V1.65014ZM40.257 6.23864V1.55014H40.057V6.23864H40.257ZM39.4706 6.33864H40.157V6.13864H39.4706V6.33864ZM39.3706 1.55014V6.23864H39.5706V1.55014H39.3706ZM44.9969 0.790539H44.3106V0.990539H44.9969V0.790539ZM45.0969 6.23864V0.890539H44.8969V6.23864H45.0969ZM44.3106 6.33864H44.9969V6.13864H44.3106V6.33864ZM44.2106 0.890539V6.23864H44.4106V0.890539H44.2106ZM45.8619 1.65014H47.3593V1.45014H45.8619V1.65014ZM45.7619 0.890539V1.55014H45.9619V0.890539H45.7619ZM49.5342 0.790539H45.8619V0.990539H49.5342V0.790539ZM49.6342 1.55014V0.890539H49.4342V1.55014H49.6342ZM48.0457 1.65014H49.5342V1.45014H48.0457V1.65014ZM48.1457 6.23864V1.55014H47.9457V6.23864H48.1457ZM47.3593 6.33864H48.0457V6.13864H47.3593V6.33864ZM47.2593 1.55014V6.23864H47.4593V1.55014H47.2593ZM61.5839 0.890539V4.01918H61.7839V0.890539H61.5839ZM62.3703 0.790539H61.6839V0.990539H62.3703V0.790539ZM62.4702 6.23864V0.890539H62.2703V6.23864H62.4702ZM61.6572 6.33864H62.3703V6.13864H61.6572V6.33864ZM58.8537 1.93286L61.5723 6.29156L61.742 6.18572L59.0234 1.82702L58.8537 1.93286ZM58.9029 1.97994H58.9386V1.77994H58.9029V1.97994ZM59.0385 2.90151L59.0028 1.87646L58.803 1.88341L58.8386 2.90847L59.0385 2.90151ZM59.0386 6.23864V2.90499H58.8386V6.23864H59.0386ZM58.2522 6.33864H58.9386V6.13864H58.2522V6.33864ZM58.1522 0.890539V6.23864H58.3522V0.890539H58.1522ZM59.0812 0.790539H58.2522V0.990539H59.0812V0.790539ZM61.7687 5.00013L59.166 0.837522L58.9964 0.943555L61.5991 5.10616L61.7687 5.00013ZM61.7107 4.95315H61.6839V5.15314H61.7107V4.95315ZM61.5839 4.02176L61.6107 5.05573L61.8106 5.05056L61.7839 4.01659L61.5839 4.02176Z"
                                fill="white"
                              />
                              <path
                                opacity="0.5"
                                d="M0.396706 0.363786C0.112577 0.715028 -0.0276002 1.16104 0.00451221 1.61168V21.3283C-0.0258169 21.7833 0.12475 22.2318 0.423447 22.5762L0.485841 22.6475L11.5029 11.6037V11.3363L0.459101 0.301392L0.396706 0.363786Z"
                                fill="white"
                              />
                              <path
                                opacity="0.9"
                                d="M15.1575 15.2849L11.5029 11.6036V11.3362L15.1575 7.65491L15.2377 7.70839L19.6142 10.1863C20.8621 10.8905 20.8621 12.0493 19.6142 12.7623L15.2555 15.2403L15.1575 15.2849Z"
                                fill="white"
                              />
                              <path
                                opacity="0.3"
                                d="M15.2647 15.2395L11.5032 11.4691L0.396973 22.5753C0.916659 23.0379 1.69232 23.0642 2.24207 22.6377L15.2647 15.2395"
                                fill="white"
                              />
                              <path
                                opacity="0.7"
                                d="M15.2647 7.70808L2.24207 0.309876C1.69564 -0.122677 0.91743 -0.100121 0.396973 0.363357L11.5032 11.4696L15.2647 7.70808Z"
                                fill="white"
                              />
                            </svg>
                            <em>
                              <svg viewBox="0 0 16 15" fill="none">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8 11.978l-4.702 2.468.898-5.227L.392 5.518l5.257-.763L8 0l2.351 4.755 5.257.763-3.804 3.701.898 5.227L8 11.978z"
                                  fill="url(#gradient)"
                                />
                                <defs>
                                  <linearGradient
                                    id="gradient"
                                    x1={24}
                                    y1="7.985"
                                    x2="8.029"
                                    y2="-8.014"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#FF9F1A" />
                                    <stop offset={1} stopColor="#FC3" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <span>4.5</span>
                            </em>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="x__platform-dropdown x__platform-dropdown--Extension">
                    <a
                      className="x__toggle"
                      style={{
                        background: "linear-gradient(to right, #FFC82D,#FE9D39)"
                      }}
                      href="https://www.exodus.com/install-forwarder/extension/?utm_source=exodus-website&utm_campaign=btc-wallet&utm_content=btc-wallet&referrer=https%3A%2F%2Fgithub.com%2F"
                      target="_blank"
                    >
                      <i className="x__toggle__icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <title>Extension</title>
                          <path
                            d="M19.5 11H18V7C18 5.9 17.1 5 16 5H12V3.5C12 2.83696 11.7366 2.20107 11.2678 1.73223C10.7989 1.26339 10.163 1 9.5 1C8.83696 1 8.20107 1.26339 7.73223 1.73223C7.26339 2.20107 7 2.83696 7 3.5V5H3C1.9 5 1.01 5.9 1.01 7V10.8H2.5C3.99 10.8 5.2 12.01 5.2 13.5C5.2 14.99 3.99 16.2 2.5 16.2H1V20C1 21.1 1.9 22 3 22H6.8V20.5C6.8 19.01 8.01 17.8 9.5 17.8C10.99 17.8 12.2 19.01 12.2 20.5V22H16C17.1 22 18 21.1 18 20V16H19.5C20.163 16 20.7989 15.7366 21.2678 15.2678C21.7366 14.7989 22 14.163 22 13.5C22 12.837 21.7366 12.2011 21.2678 11.7322C20.7989 11.2634 20.163 11 19.5 11Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                      <span className="x__toggle__label">Download Extension</span>
                      <span className="x__toggle__picker" />
                    </a>
                    <div className="x__menu x__menu--to-bottom">
                      <ul>
                        <li className="x__menu__item">
                          <a href="https://www.exodus.com/install-forwarder/extension/?utm_source=exodus-website&utm_campaign=btc-wallet&utm_content=btc-wallet&referrer=https%3A%2F%2Fgithub.com%2F">
                            <i />
                            <span>Download on Google Play</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <section className="x__asset-page__mobile x-active">
              <div className="x__asset-page__mobile__img-container">
                <div className="x__asset-page__mobile__img">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "70.57163020465772%" }}
                    />
                    <img
                         src="/asset-page/img/btc/mobile-screens-lsize.png"
                        alt='Exodus Bitcoin<span class="x-break-sm"></span> Mobile Wallet'
                        loading="lazy"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center center",
                          opacity: 1,
                          transition: "opacity 1000ms"
                        }}
                      />
                  </div>
                </div>
              </div>
              <div className="x__asset-page__mobile__content">
                <h2 className="x__asset-page__mobile__heading">
                  Exodus Bitcoin
                  <span className="x-break-sm" /> Mobile Wallet
                </h2>
                <p className="x__asset-page__mobile__subheading">
                  Secure, manage, and swap your BTC with the mobile security of face
                  or fingerprint scanning. Sync between the Bitcoin desktop wallet
                  and mobile wallet to use your BTC on multiple devices.
                </p>
              </div>
            </section>
            <section className="x__asset-page__desktop x-active">
              <div className="x__asset-page__desktop__img-container">
                <div className="x__asset-page__desktop__img">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "64.47453255963894%" }}
                    />
                     <img
                        src="/asset-page/img/btc/desktop-screen-lsize.png"
                        alt='Exodus Bitcoin<span class="x-break-sm"></span> Desktop Wallet'
                        loading="lazy"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center center",
                          opacity: 1,
                          transition: "opacity 1000ms"
                        }}
                      />
                  </div>
                </div>
              </div>
              <div className="x__asset-page__desktop__content">
                <h2 className="x__asset-page__desktop__heading">
                  Exodus Bitcoin
                  <span className="x-break-sm" />
                  Desktop Wallet
                </h2>
                <p className="x__asset-page__desktop__subheading">
                  Send and receive BTC easily with a Bitcoin BTC address or
                  scannable QR code. Learn how to Send and Receive in Exodus.
                </p>
              </div>
            </section>
            <section className="x__asset-page__web3 x-active">
              <div className="x__asset-page__web3__img-container">
                <div className="x__asset-page__web3__img">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "65.74621959237344%" }}
                    />
                     <img
                        src="/asset-page/img/btc/web3-screens-lsize.png"
                        alt='Exodus Bitcoin Web3<span class="x-break-sm"></span> Browser Extension'
                        loading="lazy"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center center",
                          opacity: 1, // ORIGINAL: opacity: 0
                          transition: "opacity 1000ms"
                        }}
                      />
                  </div>
                </div>
              </div>
              <div className="x__asset-page__web3__content">
                <h2 className="x__asset-page__web3__heading">
                  Exodus Bitcoin Web3
                  <span className="x-break-sm" />
                  Browser Extension
                </h2>
                <p className="x__asset-page__web3__subheading">
                  Connect your Bitcoin wallet to the world of of DeFi and Web3 on
                  Chrome and Brave browsers. Manage and swap BTC on multiple
                  networks like Ethereum, Solana, Tron, Polygon, and many more.
                </p>
              </div>
            </section>
            <section className="x__asset-page__about x-active">
              <div className="x__asset-page__about__content">
                <div className="x__asset-page__about__heading-wrapper">
                  <i className="x__asset-icon__wrapper">
                    <img
                      className="x__asset-icon x__asset-icon--larger"
                      src="data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient x1='115.077%25' y1='77.227%25' x2='27.227%25' y2='34.923%25' id='a'%3e%3cstop stop-color='%23FE9D39' offset='0%25'/%3e%3cstop stop-color='%23FFC82D' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath d='m22 1.155 13.32 7.69a4 4 0 0 1 2 3.464v15.382a4 4 0 0 1-2 3.464L22 38.845a4 4 0 0 1-4 0l-13.32-7.69a4 4 0 0 1-2-3.464V12.309a4 4 0 0 1 2-3.464L18 1.155a4 4 0 0 1 4 0z' fill='url(%23a)'/%3e%3cpath d='M24.198 26.417c-1.176.425-2.267.264-2.752.2a16.982 16.982 0 0 1-1.074-.194l-.715 2.667-1.642-.44.703-2.624-1.25-.335-.703 2.624-1.642-.44.703-2.624-3.23-.866.866-1.882.982.264c.33.088.476.094.649.001.173-.094.257-.285.3-.446l1.82-6.794c.115-.426.111-.55-.026-.821-.137-.272-.59-.424-.849-.493l-.949-.255.457-1.704 3.23.865.705-2.632 1.642.44-.705 2.632 1.25.335.706-2.632 1.642.44-.714 2.664c1.204.404 2.053.881 2.69 1.682.825 1.035.418 2.34.31 2.649-.107.308-.407.877-.788 1.194-.381.318-1.161.528-1.161.528s.752.383 1.2.955c.446.572.662 1.427.346 2.51-.314 1.084-.827 2.106-2.001 2.532zm-3.408-5.7c-.799-.271-1.856-.497-1.856-.497l-.944 3.522s1.083.315 1.827.457c.743.141 1.544.159 1.976.052.43-.107.97-.308 1.186-1.113.216-.806-.23-1.287-.497-1.523-.265-.236-.893-.626-1.692-.897zm-.053-1.765c.605.137 1.279.17 1.807.04s.896-.46 1.041-1.062c.145-.602-.118-1.216-.738-1.604-.62-.388-1.068-.525-1.58-.67-.512-.145-1.046-.24-1.046-.24l-.85 3.17s.762.228 1.366.366z' fill='white'/%3e%3c/g%3e%3c/svg%3e"
                      alt="Bitcoin (BTC)"
                    />
                  </i>
                  <h2 className="x__asset-page__about__heading">
                    About Bitcoin (BTC)
                  </h2>
                </div>
                <h3 className="x__asset-page__about__subheading">
                  The cryptocurrency that started it all, Bitcoin is the first
                  digital currency to solve the “double spending” or counterfeiting
                  problem. This is done without a central authority like a bank or a
                  government, making Bitcoin truly peer-to-peer.
                </h3>
                <ul className="x__asset-page__about__tags">
                  <li
                    className="x__asset-page__about__tag"
                    style={{ color: "#FFC82D", background: "#FFC82D15" }}
                  >
                    stablecoin
                  </li>
                  <li
                    className="x__asset-page__about__tag"
                    style={{ color: "#FFC82D", background: "#FFC82D15" }}
                  >
                    backed
                  </li>
                  <li
                    className="x__asset-page__about__tag"
                    style={{ color: "#FFC82D", background: "#FFC82D15" }}
                  >
                    transparent
                  </li>
                </ul>
              </div>
            </section>
            <section className="x__asset-page__chart x-active">
              <div className="x__asset-page__chart__content">
                <div className="container no-gutters x-components-asset-page-stats__container">
                  <div className="row no-gutters mt-5 x-components-asset-page-stats__container-row">
                    <div className="x-components-asset-page-stats__currencyNameContainer x-components-asset-page-stats__price">
                      <div className="x-components-asset-page-stats__currencyName">
                        $59,825.40
                      </div>
                    </div>
                    <div className="x-components-asset-page-stats__currencyChangeContainer">
                      <div className="x-components-asset-page-stats__change x-components-asset-page-stats__changeGreen">
                        <span className="x-components-asset-page-stats__change-percent">
                          2.91%
                        </span>
                      </div>
                      <div className="x-components-asset-page-stats__currencySymbolSubText">
                        24h change
                      </div>
                    </div>
                  </div>
                  <div className="row no-gutters x-components-asset-page-stats__graph">
                    <div className="col-12">
                      <div style={{ position: "relative" }}>
                        <div className="mb-3">
                          <div className="x-components-asset-page-graph__time-selectors">
                            <div className="x-components-asset-page-graph__time-selector">
                              <a href="#" title="One Day">
                                1D
                              </a>
                            </div>
                            <div className="x-components-asset-page-graph__time-selector x-components-asset-page-graph__time-selector--selected">
                              <a href="#" title="One Week">
                                1W
                              </a>
                            </div>
                            <div className="x-components-asset-page-graph__time-selector">
                              <a href="#" title="One Month">
                                1M
                              </a>
                            </div>
                            <div className="x-components-asset-page-graph__time-selector">
                              <a href="#" title="Three Months">
                                3M
                              </a>
                            </div>
                            <div className="x-components-asset-page-graph__time-selector">
                              <a href="#" title="Six Months">
                                6M
                              </a>
                            </div>
                            <div className="x-components-asset-page-graph__time-selector">
                              <a href="#" title="One Year">
                                1Y
                              </a>
                            </div>
                            <div className="x-components-asset-page-graph__time-selector">
                              <a href="#" title="Two Years">
                                2Y
                              </a>
                            </div>
                          </div>
                        </div>
                        <canvas
                          id="x_chart"
                          style={{ width: 1155, height: 230 }}
                          width={1155}
                          height={230}
                        />
                        <div
                          className="erd_scroll_detection_container erd_scroll_detection_container_animation_active"
                          style={{
                            visibility: "hidden",
                            display: "inline",
                            width: 0,
                            height: 0,
                            zIndex: -1,
                            overflow: "hidden",
                            margin: 0,
                            padding: 0
                          }}
                        >
                          <div
                            dir="ltr"
                            className="erd_scroll_detection_container"
                            style={{
                              position: "absolute",
                              flex: "0 0 auto",
                              overflow: "hidden",
                              zIndex: -1,
                              visibility: "hidden",
                              width: "100%",
                              height: "100%",
                              left: 0,
                              top: 0
                            }}
                          >
                            <div
                              className="erd_scroll_detection_container"
                              style={{
                                position: "absolute",
                                flex: "0 0 auto",
                                overflow: "hidden",
                                zIndex: -1,
                                visibility: "hidden",
                                inset: "-18px -17px -17px -18px"
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  flex: "0 0 auto",
                                  overflow: "scroll",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  width: "100%",
                                  height: "100%"
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: 1200,
                                    height: 359
                                  }}
                                ></div>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  flex: "0 0 auto",
                                  overflow: "scroll",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  width: "100%",
                                  height: "100%"
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    width: "200%",
                                    height: "200%"
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5 x-components-asset-page-stats__bar">
                    <div className="col-6 col-md-2 x-components-asset-page-stats__tags">
                      <div className="x-components-asset-page-stats__label">
                        Market Cap
                      </div>
                      <div className="x-components-asset-page-stats__stat">
                        1.2T USD
                      </div>
                    </div>
                    <div className="col-6 col-md-2 x-components-asset-page-stats__tags">
                      <div className="x-components-asset-page-stats__label">
                        24hr Volume
                      </div>
                      <div className="x-components-asset-page-stats__stat">
                        30.9B USD
                      </div>
                    </div>
                    <div className="col-6 col-md-2 x-components-asset-page-stats__tags">
                      <div className="x-components-asset-page-stats__label">
                        24hr Low
                      </div>
                      <div className="x-components-asset-page-stats__stat">...</div>
                    </div>
                    <div className="col-6 col-md-2 x-components-asset-page-stats__tags">
                      <div className="x-components-asset-page-stats__label">
                        24hr High
                      </div>
                      <div className="x-components-asset-page-stats__stat">...</div>
                    </div>
                    <div className="col-6 col-md-2 x-components-asset-page-stats__tags">
                      <div className="x-components-asset-page-stats__label">
                        52 weeks Low
                      </div>
                      <div className="x-components-asset-page-stats__stat">...</div>
                    </div>
                    <div className="col-6 col-md-2 x-components-asset-page-stats__tags">
                      <div className="x-components-asset-page-stats__label">
                        52 weeks High
                      </div>
                      <div className="x-components-asset-page-stats__stat">...</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="x__asset-page__summary x-active">
              <div className="x__asset-page__summary__content">
                <ul className="x__asset-page__summary__list">
                  <li className="x__asset-page__summary__list-item">
                    <span
                      style={{
                        display: "block",
                        position: "relative",
                        width: "fit-content"
                      }}
                    >
                      <svg
                        viewBox="0 0 113 120"
                        fill="none"
                        style={{ display: "block", height: "100%", width: "100%" }}
                      >
                        <title>Send and Receive&lt;br /&gt; Bitcoin BTC</title>
                        <path
                          opacity="0.5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M83.3977 41.5435L38.0671 65.4888L42.1753 92.5998L83.3977 41.5435Z"
                          fill="url(#gradient1)"
                        />
                        <path
                          opacity="0.5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M90.3698 30.4341L42.1753 68.6483V92.5998L90.3698 30.4341Z"
                          fill="url(#gradient2)"
                        />
                        <g opacity="0.25" filter="url(#filter1)">
                          <path
                            d="M22.7063 54.3856L90.3698 30.4341C90.3698 30.4341 80.9909 37.8707 62.2331 52.7441L37.8541 65.4826L22.7063 54.3856Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          opacity="0.25"
                          d="M22.7063 54.3856L90.3698 30.4341C90.3698 30.4341 80.9909 37.8707 62.2331 52.7441L37.8541 65.4826L22.7063 54.3856Z"
                          fill="url(#gradient3)"
                        />
                        <path
                          d="M54.4614 58.9065L42.1753 68.6484L75.7229 93.2249C76.2775 93.6311 77.0018 93.7241 77.641 93.4711C78.2801 93.2181 78.7446 92.6545 78.8708 91.9788L81.394 78.4742L54.4614 58.9065Z"
                          fill="#FE9D39"
                        />
                        <path
                          d="M64.5708 50.8906L83.921 64.9493L81.394 78.4742L54.4614 58.9066L64.5708 50.8906Z"
                          fill="#FFC82D"
                        />
                        <path
                          d="M83.921 64.9493L64.5708 50.8905L90.3698 30.4341L83.921 64.9493Z"
                          fill="#FFC82D"
                        />
                        <g opacity="0.4" style={{ mixBlendMode: "overlay" }}>
                          <path
                            d="M83.921 64.9493L64.5708 50.8905L90.3698 30.4341L83.921 64.9493Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <g opacity="0.4">
                          <path
                            d="M104.169 26.4714L103.688 26.6412L103.355 25.6984L103.836 25.5286L104.169 26.4714Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M99.6994 28.0506L98.7382 28.3902L98.4051 27.4473L99.3663 27.1077L99.6994 28.0506Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M94.7493 29.7996L93.7881 30.1392L93.455 29.1963L94.4162 28.8567L94.7493 29.7996Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M89.7992 31.5485L88.838 31.8881L88.5049 30.9452L89.466 30.6056L89.7992 31.5485Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M84.8491 33.2975L83.8879 33.6371L83.5547 32.6942L84.5159 32.3546L84.8491 33.2975Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M79.8989 35.0464L78.9378 35.386L78.6046 34.4432L79.5658 34.1036L79.8989 35.0464Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M74.9488 36.7954L73.9876 37.135L73.6545 36.1921L74.6157 35.8525L74.9488 36.7954Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M69.9987 38.5444L69.0375 38.884L68.7044 37.9411L69.6656 37.6015L69.9987 38.5444Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M65.0486 40.2933L64.0874 40.6329L63.7543 39.69L64.7155 39.3504L65.0486 40.2933Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M60.0985 42.0423L59.1373 42.3819L58.8042 41.439L59.7654 41.0994L60.0985 42.0423Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M55.1484 43.7912L54.1872 44.1308L53.854 43.188L54.8152 42.8484L55.1484 43.7912Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M50.1983 45.5402L49.2371 45.8798L48.9039 44.9369L49.8651 44.5973L50.1983 45.5402Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M45.2481 47.2892L44.287 47.6288L43.9538 46.6859L44.915 46.3463L45.2481 47.2892Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M40.298 49.0381L39.3368 49.3777L39.0037 48.4348L39.9649 48.0952L40.298 49.0381Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M35.3479 50.7871L34.3867 51.1267L34.0536 50.1838L35.0148 49.8442L35.3479 50.7871Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.3978 52.536L29.4366 52.8756L29.1035 51.9328L30.0647 51.5932L30.3978 52.536Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M25.4477 54.285L24.4865 54.6246L24.1534 53.6817L25.1146 53.3421L25.4477 54.285Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M20.4976 56.034L19.5364 56.3736L19.2032 55.4307L20.1644 55.0911L20.4976 56.034Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M15.5475 57.7829L14.5863 58.1225L14.2531 57.1796L15.2143 56.84L15.5475 57.7829Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M10.5973 59.5319L9.63615 59.8715L9.30302 58.9286L10.2642 58.589L10.5973 59.5319Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M5.64722 61.2808L5.16663 61.4506L4.8335 60.5078L5.31409 60.338L5.64722 61.2808Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M9.0638 44.1356L8.65312 43.8279L9.25277 43.0276L9.66345 43.3353L9.0638 44.1356Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M13.2938 47.3051L12.4724 46.6897L13.0721 45.8894L13.8934 46.5049L13.2938 47.3051Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M17.5237 50.4747L16.7024 49.8593L17.302 49.059L18.1234 49.6745L17.5237 50.4747Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M21.7537 53.6443L20.9323 53.0288L21.532 52.2286L22.3533 52.844L21.7537 53.6443Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M25.9837 56.8139L25.1623 56.1984L25.762 55.3981L26.5833 56.0136L25.9837 56.8139Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.2136 59.9834L29.3923 59.368L29.9919 58.5677L30.8133 59.1832L30.2136 59.9834Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M34.4436 63.153L33.6222 62.5375L34.2219 61.7373L35.0432 62.3527L34.4436 63.153Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M38.2629 66.0148L37.8522 65.7071L38.4519 64.9068L38.8625 65.2146L38.2629 66.0148Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter1"
                            x="0.706299"
                            y="12.4341"
                            width="111.664"
                            height="79.0486"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={11} />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="gradient1"
                            x1="42.8657"
                            y1="41.5435"
                            x2="84.7402"
                            y2="88.2448"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient2"
                            x1="51.7895"
                            y1="30.4341"
                            x2="93.4943"
                            y2="83.7014"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient3"
                            x1="91.7231"
                            y1="52.7542"
                            x2="33.2242"
                            y2="22.7499"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <h2>
                      Send and Receive
                      <br /> Bitcoin BTC
                    </h2>
                    <p>
                      Send and receive BTC easily with a Bitcoin BTC address or
                      scannable QR code. Learn how to send and receive in Exodus.
                    </p>
                  </li>
                  <li className="x__asset-page__summary__list-item">
                    <span
                      style={{
                        display: "block",
                        position: "relative",
                        width: "fit-content"
                      }}
                    >
                      <i
                        className="x__asset-icon__wrapper"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "14%",
                          width: "39%",
                          height: "35%"
                        }}
                      >
                        <img
                          className="x__asset-icon x__asset-icon--100"
                          src="data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient x1='115.077%25' y1='77.227%25' x2='27.227%25' y2='34.923%25' id='a'%3e%3cstop stop-color='%23FE9D39' offset='0%25'/%3e%3cstop stop-color='%23FFC82D' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath d='m22 1.155 13.32 7.69a4 4 0 0 1 2 3.464v15.382a4 4 0 0 1-2 3.464L22 38.845a4 4 0 0 1-4 0l-13.32-7.69a4 4 0 0 1-2-3.464V12.309a4 4 0 0 1 2-3.464L18 1.155a4 4 0 0 1 4 0z' fill='url(%23a)'/%3e%3cpath d='M24.198 26.417c-1.176.425-2.267.264-2.752.2a16.982 16.982 0 0 1-1.074-.194l-.715 2.667-1.642-.44.703-2.624-1.25-.335-.703 2.624-1.642-.44.703-2.624-3.23-.866.866-1.882.982.264c.33.088.476.094.649.001.173-.094.257-.285.3-.446l1.82-6.794c.115-.426.111-.55-.026-.821-.137-.272-.59-.424-.849-.493l-.949-.255.457-1.704 3.23.865.705-2.632 1.642.44-.705 2.632 1.25.335.706-2.632 1.642.44-.714 2.664c1.204.404 2.053.881 2.69 1.682.825 1.035.418 2.34.31 2.649-.107.308-.407.877-.788 1.194-.381.318-1.161.528-1.161.528s.752.383 1.2.955c.446.572.662 1.427.346 2.51-.314 1.084-.827 2.106-2.001 2.532zm-3.408-5.7c-.799-.271-1.856-.497-1.856-.497l-.944 3.522s1.083.315 1.827.457c.743.141 1.544.159 1.976.052.43-.107.97-.308 1.186-1.113.216-.806-.23-1.287-.497-1.523-.265-.236-.893-.626-1.692-.897zm-.053-1.765c.605.137 1.279.17 1.807.04s.896-.46 1.041-1.062c.145-.602-.118-1.216-.738-1.604-.62-.388-1.068-.525-1.58-.67-.512-.145-1.046-.24-1.046-.24l-.85 3.17s.762.228 1.366.366z' fill='white'/%3e%3c/g%3e%3c/svg%3e"
                          alt="Bitcoin (BTC)"
                        />
                      </i>
                      <svg
                        viewBox="0 0 106 120"
                        fill="none"
                        style={{ display: "block", height: "100%", width: "100%" }}
                      >
                        <title>Swap Bitcoin instantly from your wallet</title>
                        <path
                          opacity="0.25"
                          d="M58.3205 20.3093L84.9615 35.6905C87.4367 37.1196 88.9615 39.7606 88.9615 42.6187V58.6704C88.0656 58.5251 87.1316 58.6866 86.3208 59.1547L84.6313 60.1301V44.5414C84.6313 42.0405 83.2972 39.7296 81.1313 38.4792L57.8205 25.0207C55.6547 23.7702 52.9863 23.7702 50.8205 25.0207L27.5096 38.4792C25.3438 39.7296 24.0096 42.0405 24.0096 44.5414V71.4585C24.0096 73.9594 25.3438 76.2702 27.5096 77.5207L50.8205 90.9792C52.9863 92.2296 55.6547 92.2296 57.8205 90.9792L62.9285 88.0301V90.6143C62.9285 91.3565 63.2712 92.0499 63.845 92.501L58.3205 95.6905C55.8452 97.1196 52.7957 97.1196 50.3205 95.6905L23.6794 80.3093C21.2042 78.8803 19.6794 76.2393 19.6794 73.3811V42.6187C19.6794 39.7606 21.2042 37.1196 23.6794 35.6905L50.3205 20.3093C52.7957 18.8803 55.8452 18.8803 58.3205 20.3093Z"
                          fill="url(#gradient1)"
                        />
                        <path
                          opacity="0.25"
                          d="M57.8111 25.0208L81.122 38.4794C83.2878 39.7298 84.622 42.0407 84.622 44.5416V60.1356L73.0002 66.8454C71.7626 67.5599 71.0002 68.8804 71.0002 70.3095V75.3398L64.1285 79.3072C63.3859 79.736 62.9285 80.5283 62.9285 81.3857V88.0249L57.8111 90.9794C55.6453 92.2298 52.9769 92.2298 50.8111 90.9794L27.5002 77.5208C25.3344 76.2704 24.0002 73.9595 24.0002 71.4587V44.5416C24.0002 42.0407 25.3344 39.7298 27.5002 38.4794L50.8111 25.0208C52.9769 23.7704 55.6453 23.7704 57.8111 25.0208Z"
                          fill="url(#gradient2)"
                        />
                        <g opacity="0.1">
                          <path
                            d="M66.1663 52.7012L55.946 46V49.7467L62.5024 54.0071L61.731 56.4478H55.946V59.5522H61.731L62.5024 61.9929L55.946 66.2533V70L66.1663 63.3202L64.495 58.0107L66.1663 52.7012Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M47.0541 59.5522H52.8177V56.4478H47.0326L46.2827 54.0071L52.8177 49.7467V46L42.5974 52.7012L44.2687 58.0107L42.5974 63.3202L52.8392 70V66.2533L46.2827 61.9929L47.0541 59.5522Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          opacity="0.4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M59.4868 11.5602L59.0706 11.3199L59.5706 10.4539L59.9868 10.6942L59.4868 11.5602ZM63.6495 13.9635L62.8169 13.4829L63.3169 12.6168L64.1495 13.0975L63.6495 13.9635ZM67.8121 16.3668L66.9796 15.8862L67.4796 15.0202L68.3121 15.5008L67.8121 16.3668ZM71.9748 18.7702L71.1423 18.2895L71.6423 17.4235L72.4748 17.9041L71.9748 18.7702ZM76.1375 21.1735L75.3049 20.6928L75.8049 19.8268L76.6375 20.3074L76.1375 21.1735ZM80.3001 23.5768L79.4676 23.0961L79.9676 22.2301L80.8001 22.7107L80.3001 23.5768ZM84.4628 25.9801L83.6302 25.4994L84.1302 24.6334L84.9628 25.1141L84.4628 25.9801ZM88.6254 28.3834L87.7929 27.9027L88.2929 27.0367L89.1254 27.5174L88.6254 28.3834ZM92.3718 30.5464L91.9556 30.306L92.4556 29.44L92.8718 29.6804C93.0311 29.7723 93.1874 29.8681 93.3407 29.9676L92.7961 30.8063C92.6575 30.7163 92.516 30.6296 92.3718 30.5464ZM96.0864 34.4607C95.9358 34.1652 95.7698 33.8777 95.5892 33.5995L96.4279 33.0549C96.6275 33.3624 96.811 33.6801 96.9774 34.0067L96.0864 34.4607ZM97.1218 38.7736C97.1218 38.6071 97.1175 38.4413 97.1088 38.2762L98.1075 38.224C98.117 38.4064 98.1218 38.5897 98.1218 38.7736V39.2894H97.1218V38.7736ZM97.1218 43.4028H98.1218V44.4298H97.1218V43.4028ZM97.1218 48.5446H98.1218V49.5724H97.1218V48.5446ZM97.1218 53.6861H98.1218V54.7149H97.1218V53.6861ZM10.5193 57.548H11.5193V58.039H10.5193V57.548ZM97.1218 58.8277H98.1218V59.34L97.1218 59.3409V58.8277ZM10.5193 61.9741H11.5193V62.9585H10.5193V61.9741ZM10.5193 66.8944H11.5193V67.8778H10.5193V66.8944ZM10.5193 71.8149H11.5193V72.7975H10.5193V71.8149ZM10.5193 76.7331H11.5193V77.2266C11.5193 77.3931 11.5236 77.559 11.5323 77.7241L10.5336 77.7763C10.5241 77.5938 10.5193 77.4106 10.5193 77.2266V76.7331ZM12.2132 82.9453C12.0136 82.6379 11.8302 82.3202 11.6637 81.9936L12.5547 81.5395C12.7053 81.835 12.8713 82.1225 13.0519 82.4007L12.2132 82.9453ZM15.7693 86.3199C15.61 86.2279 15.4537 86.1321 15.3005 86.0326L15.845 85.1939C15.9836 85.2839 16.1251 85.3706 16.2693 85.4539L16.6856 85.6942L16.1856 86.5602L15.7693 86.3199ZM20.3482 88.9635L19.5157 88.4829L20.0157 87.6168L20.8482 88.0975L20.3482 88.9635ZM24.5109 91.3668L23.6783 90.8862L24.1783 90.0201L25.0109 90.5008L24.5109 91.3668ZM28.6735 93.7702L27.841 93.2895L28.341 92.4235L29.1735 92.9041L28.6735 93.7702ZM32.8362 96.1735L32.0037 95.6928L32.5037 94.8268L33.3362 95.3074L32.8362 96.1735ZM36.9988 98.5768L36.1663 98.0961L36.6663 97.2301L37.4988 97.7108L36.9988 98.5768ZM41.1615 100.98L40.329 100.499L40.829 99.6334L41.6615 100.114L41.1615 100.98ZM45.3242 103.383L44.4916 102.903L44.9916 102.037L45.8242 102.517L45.3242 103.383ZM49.0706 105.546L48.6543 105.306L49.1543 104.44L49.5706 104.68L49.0706 105.546Z"
                          fill="#FFFFFF"
                        />
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M53.7727 102.781L57.8517 109.716L49.806 109.652L53.7727 102.781Z"
                          fill="#FFFFFF"
                        />
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M58.7871 6L54.8208 13L50.8538 6L58.7871 6Z"
                          fill="#FFFFFF"
                        />
                        <path
                          opacity="0.5"
                          d="M90.3205 59.1548L103.641 66.8454C104.879 67.5599 105.641 68.8804 105.641 70.3095V85.6907C105.641 87.1198 104.879 88.4403 103.641 89.1548L90.3205 96.8454C89.0829 97.5599 87.5581 97.5599 86.3205 96.8454L73 89.1548C71.7624 88.4403 71 87.1198 71 85.6907V70.3095C71 68.8804 71.7624 67.5599 73 66.8454L86.3205 59.1548C87.5581 58.4403 89.0829 58.4403 90.3205 59.1548Z"
                          fill="url(#gradient3)"
                        />
                        <path
                          opacity="0.5"
                          d="M74.5205 74.6929L82.5128 79.3072C83.2554 79.736 83.7128 80.5283 83.7128 81.3857V90.6144C83.7128 91.4719 83.2554 92.2642 82.5128 92.6929L74.5205 97.3072C73.778 97.736 72.8631 97.736 72.1205 97.3072L64.1282 92.6929C63.3857 92.2642 62.9282 91.4719 62.9282 90.6144V81.3857C62.9282 80.5283 63.3857 79.736 64.1282 79.3072L72.1205 74.6929C72.8631 74.2642 73.778 74.2642 74.5205 74.6929Z"
                          fill="url(#gradient4)"
                        />
                        <path
                          opacity="0.5"
                          d="M74.5205 74.6929L82.5128 79.3072C83.2554 79.736 83.7128 80.5283 83.7128 81.3857V90.6144C83.7128 91.4719 83.2554 92.2642 82.5128 92.6929L74.5205 97.3072C73.778 97.736 72.8631 97.736 72.1205 97.3072L64.1282 92.6929C63.3857 92.2642 62.9282 91.4719 62.9282 90.6144V81.3857C62.9282 80.5283 63.3857 79.736 64.1282 79.3072L72.1205 74.6929C72.8631 74.2642 73.778 74.2642 74.5205 74.6929Z"
                          fill="url(#gradient5)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.0002 19.155L35.3202 26.845C35.9282 27.1961 36.4332 27.701 36.7843 28.3091C37.1353 28.9172 37.3202 29.6069 37.3202 30.309V45.691C37.3202 46.3932 37.1353 47.0829 36.7843 47.691C36.4332 48.299 35.9282 48.804 35.3202 49.155L22.0002 56.845C21.3921 57.1961 20.7023 57.3809 20.0002 57.3809C19.298 57.3809 18.6083 57.1961 18.0002 56.845L4.68018 49.155C4.07211 48.804 3.56717 48.299 3.2161 47.691C2.86503 47.0829 2.68019 46.3932 2.68018 45.691V30.309C2.68019 29.6069 2.86503 28.9172 3.2161 28.3091C3.56717 27.701 4.07211 27.1961 4.68018 26.845L18.0002 19.155C18.6083 18.804 19.298 18.6191 20.0002 18.6191C20.7023 18.6191 21.3921 18.804 22.0002 19.155Z"
                          fill="#FFC82D"
                        />
                        <defs>
                          <linearGradient
                            id="gradient1"
                            x1="26.6542"
                            y1="19.2375"
                            x2="105.634"
                            y2="106.493"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient2"
                            x1="24.0002"
                            y1="24.083"
                            x2="108.386"
                            y2="98.5394"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.5" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.1"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient3"
                            x1="95.9311"
                            y1="97.7689"
                            x2="77.9377"
                            y2="60.0822"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient4"
                            x1="77.8869"
                            y1="97.8613"
                            x2="67.0909"
                            y2="75.2493"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient5"
                            x1="77.8869"
                            y1="97.8613"
                            x2="67.0909"
                            y2="75.2493"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <h2>Swap Bitcoin instantly from your wallet</h2>
                    <p>
                      Easily exchange Bitcoin for your favorite cryptos like
                      Ethereum, Monero, Litecoin, and more right from your wallet,
                      in seconds. No sign up required. Learn how to swap in Exodus.
                    </p>
                  </li>
                  <li className="x__asset-page__summary__list-item">
                    <span
                      style={{
                        display: "block",
                        position: "relative",
                        width: "fit-content"
                      }}
                    >
                      <svg
                        viewBox="0 0 60 120"
                        fill="none"
                        style={{ display: "block", height: "100%", width: "100%" }}
                      >
                        <title>Trezor Hardware Wallet Integration</title>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 105V68.7931V105C11.7584 94.6636 6.95783 88.5444 5.59842 86.6425C3.5593 83.7896 0 77.5862 0 68.7931L0 19C0 16.7909 1.79086 15 4 15H56C58.2091 15 60 16.7909 60 19V68.7931C60 77.5862 56.4407 83.7896 54.4016 86.6425C53.0422 88.5444 48.2416 94.6636 40 105H20Z"
                          fill="url(#gradient1)"
                        />
                        <g opacity="0.4">
                          <path
                            d="M30.5 64.4517V63.9396H29.5V64.4517H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 59.8428V58.8186H29.5V59.8428H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 54.7218V53.6976H29.5V54.7218H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 49.6008V48.5766H29.5V49.6008H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 44.4799V43.4557H29.5V44.4799H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 39.3589V38.3347H29.5V39.3589H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 34.2379V33.2137H29.5V34.2379H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 29.117V28.0928H29.5V29.117H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 23.996V22.9718H29.5V23.996H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 18.875V17.8508H29.5V18.875H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 13.754V12.7298H29.5V13.754H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 8.63307V7.60888H29.5V8.63307H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 3.5121V3H29.5V3.5121H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 117.452V116.915H29.5V117.452H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 112.625V111.552H29.5V112.625H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 107.262V106.19H29.5V107.262H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 101.899V100.827H29.5V101.899H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 96.5363V96H29.5V96.5363H30.5Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30 25V65H5C4.44772 65 4 64.5523 4 64V26C4 25.4477 4.44772 25 5 25H30Z"
                          fill="url(#gradient2)"
                        />
                        <path
                          opacity="0.5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M55 25C55.5523 25 56 25.4477 56 26V64C56 64.5523 55.5523 65 55 65H30V25H55Z"
                          fill="url(#gradient3)"
                        />
                        <path d="M10 52H40V55H10V52Z" fill="#FFC82D" />
                        <g opacity="0.4" style={{ mixBlendMode: "overlay" }}>
                          <path d="M10 52H40V55H10V52Z" fill="#FFFFFF" />
                        </g>
                        <path d="M10 43H50V46H10V43Z" fill="#FFC82D" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 34H50V37H10V34Z"
                          fill="#FE9D39"
                        />
                        <path
                          opacity="0.5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M34.2446 77.5296H36V87.1125H35.9879L30.0002 90L24.0121 87.1125H24V77.5296H25.7562V76.1843C25.7562 73.8773 27.6607 72 30.001 72C32.3402 72 34.2446 73.8773 34.2446 76.1843V77.5296ZM33.5851 85.5188V79.7782H26.4149V85.5188L30.0002 87.2436L33.5851 85.5188ZM27.9334 76.1843V77.5296H32.0675V76.1843C32.0675 75.1165 31.1398 74.2477 30.001 74.2477C28.861 74.2477 27.9334 75.1165 27.9334 76.1843Z"
                          fill="url(#gradient4)"
                        />
                        <defs>
                          <linearGradient
                            id="gradient1"
                            x1="43.8667"
                            y1="105.9"
                            x2="-6.72854"
                            y2="30.7512"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient2"
                            x1="22.7122"
                            y1="65.4"
                            x2="0.804294"
                            y2="32.026"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient3"
                            x1="48.7122"
                            y1="65.4"
                            x2="26.8043"
                            y2="32.026"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient4"
                            x1="27.3333"
                            y1={72}
                            x2="39.7599"
                            y2="90.4033"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.5" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.1"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <h2>Trezor Hardware Wallet Integration</h2>
                    <p>
                      Combine the security of Trezor with the simplicity of Exodus
                      for the ultimate Bitcoin wallet experience.
                    </p>
                  </li>
                  <li className="x__asset-page__summary__list-item">
                    <span
                      style={{
                        display: "block",
                        position: "relative",
                        width: "fit-content"
                      }}
                    >
                      <svg
                        viewBox="0 0 64 120"
                        fill="none"
                        style={{ display: "block", height: "100%", width: "100%" }}
                      >
                        <title>Private and Secure</title>
                        <path
                          opacity="0.25"
                          d="M32.0007 22.0002L32 96.9991C31.9994 96.9994 31.9988 96.9997 31.9983 97C10.6958 86.0713 0.0309728 71.0546 0.00389703 51.9482C-0.00129901 48.2815 -0.00129901 42.2694 0.00389703 33.9117L32.0007 22.0002Z"
                          fill="url(#gradient1)"
                        />
                        <path
                          opacity="0.5"
                          d="M32 28L5.00329 38.0059C4.9989 45.0263 4.9989 50.0765 5.00329 53.1565C5.02613 69.2059 14.0246 81.8199 31.9985 91C49.9745 81.8213 58.9739 69.2068 58.9967 53.1565C59.0011 50.0765 59.0011 45.0263 58.9967 38.0059L32 28Z"
                          fill="url(#gradient2)"
                        />
                        <path
                          d="M53.8087 30.1194L31.9988 51.9293L31.9991 22L53.8087 30.1194Z"
                          fill="#FE9D39"
                        />
                        <path
                          d="M31.9985 78.9296L63.6974 47.2307L63.9984 47.5317L63.9982 48.2142L63.9952 33.9117L53.8087 30.1194L31.9988 51.9293L31.9985 78.9296Z"
                          fill="#FFC82D"
                        />
                        <path
                          d="M63.9984 47.5317L63.9951 51.9482C63.968 71.0554 53.3024 86.0725 31.9983 96.9995L31.9985 78.9296L63.6974 47.2307L63.9984 47.5317Z"
                          fill="#FFC82D"
                        />
                        <g opacity="0.4" style={{ mixBlendMode: "overlay" }}>
                          <path
                            d="M63.9984 47.5317L63.9951 51.9482C63.968 71.0554 53.3024 86.0725 31.9983 96.9995L31.9985 78.9296L63.6974 47.2307L63.9984 47.5317Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          d="M31.9983 90.9996L31.9989 28L58.9957 38.0058C59.0001 45.0263 59.0001 50.0765 58.9957 53.1565C58.9728 69.2065 49.9737 81.8209 31.9983 90.9996Z"
                          fill="url(#gradient3)"
                        />
                        <path
                          opacity="0.4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M31.4993 5.5V5H32.4993V5.5H31.4993ZM31.4993 10.5V9.5H32.4993V10.5H31.4993ZM31.4993 15.5V14.5H32.4993V15.5H31.4993ZM31.4993 20.5V19.5H32.4993V20.5H31.4993ZM31.4993 25.5V24.5H32.4993V25.5H31.4993ZM31.4993 30.5V29.5H32.4993V30.5H31.4993ZM31.4993 35.5V34.5H32.4993V35.5H31.4993ZM31.4993 40.5V39.5H32.4993V40.5H31.4993ZM31.4993 45.5V44.5H32.4993V45.5H31.4993ZM31.4993 50.5V49.5H32.4993V50.5H31.4993ZM31.4993 55.5V54.5H32.4993V55.5H31.4993ZM31.4993 60.5V59.5H32.4993V60.5H31.4993ZM31.4993 65.5V64.5H32.4993V65.5H31.4993ZM31.4993 70.5V69.5H32.4993V70.5H31.4993ZM31.4993 75.5V74.5H32.4993V75.5H31.4993ZM31.4993 80.5V79.5H32.4993V80.5H31.4993ZM31.4993 85.5V84.5H32.4993V85.5H31.4993ZM31.4993 90.5V89.5H32.4993V90.5H31.4993ZM31.4993 95.5V94.5H32.4993V95.5H31.4993ZM31.4993 100.5V99.5H32.4993V100.5H31.4993ZM31.4993 105.5V104.5H32.4993V105.5H31.4993ZM31.4993 110.5V109.5H32.4993V110.5H31.4993ZM31.4993 115V114.5H32.4993V115H31.4993Z"
                          fill="#FFFFFF"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.9969 69.451L21.2805 59.7346L24.5457 56.4695L31.0223 62.947L42.4514 51.519L45.6902 54.7578L30.9969 69.451Z"
                          fill="#FFFFFF"
                        />
                        <defs>
                          <linearGradient
                            id="gradient1"
                            x1="8.69831"
                            y1={22}
                            x2="66.4162"
                            y2="88.975"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient2"
                            x1="52.6302"
                            y1="91.63"
                            x2="5.11043"
                            y2="36.7338"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient3"
                            x1="31.999"
                            y1={28}
                            x2="31.999"
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopOpacity="0.15" />
                            <stop offset={1} stopColor="#FFFFFF" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <h2>Private and Secure</h2>
                    <p>
                      Exodus encrypts private keys and transaction data. On your
                      device and for your eyes only. Your data remains private – no
                      account setup or verification required.
                    </p>
                  </li>
                  <li className="x__asset-page__summary__list-item">
                    <span
                      style={{
                        display: "block",
                        position: "relative",
                        width: "fit-content"
                      }}
                    >
                      <svg
                        viewBox="0 0 70 120"
                        fill="none"
                        style={{ display: "block", height: "100%", width: "100%" }}
                      >
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M52.4997 40.0591V37.5007C52.4933 31.7087 48.4683 26.8751 43.2119 26.3455L40.4676 20.3439C40.0778 19.7663 38.9897 19.9759 37.5133 20.5311L26.7094 24.7631C21.3608 27.176 17.7701 32.7695 17.4997 39.1071V40.0591C17.2069 39.8319 16.8999 39.7087 16.5912 39.7359C15.2787 39.8511 14.4308 42.4431 14.6996 45.5247C14.9621 48.5551 16.2094 50.9184 17.4997 50.8848V52.3408C17.4997 59.3424 24.7574 70.032 34.9997 70.032C45.2403 70.032 52.5012 59.3392 52.4997 52.3408V50.8848C53.7899 50.9184 55.034 48.5551 55.2981 45.5247C55.5669 42.4431 54.719 39.8511 53.4065 39.7359C53.0994 39.7087 52.7908 39.8319 52.4997 40.0591Z"
                          fill="url(#gradient1)"
                        />
                        <path
                          opacity="0.4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M49.9079 41.7108C52.4988 41.7108 52.4988 39.6596 52.4988 39.6596V37.5012C52.494 31.7092 48.469 26.8756 43.2126 26.346L40.4683 20.3444C40.077 19.7668 38.9904 19.9764 37.514 20.5316L26.7101 24.7636C21.3615 27.1764 17.7692 32.7684 17.4988 39.1076V45.098C17.4988 45.098 21.212 39.7652 27.7076 39.498C34.2033 39.2308 35.6479 41.2036 41.4881 41.6836C43.8076 41.8756 47.4576 41.7108 49.9079 41.7108Z"
                          fill="url(#gradient2)"
                        />
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M26.9993 58.4001C26.9993 58.4001 27.6865 64.032 34.9997 64.032C42.313 64.032 42.9993 58.4001 42.9993 58.4001"
                          fill="url(#gradient3)"
                        />
                        <path
                          d="M38.4258 100.4L60.8354 77.9905L64.9984 79.5041C68.0259 80.7105 70.0098 83.6577 70.0002 86.9345V100.4H57.9994V88.4001L54.9994 100.4H38.4258Z"
                          fill="#FFC82D"
                        />
                        <g opacity="0.4" style={{ mixBlendMode: "overlay" }}>
                          <path
                            d="M38.4258 100.4L60.8354 77.9905L64.9984 79.5041C68.0259 80.7105 70.0098 83.6577 70.0002 86.9345V100.4H57.9994V88.4001L54.9994 100.4H38.4258Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          d="M60.8353 77.9904L38.4258 100.4H38.4344L14.9992 100.4L14.3122 97.652L33.4068 78.5574C33.9237 78.5924 34.4547 78.6146 35 78.624C41.308 78.7344 45.648 76.9904 48.4305 73.48L60.8353 77.9904Z"
                          fill="#FFC82D"
                        />
                        <path
                          d="M11.9992 100.4V99.965L11.5642 100.4H11.9992Z"
                          fill="#FFC82D"
                        />
                        <path
                          d="M34.15 78.5984C28.4858 78.3542 24.4439 76.6523 21.7558 73.3999L5.00191 79.5039C1.97282 80.7103 -0.0110435 83.6575 4.62553e-05 86.9343V100.4H11.5643L11.9992 99.965V100.4L11.9993 88.3999L14.3123 97.6519L33.4068 78.5574C33.6513 78.574 33.8991 78.5876 34.15 78.5984Z"
                          fill="#FE9D39"
                        />
                        <defs>
                          <linearGradient
                            id="gradient1"
                            x1="21.5343"
                            y1={20}
                            x2="57.3873"
                            y2="63.6438"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient2"
                            x1="53.1988"
                            y1="39.1308"
                            x2="24.1082"
                            y2="18.4752"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient3"
                            x1="26.9993"
                            y1="60.8672"
                            x2="41.7705"
                            y2="66.0155"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <h2>User-friendly</h2>
                    <p>
                      We've prepared extensive detailed guides and video tutorials
                      for you. Whether you're a new or advanced user, our 24/7
                      Support Team is here to help.
                    </p>
                  </li>
                </ul>
              </div>
            </section>
            <section className="x__section-download">
              <div className="x__section-download__content">
                <h2 className="x__section-download__heading">
                  Get Exodus for Desktop,
                  <span className="x-break-sm" />
                  Mobile, and Trezor
                  <span className="x-break-sm" /> to Send, Receive,
                  <span className="x-break-sm" /> and Swap Bitcoin.
                </h2>
                <div className="x__section-download__actions">
                  <div className="x__platform-dropdown x__platform-dropdown--Desktop">
                    <div
                      className="x__toggle"
                      style={{
                        background: "linear-gradient(to right, #FFC82D,#FE9D39)"
                      }}
                    >
                      <i className="x__toggle__icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <title>Desktop</title>
                          <path
                            d="M4 5H20V15H22V4C22 3.448 21.552 3 21 3H3C2.448 3 2 3.448 2 4V15H4V5Z"
                            fill="white"
                          />
                          <path
                            d="M15 18H9V17H0V19C0 19.552 0.448 20 1 20H23C23.552 20 24 19.552 24 19V17H15V18Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                      <span className="x__toggle__label">Download Desktop</span>
                      <span className="x__toggle__picker">
                        <svg width={11} height={7} viewBox="0 0 11 7" fill="none">
                          <path
                            opacity="0.8"
                            d="M1 1L5.5 5.5L10 1"
                            stroke="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="x__menu x__menu--to-top">
                      <ul>
                        <li className="x__menu__item">
                          <a href="https://downloads.exodus.com/releases/exodus-windows-x64-24.37.2.exe">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none">
                                <title>Download Windows (64-bit)</title>
                                <path
                                  d="M3 5.5485L10.356 4.54977L10.3592 11.6234L3.00672 11.6651L3 5.5485ZM10.3525 12.4384L10.3582 19.5182L3.00571 18.5105L3.0053 12.391L10.3525 12.4384ZM11.2442 4.4191L20.9977 3V11.5334L11.2442 11.6106V4.4191ZM21 12.505L20.9977 21L11.2442 19.6276L11.2306 12.489L21 12.505Z"
                                  fill="white"
                                />
                              </svg>
                            </i>
                            <span>Download Windows (64-bit)</span>
                          </a>
                        </li>
                        <li className="x__menu__item">
                          <a href="https://downloads.exodus.com/releases/exodus-macos-24.37.2.dmg">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none">
                                <title>Download Mac (Intel)</title>
                                <path
                                  d="M19.6646 17.4214C19.3774 18.0975 19.0373 18.7199 18.6434 19.2921C18.1064 20.0721 17.6667 20.6121 17.3278 20.9119C16.8025 21.4041 16.2397 21.6561 15.6371 21.6704C15.2044 21.6704 14.6827 21.545 14.0754 21.2906C13.466 21.0373 12.906 20.9119 12.394 20.9119C11.857 20.9119 11.2811 21.0373 10.665 21.2906C10.048 21.545 9.55103 21.6776 9.17099 21.6907C8.59306 21.7158 8.01701 21.4566 7.44201 20.9119C7.07502 20.5858 6.61598 20.0267 6.06613 19.2347C5.47612 18.389 4.99106 17.4083 4.61099 16.2901C4.20401 15.0824 4 13.913 4 12.7808C4 11.4838 4.27506 10.3653 4.82603 9.42795C5.25904 8.67503 5.83509 8.08112 6.55612 7.64506C7.2771 7.20905 8.05606 6.98686 8.89508 6.97264C9.35412 6.97264 9.95607 7.1173 10.7042 7.4016C11.4501 7.68686 11.9291 7.83152 12.1391 7.83152C12.2961 7.83152 12.8282 7.66238 13.7303 7.32514C14.5833 7.01241 15.3032 6.88292 15.893 6.93393C17.4911 7.06533 18.6918 7.70716 19.4903 8.86353C18.061 9.74583 17.354 10.9816 17.3681 12.5669C17.381 13.8017 17.8207 14.8293 18.6847 15.6452C19.0764 16.0239 19.5137 16.3165 20.0003 16.5244C19.8948 16.8362 19.783 17.1347 19.6646 17.4214ZM16.3077 2.41589C16.3077 3.45562 15.9874 4.42635 15.3489 5.32494C14.5784 6.39313 13.6464 7.01035 12.6358 6.913C12.6229 6.78826 12.6154 6.65698 12.6154 6.51903C12.6154 5.5209 12.9818 4.45269 13.6326 3.57934C13.9574 3.13712 14.3706 2.76942 14.8717 2.4761C15.3717 2.18715 15.8446 2.02736 16.2894 2C16.3024 2.13899 16.3077 2.27798 16.3077 2.41589Z"
                                  fill="white"
                                />
                              </svg>
                            </i>
                            <span>Download Mac (Intel)</span>
                          </a>
                        </li>
                        <li className="x__menu__item">
                          <a href="https://downloads.exodus.com/releases/exodus-macos-arm64-24.37.2.dmg">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none">
                                <title>Download Mac (Apple Silicon)</title>
                                <path
                                  d="M15.258 18.523V6H12.221L8.664 14.878H8.595L5.037 6.001H2V18.523H4.334V10.07H4.404L7.805 18.4H9.454L12.856 10.07H12.925V18.522H15.259L15.258 18.523ZM20.369 18.523H22.964V6H20.361L17.124 8.25V10.61L20.317 8.406H20.369V18.524V18.523Z"
                                  fill="white"
                                />
                              </svg>
                            </i>
                            <span>Download Mac (Apple Silicon)</span>
                          </a>
                        </li>
                        <li className="x__menu__item">
                          <a href="https://downloads.exodus.com/releases/exodus-linux-x64-24.37.2.deb">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none">
                                <title>Download Linux (.deb)</title>
                                <path
                                  d="M3.03345 9.96707C1.91005 9.96707 1 10.8771 1 12.0004C1 13.1231 1.91005 14.0333 3.03333 14.0333C4.15614 14.0333 5.06619 13.1231 5.06619 12.0004C5.06619 10.8771 4.15614 9.96707 3.03345 9.96707ZM17.5487 19.2069C16.5764 19.7686 16.243 21.0112 16.8047 21.983C17.3657 22.9555 18.6083 23.2888 19.5807 22.7272C20.553 22.1661 20.8865 20.9234 20.3249 19.9509C19.7638 18.9792 18.5205 18.6459 17.5487 19.2069ZM7.44931 12.0004C7.44931 9.9914 8.44725 8.21638 9.9741 7.14164L8.48792 4.65227C6.7092 5.84126 5.38568 7.65802 4.83567 9.78592C5.47727 10.3095 5.88811 11.1067 5.88811 12.0003C5.88811 12.8934 5.47739 13.6906 4.83567 14.2143C5.38485 16.3427 6.70836 18.1597 8.4878 19.3487L9.97398 16.8586C8.44713 15.7844 7.44931 14.0095 7.44931 12.0004ZM13.3874 6.06177C16.4896 6.06177 19.0348 8.44023 19.3019 11.4736L22.1988 11.431C22.0563 9.19154 21.078 7.18111 19.5748 5.7028C18.8018 5.99486 17.9088 5.95014 17.1372 5.50531C16.364 5.05917 15.8794 4.30654 15.7467 3.48963C14.9783 3.27697 14.1846 3.16906 13.3872 3.16883C12.0296 3.16746 10.6901 3.48024 9.47346 4.0827L10.8861 6.61428C11.6695 6.24965 12.5233 6.06109 13.3874 6.06189V6.06177ZM13.3874 17.9386C12.5233 17.9393 11.6695 17.7508 10.8861 17.3862L9.47358 19.9174C10.6901 20.5205 12.0298 20.8336 13.3876 20.8322C14.185 20.832 14.9787 20.7238 15.747 20.5106C15.8795 19.6937 16.3644 18.9418 17.1373 18.4949C17.9096 18.0492 18.802 18.0053 19.5749 18.2974C21.0781 16.8191 22.0565 14.8087 22.199 12.5693L19.3014 12.5266C19.0349 15.5608 16.4898 17.9384 13.3875 17.9384L13.3874 17.9386ZM17.548 4.79275C18.5204 5.35421 19.7632 5.02173 20.3243 4.04931C20.8859 3.07688 20.5533 1.83411 19.5807 1.27241C18.6083 0.711424 17.3657 1.04463 16.8038 2.01705C16.243 2.98899 16.5763 4.23165 17.548 4.79275Z"
                                  fill="white"
                                />
                              </svg>
                            </i>
                            <span>Download Linux (.deb)</span>
                          </a>
                        </li>
                        <li className="x__menu__item">
                          <a href="https://downloads.exodus.com/releases/exodus-linux-x64-24.37.2.zip">
                            <i>
                              <svg viewBox="0 0 24 24" fill="none">
                                <title>Download Linux (.zip)</title>
                                <path
                                  d="M20.581 19.049C20.031 18.603 20.245 17.618 19.674 17.132C20.227 13.767 18.677 10.801 16.829 8.9C15.278 7.305 15.778 5.753 15.778 4.41C15.778 2.264 14.897 0 12.228 0C9.375 0 8.593 2.38 8.565 3.738C8.497 7 9.224 7.848 7.315 10.222C5.069 13.015 4.738 15.801 5.245 17.279C5.008 17.555 4.688 17.861 4.09 18.114C2.438 18.834 3.649 20.039 3.192 20.894C3.062 21.137 3 21.391 3 21.634C3 22.384 3.596 23.033 4.679 22.936C6.14 22.806 7.488 23.841 8.36 23.841C9.13 23.841 9.762 23.403 10.056 22.8C11.433 22.461 13.133 22.504 14.509 22.859C14.756 23.55 15.426 24 16.171 24C17.802 24 18.116 22.151 19.987 21.525C20.661 21.3 21 20.646 21 20.037C21 19.647 20.861 19.276 20.581 19.049ZM11.434 8.584C11.115 8.584 10.851 8.326 10.434 8.016C9.906 7.624 9.369 7.398 9.375 6.986C9.375 6.703 9.754 6.616 10.244 6.305C10.77 5.972 10.975 5.634 11.493 5.634C12.023 5.634 12.183 5.902 12.903 6.213C13.611 6.52 14.104 6.64 14.104 6.986C14.104 7.341 13.363 7.595 12.946 7.854C12.333 8.232 12.018 8.584 11.434 8.584ZM13.099 3.369C13.981 3.51 14.08 5.06 13.658 5.823L13.303 5.678C13.487 5.135 13.484 4.241 12.868 4.184C12.477 4.148 12.225 4.664 12.171 5.106C12.018 5.042 11.851 4.996 11.648 4.979C11.71 4.056 12.306 3.242 13.099 3.369ZM9.696 3.7C10.372 3.532 10.771 4.318 10.774 5.135L10.464 5.325C10.422 4.982 10.269 4.428 9.885 4.546C9.474 4.674 9.541 5.629 9.77 5.825L9.464 5.995C9.044 5.288 9.045 3.862 9.696 3.7ZM7.581 22.943C5.618 22.05 4.951 22.253 4.576 22.253C3.799 22.253 3.545 21.674 3.837 21.126C4.085 20.661 4.008 20.174 3.947 19.783C3.853 19.184 3.836 18.989 4.425 18.731C5.24 18.385 5.602 17.94 5.872 17.607C6.63 16.67 7.395 18.144 8.022 19.457C8.429 20.308 9.23 20.739 9.477 21.682C9.704 22.553 8.767 23.483 7.581 22.943ZM14.568 21.069C13.184 21.742 11.421 22.051 10.102 21.368C9.907 20.805 9.595 20.441 9.259 20.075C9.798 19.933 10.198 19.261 9.719 18.586C9.208 17.865 8.164 17.362 7.109 16.546C6.122 15.783 5.81 13.902 7.154 11.8C6.499 13.662 6.882 15.378 7.211 15.869C7.279 14.881 7.357 13.231 8.707 11.254C9.388 10.256 9.398 8.938 9.413 8.114L10.033 8.538C10.489 8.875 10.871 9.246 11.419 9.246C12.229 9.246 12.677 8.78 13.301 8.393C13.545 8.243 13.914 8.091 14.224 7.88C14.744 10.356 16.898 13.334 17.019 15.03C17.52 13.998 16.877 11.516 16.877 11.516C17.719 12.801 17.786 13.872 17.823 15.186C18.412 15.427 19.044 16.055 19.102 16.882L18.857 16.854C18.731 15.935 16.25 14.585 16.027 16.315C14.837 16.496 15.27 18.381 15.03 19.603C14.92 20.162 14.716 20.604 14.568 21.069ZM19.414 21.028C18.429 21.408 17.764 22.215 17.307 22.716C16.427 23.682 15.263 23.219 15.139 22.315C15.008 21.349 15.499 20.822 15.711 19.741C15.904 18.754 15.688 17.235 16.142 17.073C16.437 18.826 18.208 18.089 18.612 17.611C19.269 17.611 19.324 17.833 19.471 18.448C19.563 18.833 19.69 19.157 20.049 19.538C20.467 19.985 20.339 20.671 19.414 21.028ZM11.414 8.022C10.763 8.022 10.276 7.589 9.88 7.253C9.677 7.082 9.93 6.766 10.133 6.938C10.52 7.266 10.91 7.613 11.414 7.613C12.021 7.613 12.556 7.094 13.281 6.808C13.528 6.711 13.669 7.093 13.424 7.19C12.72 7.467 12.155 8.022 11.414 8.022Z"
                                  fill="white"
                                />
                              </svg>
                            </i>
                            <span>Download Linux (.zip)</span>
                          </a>
                        </li>
                      </ul>
                      <span className="x__menu__disclaimer">
                        By downloading Exodus, you agree to the{" "}
                        <a target="_blank" rel="noreferrer noopener" href="/terms/">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          target="_blank"
                          rel="noreferrer noopener"
                          href="/privacy/"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="x__platform-dropdown x__platform-dropdown--Mobile">
                    <div
                      className="x__toggle"
                      style={{
                        background: "linear-gradient(to right, #FFC82D,#FE9D39)"
                      }}
                    >
                      <i className="x__toggle__icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <title>Mobile</title>
                          <path
                            d="M17 0H7C6.20435 0 5.44129 0.31607 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V21C4 21.7956 4.31607 22.5587 4.87868 23.1213C5.44129 23.6839 6.20435 24 7 24H17C17.7956 24 18.5587 23.6839 19.1213 23.1213C19.6839 22.5587 20 21.7956 20 21V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.31607 17.7956 0 17 0ZM18 21C18 21.2652 17.8946 21.5196 17.7071 21.7071C17.5196 21.8946 17.2652 22 17 22H7C6.73478 22 6.48043 21.8946 6.29289 21.7071C6.10536 21.5196 6 21.2652 6 21V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V21Z"
                            fill="white"
                          />
                          <path
                            d="M9.85355 2.85355L9 2H15L14.1464 2.85355C14.0527 2.94732 13.9255 3 13.7929 3H10.2071C10.0745 3 9.94732 2.94732 9.85355 2.85355Z"
                            stroke="white"
                          />
                          <circle cx={12} cy={19} r={1} fill="white" />
                        </svg>
                      </i>
                      <span className="x__toggle__label">Download Mobile</span>
                      <span className="x__toggle__picker">
                        <svg width={11} height={7} viewBox="0 0 11 7" fill="none">
                          <path
                            opacity="0.8"
                            d="M1 1L5.5 5.5L10 1"
                            stroke="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="x__menu x__menu--to-top">
                      <ul>
                        <li className="x__menu__item">
                          <a href="https://apps.apple.com/app/apple-store/id1414384820?pt=118366236&ct=download&mt=8">
                            <svg
                              width={96}
                              height={24}
                              viewBox="0 0 96 24"
                              fill="none"
                            >
                              <path
                                opacity="0.8"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.6265 0C12.7192 1.21107 12.3362 2.4106 11.5588 3.34385C10.8046 4.28194 9.66176 4.82227 8.45813 4.80988C8.38159 3.63367 8.77573 2.47527 9.55375 1.58983C10.3417 0.692389 11.4388 0.124745 12.6265 0ZM47.9135 0.415859H47.0622V6.41335H47.9135V0.415859ZM28.7062 1.48009C28.1852 0.929919 27.445 0.642377 26.6892 0.696612H24.6245V6.41256H26.6892C28.3918 6.41256 29.3787 5.36289 29.3787 3.53679C29.474 2.78509 29.2272 2.03027 28.7062 1.48009ZM26.5891 5.60366H25.5114V1.50383H26.5891C27.1263 1.47401 27.6488 1.68585 28.0136 2.0814C28.3784 2.47695 28.5473 3.01482 28.4741 3.5479C28.553 4.0832 28.3865 4.62554 28.0208 5.02434C27.6551 5.42315 27.1292 5.63595 26.5891 5.60366ZM31.3384 2.32426C30.6784 2.7338 30.3076 3.48207 30.3816 4.25525C30.3062 5.02926 30.6766 5.77898 31.3372 6.1894C31.9977 6.59982 32.834 6.59982 33.4945 6.1894C34.1551 5.77898 34.5255 5.02926 34.4501 4.25525C34.5241 3.48207 34.1533 2.7338 33.4934 2.32426C32.8334 1.91472 31.9983 1.91472 31.3384 2.32426ZM32.419 2.77363C33.1562 2.77363 33.5762 3.32043 33.5762 4.25546C33.5762 5.19424 33.1562 5.74057 32.419 5.74058C31.679 5.74058 31.2627 5.19799 31.2627 4.25547C31.2627 3.32043 31.679 2.77363 32.419 2.77363ZM38.9755 6.4132H39.8586L41.0429 2.09961H40.1916L39.4226 5.39113H39.3553L38.4684 2.09961H37.6517L36.7649 5.39113H36.7013L35.9286 2.09961H35.0651L36.2541 6.4132H37.1288L38.0166 3.23624H38.0839L38.9755 6.4132ZM42.0429 2.09996H42.8624V2.78521H42.926C43.1472 2.28068 43.6642 1.97206 44.2133 2.01669C44.6384 1.98473 45.055 2.14783 45.3455 2.45994C45.6359 2.77205 45.7687 3.19931 45.7063 3.62107V6.4135H44.855V3.83485C44.855 3.14164 44.5538 2.79691 43.9242 2.79691C43.6358 2.78347 43.3559 2.89665 43.158 3.10676C42.96 3.31687 42.8636 3.60297 42.8942 3.89004V6.41355H42.0429L42.0429 2.09996ZM50.0535 2.32423C49.3934 2.73377 49.0226 3.48206 49.0965 4.25529C49.0213 5.02933 49.3917 5.77903 50.0523 6.18943C50.7129 6.59983 51.5491 6.59983 52.2097 6.18943C52.8703 5.77903 53.2408 5.02933 53.1655 4.25529C53.2394 3.48206 52.8686 2.73377 52.2086 2.32423C51.5486 1.91468 50.7135 1.91468 50.0535 2.32423ZM51.1338 2.77363C51.871 2.77363 52.291 3.32043 52.291 4.25546C52.291 5.19424 51.871 5.74057 51.1338 5.74058C50.3938 5.74058 49.9775 5.19799 49.9775 4.25547C49.9775 3.32043 50.3938 2.77363 51.1338 2.77363ZM54.0629 5.19403C54.0629 4.41756 54.6411 3.96992 55.6673 3.90631L56.8358 3.83895V3.46663C56.8358 3.01103 56.5345 2.75377 55.9526 2.75377C55.4774 2.75377 55.1481 2.92825 55.0536 3.23322H54.2295C54.3165 2.4923 55.0134 2.01707 55.9919 2.01707C57.0734 2.01707 57.6833 2.55544 57.6833 3.46663V6.41392H56.8638V5.80772H56.7965C56.5181 6.25041 56.0232 6.50914 55.5008 6.48499C55.1346 6.52308 54.7694 6.40449 54.4954 6.15852C54.2215 5.91256 54.0644 5.56219 54.0629 5.19403ZM56.8366 4.82551V4.46488L55.7833 4.53224C55.1892 4.57199 54.9198 4.77406 54.9198 5.15434C54.9198 5.54257 55.2566 5.76849 55.7197 5.76849C55.9938 5.79625 56.2675 5.71155 56.4781 5.53379C56.6886 5.35603 56.818 5.10044 56.8366 4.82551ZM60.5923 2.02848C59.5025 2.02848 58.8018 2.89195 58.8018 4.25498C58.8018 5.62127 59.495 6.48476 60.5924 6.48472C61.1487 6.50522 61.6705 6.21533 61.947 5.73211H62.0143V6.41363H62.8301V0.416133H61.9788V2.78527H61.9151C61.6581 2.29801 61.1427 2.00313 60.5923 2.02848ZM60.8328 5.72082C60.1115 5.72082 59.6803 5.17028 59.6803 4.25535H59.6802C59.6802 3.34791 60.1162 2.79363 60.8328 2.79363C61.5457 2.79363 61.9938 3.36008 61.9938 4.2591C61.9938 5.16233 61.5503 5.72082 60.8328 5.72082ZM66.3538 4.25521C66.2799 3.48203 66.6506 2.73376 67.3106 2.32422C67.9705 1.91469 68.8056 1.91469 69.4656 2.32422C70.1255 2.73376 70.4963 3.48203 70.4223 4.25521C70.4977 5.02922 70.1273 5.77894 69.4667 6.18936C68.8062 6.59978 67.97 6.59978 67.3094 6.18936C66.6489 5.77894 66.2785 5.02922 66.3538 4.25521ZM69.5483 4.25546C69.5483 3.32043 69.1282 2.77363 68.3911 2.77363C67.6511 2.77363 67.2348 3.32043 67.2348 4.25547C67.2348 5.19799 67.6511 5.74058 68.3911 5.74058C69.1282 5.74057 69.5483 5.19424 69.5483 4.25546ZM71.5638 2.09996H72.3833V2.78521H72.4469C72.6682 2.28068 73.1851 1.97206 73.7342 2.01669C74.1593 1.98473 74.576 2.14783 74.8664 2.45994C75.1569 2.77205 75.2897 3.19931 75.2272 3.62107V6.4135H74.3759V3.83485C74.3759 3.14164 74.0747 2.79691 73.4451 2.79691C73.1567 2.78347 72.8769 2.89665 72.6789 3.10676C72.4809 3.31687 72.3846 3.60297 72.4151 3.89004V6.41355H71.5638V2.09996ZM80.0346 2.11977V1.02617H79.1824V2.11973H78.4976V2.8368H79.1824V5.27287C79.1824 6.10453 79.5594 6.43757 80.5061 6.43757C80.6614 6.43597 80.8163 6.42142 80.9692 6.39407V5.68496C80.8614 5.6977 80.753 5.70426 80.6445 5.70461C80.2208 5.70461 80.0346 5.50676 80.0346 5.05491V2.83684H80.9692V2.11977H80.0346ZM82.136 0.415859H82.9798V2.79297H83.0472C83.279 2.28403 83.805 1.97501 84.3625 2.02025C84.7852 1.99725 85.1962 2.16394 85.4835 2.47492C85.7707 2.7859 85.9044 3.20878 85.848 3.62837V6.41336H84.9959V3.83839C84.9959 3.14939 84.675 2.80044 84.0735 2.80044C83.7773 2.77615 83.4855 2.88382 83.2761 3.09467C83.0667 3.30552 82.961 3.59804 82.9874 3.89404V6.41334H82.136L82.136 0.415859ZM90.8087 5.24933C90.57 6.063 89.7826 6.58872 88.9395 6.49729C88.3643 6.51247 87.8116 6.27406 87.4278 5.8453C87.0441 5.41654 86.8683 4.84079 86.9469 4.2708C86.8703 3.69923 87.0455 3.12256 87.4271 2.69018C87.8087 2.2578 88.3591 2.01226 88.9358 2.01718C90.136 2.01718 90.8601 2.83719 90.8601 4.19173V4.48879H87.8141V4.53649C87.7872 4.85658 87.8965 5.17319 88.1152 5.40846C88.3339 5.64373 88.6417 5.77582 88.9629 5.77225C89.3794 5.82225 89.7848 5.61566 89.9892 5.24931L90.8087 5.24933ZM87.8156 3.85948H89.9943C90.016 3.56673 89.9131 3.27843 89.7109 3.06563C89.5087 2.85282 89.226 2.7353 88.9325 2.74203C88.6351 2.73829 88.3487 2.85484 88.1384 3.06523C87.9281 3.27563 87.8117 3.56203 87.8156 3.85948ZM26.4401 17.917H30.9745L32.0625 21.1323H34.0158L29.7209 9.23645H27.7255L23.4306 21.1323H25.3512L26.4401 17.917ZM30.5067 16.4337H26.9125L28.6853 11.2155H28.7349L30.5067 16.4337ZM43.2884 16.7956C43.2884 19.4908 41.8459 21.2224 39.669 21.2224C38.5438 21.2813 37.4838 20.6919 36.9401 19.705H36.8989V24.0008H35.1187V12.4586H36.8419V13.9012H36.8746C37.4425 12.9205 38.5036 12.3314 39.6362 12.3679C41.8374 12.3679 43.2884 14.1079 43.2884 16.7956ZM41.4586 16.7954C41.4586 15.0395 40.5512 13.885 39.1666 13.885C37.8064 13.885 36.8915 15.0638 36.8915 16.7954C36.8915 18.5429 37.8064 19.7132 39.1666 19.7132C40.5512 19.7132 41.4586 18.5672 41.4586 16.7954ZM49.2162 21.2224C51.3931 21.2224 52.8357 19.4908 52.8357 16.7956C52.8357 14.1079 51.3847 12.3679 49.1834 12.3679C48.0508 12.3314 46.9897 12.9205 46.4218 13.9012H46.3891V12.4586H44.6659V24.0008H46.4462V19.705H46.4874C47.0311 20.6919 48.091 21.2813 49.2162 21.2224ZM48.7138 13.885C50.0984 13.885 51.0058 15.0395 51.0058 16.7954C51.0058 18.5672 50.0984 19.7132 48.7138 19.7132C47.3536 19.7132 46.4387 18.5429 46.4387 16.7954C46.4387 15.0638 47.3536 13.885 48.7138 13.885ZM61.9872 19.7708C60.4212 19.7708 59.2752 18.9962 59.1433 17.8166L57.3209 17.8165C57.436 19.9681 59.2172 21.3293 61.8553 21.3293C64.6749 21.3293 66.4477 19.9354 66.4477 17.7098C66.4477 15.9698 65.4336 14.9894 62.9929 14.4122L61.6822 14.0904C60.149 13.7115 59.5222 13.2167 59.5222 12.3756C59.5222 11.3204 60.5035 10.5954 61.9376 10.5954C63.3718 10.5954 64.3531 11.312 64.4607 12.4991H66.2578C66.1998 10.4466 64.4766 9.03684 61.9629 9.03684C59.423 9.03684 57.6344 10.4466 57.6344 12.4991C57.6344 14.1568 58.6484 15.1784 60.8328 15.706L62.3745 16.0774C63.9162 16.4563 64.5674 17.0092 64.5674 17.9325C64.5674 18.9962 63.4878 19.7708 61.9872 19.7708ZM70.2904 10.4056V12.4581H71.9396V13.8679H70.2904V18.6492C70.2904 19.392 70.6206 19.7381 71.3456 19.7381C71.5414 19.7347 71.7369 19.721 71.9312 19.697V21.0983C71.6053 21.1592 71.2739 21.1868 70.9424 21.1807C69.1865 21.1807 68.5017 20.5211 68.5017 18.8391V13.8679H67.2406V12.4581H68.5016V10.4056H70.2904ZM72.8956 16.7955C72.8956 14.0666 74.5028 12.3518 77.009 12.3518C79.5237 12.3518 81.1234 14.0666 81.1234 16.7955C81.1234 19.5318 79.5321 21.2391 77.009 21.2391C74.4869 21.2391 72.8956 19.5318 72.8956 16.7955ZM79.3103 16.7948C79.3103 14.9229 78.4524 13.8181 77.0099 13.8181C75.5674 13.8181 74.7104 14.9313 74.7104 16.7948C74.7104 18.6743 75.5674 19.7707 77.0099 19.7707C78.4524 19.7707 79.3103 18.6743 79.3103 16.7948ZM82.5913 12.4582H84.2892V13.9344H84.3304C84.5672 12.9841 85.4379 12.3301 86.4165 12.3674C86.6217 12.3667 86.8263 12.389 87.0265 12.4338V14.099C86.7675 14.0199 86.4973 13.9836 86.2266 13.9915C85.7032 13.9702 85.1967 14.1788 84.8401 14.5624C84.4834 14.9461 84.3122 15.4664 84.3715 15.9869V21.1312H82.5912L82.5913 12.4582ZM95.2359 18.5841C94.9964 20.1586 93.4631 21.2391 91.5014 21.2391C88.9783 21.2391 87.4123 19.5486 87.4123 16.8366C87.4123 14.1162 88.9867 12.3518 91.4265 12.3518C93.8261 12.3518 95.3351 14.0002 95.3351 16.6299V17.2398H89.2094V17.3474C89.1522 17.9931 89.3752 18.6322 89.8216 19.1023C90.268 19.5723 90.8948 19.8279 91.5425 19.804C92.4065 19.885 93.221 19.3889 93.5455 18.5841L95.2359 18.5841ZM89.2161 15.9964L93.5521 15.9964C93.5844 15.4162 93.3732 14.8488 92.9694 14.4309C92.5656 14.0131 92.0058 13.7826 91.4248 13.7951C90.8392 13.7916 90.2765 14.0222 89.8618 14.4355C89.447 14.8489 89.2146 15.4108 89.2161 15.9964ZM14.1751 11.0932C14.1961 9.46804 15.0481 7.9669 16.4326 7.1157C15.5552 5.86259 14.1383 5.09658 12.6093 5.04874C11.6253 4.94546 10.6597 5.32869 9.87053 5.64189C9.36957 5.84072 8.93971 6.01132 8.6214 6.01132C8.25929 6.01132 7.81709 5.8337 7.32161 5.63468C6.67372 5.37445 5.93474 5.07762 5.16462 5.09347C3.37643 5.15124 1.74977 6.14328 0.879777 7.70664C-0.972904 10.9143 0.409029 15.6284 2.18374 18.2212C3.07167 19.4908 4.1094 20.909 5.46725 20.8587C6.08321 20.8332 6.52028 20.6493 6.97172 20.4593C7.49412 20.2394 8.03576 20.0114 8.89615 20.0114C9.70741 20.0114 10.2258 20.2323 10.7234 20.4442C11.2003 20.6474 11.6581 20.8424 12.3362 20.8268C13.762 20.8036 14.6603 19.5515 15.517 18.2699C16.155 17.3652 16.6459 16.3654 16.9716 15.3074C15.2782 14.5911 14.1771 12.9318 14.1751 11.0932Z"
                                fill="white"
                              />
                            </svg>
                            <em>
                              <svg viewBox="0 0 16 15" fill="none">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8 11.978l-4.702 2.468.898-5.227L.392 5.518l5.257-.763L8 0l2.351 4.755 5.257.763-3.804 3.701.898 5.227L8 11.978z"
                                  fill="url(#gradient)"
                                />
                                <defs>
                                  <linearGradient
                                    id="gradient"
                                    x1={24}
                                    y1="7.985"
                                    x2="8.029"
                                    y2="-8.014"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#FF9F1A" />
                                    <stop offset={1} stopColor="#FC3" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <span>4.6</span>
                            </em>
                          </a>
                        </li>
                        <li className="x__menu__item">
                          <a href="https://play.google.com/store/apps/details?id=exodusmovement.exodus&referrer=utm_source%3Dexodus-website%26utm_content%3Dbtc-wallet%26utm_campaign%3Dbtc-wallet%26referrer%3Dhttps%3A%2F%2Fgithub.com%2F">
                            <svg
                              width={104}
                              height={26}
                              viewBox="0 0 104 26"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M52.5726 1.58644C53.082 1.05071 53.7946 0.755967 54.5336 0.77531C55.2711 0.763642 55.9807 1.05716 56.4945 1.58644C57.0123 2.11315 57.2952 2.82681 57.2789 3.56524C57.3026 4.30496 57.0186 5.02141 56.4945 5.54403C55.9746 6.06439 55.2692 6.35676 54.5336 6.35676C53.798 6.35676 53.0925 6.06439 52.5726 5.54403C52.0486 5.02141 51.7646 4.30496 51.7882 3.56524C51.7646 2.82551 52.0486 2.10907 52.5726 1.58644ZM54.4985 5.70541C55.0446 5.70541 55.5679 5.48662 55.9514 5.09794C56.3635 4.69514 56.5922 4.14096 56.5843 3.56481C56.6016 2.99389 56.386 2.44046 55.9871 2.03169C55.6035 1.64301 55.0802 1.42421 54.5342 1.42421C53.9881 1.42421 53.4648 1.64301 53.0813 2.03169C52.6823 2.44046 52.4667 2.99389 52.4841 3.56481C52.4572 4.13062 52.6597 4.68334 53.0456 5.09794C53.4292 5.48662 53.9525 5.70541 54.4985 5.70541ZM30.5216 4.0195V3.37773L33.1511 3.38664C33.1592 3.52022 33.1592 3.65417 33.1511 3.78775C33.1807 4.44828 32.9392 5.09223 32.4826 5.57045C31.9705 6.09921 31.2572 6.38452 30.5216 6.35484C29.7823 6.37132 29.0692 6.0809 28.5518 5.55262C28.0156 5.03244 27.7215 4.3117 27.7406 3.56491C27.7215 2.81813 28.0156 2.09739 28.5518 1.5772C29.3637 0.783824 30.5726 0.555406 31.618 0.997824C31.9394 1.12995 32.2261 1.33429 32.4559 1.59503L31.9835 2.06744C31.6246 1.6351 31.0828 1.39726 30.5216 1.42567C29.9591 1.42291 29.4196 1.64948 29.0278 2.05313C28.6359 2.45678 28.4254 3.00266 28.4448 3.56491C28.4254 4.12716 28.6359 4.67305 29.0278 5.0767C29.4196 5.48035 29.9591 5.70691 30.5216 5.70415C31.0787 5.71758 31.6169 5.50167 32.0102 5.10695C32.2884 4.81147 32.4499 4.42507 32.4648 4.0195H30.5216ZM33.861 16.81V15.2056H39.2804C39.337 15.5353 39.3638 15.8694 39.3606 16.2039C39.4049 17.5936 38.9061 18.946 37.9701 19.9743C36.8983 21.0849 35.4032 21.6849 33.861 21.6233C31.703 21.7073 29.672 20.6039 28.568 18.7477C27.464 16.8916 27.464 14.5802 28.568 12.7241C29.672 10.8679 31.703 9.76455 33.861 9.84854C35.3703 9.82462 36.8256 10.4093 37.8988 11.4708L36.7668 12.6028C35.9814 11.8499 34.931 11.4368 33.8432 11.453C31.4802 11.453 29.5647 13.3685 29.5647 15.7314C29.5647 18.0944 31.4802 20.0099 33.8432 20.0099C34.9573 20.0567 36.0391 19.6292 36.8203 18.8333C37.3371 18.2787 37.6512 17.5657 37.7116 16.81H33.861ZM39.9492 17.8426C39.9442 15.7455 41.6403 14.0415 43.7374 14.0365C44.7495 14.0171 45.7262 14.4094 46.4437 15.1235C47.1613 15.8377 47.5581 16.8125 47.5434 17.8248C47.5484 19.9219 45.8523 21.6259 43.7552 21.6308C41.6581 21.6357 39.9541 19.9397 39.9492 17.8426ZM52.0449 14.0365C49.9478 14.0415 48.2517 15.7455 48.2567 17.8426C48.2616 19.9397 49.9656 21.6357 52.0627 21.6308C54.1598 21.6259 55.8559 19.9219 55.8509 17.8248C55.8656 16.8125 55.4688 15.8377 54.7512 15.1235C54.0337 14.4094 53.057 14.0171 52.0449 14.0365ZM52.0446 20.1255C51.1026 20.1914 50.2161 19.6748 49.8091 18.8228C49.4021 17.9708 49.5572 16.9565 50.2004 16.2651C50.8435 15.5738 51.8439 15.3458 52.7231 15.6903C53.6023 16.0347 54.1815 16.8816 54.1838 17.8259C54.2128 18.4165 54.002 18.9939 53.5992 19.4269C53.1964 19.8599 52.6358 20.1118 52.0446 20.1255ZM43.7371 20.1255C42.7951 20.1914 41.9086 19.6748 41.5016 18.8228C41.0946 17.9708 41.2497 16.9565 41.8929 16.2651C42.536 15.5738 43.5364 15.3458 44.4156 15.6903C45.2948 16.0347 45.874 16.8816 45.8763 17.8259C45.9053 18.4165 45.6945 18.9939 45.2917 19.4269C44.8889 19.8599 44.3283 20.1118 43.7371 20.1255ZM74.2483 16.4523C73.7724 15.0522 72.4816 14.0912 71.0038 14.0368C70.0183 14.0349 69.0759 14.4409 68.4005 15.1586C67.7251 15.8762 67.3768 16.8414 67.4384 17.825C67.4227 19.4961 68.509 20.9782 70.1073 21.4663C71.7056 21.9545 73.4346 21.3322 74.3553 19.9375L73.0628 19.0462C72.6708 19.6996 71.9619 20.0965 71.1999 20.0891C70.4091 20.1217 69.6796 19.6649 69.3637 18.9392L74.4355 16.8445L74.2483 16.4523ZM69.6072 16.1949C69.233 16.611 69.0426 17.1605 69.0791 17.719L72.4662 16.3106C72.2029 15.7868 71.652 15.471 71.0668 15.5084C70.5077 15.5312 69.9814 15.7787 69.6072 16.1949ZM64.9608 21.3907H66.6277V10.2488H64.9608V21.3907ZM62.1712 14.8835H62.2336V14.2595H63.7756V21.0516C63.7756 23.8505 62.1623 25.0003 60.2102 25.0003C58.7329 25.0201 57.3964 24.1268 56.8498 22.7541L58.2938 22.1569C58.6008 22.9525 59.3577 23.4841 60.2102 23.5028C61.4581 23.5028 62.2336 22.7274 62.2336 21.2745V20.7307H62.1712C61.6718 21.3106 60.9397 21.6374 60.1746 21.6221C58.1513 21.524 56.5613 19.855 56.5613 17.8294C56.5613 15.8038 58.1513 14.1348 60.1746 14.0367C60.9312 14.0174 61.6592 14.3261 62.1712 14.8835ZM60.3152 20.1259C59.103 20.0503 58.1586 19.0452 58.1586 17.8307C58.1586 16.6162 59.103 15.611 60.3152 15.5355C60.8919 15.5603 61.4338 15.8182 61.8169 16.25C62.2 16.6818 62.3915 17.2506 62.3475 17.8262C62.3966 18.4039 62.2072 18.9764 61.8233 19.4109C61.4394 19.8453 60.8945 20.1036 60.3152 20.1259ZM78.0639 10.2512H82.0572C83.352 10.1581 84.5904 10.7962 85.2661 11.9046C85.9419 13.0131 85.9419 14.4061 85.2661 15.5146C84.5904 16.623 83.352 17.2611 82.0572 17.168H79.7307V21.393H78.0639V10.2512ZM82.0562 15.5981H79.7297V11.801H82.0918C83.1453 11.801 83.9993 12.655 83.9993 13.7085C83.9993 14.7619 83.1453 15.616 82.0918 15.616L82.0562 15.5981ZM89.3747 15.7048C89.9351 14.5953 91.1022 13.9258 92.3429 14.0023L92.3786 14.0202C94.2772 14.0202 95.7568 15.1522 95.7568 17.1042V21.3916H94.1524V20.5003H94.0989C93.6399 21.2192 92.8291 21.6348 91.9775 21.5877C91.2822 21.6415 90.5947 21.4111 90.0723 20.9492C89.5499 20.4872 89.2371 19.8332 89.2054 19.1365C89.2054 17.5142 90.8276 16.6229 92.4142 16.6229C93.0198 16.6222 93.6164 16.769 94.1524 17.0507V16.9438C94.1098 16.5156 93.8971 16.1224 93.5619 15.8525C93.2267 15.5827 92.7971 15.4588 92.3697 15.5087C91.7461 15.4548 91.149 15.7725 90.8455 16.3198L89.3747 15.7048ZM92.1378 20.1086C91.5941 20.1086 90.8364 19.8323 90.8364 19.1638C90.8364 18.2724 91.7813 17.9693 92.6191 17.9693C93.1486 17.9563 93.6719 18.0856 94.1344 18.3437C94.0187 19.3448 93.181 20.1063 92.1735 20.1264L92.1378 20.1086ZM99.6968 19.0923L101.604 14.2612H103.458L98.9391 24.7702H97.1564L98.85 21.0176L95.8818 14.2612H97.6645L99.6433 19.0923H99.6968ZM86.6287 21.3907H88.2866V10.2488H86.6287V21.3907ZM34.1316 6.23864H37.2603V5.57904H34.8269V3.88548H37.0196V3.2437H34.8269V1.55014H37.2603V0.890539H34.1316V6.23864ZM39.4706 1.55014H37.9732V0.890539H41.6455V1.55014H40.157V6.23864H39.4706V1.55014ZM44.3106 0.890539H44.9969V6.23864H44.3106V0.890539ZM47.3593 1.55014H45.8619V0.890539H49.5342V1.55014H48.0457V6.23864H47.3593V1.55014ZM61.6839 4.01918V0.890539H62.3703V6.23864H61.6572L58.9386 1.87994H58.9029L58.9386 2.90499V6.23864H58.2522V0.890539H59.0812L61.6839 5.05314H61.7107L61.6839 4.01918Z"
                                fill="white"
                              />
                              <path
                                d="M54.5336 0.77531L54.5309 0.875364L54.5351 0.875297L54.5336 0.77531ZM52.5726 1.58644L52.6432 1.65727L52.6451 1.65535L52.5726 1.58644ZM56.4945 1.58644L56.4228 1.65609L56.4232 1.65654L56.4945 1.58644ZM57.2789 3.56524L57.1788 3.56303L57.179 3.56843L57.2789 3.56524ZM56.4945 5.54403L56.4239 5.47323L56.4238 5.47335L56.4945 5.54403ZM52.5726 5.54403L52.6433 5.47335L52.6432 5.47323L52.5726 5.54403ZM51.7882 3.56524L51.8884 3.56844L51.8881 3.56204L51.7882 3.56524ZM55.9514 5.09794L55.8815 5.02642L55.8803 5.0277L55.9514 5.09794ZM56.5843 3.56481L56.4842 3.56178L56.4843 3.56619L56.5843 3.56481ZM55.9871 2.03169L56.0586 1.96184L56.0583 1.96145L55.9871 2.03169ZM53.0813 2.03169L53.0101 1.96145L53.0097 1.96184L53.0813 2.03169ZM52.4841 3.56481L52.5843 3.56957L52.584 3.56178L52.4841 3.56481ZM53.0456 5.09794L52.9724 5.1661L52.9744 5.16817L53.0456 5.09794ZM30.5216 3.37773L30.522 3.27773L30.4216 3.27739V3.37773H30.5216ZM30.5216 4.0195H30.4216V4.1195H30.5216V4.0195ZM33.1511 3.38664L33.2509 3.38064L33.2453 3.28696L33.1515 3.28664L33.1511 3.38664ZM33.1511 3.78775L33.0508 3.78172L33.0512 3.79222L33.1511 3.78775ZM32.4826 5.57045L32.5544 5.64003L32.5549 5.63951L32.4826 5.57045ZM30.5216 6.35484L30.5257 6.25472L30.5194 6.25486L30.5216 6.35484ZM28.5518 5.55262L28.6232 5.48263L28.6214 5.48085L28.5518 5.55262ZM27.7406 3.56491L27.8407 3.56748L27.8406 3.56235L27.7406 3.56491ZM28.5518 1.5772L28.6214 1.64897L28.6216 1.64872L28.5518 1.5772ZM31.618 0.997824L31.579 1.08992L31.58 1.09031L31.618 0.997824ZM32.4559 1.59503L32.5266 1.66574L32.593 1.59935L32.5309 1.52892L32.4559 1.59503ZM31.9835 2.06744L31.9065 2.13132L31.9766 2.21573L32.0542 2.13815L31.9835 2.06744ZM30.5216 1.42567L30.5211 1.52582L30.5267 1.52554L30.5216 1.42567ZM29.0278 2.05313L29.0995 2.12278L29.0278 2.05313ZM28.4448 3.56491L28.545 3.56837L28.5447 3.56146L28.4448 3.56491ZM29.0278 5.0767L29.0995 5.00704L29.0995 5.00704L29.0278 5.0767ZM30.5216 5.70415L30.524 5.60414L30.5211 5.60415L30.5216 5.70415ZM32.0102 5.10695L32.0811 5.17756L32.083 5.1755L32.0102 5.10695ZM32.4648 4.0195L32.5647 4.02316L32.5685 3.9195H32.4648V4.0195ZM33.861 15.2056V15.1056H33.761V15.2056H33.861ZM33.861 16.81H33.761V16.91H33.861V16.81ZM39.2804 15.2056L39.379 15.1886L39.3647 15.1056H39.2804V15.2056ZM39.3606 16.2039L39.2605 16.2029L39.2607 16.207L39.3606 16.2039ZM37.9701 19.9743L38.0421 20.0437L38.0441 20.0416L37.9701 19.9743ZM33.861 21.6233L33.865 21.523L33.8571 21.5233L33.861 21.6233ZM28.568 18.7477L28.654 18.6966L28.568 18.7477ZM28.568 12.7241L28.654 12.7752L28.568 12.7241ZM33.861 9.84854L33.8571 9.94861L33.8626 9.94852L33.861 9.84854ZM37.8988 11.4708L37.9695 11.5415L38.0406 11.4704L37.9691 11.3997L37.8988 11.4708ZM36.7668 12.6028L36.6976 12.675L36.7683 12.7428L36.8375 12.6735L36.7668 12.6028ZM33.8432 11.453V11.553L33.8446 11.553L33.8432 11.453ZM33.8432 20.0099L33.8474 19.9099H33.8432V20.0099ZM36.8203 18.8333L36.8917 18.9034L36.8934 18.9015L36.8203 18.8333ZM37.7116 16.81L37.8113 16.8179L37.8199 16.71H37.7116V16.81ZM43.7374 14.0365L43.7376 14.1365L43.7393 14.1365L43.7374 14.0365ZM39.9492 17.8426L39.8492 17.8428L39.9492 17.8426ZM46.4437 15.1235L46.3732 15.1944L46.4437 15.1235ZM47.5434 17.8248L47.4434 17.8233L47.4434 17.825L47.5434 17.8248ZM43.7552 21.6308L43.755 21.5308L43.7552 21.6308ZM48.2567 17.8426L48.1567 17.8428L48.2567 17.8426ZM52.0449 14.0365L52.0451 14.1365L52.0468 14.1365L52.0449 14.0365ZM55.8509 17.8248L55.7509 17.8233L55.7509 17.825L55.8509 17.8248ZM54.7512 15.1235L54.6807 15.1944L54.7512 15.1235ZM49.8091 18.8228L49.7189 18.8659L49.8091 18.8228ZM52.0446 20.1255L52.0423 20.0255L52.0376 20.0258L52.0446 20.1255ZM50.2004 16.2651L50.1271 16.197L50.2004 16.2651ZM52.7231 15.6903L52.7596 15.5972V15.5972L52.7231 15.6903ZM54.1838 17.8259L54.0837 17.8261L54.084 17.8308L54.1838 17.8259ZM53.5992 19.4269L53.526 19.3588V19.3588L53.5992 19.4269ZM41.5016 18.8228L41.4114 18.8659L41.5016 18.8228ZM43.7371 20.1255L43.7348 20.0255L43.7301 20.0258L43.7371 20.1255ZM44.4156 15.6903L44.4521 15.5972L44.4156 15.6903ZM45.8763 17.8259L45.7762 17.8261L45.7765 17.8308L45.8763 17.8259ZM71.0038 14.0368L71.0075 13.9368L71.004 13.9368L71.0038 14.0368ZM74.2483 16.4523L74.153 16.4848L74.1581 16.4954L74.2483 16.4523ZM68.4005 15.1586L68.3277 15.09L68.4005 15.1586ZM67.4384 17.825L67.5386 17.826L67.5382 17.8188L67.4384 17.825ZM70.1073 21.4663L70.1365 21.3707L70.1073 21.4663ZM74.3553 19.9375L74.4387 19.9926L74.4927 19.9108L74.412 19.8552L74.3553 19.9375ZM73.0628 19.0462L73.1196 18.9639L73.0319 18.9034L72.9771 18.9947L73.0628 19.0462ZM71.1999 20.0891L71.2009 19.9889L71.1958 19.9891L71.1999 20.0891ZM69.3637 18.9392L69.3255 18.8468L69.2313 18.8857L69.272 18.9791L69.3637 18.9392ZM74.4355 16.8445L74.4737 16.937L74.5712 16.8967L74.5257 16.8015L74.4355 16.8445ZM69.0791 17.719L68.9793 17.7255L68.9884 17.865L69.1175 17.8113L69.0791 17.719ZM69.6072 16.1949L69.6816 16.2617L69.6072 16.1949ZM72.4662 16.3106L72.5046 16.403L72.6039 16.3617L72.5556 16.2657L72.4662 16.3106ZM71.0668 15.5084L71.0709 15.6083L71.0732 15.6082L71.0668 15.5084ZM66.6277 21.3907V21.4907H66.7277V21.3907H66.6277ZM64.9608 21.3907H64.8609V21.4907H64.9608V21.3907ZM66.6277 10.2488H66.7277V10.1488H66.6277V10.2488ZM64.9608 10.2488V10.1488H64.8609V10.2488H64.9608ZM62.2336 14.8835V14.9835H62.3336V14.8835H62.2336ZM62.1712 14.8835L62.0976 14.9511L62.1273 14.9835H62.1712V14.8835ZM62.2336 14.2595V14.1595H62.1336V14.2595H62.2336ZM63.7756 14.2595H63.8756V14.1595H63.7756V14.2595ZM60.2102 25.0003V24.9003L60.2089 24.9003L60.2102 25.0003ZM56.8498 22.7541L56.8116 22.6617L56.7204 22.6994L56.7569 22.7911L56.8498 22.7541ZM58.2938 22.1569L58.3871 22.1209L58.3502 22.0253L58.2556 22.0645L58.2938 22.1569ZM60.2102 23.5028L60.208 23.6028H60.2102V23.5028ZM62.2336 20.7307H62.3336V20.6307H62.2336V20.7307ZM62.1712 20.7307V20.6307H62.1253L62.0954 20.6655L62.1712 20.7307ZM60.1746 21.6221L60.1697 21.722L60.1726 21.7221L60.1746 21.6221ZM60.1746 14.0367L60.172 13.9367L60.1697 13.9368L60.1746 14.0367ZM60.3152 20.1259L60.3089 20.2262L60.319 20.2258L60.3152 20.1259ZM60.3152 15.5355L60.3195 15.435L60.309 15.4356L60.3152 15.5355ZM62.3475 17.8262L62.2478 17.8186L62.2471 17.8267L62.2478 17.8347L62.3475 17.8262ZM61.8233 19.4109L61.8983 19.4771L61.8233 19.4109ZM82.0572 10.2512V10.3514L82.0643 10.3509L82.0572 10.2512ZM78.0639 10.2512V10.1511H77.9639V10.2512H78.0639ZM85.2661 11.9046L85.1808 11.9567V11.9567L85.2661 11.9046ZM85.2661 15.5146L85.1808 15.4625V15.4625L85.2661 15.5146ZM82.0572 17.168L82.0643 17.068H82.0572V17.168ZM79.7307 17.168V17.068H79.6307V17.168H79.7307ZM79.7307 21.393V21.493H79.8307V21.393H79.7307ZM78.0639 21.393H77.9639V21.493H78.0639V21.393ZM79.7297 15.5981H79.6297V15.6981H79.7297V15.5981ZM82.0562 15.5981L82.1009 15.5087L82.0798 15.4981H82.0562V15.5981ZM79.7297 11.801V11.701H79.6297V11.801H79.7297ZM82.0918 15.616L82.0471 15.7054L82.0682 15.716H82.0918V15.616ZM92.3429 14.0023L92.3876 13.9129L92.3694 13.9038L92.3491 13.9025L92.3429 14.0023ZM89.3747 15.7048L89.2855 15.6597L89.237 15.7556L89.3361 15.7971L89.3747 15.7048ZM92.3786 14.0202L92.3339 14.1096L92.355 14.1202H92.3786V14.0202ZM95.7568 21.3916V21.4916H95.8568V21.3916H95.7568ZM94.1524 21.3916H94.0524V21.4916H94.1524V21.3916ZM94.1524 20.5003H94.2524V20.4003H94.1524V20.5003ZM94.0989 20.5003V20.4003H94.0441L94.0146 20.4465L94.0989 20.5003ZM91.9775 21.5877L91.983 21.487L91.9698 21.488L91.9775 21.5877ZM90.0723 20.9492L90.0061 21.0241L90.0723 20.9492ZM89.2054 19.1365H89.1053L89.1055 19.141L89.2054 19.1365ZM92.4142 16.6229V16.7229H92.4144L92.4142 16.6229ZM94.1524 17.0507L94.1058 17.1393L94.2524 17.2163V17.0507H94.1524ZM94.1524 16.9438H94.2529L94.2519 16.9339L94.1524 16.9438ZM93.5619 15.8525L93.4992 15.9304L93.5619 15.8525ZM92.3697 15.5087L92.361 15.6083L92.3712 15.6092L92.3813 15.608L92.3697 15.5087ZM90.8455 16.3198L90.8069 16.4121L90.8895 16.4466L90.9329 16.3683L90.8455 16.3198ZM92.1378 20.1086L92.1825 20.0191L92.1614 20.0086H92.1378V20.1086ZM92.6191 17.9693V18.0694L92.6216 18.0693L92.6191 17.9693ZM94.1344 18.3437L94.2338 18.3552L94.2414 18.2889L94.1832 18.2564L94.1344 18.3437ZM92.1735 20.1264L92.1287 20.2159L92.1508 20.2269L92.1755 20.2264L92.1735 20.1264ZM101.604 14.2612V14.1612H101.536L101.511 14.2245L101.604 14.2612ZM99.6968 19.0923V19.1923H99.7648L99.7898 19.129L99.6968 19.0923ZM103.458 14.2612L103.55 14.3007L103.61 14.1612H103.458V14.2612ZM98.9391 24.7702V24.8702H99.005L99.031 24.8097L98.9391 24.7702ZM97.1564 24.7702L97.0653 24.7291L97.0016 24.8702H97.1564V24.7702ZM98.85 21.0176L98.9411 21.0588L98.9594 21.0182L98.9415 20.9774L98.85 21.0176ZM95.8818 14.2612V14.1612H95.7286L95.7902 14.3014L95.8818 14.2612ZM97.6645 14.2612L97.757 14.2233L97.7316 14.1612H97.6645V14.2612ZM99.6433 19.0923L99.5508 19.1302L99.5762 19.1923H99.6433V19.0923ZM88.2866 21.3907V21.4907H88.3866V21.3907H88.2866ZM86.6287 21.3907H86.5287V21.4907H86.6287V21.3907ZM88.2866 10.2488H88.3866V10.1488H88.2866V10.2488ZM86.6287 10.2488V10.1488H86.5287V10.2488H86.6287ZM37.2603 6.23864V6.33864H37.3603V6.23864H37.2603ZM34.1316 6.23864H34.0316V6.33864H34.1316V6.23864ZM37.2603 5.57904H37.3603V5.47904H37.2603V5.57904ZM34.8269 5.57904H34.7269V5.67904H34.8269V5.57904ZM34.8269 3.88548V3.78548H34.7269V3.88548H34.8269ZM37.0196 3.88548V3.98548H37.1196V3.88548H37.0196ZM37.0196 3.2437H37.1196V3.1437H37.0196V3.2437ZM34.8269 3.2437H34.7269V3.3437H34.8269V3.2437ZM34.8269 1.55014V1.45014H34.7269V1.55014H34.8269ZM37.2603 1.55014V1.65014H37.3603V1.55014H37.2603ZM37.2603 0.890539H37.3603V0.790539H37.2603V0.890539ZM34.1316 0.890539V0.790539H34.0316V0.890539H34.1316ZM37.9732 1.55014H37.8732V1.65014H37.9732V1.55014ZM39.4706 1.55014H39.5706V1.45014H39.4706V1.55014ZM37.9732 0.890539V0.790539H37.8732V0.890539H37.9732ZM41.6455 0.890539H41.7455V0.790539H41.6455V0.890539ZM41.6455 1.55014V1.65014H41.7455V1.55014H41.6455ZM40.157 1.55014V1.45014H40.057V1.55014H40.157ZM40.157 6.23864V6.33864H40.257V6.23864H40.157ZM39.4706 6.23864H39.3706V6.33864H39.4706V6.23864ZM44.9969 0.890539H45.0969V0.790539H44.9969V0.890539ZM44.3106 0.890539V0.790539H44.2106V0.890539H44.3106ZM44.9969 6.23864V6.33864H45.0969V6.23864H44.9969ZM44.3106 6.23864H44.2106V6.33864H44.3106V6.23864ZM45.8619 1.55014H45.7619V1.65014H45.8619V1.55014ZM47.3593 1.55014H47.4593V1.45014H47.3593V1.55014ZM45.8619 0.890539V0.790539H45.7619V0.890539H45.8619ZM49.5342 0.890539H49.6342V0.790539H49.5342V0.890539ZM49.5342 1.55014V1.65014H49.6342V1.55014H49.5342ZM48.0457 1.55014V1.45014H47.9457V1.55014H48.0457ZM48.0457 6.23864V6.33864H48.1457V6.23864H48.0457ZM47.3593 6.23864H47.2593V6.33864H47.3593V6.23864ZM61.6839 0.890539V0.790539H61.5839V0.890539H61.6839ZM61.6839 4.01918H61.5839L61.5839 4.02176L61.6839 4.01918ZM62.3703 0.890539H62.4702V0.790539H62.3703V0.890539ZM62.3703 6.23864V6.33864H62.4702V6.23864H62.3703ZM61.6572 6.23864L61.5723 6.29156L61.6017 6.33864H61.6572V6.23864ZM58.9386 1.87994L59.0234 1.82702L58.994 1.77994H58.9386V1.87994ZM58.9029 1.87994V1.77994H58.7994L58.803 1.88341L58.9029 1.87994ZM58.9386 2.90499H59.0386L59.0385 2.90151L58.9386 2.90499ZM58.9386 6.23864V6.33864H59.0386V6.23864H58.9386ZM58.2522 6.23864H58.1522V6.33864H58.2522V6.23864ZM58.2522 0.890539V0.790539H58.1522V0.890539H58.2522ZM59.0812 0.890539L59.166 0.837522L59.1366 0.790539H59.0812V0.890539ZM61.6839 5.05314L61.5991 5.10616L61.6285 5.15314H61.6839V5.05314ZM61.7107 5.05314V5.15314H61.8133L61.8106 5.05056L61.7107 5.05314ZM54.5362 0.675344C53.7689 0.65526 53.029 0.961293 52.5001 1.51753L52.6451 1.65535C53.135 1.14013 53.8202 0.856673 54.5309 0.875275L54.5362 0.675344ZM56.5663 1.51678C56.0333 0.967718 55.2971 0.663219 54.532 0.675322L54.5351 0.875297C55.2451 0.864066 55.9282 1.14661 56.4228 1.65609L56.5663 1.51678ZM57.3789 3.56744C57.3958 2.80203 57.1026 2.06229 56.5658 1.51633L56.4232 1.65654C56.9221 2.16401 57.1947 2.85159 57.1789 3.56303L57.3789 3.56744ZM56.5651 5.61484C57.1088 5.07267 57.4034 4.32943 57.3789 3.56204L57.179 3.56843C57.2017 4.28049 56.9284 4.97014 56.4239 5.47323L56.5651 5.61484ZM54.5336 6.45676C55.2957 6.45676 56.0266 6.15385 56.5653 5.61472L56.4238 5.47335C55.9226 5.97494 55.2426 6.25676 54.5336 6.25676V6.45676ZM52.5018 5.61472C53.0405 6.15385 53.7714 6.45676 54.5336 6.45676V6.25676C53.8245 6.25676 53.1445 5.97494 52.6433 5.47335L52.5018 5.61472ZM51.6882 3.56204C51.6637 4.32943 51.9583 5.07267 52.502 5.61484L52.6432 5.47323C52.1388 4.97014 51.8654 4.28049 51.8881 3.56843L51.6882 3.56204ZM52.502 1.51563C51.9583 2.05781 51.6637 2.80104 51.6882 3.56843L51.8881 3.56204C51.8654 2.84998 52.1388 2.16033 52.6432 1.65724L52.502 1.51563ZM55.8803 5.0277C55.5155 5.39733 55.0178 5.60541 54.4985 5.60541V5.80541C55.0713 5.80541 55.6203 5.5759 56.0226 5.16817L55.8803 5.0277ZM56.4843 3.56619C56.4918 4.11495 56.274 4.64278 55.8815 5.02643L56.0213 5.16944C56.4529 4.74749 56.6926 4.16697 56.6843 3.56344L56.4843 3.56619ZM55.9155 2.10154C56.2955 2.49087 56.5008 3.01799 56.4843 3.56178L56.6842 3.56785C56.7024 2.96978 56.4766 2.39004 56.0586 1.96184L55.9155 2.10154ZM54.5342 1.52421C55.0535 1.52421 55.5511 1.73229 55.9159 2.10193L56.0583 1.96145C55.6559 1.55373 55.107 1.32421 54.5342 1.32421V1.52421ZM53.1525 2.10193C53.5172 1.73229 54.0149 1.52421 54.5342 1.52421V1.32421C53.9614 1.32421 53.4124 1.55373 53.0101 1.96145L53.1525 2.10193ZM52.584 3.56178C52.5675 3.01799 52.7729 2.49087 53.1528 2.10154L53.0097 1.96184C52.5918 2.39004 52.366 2.96978 52.3841 3.56785L52.584 3.56178ZM53.1188 5.0298C52.7512 4.63491 52.5584 4.10846 52.584 3.56956L52.3842 3.56007C52.356 4.15277 52.5681 4.73177 52.9724 5.16607L53.1188 5.0298ZM54.4985 5.60541C53.9792 5.60541 53.4816 5.39733 53.1168 5.0277L52.9744 5.16817C53.3768 5.5759 53.9257 5.80541 54.4985 5.80541V5.60541ZM30.4216 3.37773V4.0195H30.6216V3.37773H30.4216ZM33.1515 3.28664L30.522 3.27773L30.5213 3.47773L33.1508 3.48664L33.1515 3.28664ZM33.2509 3.79375C33.2592 3.65617 33.2592 3.51822 33.2509 3.38064L33.0513 3.39264C33.0591 3.52223 33.0591 3.65216 33.0513 3.78175L33.2509 3.79375ZM32.5549 5.63951C33.0304 5.14157 33.2818 4.47105 33.251 3.78328L33.0512 3.79222C33.0796 4.42551 32.8481 5.0429 32.4103 5.50139L32.5549 5.63951ZM30.5176 6.45476C31.2816 6.48559 32.0225 6.18924 32.5544 5.64002L32.4108 5.50088C31.9184 6.00918 31.2327 6.28346 30.5257 6.25492L30.5176 6.45476ZM28.4803 5.6226C29.0171 6.17063 29.7569 6.47191 30.5239 6.45481L30.5194 6.25486C29.8078 6.27072 29.1213 5.99117 28.6232 5.48265L28.4803 5.6226ZM27.6407 3.56235C27.6208 4.33706 27.9259 5.08476 28.4821 5.62439L28.6214 5.48085C28.1053 4.98012 27.8222 4.28633 27.8406 3.56747L27.6407 3.56235ZM28.4821 1.50543C27.9259 2.04507 27.6208 2.79276 27.6407 3.56747L27.8406 3.56235C27.8222 2.84349 28.1053 2.1497 28.6214 1.64897L28.4821 1.50543ZM31.657 0.90573C30.5744 0.447606 29.3226 0.684133 28.4819 1.50568L28.6216 1.64872C29.4048 0.883514 30.5707 0.663206 31.579 1.08992L31.657 0.90573ZM32.5309 1.52892C32.291 1.25666 31.9916 1.04329 31.656 0.905333L31.58 1.09031C31.8872 1.2166 32.1612 1.41192 32.3808 1.66114L32.5309 1.52892ZM32.0542 2.13815L32.5266 1.66574L32.3852 1.52432L31.9127 1.99673L32.0542 2.13815ZM30.5267 1.52554C31.0564 1.49873 31.5677 1.72322 31.9065 2.13132L32.0604 2.00357C31.6814 1.54697 31.1092 1.2958 30.5166 1.3258L30.5267 1.52554ZM29.0995 2.12278C29.4724 1.73865 29.9858 1.52304 30.5211 1.52567L30.5221 1.32567C29.9323 1.32278 29.3668 1.5603 28.956 1.98347L29.0995 2.12278ZM28.5447 3.56146C28.5263 3.0264 28.7266 2.50691 29.0995 2.12278L28.956 1.98347C28.5452 2.40664 28.3245 2.97892 28.3449 3.56836L28.5447 3.56146ZM29.0995 5.00704C28.7266 4.62291 28.5263 4.10342 28.5447 3.56836L28.3449 3.56146C28.3245 4.1509 28.5452 4.72318 28.956 5.14635L29.0995 5.00704ZM30.5211 5.60415C29.9858 5.60678 29.4724 5.39117 29.0995 5.00704L28.956 5.14635C29.3668 5.56952 29.9323 5.80705 30.5221 5.80415L30.5211 5.60415ZM31.9394 5.03636C31.5654 5.41167 31.0537 5.61695 30.524 5.60418L30.5192 5.80412C31.1037 5.81821 31.6683 5.59168 32.081 5.17753L31.9394 5.03636ZM32.3648 4.01584C32.3509 4.39721 32.199 4.76055 31.9374 5.0384L32.083 5.1755C32.3778 4.86239 32.549 4.45293 32.5647 4.02316L32.3648 4.01584ZM30.5216 4.1195H32.4648V3.9195H30.5216V4.1195ZM33.761 15.2056V16.81H33.961V15.2056H33.761ZM39.2804 15.1056H33.861V15.3056H39.2804V15.1056ZM39.4606 16.2048C39.4639 15.8643 39.4365 15.5242 39.379 15.1886L39.1818 15.2225C39.2374 15.5463 39.2638 15.8744 39.2606 16.2029L39.4606 16.2048ZM38.0441 20.0416C38.9976 18.9941 39.5057 17.6164 39.4606 16.2007L39.2607 16.207C39.3041 17.5708 38.8147 18.8979 37.8962 19.907L38.0441 20.0416ZM33.857 21.7232C35.4277 21.7859 36.9504 21.1749 38.0421 20.0437L37.8982 19.9048C36.8462 20.9949 35.3787 21.5838 33.865 21.5234L33.857 21.7232ZM28.4821 18.7988C29.6048 20.6865 31.6703 21.8086 33.8649 21.7232L33.8571 21.5233C31.7357 21.6059 29.7392 20.5212 28.654 18.6966L28.4821 18.7988ZM28.4821 12.673C27.3594 14.5606 27.3594 16.9112 28.4821 18.7988L28.654 18.6966C27.5687 16.872 27.5687 14.5998 28.654 12.7752L28.4821 12.673ZM33.8649 9.74861C31.6702 9.6632 29.6048 10.7853 28.4821 12.673L28.654 12.7752C29.7392 10.9506 31.7357 9.8659 33.8571 9.94846L33.8649 9.74861ZM37.9691 11.3997C36.8768 10.3193 35.3955 9.72421 33.8594 9.74855L33.8626 9.94852C35.345 9.92504 36.7744 10.4993 37.8285 11.5419L37.9691 11.3997ZM36.8375 12.6735L37.9695 11.5415L37.8281 11.4001L36.6961 12.5321L36.8375 12.6735ZM33.8446 11.553C34.9062 11.5372 35.9312 11.9403 36.6976 12.675L36.836 12.5306C36.0316 11.7595 34.9558 11.3364 33.8417 11.353L33.8446 11.553ZM29.6647 15.7314C29.6647 13.4237 31.5354 11.553 33.8432 11.553V11.353C31.425 11.353 29.4647 13.3133 29.4647 15.7314H29.6647ZM33.8432 19.9099C31.5354 19.9099 29.6647 18.0392 29.6647 15.7314H29.4647C29.4647 18.1496 31.425 20.1099 33.8432 20.1099V19.9099ZM36.7489 18.7633C35.9876 19.539 34.9332 19.9556 33.8474 19.91L33.839 20.1098C34.9814 20.1578 36.0907 19.7194 36.8916 18.9034L36.7489 18.7633ZM37.6119 16.802C37.5534 17.5352 37.2486 18.2271 36.7471 18.7652L36.8934 18.9015C37.4256 18.3304 37.7491 17.5961 37.8113 16.8179L37.6119 16.802ZM33.861 16.91H37.7116V16.71H33.861V16.91ZM43.7371 13.9365C41.5848 13.9416 39.8441 15.6905 39.8492 17.8428L40.0492 17.8424C40.0444 15.8005 41.6957 14.1413 43.7376 14.1365L43.7371 13.9365ZM46.5143 15.0527C45.7776 14.3194 44.7747 13.9166 43.7355 13.9365L43.7393 14.1365C44.7244 14.1176 45.6749 14.4994 46.3732 15.1944L46.5143 15.0527ZM47.6434 17.8262C47.6585 16.7869 47.251 15.7859 46.5143 15.0527L46.3732 15.1944C47.0715 15.8894 47.4577 16.8382 47.4435 17.8233L47.6434 17.8262ZM43.7554 21.7308C45.9078 21.7258 47.6485 19.9769 47.6434 17.8245L47.4434 17.825C47.4482 19.8669 45.7969 21.526 43.755 21.5308L43.7554 21.7308ZM39.8492 17.8428C39.8542 19.9952 41.6031 21.7359 43.7554 21.7308L43.755 21.5308C41.7131 21.5356 40.054 19.8842 40.0492 17.8424L39.8492 17.8428ZM48.3567 17.8424C48.3519 15.8005 50.0032 14.1413 52.0451 14.1365L52.0446 13.9365C49.8923 13.9416 48.1516 15.6905 48.1567 17.8428L48.3567 17.8424ZM52.0625 21.5308C50.0206 21.5356 48.3615 19.8842 48.3567 17.8424L48.1567 17.8428C48.1617 19.9952 49.9106 21.7359 52.0629 21.7308L52.0625 21.5308ZM55.7509 17.825C55.7557 19.8669 54.1044 21.526 52.0625 21.5308L52.0629 21.7308C54.2153 21.7258 55.956 19.9769 55.9509 17.8245L55.7509 17.825ZM54.6807 15.1944C55.379 15.8894 55.7652 16.8382 55.751 17.8233L55.9509 17.8262C55.966 16.7869 55.5585 15.7859 54.8218 15.0527L54.6807 15.1944ZM52.0468 14.1365C53.0319 14.1176 53.9824 14.4994 54.6807 15.1944L54.8218 15.0527C54.0851 14.3194 53.0822 13.9166 52.043 13.9365L52.0468 14.1365ZM49.7189 18.8659C50.1436 19.755 51.0687 20.294 52.0516 20.2253L52.0376 20.0258C51.1366 20.0888 50.2887 19.5946 49.8993 18.7797L49.7189 18.8659ZM50.1271 16.197C49.456 16.9185 49.2941 17.9768 49.7189 18.8659L49.8993 18.7797C49.51 17.9647 49.6584 16.9946 50.2736 16.3333L50.1271 16.197ZM52.7596 15.5972C51.8421 15.2377 50.7982 15.4756 50.1271 16.197L50.2736 16.3333C50.8887 15.6719 51.8456 15.4539 52.6866 15.7834L52.7596 15.5972ZM54.2838 17.8256C54.2814 16.8403 53.677 15.9566 52.7596 15.5972L52.6866 15.7834C53.5275 16.1129 54.0816 16.9229 54.0838 17.8261L54.2838 17.8256ZM53.6724 19.495C54.0936 19.0422 54.314 18.4386 54.2837 17.821L54.084 17.8308C54.1116 18.3945 53.9104 18.9455 53.526 19.3588L53.6724 19.495ZM52.0469 20.2255C52.6651 20.2112 53.2513 19.9477 53.6724 19.495L53.526 19.3588C53.1416 19.772 52.6065 20.0125 52.0423 20.0256L52.0469 20.2255ZM41.4114 18.8659C41.8361 19.755 42.7612 20.294 43.7441 20.2253L43.7301 20.0258C42.8291 20.0888 41.9812 19.5946 41.5918 18.7797L41.4114 18.8659ZM41.8196 16.197C41.1485 16.9185 40.9866 17.9768 41.4114 18.8659L41.5918 18.7797C41.2025 17.9647 41.3509 16.9946 41.9661 16.3333L41.8196 16.197ZM44.4521 15.5972C43.5346 15.2377 42.4907 15.4756 41.8196 16.197L41.9661 16.3333C42.5812 15.6719 43.5381 15.4539 44.3791 15.7834L44.4521 15.5972ZM45.9763 17.8256C45.9739 16.8403 45.3695 15.9566 44.4521 15.5972L44.3791 15.7834C45.2201 16.1129 45.7741 16.9229 45.7763 17.8261L45.9763 17.8256ZM45.365 19.495C45.7861 19.0422 46.0065 18.4386 45.9762 17.821L45.7765 17.8308C45.8041 18.3945 45.6029 18.9455 45.2185 19.3588L45.365 19.495ZM43.7394 20.2255C44.3576 20.2112 44.9438 19.9477 45.365 19.495L45.2185 19.3588C44.8341 19.772 44.299 20.0125 43.7348 20.0256L43.7394 20.2255ZM71.0001 14.1367C72.4365 14.1896 73.6911 15.1237 74.1536 16.4845L74.343 16.4202C73.8537 14.9808 72.5267 13.9928 71.0075 13.9369L71.0001 14.1367ZM68.4733 15.2271C69.1298 14.5296 70.0457 14.1349 71.0036 14.1368L71.004 13.9368C69.9908 13.9348 69.0221 14.3523 68.3277 15.09L68.4733 15.2271ZM67.5382 17.8188C67.4783 16.8628 67.8168 15.9246 68.4733 15.2271L68.3277 15.09C67.6333 15.8278 67.2753 16.8201 67.3386 17.8313L67.5382 17.8188ZM70.1365 21.3707C68.5806 20.8955 67.5231 19.4528 67.5384 17.826L67.3384 17.8241C67.3223 19.5395 68.4374 21.0609 70.0781 21.562L70.1365 21.3707ZM74.2718 19.8824C73.3755 21.2402 71.6925 21.8459 70.1365 21.3707L70.0781 21.562C71.7188 22.063 73.4936 21.4243 74.4387 19.9926L74.2718 19.8824ZM73.006 19.1285L74.2985 20.0198L74.412 19.8552L73.1196 18.9639L73.006 19.1285ZM71.1989 20.189C71.9964 20.1968 72.7383 19.7815 73.1486 19.0976L72.9771 18.9947C72.6033 19.6178 71.9274 19.9961 71.2009 19.9891L71.1989 20.189ZM69.272 18.9791C69.6044 19.7427 70.372 20.2233 71.204 20.189L71.1958 19.9891C70.4462 20.0201 69.7548 19.5871 69.4554 18.8993L69.272 18.9791ZM74.3973 16.7521L69.3255 18.8468L69.4019 19.0316L74.4737 16.937L74.3973 16.7521ZM74.1581 16.4954L74.3452 16.8876L74.5257 16.8015L74.3386 16.4093L74.1581 16.4954ZM69.1789 17.7124C69.1442 17.1809 69.3254 16.6578 69.6816 16.2617L69.5329 16.128C69.1407 16.5642 68.9411 17.1402 68.9793 17.7255L69.1789 17.7124ZM72.4279 16.2183L69.0407 17.6266L69.1175 17.8113L72.5046 16.403L72.4279 16.2183ZM71.0732 15.6082C71.6183 15.5733 72.1315 15.8675 72.3769 16.3555L72.5556 16.2657C72.2742 15.706 71.6856 15.3686 71.0604 15.4086L71.0732 15.6082ZM69.6816 16.2617C70.0377 15.8656 70.5387 15.63 71.0709 15.6083L71.0627 15.4085C70.4767 15.4324 69.9251 15.6918 69.5329 16.128L69.6816 16.2617ZM66.6277 21.2907H64.9608V21.4907H66.6277V21.2907ZM66.5277 10.2488V21.3907H66.7277V10.2488H66.5277ZM64.9608 10.3488H66.6277V10.1488H64.9608V10.3488ZM65.0608 21.3907V10.2488H64.8609V21.3907H65.0608ZM62.2336 14.7835H62.1712V14.9835H62.2336V14.7835ZM62.1336 14.2595V14.8835H62.3336V14.2595H62.1336ZM63.7756 14.1595H62.2336V14.3595H63.7756V14.1595ZM63.8756 21.0516V14.2595H63.6756V21.0516H63.8756ZM60.2102 25.1003C61.2054 25.1003 62.1245 24.807 62.7951 24.1468C63.4663 23.486 63.8756 22.4704 63.8756 21.0516H63.6756C63.6756 22.4317 63.2783 23.3904 62.6548 24.0043C62.0307 24.6187 61.1671 24.9003 60.2102 24.9003V25.1003ZM56.7569 22.7911C57.3188 24.2023 58.6928 25.1207 60.2116 25.1003L60.2089 24.9003C58.773 24.9196 57.4739 24.0513 56.9427 22.7171L56.7569 22.7911ZM58.2556 22.0645L56.8116 22.6617L56.888 22.8465L58.332 22.2493L58.2556 22.0645ZM60.2124 23.4029C59.4004 23.385 58.6795 22.8787 58.3871 22.1209L58.2005 22.1929C58.522 23.0263 59.3149 23.5832 60.208 23.6028L60.2124 23.4029ZM62.1336 21.2745C62.1336 21.9838 61.9444 22.5136 61.6167 22.8653C61.2898 23.2161 60.813 23.4028 60.2102 23.4028V23.6028C60.8553 23.6028 61.3902 23.4018 61.763 23.0017C62.135 22.6024 62.3336 22.018 62.3336 21.2745H62.1336ZM62.1336 20.7307V21.2745H62.3336V20.7307H62.1336ZM62.1712 20.8307H62.2336V20.6307H62.1712V20.8307ZM60.1726 21.7221C60.9675 21.738 61.7281 21.3985 62.247 20.796L62.0954 20.6655C61.6155 21.2228 60.9119 21.5369 60.1766 21.5221L60.1726 21.7221ZM56.4613 17.8294C56.4613 19.9083 58.0932 21.6213 60.1697 21.722L60.1794 21.5222C58.2095 21.4267 56.6613 19.8017 56.6613 17.8294H56.4613ZM60.1697 13.9368C58.0932 14.0375 56.4613 15.7504 56.4613 17.8294H56.6613C56.6613 15.8571 58.2095 14.2321 60.1794 14.1366L60.1697 13.9368ZM62.2448 14.8158C61.7133 14.2372 60.9575 13.9167 60.172 13.9367L60.1771 14.1367C60.9048 14.1181 61.6051 14.4151 62.0976 14.9511L62.2448 14.8158ZM58.0586 17.8307C58.0586 19.098 59.0441 20.1469 60.309 20.2257L60.3214 20.0261C59.162 19.9538 58.2586 18.9924 58.2586 17.8307H58.0586ZM60.309 15.4356C59.0441 15.5145 58.0586 16.5634 58.0586 17.8307H58.2586C58.2586 16.669 59.162 15.7075 60.3214 15.6353L60.309 15.4356ZM61.8917 16.1837C61.4907 15.7316 60.9233 15.4616 60.3195 15.4355L60.3109 15.6354C60.8605 15.6591 61.377 15.9048 61.7421 16.3164L61.8917 16.1837ZM62.4472 17.8338C62.4932 17.2312 62.2928 16.6358 61.8917 16.1837L61.7421 16.3164C62.1072 16.7279 62.2897 17.27 62.2478 17.8186L62.4472 17.8338ZM61.8983 19.4771C62.3002 19.0222 62.4986 18.4226 62.4471 17.8177L62.2478 17.8347C62.2947 18.3851 62.1142 18.9307 61.7484 19.3446L61.8983 19.4771ZM60.319 20.2258C60.9256 20.2025 61.4963 19.932 61.8983 19.4771L61.7484 19.3446C61.3826 19.7586 60.8633 20.0048 60.3113 20.026L60.319 20.2258ZM82.0572 10.1511H78.0639V10.3512H82.0572V10.1511ZM85.3515 11.8526C84.6562 10.7122 83.3822 10.0557 82.05 10.1514L82.0643 10.3509C83.3218 10.2606 84.5245 10.8802 85.1808 11.9567L85.3515 11.8526ZM85.3515 15.5666C86.0468 14.4262 86.0468 12.993 85.3515 11.8526L85.1808 11.9567C85.8371 13.0331 85.8371 14.386 85.1808 15.4625L85.3515 15.5666ZM82.05 17.2678C83.3822 17.3635 84.6562 16.707 85.3515 15.5666L85.1808 15.4625C84.5245 16.539 83.3218 17.1586 82.0643 17.0683L82.05 17.2678ZM79.7307 17.268H82.0572V17.068H79.7307V17.268ZM79.8307 21.393V17.168H79.6307V21.393H79.8307ZM78.0639 21.493H79.7307V21.293H78.0639V21.493ZM77.9639 10.2512V21.393H78.1639V10.2512H77.9639ZM79.7297 15.6981H82.0562V15.4981H79.7297V15.6981ZM79.6297 11.801V15.5981H79.8297V11.801H79.6297ZM82.0918 11.701H79.7297V11.901H82.0918V11.701ZM84.0993 13.7085C84.0993 12.5998 83.2005 11.701 82.0918 11.701V11.901C83.0901 11.901 83.8993 12.7102 83.8993 13.7085H84.0993ZM82.0918 15.716C83.2005 15.716 84.0993 14.8172 84.0993 13.7085H83.8993C83.8993 14.7067 83.0901 15.516 82.0918 15.516V15.716ZM82.0114 15.6876L82.0471 15.7054L82.1365 15.5265L82.1009 15.5087L82.0114 15.6876ZM92.3491 13.9025C91.0685 13.8236 89.8639 14.5145 89.2855 15.6597L89.464 15.7499C90.0064 14.676 91.136 14.0281 92.3368 14.1021L92.3491 13.9025ZM92.4233 13.9307L92.3876 13.9129L92.2982 14.0918L92.3339 14.1096L92.4233 13.9307ZM95.8568 17.1042C95.8568 16.1009 95.4756 15.3017 94.8452 14.7546C94.2164 14.2089 93.3471 13.9202 92.3786 13.9202V14.1202C93.3086 14.1202 94.1284 14.3974 94.7141 14.9057C95.2982 15.4126 95.6568 16.1555 95.6568 17.1042H95.8568ZM95.8568 21.3916V17.1042H95.6568V21.3916H95.8568ZM94.1524 21.4916H95.7568V21.2916H94.1524V21.4916ZM94.0524 20.5003V21.3916H94.2524V20.5003H94.0524ZM94.0989 20.6003H94.1524V20.4003H94.0989V20.6003ZM91.9719 21.6876C92.8596 21.7367 93.7048 21.3034 94.1832 20.5541L94.0146 20.4465C93.5751 21.1349 92.7985 21.533 91.983 21.4879L91.9719 21.6876ZM90.0061 21.0241C90.5488 21.504 91.2629 21.7433 91.9852 21.6874L91.9698 21.488C91.3014 21.5397 90.6407 21.3183 90.1386 20.8743L90.0061 21.0241ZM89.1055 19.141C89.1384 19.8648 89.4634 20.5442 90.0061 21.0241L90.1386 20.8743C89.6364 20.4302 89.3357 19.8016 89.3053 19.132L89.1055 19.141ZM92.4142 16.5229C91.6039 16.5229 90.7807 16.7502 90.1572 17.1896C89.5315 17.6306 89.1054 18.2874 89.1054 19.1365H89.3054C89.3054 18.3634 89.6903 17.7634 90.2724 17.3531C90.8568 16.9412 91.638 16.7229 92.4142 16.7229V16.5229ZM94.1989 16.9622C93.6485 16.6729 93.0359 16.5221 92.4141 16.5229L92.4144 16.7229C93.0036 16.7222 93.5842 16.8651 94.1058 17.1393L94.1989 16.9622ZM94.0524 16.9438V17.0507H94.2524V16.9438H94.0524ZM93.4992 15.9304C93.8135 16.1834 94.013 16.5521 94.0528 16.9537L94.2519 16.9339C94.2067 16.479 93.9807 16.0613 93.6246 15.7746L93.4992 15.9304ZM92.3813 15.608C92.7821 15.5612 93.1848 15.6774 93.4992 15.9304L93.6246 15.7746C93.2685 15.4879 92.8121 15.3564 92.3581 15.4094L92.3813 15.608ZM90.9329 16.3683C91.2174 15.8555 91.7768 15.5578 92.361 15.6083L92.3783 15.4091C91.7154 15.3517 91.0807 15.6895 90.758 16.2713L90.9329 16.3683ZM89.3361 15.7971L90.8069 16.4121L90.884 16.2276L89.4133 15.6125L89.3361 15.7971ZM90.7364 19.1638C90.7364 19.5431 90.954 19.8078 91.2322 19.9729C91.508 20.1364 91.8518 20.2086 92.1378 20.2086V20.0086C91.8801 20.0086 91.5732 19.9426 91.3342 19.8009C91.0978 19.6606 90.9364 19.4529 90.9364 19.1638H90.7364ZM92.6191 17.8693C92.1907 17.8693 91.7265 17.9464 91.3655 18.1446C90.9996 18.3455 90.7364 18.6742 90.7364 19.1638H90.9364C90.9364 18.762 91.1457 18.4935 91.4617 18.32C91.7826 18.1438 92.2097 18.0693 92.6191 18.0693V17.8693ZM94.1832 18.2564C93.7051 17.9895 93.1641 17.8559 92.6167 17.8694L92.6216 18.0693C93.1332 18.0567 93.6388 18.1816 94.0857 18.431L94.1832 18.2564ZM92.1755 20.2264C93.233 20.2053 94.1123 19.406 94.2338 18.3552L94.0351 18.3322C93.9251 19.2836 93.129 20.0073 92.1715 20.0264L92.1755 20.2264ZM92.0931 20.198L92.1287 20.2159L92.2182 20.037L92.1825 20.0191L92.0931 20.198ZM101.511 14.2245L99.6038 19.0556L99.7898 19.129L101.697 14.2979L101.511 14.2245ZM103.458 14.1612H101.604V14.3612H103.458V14.1612ZM99.031 24.8097L103.55 14.3007L103.366 14.2217L98.8473 24.7307L99.031 24.8097ZM97.1564 24.8702H98.9391V24.6702H97.1564V24.8702ZM98.7588 20.9765L97.0653 24.7291L97.2476 24.8114L98.9411 21.0588L98.7588 20.9765ZM95.7902 14.3014L98.7584 21.0579L98.9415 20.9774L95.9733 14.221L95.7902 14.3014ZM97.6645 14.1612H95.8818V14.3612H97.6645V14.1612ZM99.7358 19.0544L97.757 14.2233L97.572 14.2991L99.5508 19.1302L99.7358 19.0544ZM99.6968 18.9923H99.6433V19.1923H99.6968V18.9923ZM88.2866 21.2907H86.6287V21.4907H88.2866V21.2907ZM88.1866 10.2488V21.3907H88.3866V10.2488H88.1866ZM86.6287 10.3488H88.2866V10.1488H86.6287V10.3488ZM86.7287 21.3907V10.2488H86.5287V21.3907H86.7287ZM37.2603 6.13864H34.1316V6.33864H37.2603V6.13864ZM37.1603 5.57904V6.23864H37.3603V5.57904H37.1603ZM34.8269 5.67904H37.2603V5.47904H34.8269V5.67904ZM34.7269 3.88548V5.57904H34.9269V3.88548H34.7269ZM37.0196 3.78548H34.8269V3.98548H37.0196V3.78548ZM36.9196 3.2437V3.88548H37.1196V3.2437H36.9196ZM34.8269 3.3437H37.0196V3.1437H34.8269V3.3437ZM34.7269 1.55014V3.2437H34.9269V1.55014H34.7269ZM37.2603 1.45014H34.8269V1.65014H37.2603V1.45014ZM37.1603 0.890539V1.55014H37.3603V0.890539H37.1603ZM34.1316 0.990539H37.2603V0.790539H34.1316V0.990539ZM34.2316 6.23864V0.890539H34.0316V6.23864H34.2316ZM37.9732 1.65014H39.4706V1.45014H37.9732V1.65014ZM37.8732 0.890539V1.55014H38.0732V0.890539H37.8732ZM41.6455 0.790539H37.9732V0.990539H41.6455V0.790539ZM41.7455 1.55014V0.890539H41.5455V1.55014H41.7455ZM40.157 1.65014H41.6455V1.45014H40.157V1.65014ZM40.257 6.23864V1.55014H40.057V6.23864H40.257ZM39.4706 6.33864H40.157V6.13864H39.4706V6.33864ZM39.3706 1.55014V6.23864H39.5706V1.55014H39.3706ZM44.9969 0.790539H44.3106V0.990539H44.9969V0.790539ZM45.0969 6.23864V0.890539H44.8969V6.23864H45.0969ZM44.3106 6.33864H44.9969V6.13864H44.3106V6.33864ZM44.2106 0.890539V6.23864H44.4106V0.890539H44.2106ZM45.8619 1.65014H47.3593V1.45014H45.8619V1.65014ZM45.7619 0.890539V1.55014H45.9619V0.890539H45.7619ZM49.5342 0.790539H45.8619V0.990539H49.5342V0.790539ZM49.6342 1.55014V0.890539H49.4342V1.55014H49.6342ZM48.0457 1.65014H49.5342V1.45014H48.0457V1.65014ZM48.1457 6.23864V1.55014H47.9457V6.23864H48.1457ZM47.3593 6.33864H48.0457V6.13864H47.3593V6.33864ZM47.2593 1.55014V6.23864H47.4593V1.55014H47.2593ZM61.5839 0.890539V4.01918H61.7839V0.890539H61.5839ZM62.3703 0.790539H61.6839V0.990539H62.3703V0.790539ZM62.4702 6.23864V0.890539H62.2703V6.23864H62.4702ZM61.6572 6.33864H62.3703V6.13864H61.6572V6.33864ZM58.8537 1.93286L61.5723 6.29156L61.742 6.18572L59.0234 1.82702L58.8537 1.93286ZM58.9029 1.97994H58.9386V1.77994H58.9029V1.97994ZM59.0385 2.90151L59.0028 1.87646L58.803 1.88341L58.8386 2.90847L59.0385 2.90151ZM59.0386 6.23864V2.90499H58.8386V6.23864H59.0386ZM58.2522 6.33864H58.9386V6.13864H58.2522V6.33864ZM58.1522 0.890539V6.23864H58.3522V0.890539H58.1522ZM59.0812 0.790539H58.2522V0.990539H59.0812V0.790539ZM61.7687 5.00013L59.166 0.837522L58.9964 0.943555L61.5991 5.10616L61.7687 5.00013ZM61.7107 4.95315H61.6839V5.15314H61.7107V4.95315ZM61.5839 4.02176L61.6107 5.05573L61.8106 5.05056L61.7839 4.01659L61.5839 4.02176Z"
                                fill="white"
                              />
                              <path
                                opacity="0.5"
                                d="M0.396706 0.363786C0.112577 0.715028 -0.0276002 1.16104 0.00451221 1.61168V21.3283C-0.0258169 21.7833 0.12475 22.2318 0.423447 22.5762L0.485841 22.6475L11.5029 11.6037V11.3363L0.459101 0.301392L0.396706 0.363786Z"
                                fill="white"
                              />
                              <path
                                opacity="0.9"
                                d="M15.1575 15.2849L11.5029 11.6036V11.3362L15.1575 7.65491L15.2377 7.70839L19.6142 10.1863C20.8621 10.8905 20.8621 12.0493 19.6142 12.7623L15.2555 15.2403L15.1575 15.2849Z"
                                fill="white"
                              />
                              <path
                                opacity="0.3"
                                d="M15.2647 15.2395L11.5032 11.4691L0.396973 22.5753C0.916659 23.0379 1.69232 23.0642 2.24207 22.6377L15.2647 15.2395"
                                fill="white"
                              />
                              <path
                                opacity="0.7"
                                d="M15.2647 7.70808L2.24207 0.309876C1.69564 -0.122677 0.91743 -0.100121 0.396973 0.363357L11.5032 11.4696L15.2647 7.70808Z"
                                fill="white"
                              />
                            </svg>
                            <em>
                              <svg viewBox="0 0 16 15" fill="none">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8 11.978l-4.702 2.468.898-5.227L.392 5.518l5.257-.763L8 0l2.351 4.755 5.257.763-3.804 3.701.898 5.227L8 11.978z"
                                  fill="url(#gradient)"
                                />
                                <defs>
                                  <linearGradient
                                    id="gradient"
                                    x1={24}
                                    y1="7.985"
                                    x2="8.029"
                                    y2="-8.014"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#FF9F1A" />
                                    <stop offset={1} stopColor="#FC3" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <span>4.5</span>
                            </em>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="x__platform-dropdown x__platform-dropdown--Extension">
                    <a
                      className="x__toggle"
                      style={{
                        background: "linear-gradient(to right, #FFC82D,#FE9D39)"
                      }}
                      href="https://www.exodus.com/install-forwarder/extension/?utm_source=exodus-website&utm_campaign=btc-wallet&utm_content=btc-wallet&referrer=https%3A%2F%2Fgithub.com%2F"
                      target="_blank"
                    >
                      <i className="x__toggle__icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <title>Extension</title>
                          <path
                            d="M19.5 11H18V7C18 5.9 17.1 5 16 5H12V3.5C12 2.83696 11.7366 2.20107 11.2678 1.73223C10.7989 1.26339 10.163 1 9.5 1C8.83696 1 8.20107 1.26339 7.73223 1.73223C7.26339 2.20107 7 2.83696 7 3.5V5H3C1.9 5 1.01 5.9 1.01 7V10.8H2.5C3.99 10.8 5.2 12.01 5.2 13.5C5.2 14.99 3.99 16.2 2.5 16.2H1V20C1 21.1 1.9 22 3 22H6.8V20.5C6.8 19.01 8.01 17.8 9.5 17.8C10.99 17.8 12.2 19.01 12.2 20.5V22H16C17.1 22 18 21.1 18 20V16H19.5C20.163 16 20.7989 15.7366 21.2678 15.2678C21.7366 14.7989 22 14.163 22 13.5C22 12.837 21.7366 12.2011 21.2678 11.7322C20.7989 11.2634 20.163 11 19.5 11Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                      <span className="x__toggle__label">Download Extension</span>
                      <span className="x__toggle__picker" />
                    </a>
                    <div className="x__menu x__menu--to-top">
                      <ul>
                        <li className="x__menu__item">
                          <a href="https://www.exodus.com/install-forwarder/extension/?utm_source=exodus-website&utm_campaign=btc-wallet&utm_content=btc-wallet&referrer=https%3A%2F%2Fgithub.com%2F">
                            <i />
                            <span>Download on Google Play</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="x__footer">
            <div className="x__footer__content">
              <div className="x__trustpilot">
                <div
                  className="x__trustpilot__widget trustpilot-widget"
                  id="trustpilot-widget"
                  data-locale="en-US"
                  data-font-family="Roboto"
                  data-template-id="5419b6ffb0d04a076446a9af"
                  data-businessunit-id="5c9d1556164d370001825424"
                  data-style-height="20px"
                  data-style-width="100%"
                  data-theme="dark"
                  data-tags="SelectedReview"
                  data-stars={5}
                  style={{ position: "relative" }}
                >
                  <iframe
                    title="Customer reviews powered by Trustpilot"
                    loading="auto"
                    src="https://widget.trustpilot.com/trustboxes/5419b6ffb0d04a076446a9af/index.html?templateId=5419b6ffb0d04a076446a9af&businessunitId=5c9d1556164d370001825424#locale=en-US&fontFamily=Roboto&styleHeight=20px&styleWidth=100%25&theme=dark&tags=SelectedReview&stars=5"
                    style={{
                      position: "relative",
                      height: 20,
                      width: "100%",
                      borderStyle: "none",
                      display: "block",
                      overflow: "hidden"
                    }}
                  />
                </div>
              </div>
              <div className="x__footer__content-top">
                <div className="x__footer-navigation" id="footernav">
                  <div className="x__footer-navigation-col">
                    <div id="footernavheading0">
                      <p className="x__footer-navigation__heading" tabIndex={0}>
                        Products
                      </p>
                    </div>
                    <div className="collapse">
                      <a
                        className="x__footer-navigation__link"
                        href="/web3-wallet/"
                      >
                        Web3 Wallet
                      </a>
                      <a
                        href="https://exodus.com/mobile/"
                        className="x__footer-navigation__link"
                        target="_self"
                      >
                        Mobile Wallet
                      </a>
                      <a
                        href="https://exodus.com/desktop/"
                        className="x__footer-navigation__link"
                        target="_self"
                      >
                        Desktop Wallet
                      </a>
                      <a
                        className="x__footer-navigation__link"
                        href="/trezor-wallet/"
                      >
                        Trezor Hardware Wallet
                      </a>
                      <a
                        className="x__footer-navigation__link"
                        href="/earn-crypto/"
                      >
                        Earn Crypto Rewards
                      </a>
                      <a className="x__footer-navigation__link" href="/xo-swap/">
                        XO Swap
                      </a>
                      <a
                        href="https://passkeys.foundation/"
                        className="x__footer-navigation__link"
                        target="_blank"
                      >
                        Passkeys Wallet &amp; SDK
                      </a>
                    </div>
                    <span className="x__footer-navigation__arrow" />
                  </div>
                  <div className="x__footer-navigation-col">
                    <div id="footernavheading1">
                      <p className="x__footer-navigation__heading" tabIndex={0}>
                        Support
                      </p>
                    </div>
                    <div className="collapse">
                      <a
                        className="x__footer-navigation__link"
                        href="/contact-support/"
                      >
                        Support
                      </a>
                      <a
                        href="https://www.exodus.com/support"
                        className="x__footer-navigation__link"
                        target="_blank"
                      >
                        Knowledge Base
                      </a>
                      <a
                        className="x__footer-navigation__link"
                        href="/legal-inquiries/"
                      >
                        Legal Inquiries
                      </a>
                      <a className="x__footer-navigation__link" href="/status/">
                        Status
                      </a>
                      <a
                        href="https://www.youtube.com/c/exodus/"
                        className="x__footer-navigation__link"
                        target="_blank"
                      >
                        YouTube
                      </a>
                      <a className="x__footer-navigation__link" href="/newsletter/">
                        Newsletter
                      </a>
                    </div>
                    <span className="x__footer-navigation__arrow" />
                  </div>
                  <div className="x__footer-navigation-col">
                    <div id="footernavheading2">
                      <p className="x__footer-navigation__heading" tabIndex={0}>
                        Company
                      </p>
                    </div>
                    <div className="collapse">
                      <a className="x__footer-navigation__link" href="/about/">
                        About Us
                      </a>
                      <a className="x__footer-navigation__link" href="/investors/">
                        Investors
                      </a>
                      <a className="x__footer-navigation__link" href="/careers/">
                        Careers
                      </a>
                      <a className="x__footer-navigation__link" href="/contact/">
                        Contact Us
                      </a>
                      <a className="x__footer-navigation__link" href="/brand/">
                        Brand Guidelines
                      </a>
                      <a className="x__footer-navigation__link" href="/security/">
                        Security
                      </a>
                    </div>
                    <span className="x__footer-navigation__arrow" />
                  </div>
                </div>
                <div className="x__subscribe-module">
                  <p className="x__subscribe-module__heading">
                    Subscribe to Exodus
                  </p>
                  <p className="x__subscribe-module__copy">
                    Sign up to receive our newsletter with updates about your
                    wallet.
                  </p>
                  <a className="x__button" id="subscribeModule" href="/newsletter/">
                    <span className="x__button-align">
                      <span className="x__button-align-text">Sign me up</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="x__footer__content-center row">
                <div className="col col-md-7 col-12">
                  <div className="x__copyright">
                    <div className="x__copyright__logo">
                      <div
                        data-gatsby-image-wrapper=""
                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                      >
                        <div style={{ maxWidth: 156, display: "block" }}>
                          <img
                            alt=""
                            role="presentation"
                            aria-hidden="true"
                            src="data:image/svg+xml;charset=utf-8,%3Csvg height='32' width='156' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                            style={{
                              maxWidth: "100%",
                              display: "block",
                              position: "static"
                            }}
                          />
                        </div>
                        <div
                          aria-hidden="true"
                          data-placeholder-image=""
                          style={{
                            opacity: 0,
                            transition: "opacity 500ms linear",
                            backgroundColor: "rgb(8, 8, 8)",
                            position: "absolute",
                            inset: 0
                          }}
                        ></div>
                         <img
                            data-main-image=""
                            style={{ opacity: 1 }}
                            sizes="(min-width: 156px) 156px, 100vw"
                            decoding="async"
                            loading="lazy"
                            alt="Exodus Logo"
                            src="/asset-page/img/btc/exodus-logo.webp"
                          
                          />
                      </div>
                    </div>
                    <div className="x__copyright__copy">
                      Copyright © 2024 Exodus Movement, Inc.
                      <br />
                      Exodus was co-founded by Daniel Castagnoli and JP Richardson.
                    </div>
                  </div>
                </div>
                <div className="col col-md-5 col-12">
                  <div className="x__social">
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Discord"
                      href="http://discord.gg/exodus"
                    >
                      <svg
                        viewBox="0 0 27 20"
                        enableBackground="new 0 0 27 20"
                        height={20}
                        width={27}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Discord</title>
                        <path d="M22.213 1.658A21.638 21.638 0 0016.872 0a.081.081 0 00-.086.041c-.23.41-.486.945-.665 1.366a19.976 19.976 0 00-5.999 0C9.943.978 9.678.452 9.447.042a.084.084 0 00-.086-.04A21.578 21.578 0 004.02 1.657a.076.076 0 00-.035.03C.583 6.77-.35 11.728.108 16.623a.09.09 0 00.035.061 21.759 21.759 0 006.552 3.312c.034.01.07-.002.092-.03.504-.69.954-1.416 1.34-2.18a.083.083 0 00-.045-.116c-.714-.27-1.394-.6-2.047-.975a.084.084 0 01-.009-.14c.138-.103.276-.21.407-.318a.081.081 0 01.085-.012c4.294 1.96 8.943 1.96 13.186 0a.08.08 0 01.086.01c.132.109.27.217.408.32a.084.084 0 01-.007.14c-.654.382-1.334.705-2.048.974a.084.084 0 00-.045.117c.394.763.844 1.49 1.34 2.18.02.028.058.04.092.03a21.687 21.687 0 006.562-3.312.084.084 0 00.034-.06c.547-5.66-.916-10.576-3.88-14.935a.067.067 0 00-.033-.031zM8.768 13.642c-1.293 0-2.358-1.187-2.358-2.645 0-1.457 1.045-2.644 2.358-2.644 1.324 0 2.38 1.197 2.358 2.644 0 1.458-1.044 2.645-2.358 2.645zm8.719 0c-1.293 0-2.358-1.187-2.358-2.645 0-1.457 1.045-2.644 2.358-2.644 1.324 0 2.379 1.197 2.358 2.644 0 1.458-1.034 2.645-2.358 2.645z"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Github"
                      href="https://github.com/ExodusMovement"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Github</title>
                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="YouTube"
                      href="https://www.youtube.com/c/exodus"
                    >
                      <svg
                        viewBox="0 0 26 18"
                        enableBackground="new 0 0 26 18"
                        height={18}
                        width={26}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>YouTube</title>
                        <path d="M25.457 2.78A3.244 3.244 0 0 0 23.194.537C21.168 0 13.012 0 13.012 0S4.876-.01 2.829.538A3.244 3.244 0 0 0 .566 2.779 33.238 33.238 0 0 0 0 9.011c-.006 2.083.183 4.161.566 6.209a3.244 3.244 0 0 0 2.263 2.241C4.853 18 13.012 18 13.012 18s8.134 0 10.182-.539a3.244 3.244 0 0 0 2.263-2.241c.375-2.049.556-4.127.542-6.209a33.237 33.237 0 0 0-.542-6.232zM10.408 12.865V5.144l6.789 3.867-6.789 3.855z"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Reddit"
                      href="https://www.reddit.com/r/ExodusWallet"
                    >
                      <svg
                        viewBox="0 0 26 22"
                        enableBackground="new 0 0 26 22"
                        height={22}
                        width={26}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Reddit</title>
                        <path d="M16.867 14.2c-.971 0-1.788-.777-1.788-1.736s.817-1.762 1.788-1.762c.972 0 1.76.803 1.76 1.762s-.788 1.736-1.76 1.736m.413 3.371c-.905.892-2.3 1.326-4.267 1.326h-.028c-1.966 0-3.36-.434-4.265-1.326a.693.693 0 010-.99.717.717 0 011.004 0c.624.615 1.69.915 3.261.915h.028c1.57 0 2.638-.3 3.263-.916a.717.717 0 011.004 0 .695.695 0 010 .991m-9.907-5.107c0-.958.815-1.762 1.785-1.762.972 0 1.76.804 1.76 1.762 0 .959-.788 1.736-1.76 1.736-.97 0-1.785-.777-1.785-1.736M21.664 1.4c.659 0 1.194.529 1.194 1.177 0 .65-.535 1.178-1.194 1.178a1.187 1.187 0 01-1.193-1.178c0-.648.535-1.177 1.194-1.177M26 10.557c0-1.7-1.402-3.084-3.125-3.084-.746 0-1.43.26-1.969.692-1.905-1.182-4.323-1.894-6.915-2.044l1.352-4.218 3.716.863c.097 1.335 1.228 2.392 2.605 2.392 1.441 0 2.613-1.157 2.613-2.58C24.277 1.157 23.105 0 21.664 0a2.62 2.62 0 00-2.32 1.393L15.028.39a.71.71 0 00-.84.47L12.51 6.096c-2.792.067-5.418.781-7.463 2.032a3.135 3.135 0 00-1.921-.655C1.402 7.473 0 8.856 0 10.557c0 1.05.536 1.98 1.353 2.536-.034.245-.052.49-.052.74 0 2.126 1.252 4.103 3.525 5.567 2.18 1.404 5.064 2.177 8.121 2.177 3.058 0 5.942-.773 8.121-2.177 2.273-1.464 3.526-3.441 3.526-5.567 0-.227-.016-.452-.044-.676a3.073 3.073 0 001.45-2.6"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Twitter"
                      href="https://twitter.com/exodus_io"
                    >
                      <svg
                        viewBox="0 0 24 20"
                        enableBackground="new 0 0 24 20"
                        height={20}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Twitter</title>
                        <path d="M.056 0l8.88 11.873L0 21.527h2.011l7.824-8.452 6.32 8.452H23L13.62 8.986 21.938 0h-2.011l-7.205 7.784L6.9 0H.056zm2.958 1.481h3.144l13.884 18.564h-3.144L3.014 1.481z"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Instagram"
                      href="https://www.instagram.com/exodus"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Instagram</title>
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63a5.876 5.876 0 0 0-2.126 1.384A5.855 5.855 0 0 0 .63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85 0 3.204-.015 3.585-.074 4.85-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Facebook"
                      href="https://www.facebook.com/exodus.io"
                    >
                      <svg
                        viewBox="0 0 24 22"
                        enableBackground="new 0 0 24 22"
                        height={22}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Facebook</title>
                        <path d="m10.399 3.891c-0.60109-0.17553-1.2923-0.29255-1.9235-0.29255-0.78142 0-2.4645 0.49734-2.4645 1.4628v2.3112h3.9973v3.891h-3.9973v10.737h-4.0273v-10.737h-1.9836v-3.891h1.9836v-1.9601c0-2.9548 1.3825-5.4122 4.7186-5.4122 1.1421 0 3.1858 0.058511 4.2978 0.43883l-0.60109 3.4521z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="x__footer__content-bottom row">
                <div className="col col-12">
                  <div className="x__terms">
                    <span>
                      Exodus is a software platform ONLY and does not conduct any
                      independent diligence on or substantive review of any
                      blockchain asset, digital currency, cryptocurrency or
                      associated funds. You are fully and solely responsible for
                      evaluating your investments, for determining whether you will
                      swap blockchain assets based on your own, and for all your
                      decisions as to whether to swap blockchain assets with the
                      Exodus in app swap feature. In many cases, blockchain assets
                      you swap on the basis of your research may not increase in
                      value, and may decrease in value. Similarly, blockchain assets
                      you swap on the basis of your research may increase in value
                      after your swap.
                    </span>
                    <span>
                      Past performance is not indicative of future results. Any
                      investment in blockchain assets involves the risk of loss of
                      part or all of your investment. The value of the blockchain
                      assets you swap is subject to market and other investment
                      risks.
                    </span>
                    <span>
                      Exodus users are responsible for storing their own recovery
                      phrase. If the recovery phrase is lost, the user might not be
                      able to retrieve their private keys.
                    </span>
                    <span>
                      <a target="_blank" rel="noreferrer noopener" href="/privacy/">
                        Privacy Policy
                      </a>
                      <a target="_blank" rel="noreferrer noopener" href="/terms/">
                        Terms of Service
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="/trademarks/"
                      >
                        Trademarks
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <link
              href="https://widget.intercom.io"
              rel="preconnect"
              crossOrigin=""
            />
          </footer>
        </div>
      </div>
      <div
        id="gatsby-announcer"
        style={{
          position: "absolute",
          top: 0,
          width: 1,
          height: 1,
          padding: 0,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0
        }}
        aria-live="assertive"
        aria-atomic="true"
      />
    </div>

)

export const Head = () => <Seo title="Page two" />

export default SecondPage
