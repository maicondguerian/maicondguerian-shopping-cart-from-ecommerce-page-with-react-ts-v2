import { Styled } from "../../../styles";
import Header from "../header";

interface ContainerProps {
    children?: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
    return (
        <Styled.Container>
            <Header />
            {children}
        </Styled.Container>
    );
}