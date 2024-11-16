import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    position: absolute;
    inset: 0;
    height: 100%;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        height: 100%;
        background: ${({ theme }) =>
            `linear-gradient(180deg, ${theme.colors.brandColors.baseGradientOverlay}00, ${theme.colors.brandColors.baseGradientOverlay})`};
    }
`;
