import styled from "styled-components";

export const FCKStyle = styled.section`
    width: 90%;
    max-height: 80%;
    position: fixed;
    top: 15%;
    left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    background-color: whitesmoke;
    overflow-y: scroll;
    border-radius: 10px;
    svg{
          cursor: pointer;
          font-size: 2rem;
          margin: 5px;
          position: absolute;
          right: 0;
          top: 0;
      }
    section{
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          height: 10vh !important;
          width: 50vw;
      }
    .data-titles{
              background-color: #e0e0e0;
              padding: 2%;
              width: 50vw;
          }
        .data{
              width: 50vw;

             p{
                  border: 1px dashed black;

                 :not(:first-child){
                      margin-top: 1%;
                  }
              }
          }
        @media screen and (min-width: 767px) and (max-width: 1023px){
              display: flex;
              flex-direction: column;
              height: 80vh;
              justify-content: center;
              top: 5%;

            h6, p{
                  font-size: 1.5rem;
              }
          }
`