import "../../styles/global.css"
import { ExodusThemeProvider } from "tiho-component-library"
import { ThemeVariantProvider } from "../../context/theme-variant";
import { useThemeVariant } from "../../hooks/use-theme-variant";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body, h1, h2, h3, p, a,  div  {
     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important;
  }
`;

const WithThemeProvider = ({ children }) => {
  const { themeVariant } = useThemeVariant();
  return (
    <ExodusThemeProvider themeVariant={themeVariant}>
      <BaseContainer>
        {children}
      </BaseContainer>
    </ExodusThemeProvider>)
}

const Layout = ({ children }) => {
  return (
    <ThemeVariantProvider>
      <GlobalStyles />
      <WithThemeProvider>
        {children}
      </WithThemeProvider>
    </ThemeVariantProvider>
  )
}

const BaseContainer = styled.div`
    background: ${({ theme }) => theme.colors.brandColors.baseGradientOverlay};
    width: 100%;
    overflow-y: hidden;
`;

export default Layout
