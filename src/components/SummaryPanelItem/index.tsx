import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import "./style.css"

export interface SummaryPanelItemProps {
  id: string,
  title: string,
  text: {
    text: string
  },
  previewImage: {
    publicUrl: string,
    url: string
  }
}

interface Props {
  data: SummaryPanelItemProps
}

const AssetPageMobile = ({ data }: Props) => {
  return (
    <section className="x__asset-page__mobile x-active">
      <Container>
        <Row>
          <Col className='center-content'>
            <div style={{ maxHeight: "600px", display: "flex" }}>
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
          </Col>
        </Row>
        <Row className="x__asset-page__mobile__content">
          <Col className='center-content'>
            <h2 className="x__asset-page__mobile__heading">
              {data.title}
            </h2>
            <p className="x__asset-page__mobile__subheading">
              {data.text.text}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AssetPageMobile;
