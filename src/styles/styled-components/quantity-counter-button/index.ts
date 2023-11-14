import styled from "styled-components";

export const QuantityButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: calc(${({ theme }) => theme.spacing.xxxl} + ${({ theme }) => theme.spacing.xl});
height:calc( ${({ theme }) => theme.spacing.lg} +  ${({ theme }) => theme.spacing.lg});
background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
border-radius: 5px;

button{
    background-color: transparent;
    border: none;
    height: 100%; 
    width: ${({ theme }) => theme.spacing.xxl};
    color: ${({ theme }) => theme.colors.orange};
    box-shadow:  none;
    
    &:hover{
        background-color: unset;
    }
}

span{
    font-weight: 600;
    font-size: 19px;
    color: ${({ theme }) => theme.font.primary} !important;
}
`;