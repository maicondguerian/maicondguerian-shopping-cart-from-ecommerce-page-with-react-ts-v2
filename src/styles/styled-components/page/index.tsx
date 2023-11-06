import styled from "styled-components";

export const Page = styled.article`
    display: flex;
    justify-content: center;
    height: 100vh;
    gap: calc(${({ theme }) => theme.spacing.xxxl} + ${({ theme }) => theme.spacing.sm});

    @media screen and (max-width: 1111px){
        flex-direction: column;
        display: block;
    }
`;