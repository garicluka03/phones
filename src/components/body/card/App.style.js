import styled from "styled-components";
import App from "./App";
const StyledApp = styled(App)`
    display: grid;
    & img{
        width: 200px;
        border-radius: 15%;
    }
    #blueC{
        background-color: #1E3991;
    }
    #redC{
        background-color: #911E1E;
    }
    #yellowC{
        background-color: #9CA100;
    }
    #greenC{
        background-color: #1E9185;
    }
    #pinkC{
        background-color: #A366A5;
    }
    #grayC{
        background-color: gray;
    }
    #blue2C{
        background-color: blueviolet;
    }
    #orangeC{
        background-color: #DB8514;
    }
    #red2C{
        background-color: #981E4C;
    }
    #purpleC{
        background-color: purple;
    }
    .but1{
        border: solid black 10px;
        box-sizing: content-box;
        border-radius: 15%;
        height: 300px;
        width: 250px;
        border: none;
        padding-bottom: 35px;
    }
    .but1:hover{
        box-shadow:3px 3px 3px black;
        opacity: 95%;
    }
    h2, h3{
        color: #E6E6E6;
    }

`
export default StyledApp