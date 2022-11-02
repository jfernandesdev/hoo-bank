import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 0;
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['base-label']};
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  html, body {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.white70};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  @media (max-width: 1366px) {
    html {
      font-size: 80%;
    }
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.50%;
    }
  }

  @keyframes hamburger4animTop {
    0% {
      display: none;
    }
    1% {
      display: inline-block;
    }
    60% {
      transform: none;
      opacity: 0;
    }
    100% {
      transform: rotate(45deg);
      opacity: 1;
    }
  }
  @keyframes hamburger4animBottom {
    0% {
      display: none;
    }
    1% {
      display: inline-block;
    }
    60% {
      transform: none;
      opacity: 0;
    }
    100% {
      transform: rotate(-45deg);
      opacity: 1;
    }
  }

  @keyframes slide-auto-scroll {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-500px, 0, 0); /* The image width */
    }
    }
`