import { Styled } from "@/src/styles";

type SidebarHeader = {
  isOpen?: boolean
  className: string
}
const SidebarHeader = ({ isOpen, className }: SidebarHeader) => {
  return (
    <>
      {isOpen && (
        <Styled.SideMenu
          className={className}
        >
          <div>Sideheader</div>
        </Styled.SideMenu>
      )}
    </>
  );
};

export default SidebarHeader;