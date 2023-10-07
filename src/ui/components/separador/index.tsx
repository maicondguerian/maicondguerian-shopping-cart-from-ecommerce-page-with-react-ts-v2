import { Styled } from "../../../styles";

type SeparatorProps = {
    width?: "30%" | "60%" | "90%" | "100%"
}

export default function Separator({ width }: SeparatorProps) {

    return (
        <Styled.CenteredSeparatorContainer>
            <Styled.Separator style={{ width: width }} />
        </Styled.CenteredSeparatorContainer>
    );

}