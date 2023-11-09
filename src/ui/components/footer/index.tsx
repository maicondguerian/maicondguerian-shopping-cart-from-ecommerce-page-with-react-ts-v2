// import { ImageRenderer } from "../image-renderer";
import { Styled } from "@/src/styles";
import Separator from "../separador";
import { ImageRenderer } from "../image-renderer";

export function Footer() {
    return (
        <Styled.Footer>
            <Separator width="70%" align="center" />
            <div>
                <span> <ImageRenderer path={"/src/assets/logo.svg"} width={138} /></span>
                <span>© Copyright 2023 Sneakers. All rights reserved.</span>
                <Socials />
            </div>
        </Styled.Footer>
    );
}

function Socials() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}