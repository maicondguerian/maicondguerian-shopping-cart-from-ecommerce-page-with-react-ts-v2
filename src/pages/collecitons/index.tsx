interface ColectionsProps {
    pageName?: string;
}
export default function Colections({ pageName = 'defaltName' }: ColectionsProps) {
    return (
        <div>
            <h1>sncikers {pageName}</h1>
        </div>
    )
}
