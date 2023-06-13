import styled from "styled-components";

export const CKTStyle = styled.section`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;

    button{
        :disabled{
        cursor: not-allowed;

        }
    }

    span{
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
        background-color: #f0efef;


        form{
            width: 90%;
            height: 90%;
            margin: 0 auto;

            input{
                width: 80%;
                height: 3%;
                border: 2px solid grey;
                outline: none;
                padding: 1em;

                :focus{
                    border-radius: 5px;
                    
                }
            }

            .payment{
                width: 45%;
                height: 25%;
                border: 2px solid #e4e3e3;
                border-radius: 5px;
                margin: 20px 0;
                background-color: #ececec;
                padding: 0 10px;

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
                    margin: 10px 0;
                }

        @media screen and (min-width: 767px) and (max-width: 1023px){

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            span form{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                
                .payment{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 100%;
                    input{
                        width: 100%;
                    }
                }


                button{
                    width: 80%;
                }
            }

            
        }

`

export const CIStyled = styled.article`
    width: 70%;
    height: 50vh;
    background-color: #ececec;
    border: 2px solid grey;
    border-radius: 5px;
    padding: 5%;
    overflow-y: scroll;

    section{
        width: 100%;
        height: 20% !important;
        margin: 5% 0;
        justify-content: flex-start;
        background-color: white;
        img{
            max-width: 5vw;
        }

        h6 {
            font-size: .8rem;
        }

        .price-parcel{
           display: none;
        }
    }

    span{
        max-height: 15%;
        right: 0;
        justify-content: space-around;

        button{
            display: none;
        }
    }

    @media screen and (min-width: 767px) and (max-width: 1023px){

        overflow-y: scroll;

        section{
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            img{
                max-width: 30%;
            }

            h6, p{
                font-size: 1.5rem;
            }
        }
    }
`