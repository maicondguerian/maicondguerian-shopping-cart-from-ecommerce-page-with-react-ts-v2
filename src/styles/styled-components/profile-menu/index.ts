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
    border: 1.3px solid  ${({ theme }) => theme.colors.sillyGray};
    border-radius: .3rem;
    position: absolute;
    top: 7vh;
    white-space: nowrap;
    z-index: 1000;
    background-color: ${({ theme }) => theme.colors.primaryBg};

    ${slideInAnimation};

    /* display: ${(props) => props.isOpen ? "block" : "none"}; */
    
    button{
      color: inherit;
      gap: .5rem;
      font-weight: 600;
      font-family: inherit;
      font-size: 12px;
      text-transform: uppercase;
      padding: .9rem;
      width: 100%;

    }

    li{
      /* padding: .9rem; */
      display: flex;
      gap: .5rem;
      align-items: center;
      justify-content: center;
    }

    li:hover{
      transition: .1s ease-out;
      background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
    }

  >ul:first-of-type{
    >li:last-of-type{
      >button{
        color: red;
        font-style: italic;
      }
    }
    ul:last-of-type{
      position: absolute;
      right: -111px;
      top: 104px;
      border: 1.3px solid  ${({ theme }) => theme.colors.sillyGray};
      border-radius: .3rem;
      background-color: ${({ theme }) => theme.colors.primaryBg};

      &::before{
        content: '';
        position: absolute;
        height: 50px;
        background-color: transparent;
        width: 4px;
        left: -4px;
      }
    }
  }
`;
Wrapper.shouldForwardProp = (props) => props !== "isOpen";