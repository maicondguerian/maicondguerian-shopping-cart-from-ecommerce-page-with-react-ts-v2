import styled from "styled-components";

type CustomButtomProps = {
    icon?: React.ElementType
    name?: string
    size?: number
    color?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>
export default function CustomButtom({
    icon: Icon,
    name,
    size,
    color,
    onClick,
}: CustomButtomProps) {
    return (
        <CustomBtn onClick={onClick}>
            {Icon ? <Icon color={color} size={size} /> : <></>}
            {name}
        </CustomBtn>
    );
}

const CustomBtn = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
`;