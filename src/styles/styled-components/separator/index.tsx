import styled from "styled-components";
import { SeparatorProps } from "@ui/separador";

type CenteredSeparatorContainerProps = Pick<SeparatorProps, "mb">
export const CenteredSeparatorContainer = styled.div<CenteredSeparatorContainerProps>`
    display: flex;
    justify-content: center;
    margin-bottom: ${props => (props.mb ? props.mb : ("4rem"))};
`;

type StyledSeparatorProps = Pick<SeparatorProps, "width">

export const Separator = styled.hr<StyledSeparatorProps>`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grayishBlue};
    border: transparent;
    opacity: .3;
    width: ${(props) => (props.width ? props.width : "100%")};
`;
