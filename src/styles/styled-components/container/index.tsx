import styled from "styled-components";

type ContainerProps = {
    showMediaQuerieSideMenu: boolean
}
export const Container = styled.main<ContainerProps>`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    
    @media screen and (max-width: 1111px) {
        align-items: center;
        overflow: ${props => props.showMediaQuerieSideMenu ? "hidden" : "unset"};
    }
`;

function shouldForwardProp(props: string) {
    return props !== "showMediaQuerieSideMenu";
}

Container.shouldForwardProp = shouldForwardProp;