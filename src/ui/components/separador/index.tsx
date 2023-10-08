import { Styled } from "../../../styles";

export type SeparatorProps = {
    width?: "30%" | "60%" | "90%" | "100%"
}

export default function Separator({ width }: SeparatorProps) {

    return (
        <Styled.CenteredSeparatorContainer>
            <Styled.Separator width={width} />
        </Styled.CenteredSeparatorContainer>
    );

}