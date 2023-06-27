import styled from "styled-components";

export const S3DStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .home-title{
          display: grid;
          font-size: 6rem;
          height: 65vh;
          left: 50%;
          margin-left: 2%;
          position: absolute;
          top: 60%;
          transform: translate(-50%, -60%);
          width: 35vw;
          padding: 5%;
      

        h1{
              
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: gradientAnimation 10s infinite linear;
              background-clip: text;
              background-image: -webkit-linear-gradient(202deg, rgba(6,0,109,1) 0%, rgba(9,9,121,1) 24%, rgba(244,0,255,1) 53%, rgba(0,212,255,1) 97%);
              background-size: 200% 200%;
              color: black;
              text-align: left;
          }
        }
    .home-title-hover{
          display: grid;
          font-size: 6rem;
          height: 65vh;
          left: 50%;
          margin-left: 2%;
          position: absolute;
          top: 60%;
          transform: translate(-50%, -60%);
          width: 35vw;
          padding: 5%;
          z-index: 1;
      

        h1{
            text-align: left;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            color: black;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #ffffff;
        }
          p{
            font-size: 5rem;
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
        .home-title, .home-title-hover{
              height: 30vh;
              position: absolute;
              width: 80vw;
              margin-left: 0;
              text-align: center;
              font-size: 9rem;

              h1{
                text-align: center;
              }
          }

          .home-title-hover{
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