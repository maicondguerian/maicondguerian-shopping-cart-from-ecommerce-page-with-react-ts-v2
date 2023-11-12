import { HiOutlineHome } from "react-icons/hi";
import { BiUser, BiSun } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import Separator from "../separador";
import CustomButtom from "../CustomButtom";
import { Styled } from "@/src/styles";

export type AccountMenuProps = {
    isOpen: boolean,
    className?: string
}
export const AccountMenu = ({ isOpen, className }: AccountMenuProps) => {
    return (
        <Styled.Wrapper isOpen={isOpen} className={className}>
            <ul>
                <li><CustomButtom icon={HiOutlineHome} size={22} name="home" /></li>
                <Separator />
                <li><CustomButtom icon={BiUser} size={22} name="profile" /></li>
                <Separator />
                <li><CustomButtom icon={BiSun} size={22} name="theme" /></li>
                <Separator />
                <li><CustomButtom icon={FiLogOut} size={22} name="sign out" /></li>
            </ul>
        </Styled.Wrapper>

    );
};

export default AccountMenu;