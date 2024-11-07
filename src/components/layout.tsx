import "bootstrap/dist/css/bootstrap.min.css"
import "../style/global.css"
import { ExodusTheme, ExodusThemeProvider } from "tiho-component-library"

const Layout = ({ children }) => {
  return (
    <ExodusThemeProvider theme={ExodusTheme}>
     {children}
    </ExodusThemeProvider>
  )
}

export default Layout
