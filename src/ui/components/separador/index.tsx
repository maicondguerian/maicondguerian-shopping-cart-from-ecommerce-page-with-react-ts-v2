import { Styled } from "../../../styles";

export type SeparatorProps = {
    width?: "30%" | "60%" | "70%" | "90%" | "100%"
    mb?: string
}

export default function Separator({ width, mb }: SeparatorProps) {

    return (
        <Styled.CenteredSeparatorContainer mb={mb}>
            <Styled.Separator width={width} />
        </Styled.CenteredSeparatorContainer>
    );

}