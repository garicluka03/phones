import styled from "styled-components";
import App from "./App";
const StyledApp = styled(App)`
    background-color: #2E2E2E;
    position: relative;
    z-index: 100;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    font-size: 35px;
     
    .logo{
        display: flex;
        align-items: center;
        
    }
    .logoL{
        background-color: #CBCBCB;
        height: 34px;
        width: 19px;
        border-radius: 25%;

    }
    .link{
        
        color: #00A8FF;
        text-decoration: none;
        font-family: 'Roboto Mono', monospace;
    }
    .link:hover{
            opacity: 80%;
        
    }
    h3{
        color:#CBCBCB;
        margin-right: 10px;
        font-family: 'Roboto Mono', monospace;
    }
    margin-bottom:20px;
    flex-wrap: wrap;
    @media(max-width:470px){
        height: 100px;
    }
    @media(max-width:260px){
        height: 150px;
    }
`
export default StyledApp