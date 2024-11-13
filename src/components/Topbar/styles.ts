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
    background-color: #1f1b34;
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

export const NavDropdown = styled(BootstrapNavDropdown)`
    padding: 0 16px;

    .dropdown-menu {
        transform: translateX(-50%);
        left: 50% !important;
        background-clip: padding-box;
        background-color: #fff;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 4px 15px 0 #00000014;
        padding: 12px 0;
        text-align: left;
        transition: all 0.8s ease;
        font-size: 16px;
        margin: -4px 0 0;
        min-width: 160px;
        padding: 7px 0 0;
        position: absolute;
        top: 80%;
        max-height: 0;
        height: 0;

        z-index: 1000;
        margin-top: 6px;
        overflow: hidden;
    }

    .dropdown-open {
        color: red;
        .dropdown-menu {
            transition: all 0.8s ease !important;
            top: 100% !important;
            max-height: 1000px !important;
            height: auto !important;
            opacity: 1 !important;
            overflow: visible !important;
        }
    }

    .dropdown-toggle {
        color: #fff;
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
        color: #0009;
        margin: 10px 0;
        padding: 10px 20px;
        position: relative;
        white-space: normal;
    }
`;

export const NavDropdownTitle = styled.span`
    color: #1f2033;
    display: block;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
`;

export const NavDropdownDescription = styled.span`
    color: #1f2033cc;
    display: block;
    font-size: 13px;
    font-weight: 300;
    line-height: 1;
    margin-top: 6px;
    white-space: nowrap;
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
