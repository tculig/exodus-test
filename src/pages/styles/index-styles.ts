import { GatsbyImage } from 'gatsby-plugin-image';
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
        background: linear-gradient(180deg, #1f203300, #1f2033);
        background: ${({ theme }) =>
            `linear-gradient(180deg, ${theme.colors.brandColors.baseGradientOverlay}00, ${theme.colors.brandColors.baseGradientOverlay})`};
    }
`;

export const StyledGatsbyImage = styled(GatsbyImage)`
    height: 100%;
    width: 100%;
`;
