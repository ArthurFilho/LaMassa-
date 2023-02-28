import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
body {
    background-color: white;
    color: black;
    -webkit-font-smoothing: antialised;
}
body, input-security, textarea, button {
    font: 400 1rem Roboto, sans-serif;
    overflow-x: hidden;
}
a {
    color: black;
    text-decoration: none;
}
`

