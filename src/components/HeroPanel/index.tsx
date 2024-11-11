import { Container, Row } from 'react-bootstrap';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as Styled from './styles';

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
      <Container>
        <Row>
          <Styled.CenteredCol>
            <GatsbyImage
              image={data.heroImage.gatsbyImageData}
              alt='Exodus Bitcoin Mobile Wallet'
              loading="lazy"
            />
          </Styled.CenteredCol>
        </Row>
        <Row style={{ paddingTop: "65px" }}>
          <Styled.CenteredCol>
            <Styled.TitleHeader>
              {data.title}
            </Styled.TitleHeader>
            <Styled.Subheading>
              {data.text.text}
            </Styled.Subheading>
          </Styled.CenteredCol>
        </Row>
      </Container>
    </section>
  );
};

export default AssetPageMobile;
