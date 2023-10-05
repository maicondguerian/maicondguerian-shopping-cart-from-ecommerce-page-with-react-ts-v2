import { Styled } from "../../../styles";
import ProfileAvatarImage from "../../../styles/styled-components/header/avatar";
import Logo from "../../../styles/styled-components/header/logo";
import { BsCart2 } from 'react-icons/bs';
import Separator from "../separador";
import { Link } from "react-router-dom";
import usePath from "../../../data/custom-hooks/usePath";
import styled from "styled-components";

export default function Header() {
    const { isCurrentPath } = usePath();

    const inlineStyle = {
        display: 'flex',
        justifyContent: 'space-around',
    };

    const StyledUl = styled.ul`
        display: flex;
        align-items: center;
        gap: 2rem;

        li:nth-child(2){ 
            img{
                height: 50px;
                border: solid 2px transparent;
                border-radius: 50%;
                cursor: pointer;

                &:hover{
                    border: solid 2px  ${({ theme }) => theme.colors.orange};
                    transition: all .2s ease-in-out;
                }
            }
        }

    `;

    return (
        <>
            <div style={inlineStyle}>
                <Styled.Header>
                    <ul>
                        <li>hamb</li>
                        <li><Link to={'/'}><Logo /></Link></li>
                    </ul>
                    <ul>
                        <li className={isCurrentPath('/collections') ? 'currentPage' : 'regularStyle'}><Link to={'/collections'}> collections</Link></li>
                        <li>men</li>
                        <li>woman</li>
                        <li>about us</li>
                        <li>contact</li>
                    </ul>
                </Styled.Header>
                <StyledUl>
                    <li><BsCart2 size={'25px'} /></li>
                    <li><ProfileAvatarImage /></li>
                </StyledUl>
            </div>
            <Separator width={'90%'} />
        </>
    )
}