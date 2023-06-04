import styled from "styled-components";

export const CartAsideContainer = styled.aside`
    height: 100vh;
    width: 20vw;
    background-color: aquamarine;
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

        :hover {
            ::before{
                content: 'Ver carrinho completo';
                background-color: black;
                color: white;
                width: 6vw;
                padding: 2px;
                position: absolute;
                font-size: 0.5rem;
                right: 18%;
                text-align: center;
            }
        }

        & svg{
            font-size: .9rem;
        }
    }

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
        margin: 10px 0;
       
    }

    & h5 {
        display: grid;
        place-items: center;
        height: 5%;
    }
`

export const StyleCartAsideItems =  styled.div`
    background-color: cornflowerblue;
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