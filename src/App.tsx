import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Navbar } from './components/Navbar'
import { SectionMain } from './components/SectionMain'
import { OurNumbers } from './components/OurNumbers'
import { SectionAbout } from './components/SectionAbout'
import { SectionFeatures } from './components/SectionFeatures'
import { SectionSolution } from './components/SectionSolution'
import { SectionFeedbacks } from './components/SectionFeedbacks'
import { SectionCustomers } from './components/SectionCustomers'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Navbar />
      <SectionMain />
      <OurNumbers />
      <SectionAbout />
      <SectionFeatures />
      <SectionSolution />
      <SectionFeedbacks />
      <SectionCustomers />
    </ThemeProvider>
  )
}
