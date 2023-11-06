import { useMediaQueries } from "@/src/data/contexts/MediaQueries";
import { Styled } from "@styles/";

type ContainerProps = {
    children?: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>

export default function Container({ children, onClick, ...rest }: ContainerProps) {
    const { showMediaQuerieSideMenu } = useMediaQueries();
    return (
        <Styled.Container onClick={onClick} {...rest} showMediaQuerieSideMenu={showMediaQuerieSideMenu}>
            {children}
        </Styled.Container>
    );
}