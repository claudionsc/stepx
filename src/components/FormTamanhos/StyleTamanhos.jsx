import styled from "styled-components";


export const TMStyle =  styled.span`
    height: 30vh;
    width: 90%;
    margin: 20px auto;
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
        :focus{
            background-color: #d5d5d5;
        }
        
        &:hover{
            border: 1px black solid;
            background-color: #f3f3f3;
        }
       
    }
    


`