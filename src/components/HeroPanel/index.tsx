import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import "./style.css"

const AssetPageMobile = () => {
  // Assuming you have a GraphQL query that provides the image data.
  const imageData = null;

  return (
    <section className="x__asset-page__mobile x-active">
      <Container>
        <Row>
         <Col className='center-content'>
         <div style={{maxHeight:"600px", display:"flex"}}>
                {imageData ? (
                  <GatsbyImage
                    image={imageData}
                    alt='Exodus Bitcoin<span class="x-break-sm"></span> Mobile Wallet'
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      opacity: 1,
                      transition: 'opacity 1000ms'
                    }}
                  />
                ) : (
                  <img
                    src="/asset-page/img/btc/mobile-screens-lsize.png"
                    alt='Exodus Bitcoin Mobile Wallet'
                    loading="lazy"
                    style={{
                      objectFit: "contain",
                      height: "auto",
                      width: "100%"
                    }}
                  />
                )}
                </div>
          </Col>
        </Row>
        <Row className="x__asset-page__mobile__content">
        <Col className='center-content'>
            <h2 className="x__asset-page__mobile__heading">
              Exodus Bitcoin Mobile Wallet
            </h2>
            <p className="x__asset-page__mobile__subheading">
              Secure, manage, and swap your BTC with the mobile security of face
              or fingerprint scanning. Sync between the Bitcoin desktop wallet
              and mobile wallet to use your BTC on multiple devices.
            </p>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AssetPageMobile;
