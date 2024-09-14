import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import "./style.css"

const MenuItem = ({ title, description, href, target }) => (

  <NavDropdown.Item href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined} className="x__link">
    <span>
      <span className="x__title">{title}</span>
      <span className="x__description">{description}</span>
    </span>
  </NavDropdown.Item>

);

const MenuSection = ({ title, items }) => (
  <NavDropdown
    title={title}
    id={`nav-dropdown-${title.toLowerCase()}`}
    className='t__nav-dropdown'
    style={{ display: "flex", flexDirection: "row" }}
  >
    <i className="x__topbar-header-navigation__menu-container__picker" />
    {items.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}


  </NavDropdown>
);

const Header = () => {
  const menuItems = {
    Products: [
      { title: "Web3 Wallet", description: "Explore the world of Web3 and DeFi", href: "/web3-wallet/" },
      { title: "Mobile Wallet", description: "Control your wealth anywhere", href: "https://exodus.com/mobile/" },
      // ... other product items
    ],
    Support: [
      { title: "Support", description: "Our customer support engineers are here to help", href: "/contact-support/" },
      { title: "Knowledge Base", description: "Common questions and blockchain education", href: "https://www.exodus.com/support", target: "_blank" },
      // ... other support items
    ],
    Company: [
      { title: "About Us", description: "Learn more about Exodus", href: "/about/" },
      { title: "Investors", description: "Read about news, media, events and more", href: "/investors/" },
      // ... other company items
    ],
  };

  return (
    <div className="x__topbar-header__wrapper">
      <Navbar variant="dark" expand="lg" id="headerNav" className="x__topbar-header">
        <Container fluid className="x__topbar-header-content t__flex-between">
          <div>
            <img
              src="/images/exodus.svg"
              alt="Exodus: Digital blockchain products"
              loading="eager"
              style={{
                opacity: 1,
                transition: "opacity 1600ms"
              }}
            />
          </div>
          <div>
            <Navbar.Collapse id="navbarSupportedContent" >
              <Nav className="me-auto x__topbar-header-navigation-item">
                {Object.entries(menuItems).map(([section, items]) => (
                  <MenuSection key={section} title={section} items={items} />
                ))}
              </Nav>
            </Navbar.Collapse>
          </div>
          <a href="/download/" className="x__button x__download">Download</a>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;