import styled from "styled-components";

export const MVStyled = styled.span`
    background-color: red;
    width: 300px;
    height: 350px;
    cursor: pointer;

    ::before {
        content: 'Ver mais';
        background-color: black;
        color: white;
        padding: 10px 40px;
        border-radius: 118px 117px 117px 117px;
-webkit-border-radius: 118px 117px 117px 117px;
-moz-border-radius: 118px 117px 117px 117px;
        height: 20px;
        font-size: .8rem;
        position: relative;
        top: 80%;
        left: 10%;
       
    }
`