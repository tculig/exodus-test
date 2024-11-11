import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { layout } from '../../styles/globals';

export const CenteredCol = styled(Col)`
    ${layout.center};
`;

export const TitleHeader = styled.h2`
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
