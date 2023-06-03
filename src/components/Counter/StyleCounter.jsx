import styled from "styled-components";

export const CNTStyled = styled.form`
width: 30%;
padding: 5px;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 5px;
margin-left: 5%;
border: 1px solid black;

 & input{
    width: 33%;
    height: 100%;
    border: none;
    background-color: transparent;
 }

 & label{
    font-size: .8rem;
 }
    
`