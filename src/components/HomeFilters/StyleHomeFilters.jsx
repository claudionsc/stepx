import styled from "styled-components";

export const HFStyle = styled.aside`
    width: 30%;
    position: -webkit-sticky;
    position: sticky;
    top: 10%;
    left: 0;
   
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