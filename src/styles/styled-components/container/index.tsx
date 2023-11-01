import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primaryBg};
`;