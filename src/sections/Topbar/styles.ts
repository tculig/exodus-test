import styled from 'styled-components';
import {
    Navbar as BootstrapNavbar,
    Nav as BootstrapNav,
    Container as BootstrapContainer,
    NavDropdown as BootstrapNavDropdown,
} from 'react-bootstrap';

export const AnchorTop = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
`;

interface NavbarProps {
    readonly $collapsed: boolean;
}

export const Navbar = styled(BootstrapNavbar)<NavbarProps>`
    background-color: ${({ theme }) => theme.colors.brandColors.baseBackground};
    display: flex;
    height: ${({ $collapsed }) => ($collapsed ? '56px' : '86px')};
    overflow: visible;
    padding: 0;
    width: 100%;
    transition: all 0.2s ease;
`;

export const Container = styled(BootstrapContainer)`
    box-sizing: initial;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1170px;
    padding: 0 16px;
    justify-content: space-between;
`;

export const Nav = styled(BootstrapNav)`
    box-sizing: initial;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1170px;
    padding: 0 16px;
    justify-content: space-between;
`;

interface StyledDropdownMenuProps {
    $isOpen: boolean;
}

export const NavDropdown = styled(BootstrapNavDropdown)<StyledDropdownMenuProps>`
    padding: 0 16px;
    .dropdown-menu {
        max-height: ${({ $isOpen }) => ($isOpen ? '1000px' : '0')};
        opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
        transform: translateX(-50%);
        left: 50% !important;
        background-clip: padding-box;
        background-color: #fff;
        border: 0;
        gap: 8px !important;
        display: flex !important;
        flex-direction: column;
        border-radius: 4px;
        box-shadow: 0 4px 15px 0 #00000014;
        padding: 16px;
        text-align: left;
        font-size: 16px;
        min-width: 160px;
        width: 400px;
        position: relative;
        top: ${({ $isOpen }) => ($isOpen ? '100%' : '80%')};
        transition: all 0.1s ease;
        z-index: 1000;
        margin-top: 6px;
        overflow: hidden;
    }

    .dropdown-toggle {
        color: ${({ theme }) => theme.colors.text.primary};
        opacity: 0.8;
        &::after {
            border-color: inherit;
            border-style: solid;
            border-width: 0 1px 1px 0;
            content: '';
            display: inline-block;
            height: 0;
            left: 8px;
            margin-left: 0.255em;
            padding: 3px;
            position: relative;
            transform: rotate(45deg);
            vertical-align: 0.255em;
            width: 0;
        }
        &:hover {
            color: #fff;
            opacity: 1;
        }
    }
`;

export const NavDropdownItem = styled(BootstrapNavDropdown.Item)`
    && {
        display: flex;
        color: #0009;
        padding: 8px;
        position: relative;
        white-space: normal;
        opacity: 0.8;
        gap: 16px;
    }
    &:hover {
        opacity: 1;
        background-color: inherit !important;
    }
`;

export const NavDropdownTitle = styled.span`
    color: #1f2033;
    display: block;
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
    line-height: 1.6;
`;

export const NavDropdownDescription = styled.span`
    color: #1f2033;
    display: block;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.6;
    white-space: nowrap;
    opacity: 0.8;
`;

export const ExodusLogoWrapper = styled.div`
    width: 156px;
    height: 32px;

    #exodus-logotype {
        transition: all 0.2s ease;
    }

    .exodus-minimize-logo #exodus-logotype {
        opacity: 0;
        transform: translateX(-16px);
    }
`;

interface NavbarIconProps {
    readonly $iconOffset: number;
    readonly $iconBgGradient: string;
    readonly $iconBoxShadowColor: string;
}
export const NavIcon = styled.i<NavbarIconProps>`
    background-image: ${({ $iconBgGradient }) => `${$iconBgGradient};`}
    box-shadow: ${({ $iconBoxShadowColor }) => `0 8px 18px 0 ${$iconBoxShadowColor}`} ;
    border-radius: 50%;
    display: block;
    flex-shrink: 0;
    height: 44px;
    width: 44px;
    position: relative;
    transition: all 0.2s ease;

    &::after {
        background: url(/images/nav-icons-sprite.svg) no-repeat;
        background-position: ${({ $iconOffset }) => `${$iconOffset}px`} 0;
        content: '';
        height: 100%;
        left: 0;
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;

export const NavTitle = styled.div`
    color: #1f2033;
    display: block;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 3px;
    margin-top: 22px;
    opacity: 0.4;
    text-transform: uppercase;
`;
