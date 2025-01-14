import styled from 'styled-components';

interface ContainerProps {
    $variant: 'full' | 'short';
    $hydrated: boolean;
}

export const Container = styled.div<ContainerProps>`
    margin-top: 172px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    text-align: center;
    width: 100%;
    z-index: 1;
    max-width: 1000px;
    transition: opacity 0.25s ease;
    border-top: ${({ theme, $variant }) => ($variant === 'short' ? `1px solid ${theme.colors.border.subtle};` : 'none')};
    opacity: ${({ $hydrated }) => ($hydrated ? '1' : '0')};
    margin-bottom: ${({ $variant }) => ($variant === 'short' ? `100px` : '0')};
`;

export const DownloadSection1 = styled.h1`
    color: ${({ theme }) => theme.colors.text.emphasis};
    font-size: 64px;
    font-weight: 300;
    line-height: 1.1;
    margin-bottom: 0;
    margin-top: 20px;

    @media (max-width: 768px) {
        font-size: 48px;
        line-height: 1.2;
        margin-top: 16px;
        max-width: 200px;
    }
`;

export const DownloadSection2 = styled.h2`
    color: ${({ theme }) => theme.colors.text.emphasis90};
    font-size: 24px;
    font-weight: 300;
    line-height: 1.25;
    margin-bottom: 0;
    margin-top: 10px;

    @media (max-width: 768px) {
        line-height: 1.33;
        margin-top: 16px;
        max-width: 260px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

export const ShortTitle = styled.div`
    color: ${({ theme }) => theme.colors.text.emphasis};
    margin-top: 120px;
    text-align: center;
    font-size: 48px;
    font-weight: 100;
    line-height: 1.25;

    @media (max-width: 768px) {
        line-height: 1.33;
        margin-top: 16px;
        max-width: 330px;
    }
`;

export const ImageContainer = styled.div`
    height: 80px;
    transition: height 0.25s ease;

    @media (max-width: 768px) {
        height: 60px;
    }
`;
