import * as React from "react";
import { ImageRenderer } from "@ui/image-renderer";
import { galleryImages } from "./gallery-images";
import { Styled } from "@/src/styles";
import { FullsizeImageModal } from "./gallery-imeges-modal";

export function ProductCarrousekImageComponent() {
    const [selectedImage, setSelectedImage] = React.useState(1);
    const [openModal, setOpenModal] = React.useState(false);

    return (
        <>
            <Styled.ProductImageGalleryWrapper>
                <section>
                    {galleryImages.map((image) => (
                        <ImageRenderer
                            key={image.id}
                            path={image.thumbnailImage}
                            width={103}
                            onClick={() => setSelectedImage(image.id)}
                            className={image.id === selectedImage ? "currentImage" : "none"}
                        />
                    ))}
                </section>
                <section>
                    <ImageRenderer
                        path={selectedImage === 0 ? galleryImages[0].fullSizedImage
                            : galleryImages.find((item) => item.id === selectedImage)?.fullSizedImage}
                        width={435}
                        onClick={() => setOpenModal(!openModal)}
                    />
                </section>
            </Styled.ProductImageGalleryWrapper>
            <FullsizeImageModal
                getSelectedImage={selectedImage}
                getSetSelectImage={setSelectedImage}
                isOpen={openModal}
                getCloseModalFunciton={setOpenModal}
            />
        </>
    );
}