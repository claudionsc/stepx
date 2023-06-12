import styled from "styled-components";

export const PHStyled = styled.span`
    aspect-ratio: 9/16;
    width: 20vw;
    display: flex;
    flex-direction: column;
    margin-top: 10%;

    & img{
        width: 20vw;
        object-fit: contain;
        aspect-ratio: 9/16;
        height: 40vh;

    }

    & .desc-product-home{
        height: 25%;
        margin-top: 50%;

        & button {
            height: 30%;
            margin-top: 10px;
            font-size: .7rem;
        }
    }
`