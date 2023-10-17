import { Styled } from "@/src/styles";
import { ImageRenderer } from "../image-renderer";
import { galleryImages } from "./gallery-images";
import { AddToCartButtomProps } from "../quantity-counter-button";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

type FullsizeImageModalProps = {
    getSelectedImage: number
    getSetSelectImage: React.Dispatch<React.SetStateAction<number>>
    isOpen: boolean
    getCloseModalFunciton: React.Dispatch<React.SetStateAction<boolean>>
}

export function FullsizeImageModal({
    getSelectedImage,
    getSetSelectImage,
    isOpen = false,
    getCloseModalFunciton }
    : FullsizeImageModalProps) {

    function nextImage() {
        if (getSelectedImage === galleryImages.length) {
            getSetSelectImage(1);
        } else {
            getSetSelectImage(getSelectedImage + 1);
        }
    }

    function prevImage() {
        if (getSelectedImage === 1) {
            getSetSelectImage(galleryImages.length);
        } else {
            getSetSelectImage(getSelectedImage - 1);
        }
    }
    return (
        isOpen && (
            <Styled.Modal>
                <div>
                    <section>
                        <ImageRenderer
                            path={galleryImages.find((image) => image.id === getSelectedImage)?.fullSizedImage}
                            width={550}
                        />
                        <ChangeImageButtom
                            icon={MdOutlineNavigateBefore}
                            size={45}
                            OnClick={prevImage}
                        />
                        <ChangeImageButtom
                            icon={MdOutlineNavigateNext}
                            size={45}
                            OnClick={nextImage}
                        />
                        <ChangeImageButtom
                            icon={IoCloseSharp}
                            size={40}
                            color="#fff"
                            OnClick={() => getCloseModalFunciton(false)}
                        />
                    </section>
                    <section>
                        {galleryImages.map((image) => (
                            <ImageRenderer
                                path={image.thumbnailImage}
                                key={image.id}
                                width={110}
                                onClick={() => getSetSelectImage(image.id)}
                                className={image.id === getSelectedImage ? "currentImage" : "none"}
                            />
                        ))}
                    </section>
                </div>
            </Styled.Modal >
        )
    );
}

type ChangeImageButtomProps = Pick<AddToCartButtomProps, "OnClick" | "color" | "icon" | "size">

function ChangeImageButtom({ icon: Icon, OnClick, color, size }: ChangeImageButtomProps) {
    return (<Styled.ImageChangerButton onClick={OnClick}> {Icon ? <Icon size={size} color={color} /> : <></>} </Styled.ImageChangerButton>

    );
}