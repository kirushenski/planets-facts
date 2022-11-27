import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    /* HSL */
    --hsl-white: 0 0% 100%;
    --hsl-black: 240 67% 8%;
    --hsl-grey: 240 17% 26%;
    --hsl-grey-light: 240 6% 54%;
    --hsl-mercury: 194 48% 49%;
    --hsl-venus: 33 82% 61%;
    --hsl-earth: 263 67% 51%;
    --hsl-mars: 10 63% 51%;
    --hsl-jupiter: 2 68% 53%;
    --hsl-saturn: 17 73% 46%;
    --hsl-uranus: 169 73% 44%;
    --hsl-neptune: 222 87% 56%;

    /* Colors */
    --color-white: hsl(var(--hsl-white));
    --color-black: hsl(var(--hsl-black));
    --color-grey: hsl(var(--hsl-grey));
    --color-grey-light: hsl(var(--hsl-grey-light));
    --color-mercury: hsl(var(--hsl-mercury));
    --color-venus: hsl(var(--hsl-venus));
    --color-earth: hsl(var(--hsl-earth));
    --color-mars: hsl(var(--hsl-mars));
    --color-jupiter: hsl(var(--hsl-jupiter));
    --color-saturn: hsl(var(--hsl-saturn));
    --color-uranus: hsl(var(--hsl-uranus));
    --color-neptune: hsl(var(--hsl-neptune));

    /* Grid */
    --spacing-base: 8px;
    --spacing-1: calc(var(--spacing-base) * 1);
    --spacing-2: calc(var(--spacing-base) * 2);
    --spacing-3: calc(var(--spacing-base) * 3);
    --spacing-4: calc(var(--spacing-base) * 4);
    --spacing-5: calc(var(--spacing-base) * 5);
    --spacing-6: calc(var(--spacing-base) * 6);
    --spacing-7: calc(var(--spacing-base) * 7);
    --spacing-8: calc(var(--spacing-base) * 8);
    --spacing-9: calc(var(--spacing-base) * 9);
    --spacing-10: calc(var(--spacing-base) * 10);

    /* Animation */
    --duration: 300ms;

    /* Normalize */
    --body-color: var(--color-white);
    --body-background: var(--color-black);
    --focus-ring-width: 3px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background: none;
    overflow-wrap: break-word;
  }

  html, body, #__next {
    height: 100%;
  }

  #__next {
    isolation: isolate;
  }

  html {
    scroll-behavior: smooth;

    @media (prefers-reduced-motion) {
      scroll-behavior: auto;
    }
  }

  body {
    --font-h1: 500 80px/103px var(--font-family-antonio);
    --font-h2: 500 40px/52px var(--font-family-antonio);
    --font-h3: 700 12px/25px var(--font-family-spartan);
    --font-h4: 700 11px/25px var(--font-family-spartan);
    --font-body: 400 14px/25px var(--font-family-spartan);

    font: var(--font-body);
    color: var(--body-color);
    background: var(--body-background);
    -webkit-font-smoothing: antialiased;
  }

  input, textarea, select {
    border-radius: 0;
    color: var(--body-background);
    background: var(--body-color);
  }

  button {
    cursor: pointer;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  svg {
    fill: currentColor;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :disabled {
    cursor: not-allowed;
  }

  :focus {
    outline: var(--focus-ring-width) solid var(--color-white);
    outline-offset: var(--focus-ring-width);
  }

  .js-focus-visible :focus:not(.focus-visible), input:focus, textarea:focus {
    outline: none;
  }
`

export default GlobalStyle
