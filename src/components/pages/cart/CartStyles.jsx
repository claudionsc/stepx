import styled from "styled-components";

export const CartContainer = styled.aside`
    height: 100vh;
    width: 20vw;
    background-color: aquamarine;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;

    & .cart-items-div {
        height: 100%;
        background-color: palevioletred;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

         .carrinho-vazio {
        
        height: 20%;
        display: grid;
        place-items: center;
        background-color: yellow;
        margin: 50% 0;

        p {
            text-decoration: underline;
            cursor: pointer;
        }

        
    }


        & .cart-summary{
        background-color: red;
        width: 100%;
        height: 8%;
        position: absolute;
        bottom: 0;
        display: grid;
        place-items: center;
       

        button {
            height: 50%;
        }
    }
    }

    & svg {
        font-size: 1.5rem;
        cursor: pointer;
        position: absolute;
        z-index: 1;
       
    }

    & h5 {
        display: grid;
        place-items: center;
        height: 5%;
    }
`

export const StyleCartItems =  styled.div`
    background-color: cornflowerblue;
    height: 150px;
    width: 100%;
    margin: 10px 0;
    display: flex;
    align-items: center;
    padding: 0 10px;

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