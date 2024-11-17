import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
    readonly image: {
        readonly publicUrl?: string | null,
        readonly url?: string | null,
        readonly gatsbyImageData?: IGatsbyImageData | null;
        readonly file?: {
            readonly contentType?: string | null,
        } | null
    } | null,
    readonly alt?: string,
    readonly loading?: React.ImgHTMLAttributes<HTMLImageElement>['loading'],
    readonly style?: React.CSSProperties,
    readonly rawSVG?: string | null,
}
export const renderGatsbyImage = ({ image, alt, loading = "lazy", style, rawSVG }: Props) => {
    if (rawSVG) return (
        <div dangerouslySetInnerHTML={{ __html: rawSVG }} style={{ height: "100%", width: "100%" }} />
    );
    if (image?.gatsbyImageData) return <GatsbyImage image={image.gatsbyImageData} alt={alt ?? ''} loading={loading} imgStyle={style} />;
    if (image?.url) return <img src={image.url} alt={alt ?? ''} loading={loading} style={style} />;
    return null;
};
