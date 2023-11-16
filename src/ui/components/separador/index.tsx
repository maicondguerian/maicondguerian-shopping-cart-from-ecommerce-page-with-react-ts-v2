import { Styled } from "../../../styles";

export type SeparatorProps = {
    width?: "30%" | "60%" | "70%" | "90%" | "100%"
    align?: "start" | "center" | "end"
    mb?: string
    style?: Record<string, string>
}

export default function Separator({ width, mb = "0", align, style }: SeparatorProps) {

    return (
        <Styled.Separator width={width} mb={mb} align={align} style={style} />
    );
}