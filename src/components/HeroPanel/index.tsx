import { Container, Row } from 'react-bootstrap';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as Styled from './styles';
import * as StyledGlobals from '../../styles/globals';
import { renderGatsbyImage } from '../../utils';

interface Props {
  data: {
    id: string,
    title: string,
    hasBackground: boolean
    text: {
      text: string,
    }
    heroImage: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const AssetPageMobile = ({ data }: Props) => {
  return (
    <section>
      <Styled.RootContainer>
        <Styled.ImageRow>
          <Styled.CenteredCol>
            {renderGatsbyImage({ image: data.heroImage, alt: "Exodus Bitcoin Mobile Wallet", style: { objectFit: "contain" } })}
          </Styled.CenteredCol>
        </Styled.ImageRow>
        <Row style={{ paddingTop: "65px" }}>
          <Styled.CenteredCol>
            <StyledGlobals.Heading>
              {data.title}
            </StyledGlobals.Heading>
            <StyledGlobals.Subheading>
              {data.text.text}
            </StyledGlobals.Subheading>
          </Styled.CenteredCol>
        </Row>
      </Styled.RootContainer>
    </section>
  );
};

export default AssetPageMobile;
