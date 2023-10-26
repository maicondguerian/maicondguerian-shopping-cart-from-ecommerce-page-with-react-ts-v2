import * as React from "react";
import { ImageRenderer } from "@ui/image-renderer";
import { galleryImages } from "./gallery-images";
import { Styled } from "@/src/styles";
import { FullsizeImageModal } from "./gallery-imeges-modal";
import ReactImageMagnify from "react-image-magnify";

export function ProductCarrousekImageComponent() {
    const [selectedImage, setSelectedImage] = React.useState<null | number>(null);
    const [openModal, setOpenModal] = React.useState(false);

    return (
        <>
            <Styled.ProductImageGalleryWrapper openModal={openModal}>
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
                <section onClick={() => setOpenModal(!openModal)}>
                    <ReactImageMagnify {...{
                        smallImage: {
                            width: 430,
                            height: 430,
                            isFluidWidth: false,
                            alt: "gallery-images",
                            src: selectedImage === null ? galleryImages[0].fullSizedImage : galleryImages.find((element) => element.id === selectedImage)?.fullSizedImage,
                        },
                        largeImage: {
                            src: selectedImage === null ? galleryImages[0].fullSizedImage : galleryImages.find((element) => element.id === selectedImage)?.fullSizedImage,
                            height: 1200,
                            width: 1200
                        }
                    }} />
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