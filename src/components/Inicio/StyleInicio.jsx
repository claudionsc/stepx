import styled from "styled-components";

export const S3DStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    & #shoes1{

        height: 10vh;
        width: 10vw;
        background-color: #821212;
        color: white;
        position: absolute;
        left: 50%;
        top: 50%;
    }
   
   [data-anime]{
    /* animation: animationShoes 2s infinite ease-in-out; */
   }


   @keyframes animationShoes{

    0% {
        opacity: 0;;
    }

    25% {
        opacity: 100;
    }
    75% {
        opacity: 100;
    }

    100% {
        opacity: 0;;
    }
   }
`