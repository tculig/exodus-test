import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import "./style.css"

interface Props {
  data:{
    id: string,
    title: string,
    hasBackground: boolean
    text: {
      text: string,
    }
    heroImage :{
      gatsbyImageData : IGatsbyImageData
    }
  }
}

const AssetPageMobile = ({data}:Props) => {
  return (
    <section className="t-asset-page-mobile x-active">
      <Container>
        <Row>
         <Col className='center-content'>
         <div style={{maxHeight:"600px", display:"flex"}}>
         <GatsbyImage
                    image={data.heroImage.gatsbyImageData}
                    alt='Exodus Bitcoin Mobile Wallet'
                    loading="lazy"
                  />
                </div>
          </Col>
        </Row>
        <Row className="t-asset-page-mobile-content">
        <Col className='center-content'>
            <h2 className="t-asset-page-mobile-heading">
              {data.title}
            </h2>
            <p className="t-asset-page-mobile-subheading">
              {data.text.text}
            </p>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AssetPageMobile;
