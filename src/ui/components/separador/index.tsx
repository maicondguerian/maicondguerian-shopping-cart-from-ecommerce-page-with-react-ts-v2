import { Styled } from "../../../styles";

export default function Separator({ width }: { width?: string }) {

    return (
        <Styled.CenteredSeparatorContainer>
            <Styled.Separator style={{ width: width }} />
        </Styled.CenteredSeparatorContainer>
    );

}