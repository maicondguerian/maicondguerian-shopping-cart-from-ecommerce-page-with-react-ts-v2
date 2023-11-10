// import { ImageRenderer } from "../image-renderer";
import { Styled } from "@/src/styles";
import Separator from "../separador";
import { ImageRenderer } from "../image-renderer";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";

export function Footer() {
    return (
        <Styled.Footer>
            <Separator width="70%" align="center" />
            <div>
                <span> <ImageRenderer path={"/src/assets/logo.svg"} width={100} /></span>
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