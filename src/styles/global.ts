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

  body {
    background: url('/background.svg'), ${(props) => props.theme.background};;
    background-size: cover;
    background-repeat: no-repeat; 
    color: ${(props) => props.theme.white70};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Poppins', sans-serif;
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
}
`