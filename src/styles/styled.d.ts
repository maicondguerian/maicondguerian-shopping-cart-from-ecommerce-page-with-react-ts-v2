import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            veryDarkBlue: string;
            darkGrayishBlue: string;
            grayishBlue: string;
            lightGrayishBlue: string;
            white: string;
            blackWith75OpacityForLightboxBackground: string;
            orange: string;
            PaleOrange: string,
        },
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        }
    }
}