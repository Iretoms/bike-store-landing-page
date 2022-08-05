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
}

a {
    text-decoration: none;
}

`;

export default GlobalStyles;