import styled from "styled-components";
import App from "./App";
const StyledApp = styled(App)`
    border-radius: 10% ;
    margin: 50px;
    padding: 50px;
    background-color: #BEBEBE;
    display: grid;
    grid-template-columns:auto auto auto auto;
    justify-content: space-around;
    row-gap: 20px;
    min-height: calc(100vh - 111px);
    @media(max-width:1225px){
        grid-template-columns:auto auto auto;
    }
    @media(max-width:975px){
        grid-template-columns:auto auto;
    }
    @media(max-width:725px){
        grid-template-columns:auto;
    }
`
export default StyledApp