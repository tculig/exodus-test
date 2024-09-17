import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css"
import SummaryPanelItem, { type SummaryPanelItemProps } from '../SummaryPanelItem';

interface Props {
  nodes:SummaryPanelItemProps[]
}

const SummaryPage = ({nodes}:Props) => {
  return (
    <section className="t-summary_section">
      <Container>
      <Row>
        {nodes.map((node,index)=>{
          return (
            <Col key={index} md={4} className="t-summary-list-item">
                <SummaryPanelItem data={node}/>
            </Col>
          );
        })}
         </Row>
      </Container>
  
    </section>
  );
};

export default SummaryPage;
