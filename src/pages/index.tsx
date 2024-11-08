import Layout from "../layouts/BaseLayout/layout"
import Topbar from "../components/Topbar"
import Header from "../components/Header"
import HeroPanel from "../components/HeroPanel"
import { graphql } from "gatsby"
import SummaryPanel from "../components/SummaryPanel"
import Footer from "../components/Footer"
import * as Styled from './styles/index-styles';
import { GatsbyImage } from "gatsby-plugin-image"

const navMenuItems = {
  Products: [
    { title: "Web3 Wallet", description: "Explore the world of Web3 and DeFi", href: "/web3-wallet/" },
    { title: "Mobile Wallet", description: "Control your wealth anywhere", href: "https://exodus.com/mobile/" },
  ],
  Support: [
    { title: "Support", description: "Our customer support engineers are here to help", href: "/contact-support/" },
    { title: "Knowledge Base", description: "Common questions and blockchain education", href: "https://www.exodus.com/support", target: "_blank" },
  ],
  Company: [
    { title: "About Us", description: "Learn more about Exodus", href: "/about/" },
    { title: "Investors", description: "Read about news, media, events and more", href: "/investors/" },
  ],
};

const BitcoinWalletPage = ({ data }) => {

  return (
    <Layout>
      <Topbar menuItems={navMenuItems} />
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
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
}
  ` 