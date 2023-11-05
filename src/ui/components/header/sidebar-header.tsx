type SidebarHeader = {
  isOpen: boolean
}
const SidebarHeader = ({ isOpen }: SidebarHeader) => {
  return (
    <>
      {isOpen && (
        <div>Sideheader</div>
      )}
    </>
  );
};

export default SidebarHeader;