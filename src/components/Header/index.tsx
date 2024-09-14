import * as React from "react"
import {  Link } from "gatsby"


const Header: React.FC = () => (
  <div>
    <h1>
      Gatsby supports <b>TypeScript by default</b>
    </h1>
    <p>
      This means that you can create and write <code>.ts/.tsx</code> files for
      your pages, components, and <code>gatsby-*</code> configuration files (for
      example <code>gatsby-config.ts</code>).
    </p>
    <p>
      For type checking you'll want to install <code>typescript</code> via npm
      and run <code>tsc --init</code> to create a <code>tsconfig</code> file.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export { Header }
