import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Navbar } from './components/Navbar'
import { SectionMain } from './components/SectionMain'
import { OurNumbers } from './components/OurNumbers'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Navbar />
      <SectionMain />
      <OurNumbers />
    </ThemeProvider>
  )
}
