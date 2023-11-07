import { Styled } from "@/src/styles";

type SidebarHeader = {
  isOpen?: boolean
  className: string
  onClick: React.MouseEventHandler<HTMLElement>
  children: React.ReactNode
}
// & React.ButtonHTMLAttributes<HTMLElement>
const SidebarHeader = ({ isOpen, className, onClick, children }: SidebarHeader) => {
  return (
    <>
      {isOpen && (
        <Styled.Overlay className="overlay">
          <Styled.SideMenu
            className={className}
            onClick={onClick}
          >
            {children}
          </Styled.SideMenu>
        </Styled.Overlay>
      )}
    </>
  );
};

export default SidebarHeader;