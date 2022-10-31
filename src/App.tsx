import { ThemeProvider } from 'styled-components'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Navbar />
      <h1>Hello World!</h1>
    </ThemeProvider>
  )
}
