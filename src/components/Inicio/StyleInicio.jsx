import styled from "styled-components";

export const S3DStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    & #shoes1{

        height: 90%;
        width: 100%;
        color: white;
        position: absolute;
        left: 0%;
        top: 0%;

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