import { Styled } from "@/src/styles";
import { ImageRenderer } from "../image-renderer";
import { galleryImages } from "./gallery-images";
import { AddToCartButtomProps } from "../quantity-counter-button";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";

type FullsizeImageModalProps = {
    getSelectedImage: number | null;
    getSetSelectImage: React.Dispatch<React.SetStateAction<number | null>>
    isOpen: boolean;
    getCloseModalFunciton: React.Dispatch<React.SetStateAction<boolean>>
}

export function FullsizeImageModal({
    getSelectedImage,
    getSetSelectImage,
    isOpen = false,
    getCloseModalFunciton }
    : FullsizeImageModalProps) {

    function nextImage() {
        if (getSelectedImage === galleryImages.length || getSelectedImage === null) {
            getSetSelectImage(1);
        } else if (getSelectedImage !== null) {
            getSetSelectImage(getSelectedImage + 1);
        }
    }

    function prevImage() {
        if (getSelectedImage === 1) {
            getSetSelectImage(galleryImages.length);
        } else if (getSelectedImage !== null) {
            getSetSelectImage(getSelectedImage - 1);
        }
    }

    useEffect(() => {
        nextImage();
    }, []);

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
            onClick: () => getCloseModalFunciton(false),
        },
    ];

    return (
        isOpen && (
            <Styled.Modal>
                <div>
                    <section>
                        <ImageRenderer
                            path={getSelectedImage === null ? galleryImages[0].fullSizedImage :
                                galleryImages.find((image) => image.id === getSelectedImage)?.fullSizedImage}
                            width={550}
                        />
                        {buttonsData.map((button, i) => (
                            <ChangeImageButtom
                                icon={button.icon}
                                onClick={button.onClick}
                                size={button.size}
                                key={i}
                            />
                        ))}
                    </section>
                    <section>
                        {galleryImages.map((image) => (
                            <ImageRenderer
                                path={image.thumbnailImage}
                                key={image.id}
                                width={110}
                                onClick={() => getSetSelectImage(image.id)}
                                className={image.id === getSelectedImage ? "currentImage" : ""}
                            />
                        ))}
                    </section>
                </div>
            </Styled.Modal>
        )
    );
}

type ChangeImageButtomProps = Omit<AddToCartButtomProps, "name">;

export function ChangeImageButtom({ icon: Icon, onClick, color, size, }: ChangeImageButtomProps) {
    return (<Styled.ImageChangerButton onClick={onClick}> {Icon ? <Icon size={size} color={color} /> : <></>} </Styled.ImageChangerButton>

    );
}