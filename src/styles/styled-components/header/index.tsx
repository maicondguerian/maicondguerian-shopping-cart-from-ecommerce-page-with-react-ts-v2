import styled from 'styled-components'

export const Navbar = styled.div`
    display: flex;
    justify-content: space-around;

    header{
        display: flex;
        padding: 2rem 0 0;


        
        a{
            padding: .2rem .5rem;
        }
        
        ul{
            display: flex;
            gap: 2rem;

            li{
                text-transform: capitalize;
                display: flex;
                align-items: center;
                justify-content: center;
                padding:  0  0 1.5rem;
                color: ${({ theme }) => theme.colors.darkGrayishBlue};

            }

        .currentPage{
            border-bottom: solid 4px ${({ theme }) => theme.colors.orange};
            color: ${({ theme }) => theme.colors.veryDarkBlue};
        }
    }

    ul:nth-child(1){
        gap: 1rem;

        li:first-child{
            position: relative;
            width: 40px;
            height: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            

            &::before{
                content: '';
                position: absolute;
                width: 100%;
                height: 3px;
                background-color: #000;
                padding: 0;
                box-shadow: 0 -12px #000, 0 12px #000;
            }

            @media screen and (min-width: 900px){
            display: none;   
            }
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
}

ul:nth-child(2){
        display: flex;
        align-items: center;

        gap: 2rem;
        li:nth-child(2){ 
            img{
                height: 50px;
                border: solid 2px transparent;
                border-radius: 50%;
                cursor: pointer;
                
                &:hover{
                    border: solid 2px  ${({ theme }) => theme.colors.orange};
                    transition: all .2s ease-in-out;
                }
            }
        }
    }
    `;
