import styled from "styled-components";
import { SeparatorProps } from "@ui/separador";
import { darken } from "polished";

type CenteredSeparatorContainerProps = Pick<SeparatorProps, "mb">
export const CenteredSeparatorContainer = styled.div<CenteredSeparatorContainerProps>`
    display: flex;
    justify-content: center;
    margin-bottom: ${props => (props.mb ? props.mb : ("4rem"))};
`;

type StyledSeparatorProps = SeparatorProps
CenteredSeparatorContainer.shouldForwardProp = (props) => props !== "mb";

export const Separator = styled.hr<StyledSeparatorProps>`
    height: 1.1px;
    background-color: ${({ theme }) => darken(.0, theme.colors.sillyGray)};
    border: transparent;
    /* opacity: .3; */
    width: ${(props) => (props.width ? props.width : "100%")};
    align-self: ${(props) => (props.align === "start" ? "flex-start" : props.align === "center" ? "center" : props.align === "end" ? "flex-end" : "center")};
    
`;
Separator.shouldForwardProp = (props) => props !== "mb";