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
        flex-direction: column;
        background-color: white;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 50vw;
        margin-top: 9vh;

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
        width: 100%;
        aspect-ratio: 4/3;
        object-fit: contain;

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
        height: auto;
        position: absolute;
        right: 6%;
        top: 17%;
        border-radius: 50%;
        background-color: red;
        color: white;
        font-size: .7rem;
        width: 16px;
        height: 16px;
        text-decoration: none;
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
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 2%;
            cursor: pointer;
           
        }

        
        & .navcart p{
            height: auto;
            position: absolute;
            right: 4%;
            top: 17%;
            border-radius: 50%;
            background-color: red;
            color: white;
            font-size: .7rem;
            width: 16px;
            height: 16px;
            text-decoration: none;
        }
        
        & p, svg {
            color: white;
            font-size: .7rem;
            padding: 2px;
        }

        & .tamanhos{
            background-color: red;
            width: 40%;
            height: 40%;
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
                    position: relative;
                    top: -20px;
                    right: -70px;
                    font-size: 1.5rem;
                    width: 2rem;
                    height: 2rem;
                }
            }
        }
    
`
export const NavUl = styled.ul`

    list-style: none;
    display: flex;
    justify-self: center;

   
`

