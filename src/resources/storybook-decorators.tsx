import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'global-styles'
import { theme } from 'resources/theme'

type StoryFn = () => JSX.Element

export const themeStyleDecorator = (Story: StoryFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
)
