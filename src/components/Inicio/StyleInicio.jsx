import styled from "styled-components";

export const S3DStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .home-title{
          animation: fadeIn 1s normal linear;
          display: grid;
          font-size: 6rem;
          height: 80vh;
          left: 0;
          margin-left: 2%;
          overflow-wrap: break-word;
          place-items: center;
          position: absolute;
          top: 50%;
          transform: translate(0%, -50%);
          width: 20vw;

        h1{
              text-align: left;
              word-break: break-all;
          }
        h1, h6{
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: gradientAnimation 10s infinite linear;
              background-clip: text;
              background-image: -webkit-linear-gradient(202deg, rgba(6,0,109,1) 0%, rgba(9,9,121,1) 24%, rgba(244,0,255,1) 53%, rgba(0,212,255,1) 97%);
              background-size: 200% 200%;
              color: black;
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
            color: white;
            height: 90%;
            left: 0%;
            position: absolute;
            top: 0%;
            width: 100%;

            & .shoe{
            width: 90vw;
            height: 90vh;
           

            }
        }
    @media screen and (min-width: 767px) and (max-width: 1023px){
        .home-title{
              height: 20vh;
              position: absolute;
              width: 100vw;
              z-index: 1;
          }
        #shoes1{
              height: 100vh;
              
              width: 100vw;
              

            .shoe{
                width: 100vw;
                height: 100vh;
                
                }
          }
        }   
`