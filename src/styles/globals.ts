import styled, { css } from 'styled-components';

export const layout = {
    center: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
        width: 100%;
    `,
};

export const CenteredContainer = styled.div`
    ${layout.center};
`;

export const Heading = styled.h2`
    color: #fff;
    font-size: 40px;
    font-weight: 300;
    line-height: 1.25;
    margin-bottom: 0;
    margin-top: 20px;
`;
export const Subheading = styled.p`
    color: #fff9;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.87;
    margin-bottom: 0;
    margin-top: 10px;
    max-width: 770px;
`;
