import styled from 'styled-components';
import { Container as BootstrapContainer, Dropdown as BootstrapDropdown } from 'react-bootstrap';

interface ContainerProps {
    $variant: 'full' | 'short';
}

export const Container = styled(BootstrapContainer)<ContainerProps>`
    margin-top: 162px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    text-align: center;
    width: 100%;
    z-index: 1;
    border-top: ${({ $variant }) => ($variant === 'short' ? '1px solid #ffffff1a;' : 'none')};
`;
interface StyledDropdownMenuProps {
    $isOpen: boolean;
}

export const Dropdown = styled(BootstrapDropdown)<StyledDropdownMenuProps>`
    .dropdown-toggle::after {
        display: none;
    }

    && .dropdown-menu {
        max-height: ${({ $isOpen }) => ($isOpen ? '1000px' : '0')}!important;
        opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')}!important;
        transform: translateX(-50%) !important;
        left: 50% !important;
        background-clip: padding-box;
        background: #0e0f15;
        border-radius: 12px;
        border: 0;
        display: flex !important;
        flex-direction: column;
        box-shadow: 0 4px 15px 0 #00000014;
        padding-top: 16px;
        padding-bottom: 16px;
        text-align: left;
        font-size: 15px;
        min-width: 160px;
        width: 100%;
        position: relative;
        top: ${({ $isOpen }) => ($isOpen ? '100%' : '90%')}!important;
        transition: all 0.2s ease;
        z-index: 1000;
        margin-top: 8px;
        overflow: hidden;
    }
`;

export const DropdownItem = styled(BootstrapDropdown.Item)`
    color: #fffc;
    display: flex;
    gap: 10px;
    transition: all 0.2s ease;
    padding: 13px 20px !important;
    align-items: center;
    &:hover {
        color: #fff;
        background-color: #000;
    }
`;

export const Footer = styled.div`
    border-top: 1px solid #ffffff1a;
    color: #fff6;
    display: block;
    font-size: 13px;
    line-height: 20px;
    padding: 16px 16px 4px;
    text-align: center;

    a {
        color: #fff;
        opacity: 0.4;
        text-decoration: underline;
        transition: opacity 0.2s ease;
        &:hover {
            opacity: 0.6;
        }
    }
`;

export const DropdownMenu = styled(BootstrapDropdown.Menu)``;

export const DropdownToggle = styled(BootstrapDropdown.Toggle)`
    && {
        border: none;
        align-items: center;
        border-radius: 30px;
        cursor: pointer;
        display: flex;
        color: red;
        gap: 12px;
        height: 60px;
        justify-content: center;
        margin: 0 8px;
        opacity: 0.8;
        padding: 16px 24px;
        transition: opacity 0.2s ease;
        background: linear-gradient(to right, #ffc82d, #fe9d39);
        width: 264px;
    }
`;

export const ToggleIconContainer = styled.i`
    align-items: center;
    display: flex;
    flex-grow: 0;
    justify-content: center;
    min-width: 24px;
`;

export const ToggleLabel = styled.span`
    color: #fff;
    display: block;
    flex-grow: 0;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 2;
    text-align: center;
    text-transform: uppercase;
`;

export const Header1 = styled.h1`
    color: #fff;
    font-size: 64px;
    font-weight: 300;
    line-height: 1.1;
    margin-bottom: 0;
    margin-top: 20px;
`;

export const Header2 = styled.h2`
    color: #fff9;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.25;
    margin-bottom: 0;
    margin-top: 10px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
`;

export const CarretContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
`;
interface CaretProps {
    $isOpen: boolean;
}
export const Caret = styled.div<CaretProps>`
    color: #fff;

    &::after {
        border-color: inherit;
        border-style: solid;
        border-width: 0 1px 1px 0;
        content: '';
        display: inline-block;
        padding: 3px;
        position: relative;
        transition: transform 0.2s ease-in-out;
        transform: ${({ $isOpen }) => ($isOpen ? 'rotate(225deg)' : 'rotate(45deg)')};
        transform-origin: 75% 70%;
        vertical-align: 0.255em;
    }
`;

export const RatingContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const StarRating = styled.span`
    color: #fff;
    display: block;
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    padding-left: 4px;
`;

export const ShortTitle = styled.div`
    color: #fff;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
    text-align: center;
`;
