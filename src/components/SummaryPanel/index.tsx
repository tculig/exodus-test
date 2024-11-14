import { Row, Col } from 'react-bootstrap';
import SummaryPanelItem, { type SummaryPanelItemProps } from './SummaryPanelItem';
import * as Styled from './styles';

interface Props {
  nodes: SummaryPanelItemProps[]
}

const SummaryPage = ({ nodes }: Props) => {
  return (
    <Styled.Section>
      <Row className='gx-5'>
        {nodes.map((node, index) => {
          return (
            <Col key={index} md={4} style={{ marginTop: "30px" }}>
              <SummaryPanelItem data={node} index={index} />
            </Col>
          );
        })}
      </Row>
    </Styled.Section>
  );
};

export default SummaryPage;
