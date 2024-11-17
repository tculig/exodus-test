import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { layout } from '../../styles/globals';

export const CenteredCol = styled(Col)`
    ${layout.center};
    height: 100%;
`;

export const TitleHeader = styled.h2`
    color: ${({ theme }) => theme.colors.text.emphasis};
    font-size: 40px;
    font-weight: 300;
    line-height: 1.25;
    margin-bottom: 0;
    margin-top: 20px;
`;
export const Subheading = styled.p`
    color: ${({ theme }) => theme.colors.text.emphasis90};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.87;
    margin-bottom: 0;
    margin-top: 10px;
    max-width: 770px;
`;

export const RootContainer = styled.div<SectionProps>`
    flex-grow: 1;
    width: 100%;
    background: ${({ theme, $withBg }) => ($withBg ? theme.colors.background.panel : 'unset')}!important;
    border-radius: 20px;
    box-sizing: border-box;
    position: relative;
    padding: 90px;
`;

export const ImageRow = styled(Row)`
    height: 600px;
`;
interface SectionProps {
    $withBg: boolean;
}

export const Section = styled.section`
    margin: 32px;
    max-width: 1540px;
    width: 1500px;
`;
