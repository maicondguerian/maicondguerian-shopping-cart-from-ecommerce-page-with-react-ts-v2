import styled, { keyframes } from "styled-components";
import { ShoppingCartProps } from "@/src/ui/components/cart-buttom";

export const Cart = styled.button`
    position: relative;
    border: transparent;
    background-color: transparent;
    cursor: pointer;
`;

const jump = keyframes`
    from {
        transform: translateY(0px);
        border-radius: 50%;
    }

    to {
        transform: translateY(-10px);
    }
`;

type CartBadgeProps = Pick<ShoppingCartProps, "isCartEmpty">

export const CartBadge = styled.span<CartBadgeProps>`
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 15px;
    display: flex;
    border-radius: 40%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${(props) => props.theme.colors.orange};
    position: absolute;
    top: -5px;
    right: -7px;
    animation: ${jump} 0.5s ease-in-out;
`;
CartBadge.shouldForwardProp = (prop) => prop !== "isCartEmpty";

