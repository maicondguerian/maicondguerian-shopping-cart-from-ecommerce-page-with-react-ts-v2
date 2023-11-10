import { HiOutlineHome } from "react-icons/hi";
import { BiUser, BiSun } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import styled from "styled-components";
import Separator from "../separador";

type AccountMenuProps = {
    isOpen: boolean
}
import CustomButtom from "../CustomButtom";
export const AccountMenu = ({ isOpen }: AccountMenuProps) => {
    return (
        <>
            {isOpen && (
                <Wrapper>
                    <ul>
                        <li><CustomButtom icon={HiOutlineHome} size={22} name="home" /></li>
                        <Separator />
                        <li><CustomButtom icon={BiUser} size={22} name="profile" /></li>
                        <Separator />
                        <li><CustomButtom icon={BiSun} size={22} name="theme" /></li>
                        <Separator />
                        <li><CustomButtom icon={FiLogOut} size={22} name="sign out" /></li>
                    </ul>

                </Wrapper>
            )}
        </>
    );
};

export default AccountMenu;

export const Wrapper = styled.nav`
    width: auto;
    border: 1px solid rgb(219, 229, 230);
    border-radius: .3rem;
    position: absolute;
    top: 7vh;
    /* right: 0; */
    white-space: nowrap;
    z-index: 1000;
    background-color: ${({ theme }) => theme.colors.primaryBg};

    button{
        color: inherit;
        gap: .5rem;
        font-weight: 600;
        font-family: inherit;
        font-size: 12px;
        text-transform: uppercase;
    }

    li{
        padding: .9rem 1.5rem .9rem;
        display: flex;
        gap: .5rem;
        align-items: center;
        
        
    }
    li:hover{
        transition: .1s ease-out;
        background-color: ${({ theme }) => theme.colors.lightGrayishBlue}
    }

    li:last-of-type{
      button{
        color: red;
        font-style: italic;
      }
    }
`;