import styled from "styled-components";

export const WStyle = styled.footer`
    width: 60vw;
    height: 15vh;
    position: fixed;
    bottom: 0;
    left: 50%;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9.5px );
    -webkit-backdrop-filter: blur( 9.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transform: translate(-50%, 0%);
    text-align: center;
    animation: animation 10s normal ease-in-out;
   

    h3, p{
        font-size: .7rem;
    }

    .contatos{
        display: flex;
        width: 100%;
        margin: 0 auto;
        justify-content: center;
        
        svg{
            margin: 0 20px;

        }
    }
    .close{
        position: absolute;
        top: 0;
        right: 0;
        padding: 1%;
        cursor: pointer;
    }

    @keyframes animation {
        0% {
            display: none;
            opacity: 0;
        }

        25%{
            display: inline-block;
            opacity: 100%;
        }

        100%{
            display: inline-block;
            opacity: 100%;
        }
    }
`