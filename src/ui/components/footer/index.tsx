// import { ImageRenderer } from "../image-renderer";
import { Styled } from "@/src/styles";
import Separator from "../separador";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import { useMediaQueries } from "@/src/data/contexts/mediaQueries";
import { Logo } from "../header/svg-treatment";

export function Footer() {
    const mediaContext = useMediaQueries();

    return (
        <Styled.Footer>
            <Separator width={mediaContext.showMobileImageDisplay ? "100%" : "70%"} align="center" />
            <div>
                <span> <Logo width={100} /></span>
                <span>© Copyright 2023 Sneakers. All rights reserved.</span>
                <Socials />
            </div>
        </Styled.Footer>
    );
}

function Socials() {
    return (
        <ul>
            <li><TiSocialFacebook size={25} /></li>
            <li><TiSocialInstagram size={25} /></li>
            <li><TiSocialTwitter size={25} /></li>
        </ul>
    );
}