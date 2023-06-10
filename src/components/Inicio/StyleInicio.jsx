import styled from "styled-components";

export const S3DStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .home-title{
        height: 80vh;
        width: 20vw;
        display: grid;
        place-items: center;
        font-size: 6rem;
        overflow-wrap: break-word;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0%, -50%);
        margin-left: 2%;
        animation: fadeIn 2s normal ease-in-out;

        
      
        
        
        h1{
            text-align: left;
            word-break: break-all;
        
        }

        h1, h6{
            animation: gradientAnimation 10s infinite ease-in-out;
        }

        @keyframes fadeIn {
            0%{
                display: none;
                opacity: 0;
                transform: translate(-100%, -50%);
                
            }
            25%{
                display: inline-block;
                opacity: 0;
                transform: translate(-50%, -50%);
                
            }
            100%{
                opacity: 100%;
                transform: translate(0%, -50%);
            }
        }

        @keyframes gradientAnimation
        {
            from{
                background-clip: text;
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent;
        background-image: -webkit-linear-gradient(202deg, rgba(6,0,109,1) 0%, rgba(9,9,121,1) 24%, rgba(244,0,255,1) 53%, rgba(0,212,255,1) 97%);
        color: black;
            }

            to{
        background: linear-gradient(43deg, rgba(6,0,109,1) 0%, rgba(9,9,121,1) 24%, rgba(244,0,255,1) 53%, rgba(0,212,255,1) 97%);
        background-clip: text;
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent;
        color: black;
            }
        }
       
    }

    & #shoes1{

        height: 90%;
        width: 100%;
        color: white;
        position: absolute;
        left: 0%;
        top: 0%;

    }
   
`