import { Row, Col } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import * as Styled from './styles'
import { Button } from 'tiho-component-library';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
        allContentfulHeaderContent {
          nodes {
            exodusLogo {
              url
            }
          }
        }
    }
  `);

  const linkColumns = {
    "Products": {
      "Web3 Wallet": "/web3-wallet/",
      "Mobile Wallet": "/mobile/",
      "Desktop Wallet": "/desktop/",
      "Trezor Hardware Wallet": "/trezor-wallet/",
      "Earn Crypto Rewards": "/earn-crypto/",
      "XO Swap": "/xo-swap/",
      "Passkeys Wallet & SDK": "https://passkeys.foundation/",
      "Wallet-as-a-Service (Waas)": "/",
    },
    "Support": {
      "24/7 Customer Support": "/contact-support/",
      "Crypto Assers": "/support/",
      "Legal Inquiries": "/legal-inquiries/",
    },
    "Learn": {
      "Knowledge Base": "",
      "YouTube": "",
      "Newsletter": "",
    },
    "Company": {
      "About Us": "/about/",
      "Investors": "/investors/",
      "Careers": "/careers/",
      "Contact Us": "/contact/",
      "Brand Guidelines": "/brand/",
      "Security": "/security/",
      "Intellectual Property": "/",
    }
  }

  return (
    <footer>
      <Styled.RootContainer>
        <div className="d-flex">
          <div className="d-flex">
            {
              Object.entries(linkColumns).map(([title, links], index) => {
                return (
                  <Styled.PadRight key={index}>
                    <div>
                      <Styled.Heading>
                        {title}
                      </Styled.Heading>
                    </div>
                    <div className="flex-column" >
                      {Object.entries(links).map(([title, href], indexInner) => <Styled.Link key={indexInner} href={href} target="_blank" >{title}</Styled.Link>)}
                    </div>
                  </Styled.PadRight>
                )
              })
            }
          </div>
          <div style={{ maxWidth: "430px", marginLeft: "auto", width: "310px" }}>
            <Styled.Heading>Subscribe to Exodus</Styled.Heading>
            <Styled.Subheading>
              Sign up to receive our newsletter with updates about your wallet.
            </Styled.Subheading>
            <Button variant={'primary'} size={'medium'} style={{ width: "240px", height: "48px", marginTop: "24px" }} onClick={() => { window.open("/newsletter/") }}>Sign me up</Button>
          </div>
        </div>

        <Row>
          <Col md={6} xs={12} style={{ padding: "60px 0" }}>
            <div className="d-flex align-items-center">
              <div className="pe-5">
                <img
                  src={data?.allContentfulHeaderContent?.nodes[0]?.exodusLogo?.url}
                  alt="Exodus: Digital blockchain products"
                  loading="lazy"
                />
              </div>
              <Styled.CopyrightText>
                Copyright © 2024 Exodus Movement, Inc.
                <br />
                Exodus was co-founded by Daniel Castagnoli and JP Richardson.
              </Styled.CopyrightText>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Styled.Terms>
              <span>
                Exodus is a software platform ONLY and does not conduct any independent diligence on or substantive review of any blockchain asset, digital currency, cryptocurrency or associated funds. You are fully and solely responsible for evaluating your investments, for determining whether you will swap blockchain assets based on your own, and for all your decisions as to whether to swap blockchain assets with the Exodus in app swap feature. In many cases, blockchain assets you swap on the basis of your research may not increase in value, and may decrease in value. Similarly, blockchain assets you swap on the basis of your research may increase in value after your swap.
              </span>
              <span>
                Past performance is not indicative of future results. Any investment in blockchain assets involves the risk of loss of part or all of your investment. The value of the blockchain assets you swap is subject to market and other investment risks.
              </span>
              <span>
                Exodus users are responsible for storing their own recovery phrase. If the recovery phrase is lost, the user might not be able to retrieve their private keys.
              </span>
              <span>
                <a target="_blank" rel="noreferrer noopener" href="/privacy/">Privacy Policy</a>
                <a target="_blank" rel="noreferrer noopener" href="/terms/">Terms of Service</a>
              </span>
            </Styled.Terms>
          </Col>
        </Row>
      </Styled.RootContainer >
    </footer>
  );
};

export default Footer;
