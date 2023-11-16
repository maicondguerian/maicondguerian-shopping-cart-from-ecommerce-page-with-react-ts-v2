import { CartContextProps } from "@/src/data/contexts/cartContext";
import styled, { css, keyframes } from "styled-components";

type CheckoutWrapperProps = Pick<CartContextProps, "showCheckoutCartModal">

const fadeIn = keyframes`
    from {
        transform: translateY(-50px);
        opacity: .1;
    }

    to {
        transform: translateY(0px);
        display: block;
        opacity: 1;
    }
`;
const fadeOut = keyframes`
   from {
        opacity: 1;
        transform: translateY(0px);
    }

    to {
        transform: translateY(-50px);
        display: none;
        opacity: .1;
    }
`;

const fadeAnimation = css<CheckoutWrapperProps>`
    animation: ${(props) => props.showCheckoutCartModal ? css`${fadeIn} .1s ease-in-out forwards` : css`${fadeOut} .1s ease-in-out forwards`};
`;

export const CheckoutWrapper = styled.section<CheckoutWrapperProps>`
    position:  absolute;
    right: 2.5vw;
    top: 90px;
    width: 400px;
    max-width: 95vw;
    border-bottom-left-radius: ${({ theme }) => theme.spacing.sm};
    border-bottom-right-radius: ${({ theme }) => theme.spacing.sm};
    box-shadow: 0 1rem 1.625rem rgb(31 50 81 / 22%); 
    background-color: ${({ theme }) => theme.colors.primaryBg};
    border: solid 1px ${({ theme }) => theme.colors.sillyGray};
    /* display: ${(props) => props.showCheckoutCartModal ? "block" : "none"}; */
    z-index: 100;

    
    ${fadeAnimation};

    span{
        width: 100%;
        display: block;
        padding: ${({ theme }) => theme.spacing.md};
        font-weight: 600;
    }
    
    >div:last-of-type{
        height: 190px;
        padding: .5rem;
        overflow: auto;

        p{
            font-weight: 600;
            display: grid;
            place-items: center;
            height: 100%;
        }
    
        >section{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            gap: ${({ theme }) => theme.spacing.sm};
            height: 100%;

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

            >ul{
                &:hover{
                    transition: .1s ease-out;
                    background-color: ${({ theme }) => theme.colors.lightGrayishBlue}; 
                    border-radius: .2rem;
                }
            }
            ul{
                display: flex;
                align-items: center;
                gap: 0 1rem;
                height: 70px;
                width: 100%;
                position: relative;

                li{
                    text-transform: capitalize;
                    img{
                        border-radius: .1rem;
                        height: 100%;
                        margin-top: 4px;
                        overflow: hidden;
                    }
                }

                >li:nth-child(2){
                    text-transform: lowercase;
                }

                ul{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;

                    li{
                        word-spacing: 2px;

                        strong{
                            font-style: oblique;
                            color: ${({ theme }) => theme.font.primary};
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

            section:nth-child(2){
                display: flex;
                justify-content: space-between;
                width: 100%;
                margin-top: .5rem;
                
                div:nth-child(2){
                    font-weight: 600;
                    font-size: 17px;
                }
            }

        
        }
        
    }

    @media screen and (max-width: 1111px) {
        box-shadow: none;
        /* margin-left: 3vw !important; */
        li{
            line-height: unset;
        }
    }
`;

CheckoutWrapper.shouldForwardProp = (prop) => prop !== "showCheckoutCartModal";