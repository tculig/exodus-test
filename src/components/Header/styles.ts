import styled from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap';

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
