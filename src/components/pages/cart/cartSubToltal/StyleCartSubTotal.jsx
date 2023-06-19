import styled from "styled-components";

export const CSTStyle = styled.footer`
    width: 80%;
    height: 15vh;
    border-radius: 5px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    

    button {
        height: 5vh;
        width: 10vw;
    }
    
    @media screen and (min-width: 767px) and (max-width: 1023px){
        width: 90%;
        height: 10%;
        font-size: 2rem;

        button{
            width: 30vw;
            font-size: 2rem;
        }
    }
`