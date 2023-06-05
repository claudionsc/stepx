import styled from "styled-components";

export const PDStyle = styled.main`
    width: 100%;
    height: 100vh;
    padding: 3% 0;
    
    
    & #product{
        width: 100%;
        height: auto;
        


            & .product-img{
            display: grid;
            place-items: center;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 5px;
            grid-row-gap: 5px;
            width: 50vw;
            margin-right: 20px;

                & img {
                width: 100%;
                aspect-ratio: 1/1;
                object-fit: contain;
            }
            
        }

        
    }

    .cartQtd{
        width: 10vw;
        height: auto;
        ::after {
            content: attr(count);
            position: absolute;
            right: 4.2%;
            top: 15%;
            padding: 2px 5px;
            border-radius: 50%;
            background-color: #ff0000;
            color: white;
            font-size: .7rem;
            max-width: 30px;
            max-height: 30px;
            text-decoration: none;
         }
    }
    
    
    & .product-desc{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        
        

        & .desc{
            width: 80vh;
            height: 90%;

        }

        & .desc h1, p, .tamanhos{
            margin: 5%;

        }

        & .tamanhos{
            width: 60%;
            height: 50%;
    
        }
    }
     

   
`