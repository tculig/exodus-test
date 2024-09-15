import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import "./style.css"
import { graphql, useStaticQuery } from 'gatsby'

const HeroPanel = () => {

  return (
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
  )
}

export default HeroPanel