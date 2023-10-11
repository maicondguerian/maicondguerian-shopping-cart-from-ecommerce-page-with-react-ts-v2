import styled from "styled-components";

export const ProductWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};

    >span{
        text-transform: uppercase;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.orange}
    }
    
    h1{ 
        font-size: 50px;
        text-transform: capitalize;
    }

    >ul:first-of-type{
        background-color: yellow;
    }
    >ul:last-of-type{
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing.md};
    }
`;