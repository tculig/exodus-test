import Layout from "../layouts/BaseLayout/layout"
import Topbar from "../components/Topbar"
import Header from "../components/Header"
import HeroPanel from "../components/HeroPanel"
import { graphql } from "gatsby"
import SummaryPanel from "../components/SummaryPanel"
import Footer from "../components/Footer"
import * as Styled from './styles/index-styles';
import { GatsbyImage } from "gatsby-plugin-image"

const BitcoinWalletPage = ({ data }) => {

  return (
    <Layout>
      <Topbar />
      <main>
        <Styled.BackgroundContainer>
          <GatsbyImage
            image={data.allContentfulHeaderContent.nodes[0].backgroundImage.gatsbyImageData}
            alt='Exodus Bitcoin Mobile Wallet'
            loading="eager"
          />
        </Styled.BackgroundContainer>
        <Header data={data.allContentfulHeaderContent.nodes[0]} />
        {data?.allContentfulHeroPanel?.nodes?.map((node, index) => <HeroPanel data={node} key={index} />)}
        <SummaryPanel nodes={data.allContentfulSummaryPanel.nodes} />
      </main>
      <Footer />
    </Layout>
  )
}

export default BitcoinWalletPage


export const pageQuery = graphql`
query {
  allContentfulHeroPanel(sort: {order: ASC}) {
    nodes {
      id
      title
      hasBackground
      text {
        text
      }
      heroImage {
        gatsbyImageData(layout: CONSTRAINED, resizingBehavior: SCALE, height: 600)
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
      previewImage {
        publicUrl
        url
      }
    }
  }
  allContentfulHeaderContent {
    nodes {
      bitcoinSvg {
        url
      }
      carretSvg {
        url
      }
      desktopSvg {
        url
      }
      puzzleSvg {
        url
      }
      mobileSvg {
        url
      }
      backgroundImage {
        gatsbyImageData(layout: CONSTRAINED)
      }
      exodusLogo {
        url
      }
    }
  }
}
  ` 