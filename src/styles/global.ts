import { createGlobalStyle } from "styled-components";
import { IPropsTheme } from "./theme";

export const GlobalStyles = createGlobalStyle<IPropsTheme>`
    html {
        scroll-behavior: smooth;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    :root {
        font-size: 62.5%;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }

    body {
        overflow-x: hidden;
        background-color: ${({theme}) => theme.COLORS.DARK_BLUE};
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }

    input:focus {
        outline: none;
    }
`