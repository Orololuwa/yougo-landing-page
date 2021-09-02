import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { black, primaryFont, typeScale, white } from "theme";

const GlobalStyles = createGlobalStyle`
    ${normalize()}
    @font-face {
        font-family: gordita;
        src: url(/gordita/Gordita-Regular.ttf);
    }
    @font-face {
        font-family: gordita;
        src: url(/gordita/Gordita-Light.ttf);
        font-weight: 200;
    }
    @font-face {
        font-family: gordita;
        src: url(/gordita/Gordita-Bold.ttf);
        font-weight: 600;
    }
    html {
        box-sizing: border-box;
        font-size: 62.5%;
        @media only screen and (min-width: 600px) {
            font-size: 75%;
        }
        @media only screen and (min-width: 768px) {
            font-size: 87.5%;
        }
        @media only screen and (min-width: 992px) {
            font-size: 100%;
        }
        @media only screen and (min-width: 1200px) {
            font-size: 112.5%;
        }
    }
    *, *:before, *:after {
        box-sizing: border-box;
        /* -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out; */
    }
    body {
        transition: all 0.05s linear;
        width: 100%;
        height: 100vh;
        background-color: ${white[100]};
        color: ${black[200]};
        line-height: 2.1rem;
        font-style: normal;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${primaryFont};
    }
    h1, h2, h3, h4, h5 {
        font-family: ${primaryFont};
        font-weight: 400;
        margin: 1.5rem 0;
        font-weight: 700;
        font-family: ${primaryFont};
    }
    h1 {
        line-height: 4.3rem;
        font-size: ${typeScale.header1};
    }
    h2 {
        line-height: 2.8rem;
        font-size: ${typeScale.header2};
    }
    h3 {font-size: ${typeScale.header3};}
    h4 {font-size: ${typeScale.header4};}
    h5 {font-size: ${typeScale.header5};}
    button {
        outline: none;
        border: none;
        font-family: ${primaryFont};
        margin: 1rem 0;
    }
    ul{
        padding: 0;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    section{
        padding: 5rem;
    }
`;

export default GlobalStyles;
