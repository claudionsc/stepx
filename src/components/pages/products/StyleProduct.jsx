import styled from "styled-components";

export const PDStyle = styled.span`
    width: 100vw;
#product{
      height: 100vh;
      width: 100%;

        & .product-img{
          background-color: red;
          display: grid;
          grid-column-gap: 5px;
          grid-row-gap: 5px;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          margin-right: 20px;
          place-items: center;
          width: 50vw;

            & img {
              aspect-ratio: 1/1;
              object-fit: contain;
              width: 100%;
          }
      }
  }
.navcart{
  cursor: pointer;
  display: grid;
  height: 100%;
  margin: 0 10px;
  place-items: center;
  text-align: center;
  width: 10%;
}
.cartQtd{
      background-color: #ff0000;
      border-radius: 50%;
      color: white;
      font-size: .7rem;
      height: auto;
      max-height: 30px;
      max-width: 30px;
      padding: 2px 5px;
      position: absolute;
      right: 3.5%;
      text-decoration: none;
      top: 15%;
  }
 .product-desc{
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;

     .desc{
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: center;
          width: 80vh;

        span{
              width: 20vw;
          }
        button{
            :disabled{
                  cursor: not-allowed;
              }
          }
        .tamanhos-btn{
              width: 100%;
          }
      }
     .desc h1, p, .tamanhos{
          margin: 5%;
      }
     .tamanhos{
          height: 50%;
          width: 60%;
      }
  }
`   
