import styled from "styled-components";
import BigCard from "./bigcard";
const SBigCard = styled(BigCard)`
    .previus{
        background-color: gray;
        width: 300px;
        height: 315px;

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
    .but2{
        color: #E6E6E6;
        padding: 40px;
        border-radius: 10%;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        height: 380px;
        position: fixed;
        width: 500px;
        background-color: green;
        border: none;
        z-index: 20;
    }
    .but2 .f{
        float:left;
    }
    .but2 .s>*{
        padding: 5px;
    }
    .but2 .s{
        font-size: 16px;
        display: flex;
        flex-direction: column;
}
    img{
        width: 230px;
    }
    .outside{
        left:0;
        top:0;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 1;
        opacity:0.5;
    }
    @media(max-width:630px){
        .but2{
            width: 400px;
        }
    }
`
export default SBigCard