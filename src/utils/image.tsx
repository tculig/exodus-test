import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
    image: {
        publicUrl?: string,
        url?: string,
        gatsbyImageData?: IGatsbyImageData,
    }
    alt: string,
    loading?: React.ImgHTMLAttributes<HTMLImageElement>['loading'],
    style?: React.CSSProperties,
}
export const renderGatsbyImage = ({ image, alt, loading = "lazy", style }: Props) => {
    return image.gatsbyImageData ? (
        <GatsbyImage image={image.gatsbyImageData} alt={alt} loading={loading} imgStyle={style} />
    ) : (
        <img src={image.url} alt={alt} loading={loading} style={style} />
    );
};