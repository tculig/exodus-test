import React, { FC, PropsWithChildren } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import "./style.css"
import SummaryPanelItem, { type SummaryPanelItemProps } from '../SummaryPanelItem';

interface Props {
  nodes:SummaryPanelItemProps[]
}

const AssetPageMobile = ({nodes}:Props) => {
  return (
    <section className="x__asset-page__mobile x-active">
      <Container>
      <Row>
        {nodes.map((node,index)=>{
          // const RowWrapper:FC<PropsWithChildren> = ({children})=>index%3==0?<Row>{children}</>:<>{children}</>;
          return (
            <Col key={index} md={4}>
                <SummaryPanelItem data={node}/>
            </Col>
          );
        })}
         </Row>
      </Container>
    </section>
  );
};

export default AssetPageMobile;
