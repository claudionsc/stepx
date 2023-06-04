import styled from "styled-components";

export const CWStyle = styled.main`
background-color: cornsilk;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 60%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    & section {
        background-color: cyan;
        width: 100%;
        height: 50% !important;
        min-height: 20vh;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;

        img{
            width: 60%;
        }

        svg{
            cursor: pointer;
        }
    }
`

export const CartWideTitles = styled.span`
    width: 100%;
    height: auto;
    background-color: blue;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`