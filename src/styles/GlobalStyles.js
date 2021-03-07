import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colours */
    --color-primary: #00649e;
    --color-primary--light: #06b7d4;
    --color-primary--dark: #0d345c;
    --color-primary--wash: #f7fbff;
    --color-secondary: #d31c72;
    --color-secondary--light: #e85399;
    --color-secondary--dark: #8f134e;
    --color-tertiary: #849c25;
    --color-tertiary--light: #b3d13d;
    --color-tertiary--dark: #505e16;
    --color-quaternary: #f1a72d;
    --color-quaternary--light: #f6c575;
    --color-quaternary--dark: #c47f0d;

    --color-white: white;
    --color-grey--lightest: hsl(0, 0%, 89%);
    --color-grey--lighter: hsl(0, 0%, 80%);
    --color-grey--light: hsl(0, 0%, 60%);
    --color-grey: #5b5b5b;
    --color-grey--dark: hsl(0, 0%, 40%);
    --color-grey--darker: hsl(0, 0%, 20%);
    --color-grey--darkest: hsl(0, 0%, 16.1%);
    --color-black: black;

    /* Vertical Rhythm */
    --base-font-size: 16px;
    --base-line-height: 1.5; 
    --base-spacing: 1.5rem;

    /* Breakpoints */
    --bp-xsmall: 23.75rem; // 380px
    --bp-small: 31.25rem; // 500px
    --bp-medium: 40.625rem; // 613px
    --bp-large: 48rem; // 768px
    --bp-xlarge: 60rem; // 960px
    --bp-xxlarge: 66.625rem;  // 1066px
    --bp-xxxlarge: 78rem; // 1200px
    --bp-super: 90rem; // 1440px

    /* Extras */
    --border-radius: 5px;
    --box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
  }
  
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: var(--base-font-size);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  body {
    margin: 0;
  }

  h1, .h1 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }

  h2, .h2 {
    font-size: 2rem;
  }

  h3, .h3 {
    font-size: 1.75rem;
  }

  p {
    margin-block-start: 0;
  }

  a {
    color: var(--color-secondary);
    &:focus,
    &:hover {
      text-decoration: none;
      color: var(--color-primary);
    }
    &:focus {
      outline: 2px dashed var(--color-secondary);
      outline-offset: 2px;
    }
    &:hover {
      transition: 0.3s;
    }
  }

  img {
    max-width: 100%;
  }

  pre {
    overflow: scroll;
    margin: 3rem 0;
    border-radius: var(--border-radius);
  }

  pre > code {
    line-height: var(--base-line-height);
    font-size: 1.25rem;
    border-radius: var(--border-radius);
  }

  /* Utility Classes */

  /* Layout Classes */
  .layout-contained {
    max-width: var(--bp-xlarge);
    margin-right: auto;
    margin-left: auto;
  }

  .layout-contained--xxlarge {
    max-width: var(--bp-xxxlarge);
  }

  // Layout container for elements poping out from main container.
  .layout-contained--xlarge {
    max-width: var(--bp-xxlarge);
  }

  // Layout container for elements using the 8/12 part of grid.
  .layout-contained--medium {
    max-width: var(--bp-large);
  }

  .layout-contained--small {
    max-width: var(--bp-medium);
  }

  .padding-horizontal {
    padding-right: var(--base-spacing);
    padding-left: var(--base-spacing);
  }

  .padding-vertical {
    padding-top: var(--base-spacing);
    padding-bottom: var(--base-spacing);
  }

  .padding-top {
    padding-top: var(--base-spacing);

    @media screen and (min-width: 48rem) {
      padding-top: calc(var(--base-spacing) * 2);
    }

    @media screen and (min-width: 60rem) {
      padding-top: calc(var(--base-spacing) * 3);
    }
  }

  .padding-bottom {
    padding-bottom: var(--base-spacing);

    @media screen and (min-width: 48rem) {
      padding-bottom: calc(var(--base-spacing) * 2);
    }

    @media screen and (min-width: 60rem) {
      padding-bottom: calc(var(--base-spacing) * 3);
    }
  }

  .margin-top {
    margin-top: var(--base-spacing);

    @media screen and (min-width: 48rem) {
      margin-top: calc(var(--base-spacing) * 2);
    }

    @media screen and (min-width: 60rem) {
      margin-top: calc(var(--base-spacing) * 3);
    }
  }

  .margin-bottom {
    margin-bottom: var(--base-spacing);
    @media screen and (min-width: 48rem) {
      margin-bottom: calc(var(--base-spacing) * 2);
    }

    @media screen and (min-width: 60rem) {
      margin-bottom: calc(var(--base-spacing) * 3);
    }
  }

`

export default GlobalStyles
