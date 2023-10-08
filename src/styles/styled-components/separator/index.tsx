import styled from "styled-components";
import { SeparatorProps } from "../../../ui/components/separador";

export const CenteredSeparatorContainer = styled.div`
    display: flex;
    justify-content: center;
`;

type StyledSeparatorProps = Pick<SeparatorProps, "width">

export const Separator = styled.hr<StyledSeparatorProps>`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grayishBlue};
    border: transparent;
    opacity: .3;
    width: ${(props) => (props.width ? props.width : "100%")};

`;
