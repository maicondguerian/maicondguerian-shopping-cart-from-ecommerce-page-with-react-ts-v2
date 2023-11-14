import { Styled } from "@/src/styles";

export type AccountMenuProps = {
    isOpen?: boolean,
    className?: string
    children: React.ReactNode
}
export function AccountMenu({ isOpen, className, children }: AccountMenuProps) {
    return (
        <Styled.Wrapper
            isOpen={isOpen}
            className={className}
            onClick={(event) => (
                event.stopPropagation()
            )}
        >
            {children}
        </Styled.Wrapper >

    );
}

export default AccountMenu;