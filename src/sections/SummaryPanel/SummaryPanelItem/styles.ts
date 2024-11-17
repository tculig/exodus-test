import styled from 'styled-components';

export const RootContainer = styled.div`
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.background.summary};
    padding-bottom: 12px;
`;
export const SummaryTitle = styled.h2`
    color: ${({ theme }) => theme.colors.text.emphasis};
    font-size: 32px;
    font-weight: 300;
    line-height: 1.25;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: left;
`;

export const MainText = styled.div`
    color: ${({ theme }) => theme.colors.text.emphasis90};
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
