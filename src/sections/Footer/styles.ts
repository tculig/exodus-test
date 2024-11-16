import styled, { css } from 'styled-components';

export const subheadingCSS = css`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.subheading};
    display: block;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.87;
    transition: all 0.2s linear;
    padding: 0;
`;

export const RootContainer = styled.div`
    box-sizing: initial;
    margin: 32px auto;
    max-width: 1170px;
    padding: 75px 24px 92px 24px;
    border-top: ${({ theme }) => `1px solid ${theme.colors.border.subtle}`};
`;

export const PadRight = styled.div`
    padding-right: 32px;
    min-width: 180px;
    max-width: 212px;
`;

export const Heading = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 18px;
    font-weight: 300;
    line-height: 1.78;
    margin: 0 0 12px;
`;

export const Subheading = styled.p`
    ${subheadingCSS}
`;

export const Link = styled.a`
    ${subheadingCSS}

    &:hover {
        color: ${({ theme }) => theme.colors.text.emphasis};
    }
`;

export const CopyrightText = styled.div`
    border-left: ${({ theme }) => `1px solid ${theme.colors.border.godzilla}`};
    color: ${({ theme }) => theme.colors.text.subtle};
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 5px;
    padding-left: 40px;
    text-align: left;
`;

export const Terms = styled.div`
    a {
        color: ${({ theme }) => theme.colors.text.subtle};
        display: inline-block;
        text-decoration: underline;
        transition: all 0.2s linear;
    }

    a + a {
        margin-left: 10px;
    }

    span {
        color: ${({ theme }) => theme.colors.text.subtle};
        display: block;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.67;
        padding-bottom: 25px;
    }
`;
