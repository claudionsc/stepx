import styled from "styled-components";

export const CKTStyle = styled.section`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;

    span{
        width: 100%;
        height: 90vh;
        background-color: yellow;

        form{
            width: 90%;
            height: 90%;
            margin: 0 auto;
            background-color: orangered;

            input{
                width: 80%;
                height: 3%;

                border: 2px solid grey;
                outline: none;
                padding: 1em;

                :focus{
                    border-radius: 10px;
                    border: 4px solid grey;
                }
            }

            .payment{
                width: 45%;
                height: 30%;
                border: 2px solid gray;
                border-radius: 5px;
                margin: 5px 0;

                .inputs{
                    display: flex;
                    .opcao{

                        input{
                          accent-color: cadetblue;
                          border-color: cadetblue;
                          color: cadetblue;
                          opacity: 0;

                          :checked{
                            opacity: 1;
                            
                          }

                         
                           
                        }

                        svg{
                            font-size: 2rem;
                        }

                       
                    }
                    
                }
               

                .opcao{
                    height: 100%;
                    width: 33%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    /* justify-content: center; */
                    background-color: white;
                    border-radius: 5px;
                    padding: 5px 0;
                    margin: 0 5px;
        
                }
            }
            button{
                width: 15vw;
                margin: 10px 0;
                
            }
            
        }
    }
                p, h4{
                    /* padding: 5px 0; */
                    margin: 10px 0;
                }
    
`

export const CIStyled = styled.article`
    width: 70%;
    height: auto ;
    background-color: orange;
    border: 2px solid grey;
    border-radius: 5px;
    padding: 5%;

    section{
        width: 100%;
        height: 20% !important;
        margin: 5% 0;
        justify-content: space-between;
        background-color: cyan;
        img{
            max-width: 25%;
        }

        h6 {
            font-size: 1rem;
        }

        .price-parcel{
            background-color: red;
        }
    }

    span{
        max-height: 15%;
        width: 50%;
        right: 0;
        justify-content: space-around;

        button{
            display: none;
        }
    }
`