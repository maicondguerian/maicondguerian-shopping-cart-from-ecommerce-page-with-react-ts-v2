import { AccountMenuProps } from "@/src/ui/components/profile-menu";
import styled, { css, keyframes } from "styled-components";

type WrapperProps = Pick<AccountMenuProps, "isOpen">

const slideIn = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 1.;
  }
  to {
    transform: translateY(0);
    display: block;
    opacity: 1;
  }
`;
const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50px);
    display: none;
    opacity: .1;
  }
`;
const slideInAnimation = css<WrapperProps>`
  animation:${(props) => props.isOpen ? css`${slideIn} .2s ease forwards` : css`${slideOut} .1s ease forwards`};
`;

export const Wrapper = styled.nav<WrapperProps>`
    width: auto;
    border: 1px solid rgb(219, 229, 230);
    border-radius: .3rem;
    position: absolute;
    top: 7vh;
    /* right: 0; */
    white-space: nowrap;
    z-index: 1000;
    background-color: ${({ theme }) => theme.colors.primaryBg};

    ${slideInAnimation};
    
    button{
      color: inherit;
      gap: .5rem;
      font-weight: 600;
      font-family: inherit;
      font-size: 12px;
      text-transform: uppercase;
    }

    li{
        padding: .9rem 1.5rem .9rem;
        display: flex;
        gap: .5rem;
        align-items: center;
        
        
    }
    li:hover{
        transition: .1s ease-out;
        background-color: ${({ theme }) => theme.colors.lightGrayishBlue}
    }

    li:last-of-type{
      button{
        color: red;
        font-style: italic;
      }
    }
`;