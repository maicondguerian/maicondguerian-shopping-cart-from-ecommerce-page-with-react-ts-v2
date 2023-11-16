type ImageRendererProps = {
    path: string | undefined;
    onClick?: () => void;
    width?: number | null;
} & React.ImgHTMLAttributes<HTMLImageElement>

export function ImageRenderer({ path, onClick, width, style, ...rest }: ImageRendererProps) {
    return (
        <img src={path} alt="Image-renderer-component" onClick={onClick} width={`${width}px`} style={style} {...rest} />
    );
}
