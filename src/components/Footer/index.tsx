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

  const productsLinks = {
    "Web3 Wallet": "/web3-wallet/",
    "Mobile Wallet": "/mobile/",
    "Desktop Wallet": "/desktop/",
    "Trezor Hardware Wallet": "/trezor-wallet/",
    "Earn Crypto Rewards": "/earn-crypto/",
    "XO Swap": "/xo-swap/",
    "Passkeys Wallet &amp; SDK": "https://passkeys.foundation/",
  };

  const supportLinks = {
    "Support": "/contact-support/",
    "Knowledge Base": "/support/",
    "Legal Inquiries": "/legal-inquiries/",
    "Status": "/status/",
    "YouTube": "https://www.youtube.com/c/exodus/",
    "Newsletter": "/newsletter/",
  };

  const companyLinks = {
    "About Us": "/about/",
    "Investors": "/investors/",
    "Careers": "/careers/",
    "Contact Us": "/contact/",
    "Brand Guidelines": "/brand/",
    "Security": "/security/",
  };

  return (
    <footer>
      <Styled.RootContainer>
        <Row>
          <Col md={9} xs={12}>
            <div className="d-flex">
              <Styled.PadRight>
                <div>
                  <Styled.Heading>
                    Products
                  </Styled.Heading>
                </div>
                <div className="flex-column" >
                  {Object.entries(productsLinks).map(([title, href], index) => <Styled.Link key={index} href={href} target="_blank" >{title}</Styled.Link>)}
                </div>
              </Styled.PadRight>

              <Styled.PadRight>
                <div>
                  <Styled.Heading>
                    Support
                  </Styled.Heading>
                </div>
                <div className="flex-column" >
                  {Object.entries(supportLinks).map(([title, href], index) => <Styled.Link key={index} href={href} target="_blank" >{title}</Styled.Link>)}
                </div>
              </Styled.PadRight>

              <Styled.PadRight>
                <div>
                  <Styled.Heading>
                    Company
                  </Styled.Heading>
                </div>
                <div className="flex-column" >
                  {Object.entries(companyLinks).map(([title, href], index) => <Styled.Link key={index} href={href} target="_blank" >{title}</Styled.Link>)}
                </div>
              </Styled.PadRight>
            </div>
          </Col>
          <Col md={3} xs={12}>
            <Styled.Heading>Subscribe to Exodus</Styled.Heading>
            <Styled.Subheading>
              Sign up to receive our newsletter with updates about your wallet.
            </Styled.Subheading>
            <Button variant={'primary'} size={'medium'} style={{ width: "240px", height: "48px" }} onClick={() => { window.open("/newsletter/") }}>Sign me up</Button>
          </Col>
        </Row>

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
                Past performance is not indicative of future results...
              </span>
              <span>
                Exodus users are responsible for storing their own recovery phrase...
              </span>
              <span>
                <a target="_blank" rel="noreferrer noopener" href="/privacy/">Privacy Policy</a>
                <a target="_blank" rel="noreferrer noopener" href="/terms/">Terms of Service</a>
                <a target="_blank" rel="noreferrer noopener" href="/trademarks/">Trademarks</a>
              </span>
            </Styled.Terms>
          </Col>
        </Row>
      </Styled.RootContainer >
    </footer>
  );
};

export default Footer;
