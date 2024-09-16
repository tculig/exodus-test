import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import "./style.css"
import { graphql, useStaticQuery } from 'gatsby'

const BitcoinWalletHeader = () => {
 /* const { allContentfulBitcoinWallet } = useStaticQuery(
    graphql`
        query {
          allContentfulBitcoinWallet {
              nodes {
                headerTitle
                headerSubtitle
                  bitcoinIcon {
            
                gatsbyImageData
              }
        
              }
          }
        }
    `
  );
  console.log(allContentfulBitcoinWallet)*/
  return (
    <header>
      <Container className="x__asset-page__header__content">
        <i className="x__asset-icon__wrapper">
          <img
            src="/images/bitcoin.svg"
            alt="Bitcoin (BTC)"
            loading="eager"
            width={40}
            height={40}
            className="x__asset-icon x__asset-icon--largest"
          />
        </i>
        <h1 className="x__asset-page__header__heading x-break-sm">
          Exodus Bitcoin Wallet
        </h1>
        <h2 className="x__asset-page__header__subheading x-break-sm">
          Send, Receive, and Swap With Exodus' Free and Secure BTC Wallet
        </h2>
        <div className="x__asset-page__header__actions x-break-sm">
          <Dropdown className="x__platform-dropdown x__platform-dropdown--Desktop">
            <Dropdown.Toggle className="x__toggle" style={{ background: "linear-gradient(to right, #FFC82D,#FE9D39)" }}>
              <i className="x__toggle__icon">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <title>Desktop</title>
                  <path d="M4 5H20V15H22V4C22 3.448 21.552 3 21 3H3C2.448 3 2 3.448 2 4V15H4V5Z" fill="white" />
                  <path d="M15 18H9V17H0V19C0 19.552 0.448 20 1 20H23C23.552 20 24 19.552 24 19V17H15V18Z" fill="white" />
                </svg>
              </i>
              <span className="x__toggle__label">Download Desktop</span>
              <span className="x__toggle__picker">
                <svg width={11} height={7} viewBox="0 0 11 7" fill="none">
                  <path opacity="0.8" d="M1 1L5.5 5.5L10 1" stroke="white" />
                </svg>
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#windows">Windows</Dropdown.Item>
              <Dropdown.Item href="#mac">Mac</Dropdown.Item>
              <Dropdown.Item href="#linux">Linux</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="x__platform-dropdown x__platform-dropdown--Mobile">
            <Dropdown.Toggle className="x__toggle" style={{ background: "linear-gradient(to right, #FFC82D,#FE9D39)" }}>
              <i className="x__toggle__icon">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <title>Mobile</title>
                  <path d="M17 0H7C6.20435 0 5.44129 0.31607 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V21C4 21.7956 4.31607 22.5587 4.87868 23.1213C5.44129 23.6839 6.20435 24 7 24H17C17.7956 24 18.5587 23.6839 19.1213 23.1213C19.6839 22.5587 20 21.7956 20 21V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.31607 17.7956 0 17 0ZM18 21C18 21.2652 17.8946 21.5196 17.7071 21.7071C17.5196 21.8946 17.2652 22 17 22H7C6.73478 22 6.48043 21.8946 6.29289 21.7071C6.10536 21.5196 6 21.2652 6 21V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V21Z" fill="white" />
                  <path d="M9.85355 2.85355L9 2H15L14.1464 2.85355C14.0527 2.94732 13.9255 3 13.7929 3H10.2071C10.0745 3 9.94732 2.94732 9.85355 2.85355Z" stroke="white" />
                  <circle cx={12} cy={19} r={1} fill="white" />
                </svg>
              </i>
              <span className="x__toggle__label">Download Mobile</span>
              <span className="x__toggle__picker">
                <svg width={11} height={7} viewBox="0 0 11 7" fill="none">
                  <path opacity="0.8" d="M1 1L5.5 5.5L10 1" stroke="white" />
                </svg>
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#ios">iOS</Dropdown.Item>
              <Dropdown.Item href="#android">Android</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="x__platform-dropdown x__platform-dropdown--Extension">
            <Dropdown.Toggle className="x__toggle" style={{ background: "linear-gradient(to right, #FFC82D,#FE9D39)" }} href="https://www.exodus.com/install-forwarder/extension/?utm_source=exodus-website&utm_campaign=btc-wallet&utm_content=btc-wallet&referrer=https%3A%2F%2Fgithub.com%2F">
              <i className="x__toggle__icon">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <title>Desktop</title>
                  <path d="M19.5 11H18V7C18 5.9 17.1 5 16 5H12V3.5C12 2.83696 11.7366 2.20107 11.2678 1.73223C10.7989 1.26339 10.163 1 9.5 1C8.83696 1 8.20107 1.26339 7.73223 1.73223C7.26339 2.20107 7 2.83696 7 3.5V5H3C1.9 5 1.01 5.9 1.01 7V10.8H2.5C3.99 10.8 5.2 12.01 5.2 13.5C5.2 14.99 3.99 16.2 2.5 16.2H1V20C1 21.1 1.9 22 3 22H6.8V20.5C6.8 19.01 8.01 17.8 9.5 17.8C10.99 17.8 12.2 19.01 12.2 20.5V22H16C17.1 22 18 21.1 18 20V16H19.5C20.163 16 20.7989 15.7366 21.2678 15.2678C21.7366 14.7989 22 14.163 22 13.5C22 12.837 21.7366 12.2011 21.2678 11.7322C20.7989 11.2634 20.163 11 19.5 11Z" fill="white" />
                </svg>
              </i>
              <span className="x__toggle__label">Download Desktop</span>
              <span className="x__toggle__picker">
                <svg width={11} height={7} viewBox="0 0 11 7" fill="none">
                  <path opacity="0.8" d="M1 1L5.5 5.5L10 1" stroke="white" />
                </svg>
              </span>
            </Dropdown.Toggle>
          </Dropdown>

        </div>

      </Container>
    </header>
  )
}

export default BitcoinWalletHeader