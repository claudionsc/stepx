import styled from "styled-components";

export const NavDiv = styled.nav`
    background-color: white;
    width: 100vw;
    height: 8vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
   ul{
          flex-direction: row;
      }
    @media screen and (min-width: 767px) and (max-width: 1023px){
        svg{
              font-size: 3rem !important;
          }
        a p{
              font-size: 1.5rem;
              height: 2rem;
              width: 2rem;
          }
        .none{
              display: none;
          }
        .inline{
              display: inline-block;
          }
       ul{
          background-color: white;
          flex-direction: column;
          height: 100vh;
          margin-top: 9vh;
          position: fixed;
          right: 0;
          top: 0;
          width: 50vw;

        li{
              margin: 5%;

            a{
                  font-size: 2.5rem;
              }
          }
      }
        div .hamb-menu{
              display: inline-block;
          }
        }    
`
export const NavLogo = styled.div`
    height: 100%;
    aspect-ratio: 4/3;
    margin: 0 10px;
    text-align: center;
    display: grid;
    place-items: center;
    cursor: pointer;
    img{
          aspect-ratio: 4/3;
          object-fit: contain;
          width: 100%;
      }
`
export const NavCart = styled.div`
    height: 30px;
    width: 15%;
    aspect-ratio: 4/1;
    text-align: center;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    cursor: pointer;
    .hamb-menu{
          display: none;
      }
    p{
          background-color: red;
          border-radius: 50%;
          color: white;
          font-size: .7rem;
          height: auto;
          height: 16px;
          position: absolute;
          right: 6%;
          text-decoration: none;
          top: 17%;
          width: 16px;
      }    
    svg {
          font-size: 1.5rem;
      }  
`
export const NALTStyle = styled.nav`     
        background-color: black;
        width: 100%;
        height: 50px;
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 1;        
        & a {
              align-items: center;
              cursor: pointer;
              display: flex;
              flex-direction: row;
              margin-left: 2%;
          }        
        & .navcart p{
              background-color: red;
              border-radius: 50%;
              color: white;
              font-size: .7rem;
              height: auto;
              height: 16px;
              position: absolute;
              right: 4%;
              text-decoration: none;
              top: 17%;
              width: 16px;
          }        
        & p, svg {
              color: white;
              font-size: .7rem;
              padding: 2px;
          }
        & .tamanhos{
              background-color: red;
              height: 40%;
              width: 40%;
          }
        @media screen and (min-width: 767px) and (max-width: 1023px){
                height: 5vh;

            p{
                  font-size: 2rem;
              }
            & svg{
                  font-size: 2rem;
              }
            .navcart{
                svg{
                      font-size: 3rem !important;
                      margin-right: 10vw;
                  }
                a p{
                      font-size: 1.5rem;
                      height: 2rem;
                      position: relative;
                      right: -70px;
                      top: -20px;
                      width: 2rem;
                  }
                }
            }    
`
export const NavUl = styled.ul`
    list-style: none;
    display: flex;
    justify-self: center;   
`
