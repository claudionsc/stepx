import styled from "styled-components";

export const NavDiv = styled.div`
    background-color: white;
    width: 100vw;
    height: 8vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

   ul{
        flex-direction: row;
    }
   

    @media screen and (min-width: 767px) and (max-width: 1023px){

        svg{
            font-size: 5rem;
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
        bottom: 0;
        right: 0;
        height: 92vh;
        width: 50vw;

        li{
            margin: 5%;
            a{
                font-size: 350%;
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
    height: 40px;
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
        position: relative;
        right: -50%;
        top: 10px;
        border-radius: 50%;
        background-color: #ff0000;
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
    
`
export const NavUl = styled.ul`

    list-style: none;
    display: flex;
    justify-self: center;

   
`

