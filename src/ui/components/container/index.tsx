import { useMediaQueries } from "@src/data/contexts/mediaQueries";
import { Styled } from "@styles/";

type ContainerProps = {
    children?: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>

export function Container({ children, onClick, ...rest }: ContainerProps) {
    const querieContext = useMediaQueries();
    return (
        <Styled.Container
            onClick={onClick} {...rest}
            showMediaQuerieSideMenu={querieContext.showMediaQuerieSideMenu}
        >
            {children}
        </Styled.Container>
    );
}