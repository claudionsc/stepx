import styled from "styled-components";

export const S3DStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .home-title{
          display: grid;
          font-size: 6rem;
          height: 65vh;
          left: 0;
          margin-left: 2%;
          position: absolute;
          top: 60%;
          transform: translate(0%, -60%);
          width: 35vw;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(7.3px);
          -webkit-backdrop-filter: blur(7.3px);
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
        .home-title{
              height: 30vh;
              position: absolute;
              width: 80vw;
              z-index: 1;
              margin-left: 0;
              margin: 0 5%;
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