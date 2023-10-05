import { Styled } from "../../../styles";

interface SeparatorProps {
    width?: string;
}
export default function Separator({ width }: SeparatorProps) {

    const customStyle = {
        display: 'flex',
        justifyContent: 'center',
    }
    return (
        <div style={customStyle}>
            <Styled.Separator style={{ width: width }}></Styled.Separator>
        </div>
    )
}