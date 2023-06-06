import styled from "styled-components";

export const NavDiv = styled.div`
    background-color: white;
    width: 100vw;
    height: 8vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    
`

export const NavLogo = styled.div`
    width: 10%;
    height: 100%;
    margin: 0 10px;
    text-align: center;
    display: grid;
    place-items: center;
    cursor: pointer;

    & svg {
        font-size: 1.5rem;
        
    }
`

export const NavCart = styled.div`
    width: 10%;
    height: 100%;
    margin: 0 10px;
    text-align: center;
    display: grid;
    place-items: center;
    cursor: pointer;

    .cartQtd{
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


    
    & svg {
        font-size: 1.5rem !important;
        
    }
`

export const NALTStyle = styled.nav`
     
        background-color: black;
        width: 100%;
        height: 50px;
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 1;
        
        
        & a {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 2%;
            cursor: pointer;
           
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
    
`
export const NavUl = styled.ul`

    list-style: none;
    display: flex;
    justify-self: center;
`

