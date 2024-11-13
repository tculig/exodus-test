import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'tiho-component-library';
import * as Styled from './styles';
import MyIcon from '../../images/exodus-logo.svg';
import { useScrollPosition } from '../../hooks/use-scroll-position';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/use-debounce';

const MenuItem = ({ title, description, href, target }) => (
  <Styled.NavDropdownItem href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
    <Styled.NavDropdownTitle>{title}</Styled.NavDropdownTitle>
    <Styled.NavDropdownDescription>{description}</Styled.NavDropdownDescription>
  </Styled.NavDropdownItem>
);

const MenuSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (isOpen) => {
    setIsOpen(isOpen);
  };
  return (
    <Styled.NavDropdown
      title={title}
      onToggle={handleToggle}
      className={isOpen ? 'dropdown-open' : ''}
    >
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </Styled.NavDropdown>
  )
};

const TopBar = ({ menuItems }) => {
  const scrollPosition = useScrollPosition();
  const [minimizeLogo, setMinimizeLogo] = useState(false);
  const throttledScrollPosition = useDebounce(scrollPosition, 0);

  useEffect(() => {
    if (throttledScrollPosition > 100) {
      if (minimizeLogo === false) setMinimizeLogo(true);
    } else {
      if (minimizeLogo === true) setMinimizeLogo(false);
    }
  }, [minimizeLogo, throttledScrollPosition])


  return (
    <Styled.AnchorTop>
      <Styled.Navbar variant="dark" expand="lg" $collapsed={minimizeLogo}>
        <Styled.Container fluid>
          <Styled.ExodusLogoWrapper>
            <MyIcon className={minimizeLogo ? 'exodus-minimize-logo' : ''} />
          </Styled.ExodusLogoWrapper>
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