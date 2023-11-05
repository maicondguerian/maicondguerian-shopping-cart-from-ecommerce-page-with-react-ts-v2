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
    }

    div{
        display: flex;
        gap: 1rem;
        align-items: center;

        p:first-of-type{
            font-size: 24px;
            font-weight: 700;
        }
        p:last-of-type{
          background-color: ${({ theme }) => theme.colors.PaleOrange};
          padding: .2rem .5rem;
          color: ${({ theme }) => theme.colors.orange};
          font-size: 15px;
          font-weight: 700;
          border-radius: 5px;
        }
    }

    >span:last-of-type{
        font-weight: 700;
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.grayishBlue};
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
    
    >p:first-of-type{
        color: ${({ theme }) => theme.colors.darkGrayishBlue};
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

