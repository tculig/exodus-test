import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'tiho-component-library';
import * as Styled from './styles';
import { ReactComponent as ExodusLogo } from '../../images/exodus-logo.svg';
import { ReactComponent as HamburgerIcon } from '../../images/hamburger.svg';
import { useScrollPosition } from '../../hooks/use-scroll-position';
import { CSSProperties, Fragment, useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/use-debounce';
import useClickOutside from '../../hooks/use-click-outside';
import { ThemeToggle } from '../../components/ThemeToggle';
import { useThemeVariant } from '../../hooks/use-theme-variant';
import { useMediaQuery } from 'react-responsive';

const MenuItem = ({ title, description, href, target, iconOffset, iconBgGradient, iconBoxShadowColor }: MenuItemInterface & { target: string }) => (
  <Styled.NavDropdownItem href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
    <Styled.NavIcon $iconOffset={iconOffset} $iconBgGradient={iconBgGradient} $iconBoxShadowColor={iconBoxShadowColor} />
    <div>
      <Styled.NavDropdownTitle>{title}</Styled.NavDropdownTitle>
      <Styled.NavDropdownDescription>{description}</Styled.NavDropdownDescription>
    </div>
  </Styled.NavDropdownItem>
);

const MenuSection = ({ title, sections, openMenu, setOpenMenu, index, className }: {
  title: string,
  sections: Record<string, MenuItemInterface[]>,
  openMenu: number,
  setOpenMenu: React.Dispatch<React.SetStateAction<number>>,
  index: number,
  className?: string,
}) => {
  const handleClick = () => {
    setOpenMenu(openMenu === index ? -1 : index);
  };

  return (
    <Styled.NavDropdown
      title={title}
      onClick={handleClick}
      show={openMenu === index}
      $isOpen={openMenu === index}
      className={className}
    >
      {
        Object.entries(sections).map(([title, items], index_sections) => {
          return (
            <Fragment key={index_sections}>
              {title !== "" ? <Styled.NavTitle>{title}</Styled.NavTitle> : null}
              {items.map((item, item_index) => (
                <MenuItem key={item_index} {...item} target="_blank" />
              ))}
            </Fragment>
          )
        })
      }
    </Styled.NavDropdown>
  )
};
interface MenuItemInterface {
  title: string,
  description: string,
  href: string,
  iconOffset: number,
  iconBgGradient: string,
  iconBoxShadowColor: string,
}

const TopBar = ({ menuItems }: { menuItems: Record<string, Record<string, MenuItemInterface[]>> }) => {
  const scrollPosition = useScrollPosition();
  const isNotSmallScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [minimizeLogo, setMinimizeLogo] = useState(false);
  const throttledScrollPosition = useDebounce(scrollPosition, 0);
  const [openMenu, setOpenMenu] = useState(-1);
  const [openMenuHamburger, setOpenMenuHamburger] = useState(-1);
  const { themeVariant, toggleTheme } = useThemeVariant();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  useEffect(() => {
    if (isNotSmallScreen) setOpenMenuHamburger(-1);
  }, [isNotSmallScreen])

  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpenMenu(-1);
  });

  const refHamburger = useClickOutside<HTMLDivElement>(() => {
    setOpenMenuHamburger(-1);
  });

  useEffect(() => {
    if (throttledScrollPosition > 100) {
      if (minimizeLogo === false) setMinimizeLogo(true);
    } else {
      if (minimizeLogo === true) setMinimizeLogo(false);
    }
  }, [minimizeLogo, throttledScrollPosition])


  return (
    <Styled.AnchorTop>
      <Styled.Navbar $hamburgerOpen={showHamburgerMenu}>
        <Styled.Container fluid $collapsed={minimizeLogo} >
          <Styled.ExodusLogoWrapper $minimizeLogo={minimizeLogo}>
            <ExodusLogo />
          </Styled.ExodusLogoWrapper>
          <Styled.NavContainer>
            <Navbar.Collapse>
              <Nav ref={ref}>
                {Object.entries(menuItems).map(([section, sections], index) => (
                  <MenuSection
                    key={index}
                    title={section}
                    sections={sections}
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    index={index} />
                ))}
              </Nav>
            </Navbar.Collapse>
          </Styled.NavContainer>

          <div className="d-flex align-items-center">
            <ThemeToggle theme={themeVariant} toggleTheme={toggleTheme} />
            <Button variant={'primary'} size={'normal'} style={{ width: "168px", marginLeft: "18px" }}>Download</Button>
            <Styled.HamburgerContainer>
              <HamburgerIcon onClick={() => setShowHamburgerMenu((oldState) => !oldState)} />
            </Styled.HamburgerContainer>
          </div>
        </Styled.Container>
        <Styled.HamburgerMenuContainer $hamburgerOpen={showHamburgerMenu}>
          <Navbar.Collapse style={{ paddingBottom: "16px" }}>
            <Nav ref={refHamburger} style={{ display: "flex", flexDirection: "column" }}>
              {Object.entries(menuItems).map(([section, sections], index) => (
                <MenuSection
                  key={`hamburger-${index}`}
                  title={section}
                  sections={sections}
                  openMenu={openMenuHamburger}
                  setOpenMenu={setOpenMenuHamburger}
                  index={index}
                  className='hamburger-menu'
                />
              ))}
            </Nav>
          </Navbar.Collapse>
        </Styled.HamburgerMenuContainer>
      </Styled.Navbar>
    </Styled.AnchorTop>
  );
};

export default TopBar;