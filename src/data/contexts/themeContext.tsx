import { LightTheme, DarkTheme } from "@/src/styles";
import * as React from "react";
type ThemeContextProps = {
    theme: {
        colors: {
            veryDarkBlue: string;
            darkGrayishBlue: string;
            grayishBlue: string;
            lightGrayishBlue: string;
            sillyGray: string,
            white: string;
            blackWith75OpacityForLightboxBackground: string;
            orange: string;
            PaleOrange: string,
            primaryBg: string,
            overlayBackground: string
        },
        font: {
            primary: string;
        },
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            xxxl: string;
        }

        [key: string]: string | Record<string, string>;
    }

    setTheme: React.Dispatch<React.SetStateAction<{
        colors: {
            veryDarkBlue: string;
            darkGrayishBlue: string;
            grayishBlue: string;
            lightGrayishBlue: string;
            sillyGray: string,
            white: string;
            blackWith75OpacityForLightboxBackground: string;
            orange: string;
            PaleOrange: string,
            primaryBg: string,
            overlayBackground: string
        },
        font: {
            primary: string;
        },
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            xxxl: string;
        }
    }>>
    toggleTheme: () => void
    toggleLight: () => void
    toggleDark: () => void
}
export const ThemeContext = React.createContext({} as ThemeContextProps);

type useThemeProps = {
    children: React.ReactNode
}
export function ThemeProvider({ children }: useThemeProps) {

    const [theme, setTheme] = React.useState(LightTheme);

    const inheritedDarkTheme = {
        spacing: {
            ...LightTheme.spacing
        },
        ...DarkTheme
    };

    function toggleTheme() {
        setTheme((prevState => {
            return prevState === LightTheme ? inheritedDarkTheme : LightTheme;
        }));

    }

    function objectsAreEqual(objA: ThemeContextProps["theme"], objB: ThemeContextProps["theme"]): boolean {
        for (const key in objA) {
            if (objA[key] !== objB[key]) {
                return false;
            }
        }
        return true;
    }

    function toggleDark() {
        if (!objectsAreEqual(theme, inheritedDarkTheme)) {
            setTheme(inheritedDarkTheme);
        }
    }

    function toggleLight() {
        if (!objectsAreEqual(theme, LightTheme)) {
            setTheme(LightTheme);
        }
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
            toggleTheme,
            toggleLight,
            toggleDark
        }}>
            {children}
        </ThemeContext.Provider >
    );
}

export function useTheme() {
    const context = React.useContext(ThemeContext);
    return context;
}