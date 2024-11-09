import { Navbar, Nav } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import { Button } from 'tiho-component-library';
import * as Styled from './styles';
import { GatsbyImage } from "gatsby-plugin-image";

const MenuItem = ({ title, description, href, target }) => (
  <Styled.NavDropdownItem href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
    <Styled.NavDropdownTitle>{title}</Styled.NavDropdownTitle>
    <Styled.NavDropdownDescription>{description}</Styled.NavDropdownDescription>
  </Styled.NavDropdownItem>
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
              gatsbyImageData
            }
          }
        }
    }
  `);

  return (
    <Styled.AnchorTop>
      <Styled.Navbar variant="dark" expand="lg">
        <Styled.Container fluid>
          {data?.allContentfulHeaderContent.nodes[0].exodusLogo.gatsbyImageData ?
            <GatsbyImage
              image={data.allContentfulHeaderContent.nodes[0].exodusLogo.gatsbyImageData}
              alt="Exodus: Digital blockchain products"
              loading="eager"
            /> : null}
          <div>
            <Navbar.Collapse>
              <Nav>
                {Object.entries(menuItems).map(([section, items]) => (
                  <MenuSection key={section} title={section} items={items} />
                ))}
              </Nav>
            </Navbar.Collapse>
          </div>
          <Button variant={'primary'} size={'medium'} style={{ width: "168px" }}>Download</Button>
        </Styled.Container>
      </Styled.Navbar>
    </Styled.AnchorTop>
  );
};

export default TopBar;