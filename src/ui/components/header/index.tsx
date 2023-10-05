import { Styled } from "../../../styles";
import ProfileAvatarImage from "../../../styles/styled-components/header/avatar";
import Logo from "../../../styles/styled-components/header/logo";
import { BsCart2 } from 'react-icons/bs';
import Separator from "../separador";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <Styled.Header>
                <ul>
                    <li><Link to={'/'}><Logo /></Link></li>
                    <li><Link to={'/collections'}> colections</Link></li>
                    <li>man</li>
                    <li>woman</li>
                    <li>about us</li>
                    <li>contact</li>
                </ul>
                <ul>
                    <li><BsCart2 size={'25px'} /></li>
                    <li><ProfileAvatarImage /></li>
                </ul>
            </Styled.Header>
            <Separator width={'90%'} />
        </>
    )
}