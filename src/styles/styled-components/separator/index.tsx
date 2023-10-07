import styled from "styled-components";

export const CenteredSeparatorContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Separator = styled.hr`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grayishBlue};
    border: transparent;
    opacity: .3;
`;
