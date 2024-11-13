import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/global.css"
import { ExodusTheme, ExodusThemeProvider } from "tiho-component-library"
import * as Styled from './styles';

const Layout = ({ children }) => {
  return (
    <ExodusThemeProvider theme={ExodusTheme}>
      <Styled.BaseContainer>
        {children}
      </Styled.BaseContainer>
    </ExodusThemeProvider>
  )
}

export default Layout
