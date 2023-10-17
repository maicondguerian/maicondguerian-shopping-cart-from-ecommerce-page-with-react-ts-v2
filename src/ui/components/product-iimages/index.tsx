import * as React from "react";
import { ImageRenderer } from "@ui/image-renderer";
import { galleryImages } from "./gallery-images";
import { Styled } from "@/src/styles";
import { FullsizeImageModal } from "./gallery-imeges-modal";

export function ProductCarrousekImageComponent() {
    const [selectedImage, setSelectedImage] = React.useState(1);
    const [modal, setOpenModal] = React.useState(false);

    function nextImage() {
        if (selectedImage === galleryImages.length) {
            setSelectedImage(1);
        } else {
            setSelectedImage(selectedImage + 1);
        }
    }

    function prevImage() {
        if (selectedImage === 1) {
            setSelectedImage(galleryImages.length);
        } else {
            setSelectedImage(selectedImage - 1);
        }
    }
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
                        onClick={() => setOpenModal(!modal)}
                    />
                </section>
                {
                    modal && (
                        <>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: "rgba(0,0,0,.5)" }}>
                                <div style={{ position: "relative" }}>
                                    <ImageRenderer
                                        path={selectedImage === 0 ? galleryImages[0].fullSizedImage
                                            : galleryImages.find((item) => item.id === selectedImage)?.fullSizedImage}
                                        width={535}
                                        style={{ position: "relative" }}
                                    />
                                    <div>
                                        <button
                                            style={{ position: "absolute", right: "0", top: "50%", transform: "translatey(-50%)" }}
                                            onClick={nextImage}
                                        >next</button>
                                        <button
                                            style={{ position: "absolute", left: "0", top: "50%", transform: "translatey(-50%)" }}
                                            onClick={prevImage}
                                        >prev</button>
                                    </div>
                                    <div style={{ display: "flex", gap: "1rem", position: "absolute", bottom: "-120px", left: "50%", transform: "translate(-50%)" }}>

                                        {galleryImages.map((image) => (
                                            <ImageRenderer
                                                key={image.id}
                                                path={image.thumbnailImage}
                                                width={103}
                                                onClick={() => setSelectedImage(image.id)}
                                                className={image.id === selectedImage ? "currentImage" : "none"}
                                                style={image.id === selectedImage ? { border: "solid 3px orange" } : { border: "none" }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

            </Styled.ProductImageGalleryWrapper>
            <FullsizeImageModal
                getSelectedImage={selectedImage}
            />
        </>
    );
}