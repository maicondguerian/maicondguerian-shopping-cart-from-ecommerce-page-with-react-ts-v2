import styled from "styled-components";

export const Footer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    div{
        padding: 1rem 24px;
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
        }
        ul{
            display: flex;
            flex: 1 1 300px;
        }
      
    }

    @media screen and (max-width: 1111px) {
           
    }
`;