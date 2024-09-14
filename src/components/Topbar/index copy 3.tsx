import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

const MenuItem = ({ title, description, href, target }) => (
  <NavDropdown.Item href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
    <div>
      <div className="fw-bold">{title}</div>
      <div className="text-muted small">{description}</div>
    </div>
  </NavDropdown.Item>
);

const MenuSection = ({ title, items }) => (
  <NavDropdown 
    title={<>
      {title}
    </>} 
    id={`nav-dropdown-${title.toLowerCase()}`}
  >
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
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Exodus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Object.entries(menuItems).map(([section, items]) => (
              <MenuSection key={section} title={section} items={items} />
            ))}
          </Nav>
          <Button variant="primary" href="/download/">Download</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;