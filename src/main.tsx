import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home.tsx'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/theme.ts'
import { GlobalStyles } from './styles/global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <GlobalStyles theme={Theme} />

    <ThemeProvider theme={Theme} >
      <Home />
    </ThemeProvider>

  </StrictMode>,
)
