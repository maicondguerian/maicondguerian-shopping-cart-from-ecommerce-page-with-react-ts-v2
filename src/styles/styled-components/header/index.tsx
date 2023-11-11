import styled, { css, keyframes } from "styled-components";

const rotateUp = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(180deg);
    }
`;
const rotateDown = keyframes`
    from {
        transform: rotate(180deg);
    }
    to{
        transform: rotate(0deg);
    }
`;

const rotateDrop = css<NavbarProps>`
  animation: ${props => (props.settings ? css`${rotateUp} .2s ease-in-out forwards` : css`${rotateDown} .2s ease-in-out forwards`)};
  `;

type NavbarProps = {
    settings: boolean
}
export const Navbar = styled.div<NavbarProps>`
    display: flex;
    justify-content: space-around;
    width: 100%;

    header{
        display: flex;
        padding: ${({ theme }) => theme.spacing.xl} 0 0;

        a{
            padding: .2rem .5rem;
        }
        
        ul:last-child{
            li::after{
                content: '';
                display: block;
                position: absolute;
                top: 50px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                transition: width .3s ease;
                height: 4px;
                background-color: ${({ theme }) => theme.colors.orange};
            }
            li:hover::after{
                width: 100%;
            }

            .currentPage{
                border-bottom: solid 4px ${({ theme }) => theme.colors.orange};
                color: ${({ theme }) => theme.colors.veryDarkBlue};
            }
        }
        ul{
            display: flex;
            gap: ${({ theme }) => theme.spacing.xl};

            li{
                text-transform: capitalize;
                display: flex;
                align-items: center;
                justify-content: center;
                padding:  0  0 calc(${({ theme }) => theme.spacing.md} + .5rem);
                color: ${({ theme }) => theme.colors.darkGrayishBlue};
                position: relative;
                cursor: pointer;
            }

  
        }

        ul:nth-child(1){
            li:first-child{
                position: relative;
                width: 30px;
                height: 30px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
                z-index: 1001;

                &::before{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 3px;
                    background-color: ${({ theme }) => theme.colors.blackWith75OpacityForLightboxBackground};
                    padding: 0;
                    box-shadow: 0 -10px ${({ theme }) => theme.colors.blackWith75OpacityForLightboxBackground},
                     0 10px ${({ theme }) => theme.colors.blackWith75OpacityForLightboxBackground};
                }

            }
            @media screen and (min-width: 1111px){
                   li:first-child{
                    display: none;
                   }   
                }
            
        }
        
        ul:nth-child(2){
            margin-left: ${({ theme }) => theme.spacing.xl}
        }
        
        @media screen and (max-width: 1111px){
            ul{
                gap: ${({ theme }) => theme.spacing.md};
            }
            ul:nth-child(2){
                display: none;
            }
            
        }
    }

    >ul:last-of-type{
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing.lg};
        
        >li:nth-child(2){ 
            display: flex;
            align-items: center;
            position: relative;
            gap: ${({ theme }) => theme.spacing.xs};

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
            li:nth-child(2){
            >button{
               ${rotateDrop}
            }
        }
    }
    .overlay{
        background-color: rgba(0,0,0,.4);
        position: absolute;
        z-index: 1001;
    }
`;

export const SideMenu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 55vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    padding: 100px 0 0 1rem;
    box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);

    ul{
        li{
            padding: .5rem 0 ;
            width: 80px;
        }
    }
    .currentPage{
        border-bottom: solid 4px ${({ theme }) => theme.colors.orange};
        color: ${({ theme }) => theme.colors.veryDarkBlue};
        
    }


    @media screen and (max-width: 1111px) {
        /* display: none; */
    }
`;