import { CartContextProps } from "@/src/data/contexts/cartContext";
import styled, { css, keyframes } from "styled-components";

type CheckoutWrapperProps = Pick<CartContextProps, "showCheckoutCartModal">

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
`;
const fadeOut = keyframes`
   from {
        opacity: 1;
        transform: translateY(0px);
        display: block;
    }

    to {
        opacity: 0;
        transform: translateY(-50px);
    }
`;

// const fadeOutAnimation = css`
//     animation: ${fadeOut} .1s ease-in-out;
// `;

// const fadeInAnimation = css`
//     animation: ${fadeIn} .1s ease-in-out;
// `;

const fadeAnimation = css<CheckoutWrapperProps>`
    animation: ${(props) => props.showCheckoutCartModal ? css`${fadeIn} .1s ease-in-out ` : css`${fadeOut} .1s ease-in-out `}
`;

export const CheckoutWrapper = styled.section<CheckoutWrapperProps>`
    position:  absolute;
    right: 2.5vw;
    top: 90px;
    width: 400px;
    max-width: 95vw;
    height: 240px;
    border-bottom-left-radius: ${({ theme }) => theme.spacing.sm};
    border-bottom-right-radius: ${({ theme }) => theme.spacing.sm};
    box-shadow: 0 1rem 1.625rem rgb(31 50 81 / 22%); 
    background-color: ${({ theme }) => theme.colors.primaryBg};

    @media screen and (max-width: 1111px) {
        margin-left: 3vw !important;
        li{
            line-height: unset;
        }
    }
    z-index: 100;
    


    ${fadeAnimation};

    span{
        width: 100%;
        display: block;
        padding: ${({ theme }) => theme.spacing.md};
        font-weight: 600;
    }
    
    >div:last-of-type{
        height: 180px;
        padding: 1rem;
        position: relative;
        display: flex;
        color: ${({ theme }) => theme.colors.darkGrayishBlue};
                justify-content: center;
                align-items: center;
        p{
            font-weight: 600;
        }
        
        >div:nth-child(1){
            section{
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: ${({ theme }) => theme.spacing.lg};

                button:nth-child(1){
                   background-color: transparent;
                   border-radius: unset;
                   height: 30px;
                   box-shadow: none;


                   &{
                    :hover{
                        color: unset;
                    }
                   }
                }

                ul{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    li{
                        text-transform: capitalize;
                        img{
                            border-radius: 5px;
                        }
                    }
    
                    >li:nth-child(2){
                        text-transform: lowercase;
                    }
    
                    ul{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        li{
                            
                            word-spacing: 2px;
                            strong{
                                font-size: 18px;
                                color: ${({ theme }) => theme.colors.blackWith75OpacityForLightboxBackground};
                            }
                        }
                    }
                }

                button{
                    box-shadow: unset;
                    width: 100%;
                    text-transform: capitalize;
                    box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);

                    
                }
            }
        }
    }
    `;

CheckoutWrapper.shouldForwardProp = (prop) => prop !== "isCheckoutCartOpen";