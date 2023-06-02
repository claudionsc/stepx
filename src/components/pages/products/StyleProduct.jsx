import styled from "styled-components";

export const PDStyle = styled.main`
    width: 100%;
    height: 100vh;
    background-color: greenyellow;
    padding: 3% 0;
    
    
    & #product{
        background-color: rebeccapurple;
        width: 100%;


            & .product-img{
            display: grid;
            place-items: center;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 10px;
            grid-row-gap: 0px;
            width: 50%;
            background-color: burlywood;
            height: 90%;
            padding: 0 2%;

                & img {
                width: 100%;
                aspect-ratio: 1/1;
                background-color: red;
            }
            
        }

        
    }
    
    
    & .product-desc{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        
        

        & .desc{
            background-color: yellow;
            width: 80%;
            height: 90%;
            justify-self: center;

        }

        & .desc h1, p, .tamanhos{
            margin: 5%;

        }

        & .tamanhos{
            background-color: tomato;
            width: 60%;
            height: 50%;
    
        }
    }
     

    & .nav-product{
        background-color: black;
        width: 100%;
        height: 50px;
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        
        
        & a {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 2%;
           
        }
        
        & p, svg {
            color: white;
            font-size: .7rem;
            padding: 2px;
        }

        & .tamanhos{
            background-color: red;
            width: 40%;
            height: 40%;
        }
       
    }
`