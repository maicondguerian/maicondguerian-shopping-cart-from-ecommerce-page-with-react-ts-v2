import * as React from "react";
import { ImageRenderer } from "@ui/image-renderer";
import { galleryImages } from "./gallery-images";
import { Styled } from "@/src/styles";
import { ChangeImageButtom, FullsizeImageModal } from "./gallery-imeges-modal";
import ReactImageMagnify from "react-image-magnify";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useMediaQueries } from "@/src/data/contexts/mediaQueries";

export function ProductCarrousekImageComponent() {
    const [selectedImage, setSelectedImage] = React.useState<null | number>(null);
    const [openModal, setOpenModal] = React.useState(false);
    const querieContext = useMediaQueries();

    const buttonsData = [
        {
            icon: MdOutlineNavigateBefore,
            size: 45,
            onClick: prevImage,
        },
        {
            icon: MdOutlineNavigateNext,
            size: 45,
            onClick: nextImage,
        },
        {
            icon: IoCloseSharp,
            size: 40,
            onClick: () => setOpenModal(false),
        },
    ];

    function nextImage() {
        if (selectedImage === galleryImages.length || selectedImage === null) {
            setSelectedImage(1);
        } else if (selectedImage !== null) {
            setSelectedImage(selectedImage + 1);
        }
    }

    function prevImage() {
        if (selectedImage === 1) {
            setSelectedImage(galleryImages.length);
        } else if (selectedImage !== null) {
            setSelectedImage(selectedImage - 1);
        }
    }

    React.useEffect(() => {
        nextImage();
    }, []);

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
                            src: selectedImage === null ? galleryImages[0].fullSizedImage : galleryImages.find((element) => element.id === selectedImage)?.fullSizedImage || "/assets/image-product-1.jpg",
                        },
                        largeImage: {
                            src: selectedImage === null ? galleryImages[0].fullSizedImage : galleryImages.find((element) => element.id === selectedImage)?.fullSizedImage || "/assets/image-product-1.jpg",
                            height: 1200,
                            width: 1200
                        },
                        style: { zIndex: "10" }
                    }} />
                </section>
            </Styled.ProductImageGalleryWrapper>
            <FullsizeImageModal isOpen={openModal || querieContext.showMobileImageDisplay}>
                <section>
                    <ImageRenderer
                        path={selectedImage === null ? galleryImages[0].fullSizedImage :
                            galleryImages.find((image) => image.id === selectedImage)?.fullSizedImage}
                        width={550}

                    />
                    <div>
                        {buttonsData.map((button, i) => (
                            <ChangeImageButtom
                                icon={button.icon}
                                onClick={button.onClick}
                                size={button.size}
                                key={i}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    {galleryImages.map((image) => (
                        <ImageRenderer
                            path={image.thumbnailImage}
                            key={image.id}
                            width={110}
                            onClick={() => setSelectedImage(image.id)}
                            className={image.id === selectedImage ? "currentImage" : ""}
                        />
                    ))}
                </section>
            </FullsizeImageModal>
        </>
    );
}