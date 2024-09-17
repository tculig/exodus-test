import * as React from "react"

import Layout from "../components/layout"
import Topbar from "../components/Topbar"
import Header from "../components/Header"
import HeroPanel from "../components/HeroPanel"
import { graphql } from "gatsby"
import SummaryPanel from "../components/SummaryPanel"
import Footer from "../components/Footer"
import { StaticImage } from "gatsby-plugin-image"


const SecondPage = ({ data, _location }) => {

  return (
   <Layout>
    <div id="-_gatsby">
      <div style={{ outline: "none" }} tabIndex={-1} id="gatsby-focus-wrapper">
        <div className="t-asset-page">
          <Topbar />
          <main className="x">
            <div
              className="t-asset-page-background-container t-asset-page-background"
            >
              <div
                aria-hidden="true"
                style={{ width: "100%", paddingBottom: "56.2429696287964%" }}
              />
              <img
                src={data.allContentfulHeaderContent.nodes[0].backgroundImage.url}
                alt="Best Bitcoin Wallet | BTC Wallet App"
                loading="eager"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  opacity: 1,
                  transition: "opacity 1600ms"
                }}
              />
            </div>
            <Header data={data.allContentfulHeaderContent.nodes[0]}/>
            {data?.allContentfulHeroPanel?.nodes?.map((node,index)=><HeroPanel data={node} key={index}/>)}
            <SummaryPanel nodes={data.allContentfulSummaryPanel.nodes}/>
          </main>
          <Footer/>
        </div>
      </div>
    </div>
  </Layout>
)}

export default SecondPage


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
        url
      }
      exodusLogo {
        url
      }
    }
  }
}
  ` 