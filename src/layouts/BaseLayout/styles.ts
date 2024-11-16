import styled from 'styled-components';

export const BaseContainer = styled.div`
    background: ${({ theme }) => theme.colors.brandColors.baseGradientOverlay};
    width: 100%;
    overflow-y: hidden;
`;
