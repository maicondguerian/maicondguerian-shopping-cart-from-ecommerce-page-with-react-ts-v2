import * as React from "react";

type MediaQueriesContextProps = {
    showMediaQuerieSideMenu: boolean
    setShowMediaQuerieSideMenu: React.Dispatch<React.SetStateAction<boolean>>
    toggleSideMenu: () => void
}
const MediaQueriesContext = React.createContext({} as MediaQueriesContextProps);
type MediaQueriesProviderProps = {
    children: React.ReactNode
}
export function MediaQueriesProvider({ children }: MediaQueriesProviderProps) {
    const [showMediaQuerieSideMenu, setShowMediaQuerieSideMenu] = React.useState(false);

    function toggleSideMenu() {
        setShowMediaQuerieSideMenu((prevStete) => !prevStete);
    }

    return (
        <MediaQueriesContext.Provider value={{
            showMediaQuerieSideMenu,
            setShowMediaQuerieSideMenu,
            toggleSideMenu
        }}>
            {children}
        </MediaQueriesContext.Provider>
    );
}

export function useMediaQueries() {
    const context = React.useContext(MediaQueriesContext);
    return context;
}