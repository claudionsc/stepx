import styled from "styled-components";

export const HFStyle = styled.aside`
    width: 30%;
    
    position: -webkit-sticky;
    position: sticky;
    top: 10%;
    left: 0;

    h6{
        margin: 10px;
        cursor: pointer;
    }
    
   
    & p{
        padding: 10px;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        width: 90%;
    }

    & form{
        width: 70%;
        margin: 5% auto;

    }
    & #preco {

        .opcao{
        }

        input{
            scale: 150%;
            margin: 10px 10px 0 10px;
            accent-color: white;

        }
    }
`