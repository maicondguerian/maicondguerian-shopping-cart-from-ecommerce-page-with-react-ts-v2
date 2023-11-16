import { darken } from "polished";
import styled from "styled-components";

export const ProductWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
    width: 490px;

    >span:first-of-type{
        text-transform: uppercase;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.orange}
    }
    
    h1{ 
        font-size: 50px;
        text-transform: capitalize;
        color: ${({ theme }) => theme.font.primary};
    }
    
    >p{
        color: ${({ theme }) => theme.colors.darkGrayishBlue};
    }

    >div:first-of-type{
        display: flex;
        gap: ${({ theme }) => theme.spacing.lg};
        align-items: center;

        div:first-of-type{
            position: relative;
            display: flex;
            
            span:nth-child(1){
                font-size: 20px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: -.4rem;
            }
            span:nth-child(2){
                font-size: 42px;
            }
            span:last-of-type{
                position: absolute;
                right: -1rem;
                top: .4rem;
            }
        }

        p:last-of-type{
        /* background-color: ${({ theme }) => theme.colors.lightGrayishBlue}; */
          padding: .2rem .5rem;
          /* color: ${({ theme }) => theme.colors.orange}; */
          color: #CC0C39;
          font-weight: 500;
          border-radius: 5px;
          font-size: 26px;
          font-weight: 200;
        }
    }

    >span:last-of-type{
        font-weight: 500;
        text-decoration: line-through;
        color: ${({ theme }) => darken(.1, theme.colors.grayishBlue)};
        margin-top: -.5rem;
    }



    >ul{
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing.lg};
        
        li:first-of-type{
            display: flex;
            flex-grow: 1;
            
            >div{
                flex: 1 1 150px;
            }
        }
        li:last-of-type{
           display: flex;
           flex: 1 1 350px;
           
           button{
               width: 100%;
           }
        }
    }
    

    @media screen and (max-width: 1111px){
        width: 100vw;
        padding: ${({ theme }) => theme.spacing.lg};
        
        h1{ 
            font-size: 25px;
            text-transform: capitalize;
        }
        
        >ul{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: ${({ theme }) => theme.spacing.lg};
        }
    }
`;

