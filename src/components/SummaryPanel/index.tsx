import { Row, Col } from 'react-bootstrap';
import SummaryPanelItem, { type SummaryPanelItemProps } from './SummaryPanelItem';

interface Props {
  nodes: SummaryPanelItemProps[]
}

const SummaryPage = ({ nodes }: Props) => {
  return (
    <section style={{ maxWidth: "1170px" }}>
      <Row>
        {nodes.map((node, index) => {
          return (
            <Col key={index} md={4}>
              <SummaryPanelItem data={node} />
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default SummaryPage;
