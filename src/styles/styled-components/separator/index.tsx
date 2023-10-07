import styled from 'styled-components';

export const Separator = styled.hr`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grayishBlue};
    border: transparent;
    opacity: .3;
`;
