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
          border: 1px gray solid;
          border-radius: 5px;
          cursor: pointer;
          height: 100%;
          width: 100%;

        :focus{
              background-color: #d5d5d5;
          }
        &:hover{
              background-color: #f3f3f3;
              border: 1px black solid;
          }
      }
`