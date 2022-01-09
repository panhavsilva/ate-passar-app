import { ThemeProvider } from 'styled-components'
import { App } from './app'
import { theme } from 'resources/theme'
import { GlobalStyle } from './global-styles'
import 'normalize.css'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}
