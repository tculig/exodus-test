import Layout from "../layouts/BaseLayout"
import Topbar from "../sections/Topbar"
import Header from "../sections/Header"
import HeroPanel from "../sections/HeroPanel"
import { graphql, PageProps } from "gatsby"
import SummaryPanel from "../sections/SummaryPanel"
import Footer from "../sections/Footer"
import * as Styled from './styles/index-styles';
import * as StyledGlobals from '../styles/globals';
import { StaticImage } from 'gatsby-plugin-image';
import { useNavItems } from "../hooks/use-nav-items"

const BitcoinWalletPage = ({ data }: PageProps<Queries.RootQuery>) => {
  const navMenuItems = useNavItems();
  return (
    <Layout>
      <Topbar menuItems={navMenuItems} />
      <main>
        <Styled.BackgroundContainer>
          <StaticImage
            src="../images/header-bg-lsize.jpg"
            alt="Background"
            style={{ width: "100%", height: "100%" }}
          />
        </Styled.BackgroundContainer>
        <StyledGlobals.CenteredContainer>
          <Header />
          {data?.allContentfulHeroPanel?.nodes?.map((node, index) => <HeroPanel data={node} key={index} withBg={index % 2 === 1} />)}
          <SummaryPanel nodes={data.allContentfulSummaryPanel.nodes} />
          <Header variant="short" />
        </StyledGlobals.CenteredContainer>
      </main>
      <Footer />
    </Layout>
  )
}

export default BitcoinWalletPage


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
  allContentfulSummaryPanel(sort: {order: ASC}) {
    nodes {
      id
      title
      text {
        text
      }
      svgContent {
        svgContent
      }
      previewImage {
        publicUrl
        url
        gatsbyImageData(placeholder: BLURRED)
        file {
          contentType
        }
      }
    }
  }
}
  ` 