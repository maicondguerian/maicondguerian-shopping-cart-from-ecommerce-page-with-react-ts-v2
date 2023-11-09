import styled from "styled-components";
import { SeparatorProps } from "@ui/separador";

type CenteredSeparatorContainerProps = Pick<SeparatorProps, "mb">
export const CenteredSeparatorContainer = styled.div<CenteredSeparatorContainerProps>`
    display: flex;
    justify-content: center;
    margin-bottom: ${props => (props.mb ? props.mb : ("4rem"))};
`;

type StyledSeparatorProps = SeparatorProps
CenteredSeparatorContainer.shouldForwardProp = (props) => props !== "mb";

export const Separator = styled.hr<StyledSeparatorProps>`
    height: 1.2px;
    background-color: ${({ theme }) => theme.colors.grayishBlue};
    border: transparent;
    opacity: .3;
    width: ${(props) => (props.width ? props.width : "100%")};
    align-self: ${(props) => (props.align === "start" ? "flex-start" : props.align === "center" ? "center" : props.align === "end" ? "flex-end" : "center")};
    
`;
