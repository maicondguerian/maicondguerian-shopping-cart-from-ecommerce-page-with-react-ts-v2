import * as React from "react";

type MediaQueriesContextProps = {
    showMediaQuerieSideMenu: boolean
    setShowMediaQuerieSideMenu: React.Dispatch<React.SetStateAction<boolean>>
    toggleSideMenu: () => void
    setShowMobileImageDisplay: React.Dispatch<React.SetStateAction<boolean>>
    showMobileImageDisplay: boolean,
    showProfileMenu: boolean,
    setShowProfileMenu: React.Dispatch<React.SetStateAction<boolean>>
}
const MediaQueriesContext = React.createContext({} as MediaQueriesContextProps);
type MediaQueriesProviderProps = {
    children: React.ReactNode
}
export function MediaQueriesProvider({ children }: MediaQueriesProviderProps) {
    const [showMediaQuerieSideMenu, setShowMediaQuerieSideMenu] = React.useState(false);
    const [showMobileImageDisplay, setShowMobileImageDisplay] = React.useState(false);
    const [showProfileMenu, setShowProfileMenu] = React.useState(false);

    React.useEffect(() => {

        function mathWindow() {
            if (window.matchMedia(("(max-width: 1111px)")).matches) {
                setShowMobileImageDisplay(true);
            }
            else {
                setShowMobileImageDisplay(false); //carrousel
                setShowMediaQuerieSideMenu(false); //menu
            }
        }
        mathWindow();

        window.addEventListener("resize", mathWindow);

        return () => {
            window.removeEventListener("resize", mathWindow);
        };
    }, []);

    function toggleSideMenu() {
        setShowMediaQuerieSideMenu((prevStete) => !prevStete);
    }

    return (
        <MediaQueriesContext.Provider value={{
            showMediaQuerieSideMenu,
            setShowMediaQuerieSideMenu,
            toggleSideMenu,
            setShowMobileImageDisplay,
            showMobileImageDisplay,
            showProfileMenu,
            setShowProfileMenu
        }}>
            {children}
        </MediaQueriesContext.Provider>
    );
}

export function useMediaQueries() {
    const context = React.useContext(MediaQueriesContext);
    return context;
}