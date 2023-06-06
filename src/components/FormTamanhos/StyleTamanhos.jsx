import styled from "styled-components";


export const TMStyle =  styled.span`
    background-color: bisque;
    height: 35%;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    place-items: center;

    & button {
        width: 100%;
        height: 100%;
        border: 1px gray solid;
        border-radius: 5px;
        cursor: pointer;
        
        &:hover{
            border: 1px black solid;
            background-color: #e7e5e5;
        }
       
    }
    


`