import styled from "styled-components";

export const PHStyled = styled.span`
    aspect-ratio: 9/16;
    width: 20vw;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    & img{
          aspect-ratio: 9/16;
          height: 40vh;
          object-fit: contain;
          width: 20vw;
      }
    & .desc-product-home{
          height: 25%;
          margin-top: 50%;

        & button {
              font-size: .7rem;
              height: 30%;
              margin-top: 10px;
          }
      }
`