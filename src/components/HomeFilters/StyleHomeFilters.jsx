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

    
    svg{
        display: none;
    }

    @media screen and (min-width: 767px) and (max-width: 1023px){
        background: rgba(255, 255, 255, 0.48);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9.3px);
        -webkit-backdrop-filter: blur(9.3px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        position: fixed;
        height: 100vh;
        width: 50%;
        bottom: 0;

        p{
            font-size: 2rem;
        }

        h6{
            font-size: 1.5rem;
        }
        
        button{
            font-size: 1.5rem;
        }

        label{
            font-size: 1.5rem;
        }

        svg{
            display: inline;
            font-size: 2.5rem;
            position: absolute;
            right: 5%;
        }
        
    }
`