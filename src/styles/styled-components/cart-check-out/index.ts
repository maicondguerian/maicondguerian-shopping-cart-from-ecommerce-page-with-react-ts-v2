import styled, { css, keyframes } from "styled-components";

type CheckoutWrapperProps = {
    isCheckoutCartOpen: boolean
}

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
        display: none;
    }
`;

const fadeOutAnimation = css`
    animation: ${fadeOut} .1s ease-in-out;
`;

const fadeInAnimation = css`
    animation: ${fadeIn} .1s ease-in-out;
`;
export const CheckoutWrapper = styled.section<CheckoutWrapperProps>`
    position:  absolute;
    right: 60px;
    top: 90px;
    width: 400px;
    height: 250px;
    border-bottom-left-radius: ${({ theme }) => theme.spacing.sm};
    border-bottom-right-radius: ${({ theme }) => theme.spacing.sm};
    box-shadow: 0 1rem 1.625rem rgb(31 50 81 / 22%); 
    background-color: ${({ theme }) => theme.colors.primaryBg};

    &.toggleHideCheckoutCart{
        ${fadeOutAnimation};
        display: none;
       
    }
    
    &.toggleOpenCheckoutCart{
        ${fadeInAnimation};
        display: block;
    }

    span{
        width: 100%;
        display: block;
        padding: ${({ theme }) => theme.spacing.md};
    }
    
    >div:last-of-type{
        height: 200px;
        padding: 1rem 1rem 0;
        position: relative;
        p{
            font-weight: 600;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        >div:nth-child(1){
            section{
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: ${({ theme }) => theme.spacing.xl};

                ul{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    li{
                        text-transform: capitalize;
                    }
    
                    >li:nth-child(2){
                        text-transform: lowercase;
                    }
    
                    ul{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        li{
                            line-height: .6;
                        }
                    }
                }

                button{
                    box-shadow: unset;
                    width: 100%;
                    text-transform: capitalize;
                }
            }
        }
    }
    `;

CheckoutWrapper.shouldForwardProp = (prop) => prop !== "isCheckoutCartOpen";