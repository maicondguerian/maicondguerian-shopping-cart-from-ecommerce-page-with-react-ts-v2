import styled from "styled-components";

export const Footer = styled.section`
    display: flex;
    flex-direction: column;
    
    div{
        padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg} ;
        display: flex;
        width: 100vw;
        flex-wrap: wrap;
        gap: .5rem;

        span, ul{
            display: flex;
            align-items: center;
            justify-content: center;
        }

       span:first-of-type{
            flex: 1 1 300px
        }

       span:last-of-type{
            flex: 1 1 300px;
            text-align: center;
            font-size: 14px;
            /* gap: ${({ theme }) => theme.colors.darkGrayishBlue} */
        }

        ul{
            display: flex;
            flex: 1 1 300px;
            gap: ${({ theme }) => theme.spacing.sm};
            
            svg{
                cursor: pointer;
            }
            
        }
      
    }
`;