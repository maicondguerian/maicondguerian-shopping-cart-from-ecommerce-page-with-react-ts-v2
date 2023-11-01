import styled from "styled-components";

export const CheckoutWrapper = styled.section`
    position:  absolute;
    right: 20px;
    top: 100px;
    width: 400px;
    height: 270px;
    border-bottom-left-radius: ${({ theme }) => theme.spacing.sm};
    border-bottom-right-radius: ${({ theme }) => theme.spacing.sm};
    box-shadow:   0 0.625rem 1.625rem rgb(31 50 81 / 22%);
`;