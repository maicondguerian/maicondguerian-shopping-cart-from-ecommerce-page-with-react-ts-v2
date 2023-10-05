import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 2rem 0 .2rem ;

    >ul{
        display: flex;
        gap: 2rem;
        
        
        >li{
            text-transform: capitalize;
            display: flex;
            align-items: center;
            justify-content: center;
            padding:  0  0 1.5rem;
            color: ${({ theme }) => theme.colors.darkGrayishBlue};

            &:first-child{
                margin-right: 2.5rem;
            }
        }

        .currentPage{
            bottom: 0;
            box-shadow: 0  4px ${({ theme }) => theme.colors.orange};
            color: ${({ theme }) => theme.colors.veryDarkBlue};
        }
    }

    ul:nth-child(2){
        li:nth-child(1){ 
           margin: 1rem;
        }
        li:nth-child(2){ 
            img{
                height: 50px;
                border: solid 2px transparent;
                border-radius: 50%;
                cursor: pointer;
                &:hover{
                    border: solid 2px ${({ theme }) => theme.colors.orange};
                    transition: all .2s ease-in-out;
                }
            }
        }
    }

    a{
        padding: .2rem .5rem;
    }
    
`;