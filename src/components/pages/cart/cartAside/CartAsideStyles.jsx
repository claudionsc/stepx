import styled from "styled-components";

export const CartAsideContainer = styled.aside`
    height: 100vh;
    width: 20vw;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;

    .open-wide-cart{
        position: fixed;
        width: 2vw;
        height: 5vh;
        top: 50%;
        right: 19%;
        border-radius: 50%;
        z-index: 0;

       

        & svg{
            font-size: 1rem;
        }
    }

    & .cart-items-div {
        height: 100%;
        background-color: #f1f1f1;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       
    

         .carrinho-vazio {
            height: 20%;
            display: grid;
            place-items: center;
            margin: 50% 0;

          

            p {
                text-decoration: underline;
                cursor: pointer;
                border: 1px solid black;
                padding: 20px;
                border-radius: 117px 117px 117px 117px;
            }

            
        }


        & .cart-summary{
        background-color: #cbcbcb;
        width: 100%;
        height: 10%;
        position: absolute;
        bottom: 0;
        display: grid;
        place-items: center;
       

        button {
            height: 80%;
        }

        .see-cart{
            width: 100%;
            padding: 9px;
            background-color: rgba(0, 0, 0, 0);
            border: 1px solid black;

            p{
                color: black;
                font-size: .8rem;
            }
        }
    }
    }

    & svg {
        font-size: 1.5rem;
        cursor: pointer;
        position: absolute;
        z-index: 1;
        margin: 10px 0;
       
    }

    & h5 {
        display: grid;
        place-items: center;
        height: 5%;
    }

    @media screen and (min-width: 767px) and (max-width: 1023px){
        width: 60vw;
        background-color: red;
    }
`

export const StyleCartAsideItems =  styled.div`
    background-color: white;
    height: 150px;
    width: 100%;
    margin: 10px 0;
    display: flex;
    align-items: center;
    padding: 0 10px;
    z-index: 1;

    & img {
        width: 30%;
        aspect-ratio: 1/1;
        
    }

    & div {
        margin-left: 5px;
    }

    & div p {
        font-size: .8rem;
    }

    
    
`