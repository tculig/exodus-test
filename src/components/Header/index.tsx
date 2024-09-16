import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import "./style.css"
import { graphql, useStaticQuery } from 'gatsby'

interface ToggleProps {
  svgSrc: string,
  text: string,
  carret?: boolean
}

const generateDropdownToggle = ({ svgSrc, text,carret=true }: ToggleProps) => (
  <Dropdown.Toggle className="t-toggle">
    <i className="t-toggle-icon">
      <img
        src={svgSrc}
        alt={text}
        loading="eager"
        style={{
          width: "24px",
          height: "24px",
        }}
      />
    </i>
    <span className="t-toggle-label">{text}</span>
    {carret&&<img
      src="/images/caret.svg"
      alt="Caret"
      loading="eager"
      style={{
        width: "11px",
        height: "7px",
      }}
    />}
  </Dropdown.Toggle>
)

const BitcoinWalletHeader = () => {
  return (
    <header>
      <Container className="t-asset-page-header-content">
        <i className="t-asset-icon-wrapper">
          <img
            src="/images/bitcoin.svg"
            alt="Bitcoin (BTC)"
            loading="eager"
            width={40}
            height={40}
            className="t-asset-icon t-asset-icon--largest"
          />
        </i>
        <h1 className="t-asset-page-header-heading x-break-sm">
          Exodus Bitcoin Wallet
        </h1>
        <h2 className="t-asset-page-header-subheading x-break-sm">
          Send, Receive, and Swap With Exodus' Free and Secure BTC Wallet
        </h2>
        <div className="t-asset-page-header-actions x-break-sm">
          <Dropdown className="t-platform-dropdown t-platform-dropdown--Desktop">
            {generateDropdownToggle({ svgSrc: "/images/desktop.svg", text: "Download Desktop" })}
            <Dropdown.Menu>
              <Dropdown.Item href="#windows">Windows</Dropdown.Item>
              <Dropdown.Item href="#mac">Mac</Dropdown.Item>
              <Dropdown.Item href="#linux">Linux</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="t-platform-dropdown t-platform-dropdown--Mobile">
          {generateDropdownToggle({ svgSrc: "/images/mobile.svg", text: "Download Mobile" })}

            <Dropdown.Menu>
              <Dropdown.Item href="#ios">iOS</Dropdown.Item>
              <Dropdown.Item href="#android">Android</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="t-platform-dropdown t-platform-dropdown--Extension">
          {generateDropdownToggle({ svgSrc: "/images/puzzle.svg", text: "Download Extension", carret: false })}
          </Dropdown>
        </div>
      </Container>
    </header>
  )
}

export default BitcoinWalletHeader