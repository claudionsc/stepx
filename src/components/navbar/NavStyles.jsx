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
    
`

export const NavIcon = styled.div`
       width: 10%;
    height: 100%;
    background-color: red;
    margin: 0 10px;
    text-align: center;
    display: grid;
    place-items: center;

    & svg {
        font-size: 1.5rem;
        
    }
`


export const NavUl = styled.ul`

    list-style: none;
    display: flex;
    justify-self: center;
`

