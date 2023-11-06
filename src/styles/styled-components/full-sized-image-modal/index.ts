
import { AddToCartButtomProps } from "@/src/ui/components/quantity-counter-button";
import { darken } from "polished";
import styled from "styled-components";

export const Modal = styled.div`

    section:first-of-type{
        position: relative;
        button:nth-child(1){
            position: absolute;
            left: -30px;
            top: 50%;
            transform: translateY(-50%);
        }
        button:nth-child(2){
            position: absolute;
            right: -30px;
            top: 50%;
            transform: translateY(-50%);
        }
        button:nth-child(3){
            position: absolute;
            right: -30px;
            top: -50px;
            background-color: transparent;
            width: unset;
            height: unset;
            border-radius: unset;
            color: ${({ theme }) => theme.colors.white};
        }
    }
    section:last-of-type{
        display: flex;
        gap: .5rem;
        align-items: center;
        justify-content: center;

        img{
        &:hover{
            opacity: .6;
        }
        }
    }

    .currentImage{
        opacity: .6;
        border: solid 3px ${({ theme }) => darken(.1, theme.colors.orange)};
    }

    @media screen and (max-width: 1111px){
        section:first-of-type{
            img{
                width: 100%;
                height: auto;
              
            }
            button:nth-child(1){
                position: absolute;
                left: 30px !important;
                top: 50%;
                transform: translateY(-50%);
            }
            button:nth-child(2){
                position: absolute;
                right: 30px !important;
                top: 50%;
                transform: translateY(-50%);
            }

            button:nth-child(3){
                display: none;
            }
        }

        section:last-of-type{
            display: none;
        }
    }
`;

type ImageChangerButtonProps = Pick<AddToCartButtomProps, "color">
export const ImageChangerButton = styled.button<ImageChangerButtonProps>`
    width: calc(${({ theme }) => theme.spacing.xxl} - 4px);
    height: calc(${({ theme }) => theme.spacing.xxl} - 4px);
    background-color: ${({ theme }) => theme.colors.white}; 
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg:hover{
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0,.4);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1111px) {
        display: block;
        background-color: unset;
        position: unset; 
    }
`;