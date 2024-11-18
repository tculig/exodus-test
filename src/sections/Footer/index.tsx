import { Row, Col } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import * as Styled from './styles'
import { Button } from 'tiho-component-library';
import { ReactComponent as ExodusLogo } from '../../images/exodus-logo.svg';
import { z } from 'zod';
import { useMemo } from 'react';

const LinkColumnsSchema = z.record(
  // Keys like "Products", "Support", "Learn", "Company" can be any string
  z.string(),
  // Nested keys and their values can also be any string, like:
  // "Web3 Wallet": "/web3-wallet/",
  // "Mobile Wallet": "/mobile/"
  z.record(z.string(), z.string())
);

const Footer = () => {
  const data: Queries.LinkColumnsQuery = useStaticQuery(graphql`
    query LinkColumns {
        allContentfulFooterContent {
          nodes {
             linkColumns {
                internal
                  {
                    content
                  }
              } 
          }
        }
    }
  `);

  const linkColumns = useMemo(() => {
    const rawLinkColumns = data?.allContentfulFooterContent?.nodes[0]?.linkColumns?.internal?.content;
    if (!rawLinkColumns) return {};
    try {
      const parsed = JSON.parse(rawLinkColumns);
      return LinkColumnsSchema.parse(parsed); // Validate with Zod
    } catch (error) {
      console.error('Invalid linkColumns structure:', error);
      return {}; // Fallback to an empty object
    }
  }, [data]);

  return (
    <footer>
      <Styled.RootContainer>
        {/* Navigation and Newsletter Section */}
        <Styled.LinkContainer>
          {/* Navigation Columns */}
          <Styled.Nav aria-label="Footer Navigation">
            {
              Object.entries(linkColumns).map(([title, links], index) => {
                if (!links) return;
                return (
                  <Styled.PadRight key={index}>
                    <div>
                      <Styled.Heading>
                        {title}
                      </Styled.Heading>
                    </div>
                    <div className="flex-column" >
                      {Object.entries(links).map(([title, href], indexInner) =>
                        <Styled.Link key={indexInner} href={href} target="_blank" >
                          {title}
                        </Styled.Link>)
                      }
                    </div>
                  </Styled.PadRight>
                )
              })
            }
          </Styled.Nav>
          {/* Newsletter Subscription */}
          <section style={{ maxWidth: "430px", width: "310px" }} aria-labelledby="newsletter-heading">
            <Styled.Heading id="newsletter-heading">Subscribe to Exodus</Styled.Heading>
            <Styled.Subheading>
              Sign up to receive our newsletter with updates about your wallet.
            </Styled.Subheading>
            <Button
              variant={'primary'}
              size={'normal'}
              style={{ width: "240px", height: "48px", marginTop: "24px" }}
              onClick={() => { window.open("/newsletter/") }}
              aria-label="Sign up for newsletter"
            >
              Sign me up
            </Button>
          </section>
        </Styled.LinkContainer>
        {/* Footer Logo and Copyright */}
        <Row>
          <Col md={6} xs={12} style={{ padding: "60px 0" }}>
            <div className="d-flex align-items-center">
              <div className="me-5" style={{ width: "140px" }}>
                <ExodusLogo />
              </div>
              <Styled.CopyrightText>
                Copyright © 2024 Exodus Movement, Inc.
                <br />
                Exodus was co-founded by Daniel Castagnoli and JP Richardson.
              </Styled.CopyrightText>
            </div>
          </Col>
        </Row>
        {/* Terms and Conditions */}
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
