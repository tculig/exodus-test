import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const RootContainer = styled(Container)`
    border-radius: 24px;
    background-color: #1f2033;
    background-color: ${({ theme }) => theme.colors.background.summary};
    padding-bottom: 12px;
`;
export const SummaryTitle = styled.h2`
    color: #fff;
    font-size: 32px;
    font-weight: 300;
    line-height: 1.25;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: left;
`;

export const MainText = styled.div`
    color: #fff9;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.87;
    margin-bottom: 0;
    margin-top: 10px;
    text-align: left;
`;

export const SvgContainer = styled.div`
    height: 120px;
`;
