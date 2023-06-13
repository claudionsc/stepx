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
        animation: fadeIn 1s normal linear;

        
      
        
        
        h1{
            text-align: left;
            word-break: break-all;
        
        }

        h1, h6{
            background-clip: text;
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent;
            background-image: -webkit-linear-gradient(202deg, rgba(6,0,109,1) 0%, rgba(9,9,121,1) 24%, rgba(244,0,255,1) 53%, rgba(0,212,255,1) 97%);
            color: black;
            animation: gradientAnimation 10s infinite linear;
            background-size: 200% 200%;

        }

        @keyframes fadeIn {
            0%{
                display: none;
                opacity: 0;
                transform: translate(-100%, -50%);
                
            }
            75%{
                display: inline-block;
                opacity: 0;
                
            }
            100%{
                opacity: 100%;
                transform: translate(0%, -50%);
            }
        }

        @keyframes gradientAnimation
        {
            0%{
                background-position: 0 0;
            }

            25%{
             
                background-position: 0 100%;
            }
            50%{
                background-position: 100% 100%;
            }
            75%{
                background-position: 100% 0;
            }

            100%{
                background-position: 0 0;
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

    @media screen and (min-width: 767px) and (max-width: 1023px){

        

        .home-title{
            width: 100vw;
            height: 20vh;
            position: absolute;
            z-index: 1;
        }

        #shoes1{
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100vw;
            height: 50vh;
            .shoe{
                
            }
        }
    }
   
`