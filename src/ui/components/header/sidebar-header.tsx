import { Styled } from "@/src/styles";

type SidebarHeader = {
  className: string
}
const SidebarHeader = ({ className }: SidebarHeader) => {
  return (
    <Styled.Overlay>
      <Styled.SideMenu
        className={className}
      >Sideheader
      </Styled.SideMenu>
    </Styled.Overlay>
  );
};
export default SidebarHeader;

