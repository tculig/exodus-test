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
    <section className="x__asset-page__mobile x-active">
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
