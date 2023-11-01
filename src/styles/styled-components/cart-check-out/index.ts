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
    height: 270px;
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
    `;

CheckoutWrapper.shouldForwardProp = (prop) => prop !== "isCheckoutCartOpen";