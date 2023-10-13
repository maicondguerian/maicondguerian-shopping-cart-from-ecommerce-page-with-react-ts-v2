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

export function ProductCarrousekImageComponent() {
    const [selectedImage, setSelectedImage] = React.useState(0);

    const handleSelectedImage = (id: React.SetStateAction<number>) => {
        setSelectedImage(id);
    };

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
        <div style={{ display: "flex" }}>
            <section style={{ display: "flex", flexDirection: "column" }}>
                {galleryImages.map((image, index) => (
                    <ImageRenderer key={index} path={image.thumbnailImage} width={100} onClick={() => handleSelectedImage(image.id)} style={{ margin: " 0  10px 10px" }} />
                ))}
            </section>
            <section>
                <ImageRenderer path={selectedImage === 0 ? galleryImages[0].fullSizedImage : galleryImages.find((item) => item.id === selectedImage)?.fullSizedImage} width={430} />
            </section>
        </div>
    );
}