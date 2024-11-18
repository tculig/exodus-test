import "../../styles/global.css"
import { ExodusThemeProvider } from "tiho-component-library"
import * as Styled from './styles';
import { ThemeVariantProvider } from "../../context/theme-variant";
import { useThemeVariant } from "../../hooks/use-theme-variant";

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
      <WithThemeProvider>
        {children}
      </WithThemeProvider>
    </ThemeVariantProvider>
  )
}

export default Layout
