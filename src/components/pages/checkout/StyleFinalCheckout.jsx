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
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2rem;
        margin: 5px;
        cursor: pointer;

    }


    section{
        height: 10vh !important;
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        
    }

    .data-titles{
            background-color: #e0e0e0;
            width: 50vw;
            padding: 2%;
            
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
            height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            top: 5%;

            h6, p{
                font-size: 1.5rem;
            }
        }
`