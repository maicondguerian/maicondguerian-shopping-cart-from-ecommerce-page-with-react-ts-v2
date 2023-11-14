import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
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
    }
}