import styled from "styled-components";

export const Cart = styled.button`
position: relative;
    border: transparent;
    background-color: transparent;
    cursor: pointer;
`;

export const CartBadge = styled.span`
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
`;