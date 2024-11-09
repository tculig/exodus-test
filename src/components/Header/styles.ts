import styled from 'styled-components';
import { Container as BootstrapContainer, Dropdown as BootstrapDropdown } from 'react-bootstrap';

export const Container = styled(BootstrapContainer)`
    margin: 162px 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    text-align: center;
    width: 100%;
    z-index: 1;
`;

export const Dropdown = styled(BootstrapDropdown)`
    .dropdown-toggle::after {
        display: none;
    }
`;

export const DropdownItem = styled(BootstrapDropdown.Item)``;

export const DropdownMenu = styled(BootstrapDropdown.Menu)``;

export const DropdownToggle = styled(BootstrapDropdown.Toggle)`
    && {
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
