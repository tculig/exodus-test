import Layout from "../layouts/BaseLayout"
import Topbar from "../sections/Topbar"
import Header from "../sections/Header"
import HeroPanel from "../sections/HeroPanel"
import { graphql, PageProps } from "gatsby"
import SummaryPanel from "../sections/SummaryPanel"
import Footer from "../sections/Footer"
import * as StyledGlobals from '../styles/globals';
import { StaticImage } from 'gatsby-plugin-image';
import { useNavItems } from "../hooks/use-nav-items"
import styled from "styled-components"

const BitcoinWalletPage = ({ data }: PageProps<Queries.RootQuery>) => {
  const navMenuItems = useNavItems();
  return (
    <Layout>
      <Topbar menuItems={navMenuItems} />
      <main>
        <BackgroundContainer>
          <StaticImage
            src="../images/header-bg-lsize.jpg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </BackgroundContainer>
        <StyledGlobals.CenteredContainer>
          <Header />
          {data?.allContentfulHeroPanel?.nodes?.map((node, index) => <HeroPanel data={node} key={index} withBg={index % 2 === 1} />)}
          <SummaryPanel />
          <Header variant="short" />
        </StyledGlobals.CenteredContainer>
      </main>
      <Footer />
    </Layout>
  )
};

const BackgroundContainer = styled.div`
    position: absolute;
    margin-top:-75px;
    height: 100%;

    &::after {
    margin-top: 75px;
        content: '';
        position: absolute;
        inset: 0;
        height: 100%;
        background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.colors.brandColors.baseGradientOverlay}00, ${theme.colors.brandColors.baseGradientOverlay})`};
    }
`;

export default BitcoinWalletPage;

export const pageQuery = graphql`
query Root($language: String!) {
  locales: allLocale(filter: { language: { eq: $language } }) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  allContentfulHeroPanel(sort: {order: ASC}) {
    nodes {
      id
      title
      hasBackground
      rawHtml{
        rawHtml
      }
      text {
        text
      }
      heroImage {
        gatsbyImageData(layout: CONSTRAINED, resizingBehavior: SCALE, formats: [AUTO, WEBP], placeholder: BLURRED)
      }
    }
  }
}
  ` 