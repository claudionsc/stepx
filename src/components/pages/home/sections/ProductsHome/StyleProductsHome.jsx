import styled from "styled-components";

export const PHStyled = styled.span`
    width: 20vw;
    height: 60vh;

    & img{
        width: 100%;
        height: 75%;
        object-fit: contain;
        position: relative;
       
        

    }

    & .desc-product-home{
        height: 25%;

        & button {
            height: 30%;
            margin-top: 10px;
            font-size: .7rem;
        }
    }
`