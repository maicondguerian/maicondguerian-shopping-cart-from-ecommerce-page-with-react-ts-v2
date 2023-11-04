import { lighten, darken } from "polished";
import styled from "styled-components";
import { AddToCartButtomProps } from "@ui/quantity-counter-button";

type AddToCartButtonProps = Pick<AddToCartButtomProps, "color">
export const AddTocartButton = styled.button<AddToCartButtonProps>`
  background-color: ${({ theme }) => theme.colors.orange};
  width: calc(${({ theme }) => theme.spacing.xxxl} * 2);
  height:calc( ${({ theme }) => theme.spacing.lg} +  ${({ theme }) => theme.spacing.lg});
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${props => (props.color ? props.color : props.theme.colors.white)};
  box-shadow: 0px 20px  30px  ${({ theme }) => darken(.1, theme.colors.PaleOrange)};
  &:hover{
    background-color: ${({ theme }) => lighten(.2, theme.colors.orange)};
  }
`;

