import * as React from "react";
import { ImageRenderer } from "@ui/image-renderer";

import thumbnail1 from "@/public/assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "@/public/assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "@/public/assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "@/public/assets/image-product-4-thumbnail.jpg";
import productFullSize1 from "@/public/assets/image-product-1.jpg";
import productFullSize2 from "@/public/assets/image-product-2.jpg";
import productFullSize3 from "@/public/assets/image-product-3.jpg";
import productFullSize4 from "@/public/assets/image-product-4.jpg";
import { Styled } from "@/src/styles";

export function ProductCarrousekImageComponent() {
    const [selectedImage, setSelectedImage] = React.useState(0);

    const galleryImages = [
        {
            id: 1,
            fullSizedImage: productFullSize1,
            thumbnailImage: thumbnail1
        },
        {
            id: 2,
            fullSizedImage: productFullSize2,
            thumbnailImage: thumbnail2
        },
        {
            id: 3,
            fullSizedImage: productFullSize3,
            thumbnailImage: thumbnail3
        },
        {
            id: 4,
            fullSizedImage: productFullSize4,
            thumbnailImage: thumbnail4
        },
    ];

    return (
        <Styled.ProductImageGalleryWrapper>
            <section>
                {galleryImages.map((image) => (
                    <ImageRenderer
                        key={image.id}
                        path={image.thumbnailImage}
                        width={100}
                        onClick={() => setSelectedImage(image.id)}
                        className={image.id === selectedImage ? "currentImage" : "none"}
                    />
                ))}
            </section>
            <section>
                <ImageRenderer
                    path={selectedImage === 0 ? galleryImages[0].fullSizedImage
                        : galleryImages.find((item) => item.id === selectedImage)?.fullSizedImage}
                    width={430}
                />
            </section>
        </Styled.ProductImageGalleryWrapper>
    );
}