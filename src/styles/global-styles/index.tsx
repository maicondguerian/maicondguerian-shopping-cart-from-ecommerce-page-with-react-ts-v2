import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        
        ul,li{
            margin: 0;
            padding: 0;
        }
        
    }
    
    a{
        color: ${({ theme }) => theme.font.primary};
        text-decoration: none;
    }
    
    html{
        font-size: 16px;
    }
    
    body{
        color: ${({ theme }) => theme.font.primary};
        font-family: 'Kumbh Sans', sans-serif;
        background-color: ${({ theme }) => theme.colors.primaryBg};
    }

    button,
    img
    {
        cursor: pointer;
    }

    button{
        color: ${({ theme }) => theme.font.primary};
    }
`;