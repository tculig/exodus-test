import Layout from "../layouts/BaseLayout/layout"
import Topbar from "../sections/Topbar"
import Header from "../sections/Header"
import HeroPanel from "../sections/HeroPanel"
import { graphql } from "gatsby"
import SummaryPanel from "../sections/SummaryPanel"
import Footer from "../sections/Footer"
import * as Styled from './styles/index-styles';
import * as StyledGlobals from '../styles/globals';

const navMenuItems = {
  Products: {
    "": [
      { title: "Web3 Wallet", description: "Explore the world of Web3 and DeFi", href: "/", iconOffset: -900, iconBgGradient: "linear-gradient(315deg,#2246ec,#4566ed)", iconBoxShadowColor: "#4566ed4d" },
      { title: "Mobile Wallet", description: "Control your wealth anywhere", href: "/", iconOffset: -250, iconBgGradient: "linear-gradient(315deg,#602a52,#c27ed5)", iconBoxShadowColor: "#83488040" },
      { title: "Desktop Wallet", description: "Swap and transfer digital assets", href: "/", iconOffset: -50, iconBgGradient: "linear-gradient(315deg,#420be6,#a16bb3)", iconBoxShadowColor: "#6f39cd4d" },
      { title: "Trezor Hardware Wallet", description: "Advanced security made easy", href: "/", iconOffset: 0, iconBgGradient: "linear-gradient(144deg,#11aae2,#016197)", iconBoxShadowColor: "#83488040" },
      { title: "Earn Crypto Rewards", description: "Manage staking rewards for multiple assets", href: "/", iconOffset: -1100, iconBgGradient: "linear-gradient(315deg,#556ff2,#00bfff)", iconBoxShadowColor: "#556ff24d" },
    ],
    "ENTERPRISE": [
      { title: "XO Swap", description: "Boost growth with a premium crypto swap engine", href: "/", iconOffset: 0, iconBgGradient: "linear-gradient(315deg,#420be6,#a16bb3)", iconBoxShadowColor: "#6f39cd4d" },
      { title: "Passkeys Wallet & SDK", description: "Reduce drop-off with one-click web3 onboarding", href: "/", iconOffset: -1150, iconBgGradient: "linear-gradient(315deg,#d4377f,#ff95b3)", iconBoxShadowColor: "#d4377f40" },
      { title: "Wallet-as-a-Service (WaaS)", description: "Grow your platform with a custom web3 wallet", href: "/", iconOffset: -1250, iconBgGradient: "linear-gradient(232deg,#ff9d56,#f163a4)", iconBoxShadowColor: "#df1efe40" },
    ]
  },
  Support: {
    "": [
      { title: "24/7 Customer Support", description: "Support engineers are standing by to help", href: "/", iconOffset: -350, iconBgGradient: "linear-gradient(315deg,#420be6,#a16bb3)", iconBoxShadowColor: "#6f39cd4d" },
      { title: "Crypto Assets", description: "Info on supported assets, crypto rewards, and more", href: "/", target: "_blank", iconOffset: -400, iconBgGradient: "linear-gradient(315deg,#602a52,#c27ed5)", iconBoxShadowColor: "#83488040" },
    ]
  },
  Learn: {
    "": [
      { title: "Knowledge Base", description: "Common questions and blockchain education", href: "/", iconOffset: -1300, iconBgGradient: "linear-gradient(135deg,#58d98c,#599270)", iconBoxShadowColor: "#58d98c4d" },
      { title: "YouTube", description: "Crypto education and tutorials", href: "/", iconOffset: -450, iconBgGradient: "linear-gradient(315deg,#556ff2,#00bfff)", iconBoxShadowColor: "#556ff24d" },
      { title: "Newsletter", description: "Sign-up for product updates and crypto highlights", href: "/", iconOffset: -750, iconBgGradient: "linear-gradient(315deg, #1a1d40, #6859b3)", iconBoxShadowColor: "#6859b340" },
    ]
  },
  Company: {
    "": [
      { title: "About Us", description: "Learn more about Exodus", href: "/", iconOffset: -300, iconBgGradient: "linear-gradient(315deg,#420be6,#a16bb3)", iconBoxShadowColor: "#6f39cd4d" },
      { title: "Investors", description: "Read about news, media, events and more", href: "/", iconOffset: -850, iconBgGradient: "linear-gradient(315deg,#1a1d40,#6859b3)", iconBoxShadowColor: "#6859b340" },
      { title: "Careers", description: "See our open positions", href: "/", iconOffset: -150, iconBgGradient: "linear-gradient(315deg,#2246ec,#4566ed)", iconBoxShadowColor: "#4566ed4d" },
      { title: "Contact Us", description: "Get in touch", href: "/", iconOffset: -200, iconBgGradient: "linear-gradient(315deg,#556ff2,#00bfff)", iconBoxShadowColor: "#556ff24d" },
      { title: "Brand Guidelines", description: "Exodus media kit", href: "/", iconOffset: -550, iconBgGradient: "linear-gradient(144deg,#11aae2,#016197)", iconBoxShadowColor: "#077eb54d" },
      { title: "Security", description: "How we keep your crypto safe", href: "/", iconOffset: -1000, iconBgGradient: "linear-gradient(150deg,#67d1a5,#489998)", iconBoxShadowColor: "#67d1a54d" },
      { title: "Intellectual Property", description: "Exodus Trademarks", href: "/", iconOffset: -1050, iconBgGradient: "linear-gradient(150deg,#9887ff,#3c6ce8)", iconBoxShadowColor: "#9887ff4d" },
    ]
  },
};

const BitcoinWalletPage = ({ data }) => {
  return (
    <Layout>
      <Topbar menuItems={navMenuItems} />
      <main>
        <Styled.BackgroundContainer>
          <Styled.StyledGatsbyImage
            image={data.allContentfulHeaderContent.nodes[0].backgroundImage.gatsbyImageData}
            alt='Exodus Bitcoin Mobile Wallet'
            loading="eager"
          />
        </Styled.BackgroundContainer>
        <StyledGlobals.CenteredContainer>
          <Header data={data.allContentfulHeaderContent.nodes[0]} />
          {data?.allContentfulHeroPanel?.nodes?.map((node, index) => <HeroPanel data={node} key={index} withBg={index % 2 === 1} />)}
          <SummaryPanel nodes={data.allContentfulSummaryPanel.nodes} />
          <Header data={data.allContentfulHeaderContent.nodes[0]} variant="short" />
        </StyledGlobals.CenteredContainer>
      </main>
      <Footer />
    </Layout>
  )
}

export default BitcoinWalletPage


export const pageQuery = graphql`
query MainQuery {
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
        gatsbyImageData(layout: CONSTRAINED, resizingBehavior: SCALE)
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
        gatsbyImageData
        file {
          contentType
        }
      }
    }
  }
  allContentfulHeaderContent {
    nodes {
      bitcoinSvg {
        url
        gatsbyImageData
      }
      backgroundImage {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
}
  ` 