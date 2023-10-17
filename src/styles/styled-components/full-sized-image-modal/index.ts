
import { AddToCartButtomProps } from "@/src/ui/components/quantity-counter-button";
import styled from "styled-components";

export const Modal = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0,.4);

    >div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        gap: .5rem;
        position: relative;

        >section{
            position: relative;
        }

        section:first-of-type{
            button:first-of-type{
                position: absolute;
                left: -30px;
                top: 50%;
                transform: translateY(-50%);
            }
            button:last-of-type{
                position: absolute;
                right: -30px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        section:last-of-type{
          display: flex;
          gap: .5rem;
        }
    }


`;

type ImageChangerButtonProps = Pick<AddToCartButtomProps, "color">
export const ImageChangerButton = styled.button<ImageChangerButtonProps>`
     width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: none;
    background-color: white; 
    border: none;
    
    svg:hover{
    color: ${({ theme }) => theme.colors.orange};
  }
`;