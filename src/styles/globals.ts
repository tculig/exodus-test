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
