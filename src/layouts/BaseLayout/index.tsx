import "../../styles/global.css"
import { ExodusThemeProvider } from "tiho-component-library"
import * as Styled from './styles';
import { ThemeVariantProvider } from "../../context/theme-variant";
import { useThemeVariant } from "../../hooks/use-theme-variant";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body, h1, h2, h3, p, a,  div  {
     font-family: Roboto, sans-serif !important;
  }
`;

const WithThemeProvider = ({ children }) => {
  const { themeVariant } = useThemeVariant();
  return (
    <ExodusThemeProvider themeVariant={themeVariant}>
      <Styled.BaseContainer>
        {children}
      </Styled.BaseContainer>
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

export default Layout
