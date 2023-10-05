import { Styled } from "../../../styles";
import ProfileAvatarImage from "../../../styles/styled-components/header/avatar";
import Logo from "../../../styles/styled-components/header/logo";
import { BsCart2 } from 'react-icons/bs';
import Separator from "../separador";
import { Link } from "react-router-dom";
import usePath from "../../../data/custom-hooks/usePath";

export default function Header() {
    const { isCurrentPath } = usePath();

    return (
        <>
            <Styled.Navbar>
                <header>
                    <ul>
                        <li></li>
                        <li><Link to={'/'}><Logo /></Link></li>
                    </ul>
                    <ul>
                        <li className={isCurrentPath('/collections') ? 'currentPage' : 'regularStyle'}><Link to={'/collections'}> collections</Link></li>
                        <li>men</li>
                        <li>woman</li>
                        <li>about us</li>
                        <li>contact</li>
                    </ul>
                </header>
                <ul>
                    <li><BsCart2 size={'25px'} /></li>
                    <li><ProfileAvatarImage /></li>
                </ul>
            </Styled.Navbar>
            <Separator width={'90%'} />
        </>
    )
}