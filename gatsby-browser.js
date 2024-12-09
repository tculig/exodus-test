import "bootstrap/dist/css/bootstrap.min.css"
import GlobalProviders from './src/layouts/BaseLayout';
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
// Add a link to Google Fonts
export const onClientEntry = () => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
};

export const wrapRootElement = ({ element }) => (
    <GlobalProviders>{element}</GlobalProviders>
)