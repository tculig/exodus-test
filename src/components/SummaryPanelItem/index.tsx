import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    <section className="t-asset-page-mobile x-active">
      <Container>
        <Row>
          <Col>
            <div style={{ maxHeight: "600px", display: "flex" }}>
              <img
                src={data.previewImage.url}
                alt={"Summary"}
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="t_summary_title">
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
