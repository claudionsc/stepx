import styled from "styled-components";

export const CSTStyle = styled.span`
    width: 80%;
    height: 15vh;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffffcd;
    

    button {
        height: 5vh;
        width: 15vw;
    }
    
    @media screen and (min-width: 767px) and (max-width: 1023px){
        width: 90%;

        font-size: 2rem;

        button{
            width: 30vw;

            font-size: 2rem;
        }
    }
`