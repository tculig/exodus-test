import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
    image: {
        publicUrl?: string,
        url?: string,
        gatsbyImageData?: IGatsbyImageData,
        file?: {
            contentType: string,
        }
    }
    alt: string,
    loading?: React.ImgHTMLAttributes<HTMLImageElement>['loading'],
    style?: React.CSSProperties,
    rawSVG?: string,
}
export const renderGatsbyImage = ({ image, alt, loading = "lazy", style, rawSVG }: Props) => {
    if (rawSVG) return (
        <div dangerouslySetInnerHTML={{ __html: rawSVG }} style={{ height: "100%", width: "100%" }} />
    );
    return image.gatsbyImageData ? (
        <GatsbyImage image={image.gatsbyImageData} alt={alt} loading={loading} imgStyle={style} />
    ) : (
        <img src={image.url} alt={alt} loading={loading} style={style} />
    );
};
