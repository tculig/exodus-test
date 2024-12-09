import "bootstrap/dist/css/bootstrap.min.css"
import GlobalProviders from './src/layouts/BaseLayout';

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}


export const wrapRootElement = ({ element }) => (
  <GlobalProviders>{element}</GlobalProviders>
)