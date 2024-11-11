import { Container, Row, Col } from 'react-bootstrap';
import "./style.css"
import * as Styled from './styles';
import * as StyledGlobals from '../../../styles/globals';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { renderGatsbyImage } from '../../../utils';


export interface SummaryPanelItemProps {
  id: string,
  title: string,
  text: {
    text: string
  },
  previewImage: {
    publicUrl: string,
    url: string,
    gatsbyImageData?: IGatsbyImageData,
  }
}

interface Props {
  data: SummaryPanelItemProps
}

const SummaryPanelItem = ({ data }: Props) => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            {renderGatsbyImage({ image: data.previewImage, alt: "Summary" })}
          </Col>
        </Row>
        <Row>
          <Col>
            <Styled.SummaryTitle>
              {data.title}
            </Styled.SummaryTitle>
            <StyledGlobals.Subheading>
              {data.text.text}
            </StyledGlobals.Subheading>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SummaryPanelItem;
