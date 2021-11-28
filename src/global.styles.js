import { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        font-family: 'Roboto Slab', serif;
    }
    body{
        min-height: 100vh;
        background-color: #D9D9D9;
    }
`
export default Global