import styled from "styled-components";

export const NavDiv = styled.div`
    background-color: #347bb9;
    width: 100%;
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
    background-color: red;
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


    
    & svg {
        font-size: 1.5rem !important;
        
    }
`


export const NavUl = styled.ul`

    list-style: none;
    display: flex;
    justify-self: center;
`

