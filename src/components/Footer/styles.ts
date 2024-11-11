import styled from 'styled-components';

export const RootContainer = styled.div`
    box-sizing: initial;
    margin: 0 auto;
    max-width: 1170px;
    padding-top: 75px;
    border-top: 1px solid #ffffff1a;
`;

export const PadRight = styled.div`
    padding-right: 32px;
`;

export const Heading = styled.p`
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.78;
    margin: 0 0 12px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #ffffff80;
    display: block;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.87;
    transition: all 0.2s linear;
    padding: 0;

    &:hover {
        color: #ffffff;
    }
`;
