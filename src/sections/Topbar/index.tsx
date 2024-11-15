import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'tiho-component-library';
import * as Styled from './styles';
import MyIcon from '../../images/exodus-logo.svg';
import { useScrollPosition } from '../../hooks/use-scroll-position';
import { Fragment, useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/use-debounce';
import useClickOutside from '../../hooks/use-click-outside';
import { ThemeToggle } from '../../components/ThemeToggle';

const MenuItem = ({ title, description, href, target, iconOffset, iconBgGradient, iconBoxShadowColor }: MenuItemInterface & { target: string }) => (
  <Styled.NavDropdownItem href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
    <Styled.NavIcon $iconOffset={iconOffset} $iconBgGradient={iconBgGradient} $iconBoxShadowColor={iconBoxShadowColor} />
    <div>
      <Styled.NavDropdownTitle>{title}</Styled.NavDropdownTitle>
      <Styled.NavDropdownDescription>{description}</Styled.NavDropdownDescription>
    </div>
  </Styled.NavDropdownItem>
);

const MenuSection = ({ title, sections, openMenu, setOpenMenu, index }: {
  title: string,
  sections: Record<string, MenuItemInterface[]>,
  openMenu: number,
  setOpenMenu: React.Dispatch<React.SetStateAction<number>>,
  index: number,
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
  const [minimizeLogo, setMinimizeLogo] = useState(false);
  const throttledScrollPosition = useDebounce(scrollPosition, 0);
  const [openMenu, setOpenMenu] = useState(-1);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpenMenu(-1);
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
      <Styled.Navbar variant="dark" expand="lg" $collapsed={minimizeLogo}>
        <Styled.Container fluid>
          <Styled.ExodusLogoWrapper>
            <MyIcon />
          </Styled.ExodusLogoWrapper>
          <div>
            <Navbar.Collapse>
              <Nav ref={ref}>
                {Object.entries(menuItems).map(([section, sections], index) => (
                  <MenuSection key={index} title={section} sections={sections} openMenu={openMenu} setOpenMenu={setOpenMenu} index={index} />
                ))}
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="d-flex">
            <ThemeToggle theme={theme} toggleTheme={() => setTheme(old => old === "dark" ? "light" : "dark")} />
            <Button variant={'primary'} size={'medium'} style={{ width: "168px", marginLeft: "18px" }}>Download</Button>
          </div>
        </Styled.Container>
      </Styled.Navbar>
    </Styled.AnchorTop>
  );
};

export default TopBar;