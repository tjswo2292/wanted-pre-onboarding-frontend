import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        line-height: 1.4;
    }
    button {
        background-color: #fff;
        border: 1px solid #e1e2e3;
        border-radius: 0.25rem;
        cursor: pointer;
    }
    li {
        list-style: none;
    }
`;

export default GlobalStyle;
