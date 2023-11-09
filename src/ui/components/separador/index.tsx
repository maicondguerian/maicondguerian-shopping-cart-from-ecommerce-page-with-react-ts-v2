import { Styled } from "../../../styles";

export type SeparatorProps = {
    width?: "30%" | "60%" | "70%" | "90%" | "100%"
    align?: "start" | "center" | "end"
    mb?: string
}

export default function Separator({ width, mb = "0", align }: SeparatorProps) {

    return (
        <Styled.Separator width={width} mb={mb} align={align} />
    );
}