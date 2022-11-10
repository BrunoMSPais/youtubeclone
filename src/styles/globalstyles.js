import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  backgroundBase: '#F9F9F9',
  backgroundLevel1: '#FFFFFF',
  backgroundLevel2: '#F0F0F0',
  borderBase: '#E5E5E5',
  textColorBase: '#222222',
  colors: {
    primary: '',
    secondary: '',
  }
}

export const darkTheme = {
  backgroundBase: '#181818',
  backgroundLevel1: '#202020',
  backgroundLevel2: '#313131',
  borderBase: '#383838',
  textColorBase: '#FFFFFF',
  colors: {
    primary: '',
    secondary: '',
  }
}

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`
