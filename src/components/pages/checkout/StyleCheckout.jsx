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
              background-color: #f0efef;
              display: grid;
              height: 100vh;
              place-items: center;
              width: 100%;

        form{
                  height: 90%;
                  margin: 0 auto;
                  width: 90%;

            input{
                      border: 2px solid grey;
                      height: 3%;
                      outline: none;
                      padding: 1em;
                      width: 80%;

                :focus{
                          border-radius: 5px;
                      }
                  }
            .payment{
                      background-color: #ececec;
                      border: 2px solid #e4e3e3;
                      border-radius: 5px;
                      height: 25%;
                      margin: 20px 0;
                      padding: 0 10px;
                      width: 45%;

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
                          align-items: center;
                          background-color: white;
                          border-radius: 5px;
                          display: flex;
                          flex-direction: column;
                          height: 100%;
                          margin: 0 5px;
                          padding: 5px 0;
                          width: 33%;
                      }
                  }
            button{
                      margin: 10px 0;
                      width: 15vw;
                  }
              }
          }
                p, h4{
                          margin: 10px 0;
                      }
                section{
                    footer{
                        button{
                                   display: none;
                               }
                      }
                  }
                footer{
                          align-items: center;
                          background-color: rgb(236, 236, 236);
                          border: 2px gray solid;
                          border-radius: 5px;
                          bottom: 0;
                          display: flex;
                          height: 15vh;
                          justify-content: space-between;
                          padding: 0 5%;
                          position: fixed;
                          width: 30%;

                   
                      }
        @media screen and (min-width: 767px) and (max-width: 1023px){
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

            span form{
                      align-items: center;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;

                .payment{
                          display: flex;
                          flex-direction: column;
                          height: 100%;
                          justify-content: center;

                    input{
                              width: 100%;
                          }
                      }
                button{
                          width: 80%;
                      }
                  }

                  footer{
                          
                          width: 90%;

                   
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
              background-color: white;
              height: 20% !important;
              justify-content: flex-start;
              margin: 5% 0;
              width: 100%;

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
              justify-content: space-around;
              max-height: 15%;
              right: 0;

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