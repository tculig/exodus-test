import { Navbar, Nav } from 'react-bootstrap';
import "./style.css"
import { graphql, useStaticQuery } from 'gatsby';
import { Button } from 'tiho-component-library';
import * as Styled from './styles';
import { GatsbyImage } from "gatsby-plugin-image";

const MenuItem = ({ title, description, href, target }) => (
  <Styled.NavDropdown.Item href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
    <Styled.NavDropdown.Title>{title}</Styled.NavDropdown.Title>
    <Styled.NavDropdown.Description>{description}</Styled.NavDropdown.Description>
  </Styled.NavDropdown.Item>
);

const MenuSection = ({ title, items }) => (
  <Styled.NavDropdown
    title={title}
  >
    {items.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </Styled.NavDropdown>
);

const TopBar = ({ menuItems }) => {
  const data = useStaticQuery(graphql`
    query {
        allContentfulHeaderContent {
          nodes {
            exodusLogo {
                gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
    }
  `);

  return (
    <Styled.AnchorTop>
      <Styled.Navbar variant="dark" expand="lg">
        <Styled.Container fluid>
          <GatsbyImage
            image={data?.allContentfulHeaderContent.nodes[0].exodusLogo.gatsbyImageData}
            alt="Exodus: Digital blockchain products"
            loading="eager"
          />
          <div>
            <Navbar.Collapse>
              <Nav>
                {Object.entries(menuItems).map(([section, items]) => (
                  <MenuSection key={section} title={section} items={items} />
                ))}
              </Nav>
            </Navbar.Collapse>
          </div>
          <a href="/download/" className="t-button t-download">Download</a>
          <Button variant={'primary'} size={'medium'} fullWidth={false}>HELLO</Button>
        </Styled.Container>
      </Styled.Navbar>
    </Styled.AnchorTop>
  );
};

export default TopBar;