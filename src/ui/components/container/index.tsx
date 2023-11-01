import { Styled } from "@styles/";

type ContainerProps = {
    children?: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>

export default function Container({ children, onClick, ...rest }: ContainerProps) {
    return (
        <Styled.Container onClick={onClick} {...rest}>
            {children}
        </Styled.Container>
    );
}