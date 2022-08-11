import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    position: relative;
    font-family: 'Mulish', sans-serif;
    background-color: #fff;
    &.fixed {
        overflow: hidden;
    }
}

h1,h2,h3,h4 {
    color: #233348;
}

a {
    text-decoration: none;
}

`;

export default GlobalStyles;