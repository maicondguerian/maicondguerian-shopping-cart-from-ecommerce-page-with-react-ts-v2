import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    position: relative;

    padding: 2rem 0 .2rem;

    a{
        padding: .2rem .5rem;
    }
    
    ul{
        display: flex;
        gap: 2rem;
        
        >li{
            text-transform: capitalize;
            display: flex;
            align-items: center;
            justify-content: center;
            padding:  0  0 1.5rem;
            color: ${({ theme }) => theme.colors.darkGrayishBlue};
            border-bottom: solid 4px transparent;
        }

        .currentPage{
            border-bottom: solid 4px ${({ theme }) => theme.colors.orange};
            color: ${({ theme }) => theme.colors.veryDarkBlue};
        }
    }

    ul:nth-child(2){
        margin-left: 2rem;
    }

    @media screen and (max-width: 900px){
        ul:nth-child(2){
            display: none;
        }
        
    }
`;