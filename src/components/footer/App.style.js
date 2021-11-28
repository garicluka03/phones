import styled from "styled-components";
import App from "./App";
const StyledApp = styled(App)`
    background-color: #2E2E2E;
    margin-top: 20px;
    color: #CBCBCB;
    display: flex;
    justify-content:space-around;
    &>div{
        display: flex;
    }
    &>div>*{
        margin-right: 20px;
    }
`
export default StyledApp