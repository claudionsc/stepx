import styled from "styled-components";

export const HFStyle = styled.aside`
    background-color: rgb(60, 187, 255);
    width: 30%;
    height: 100%;

   
    & p{
        padding: 10px;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }

    & form{
        width: 70%;
        aspect-ratio: 4/3;
        margin: 5% auto;

    }
    & #preco {
        background-color: brown;

        input{
            scale: 150%;
            margin: 10px 10px 0 10px;
            accent-color: white;

        }
    }
`