import { Styled } from "@/src/styles";
import { ImageRenderer } from "../image-renderer";
import { galleryImages } from "./gallery-images";
import { AddToCartButtomProps } from "../quantity-counter-button";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
type FullsizeImageModalProps = {
    getSelectedImage: number
}

export function FullsizeImageModal({ getSelectedImage }: FullsizeImageModalProps) {
    return (
        <Styled.Modal>
            <div>
                <section>
                    <ImageRenderer
                        path={galleryImages.find((image) => image.id === getSelectedImage)?.fullSizedImage}
                        width={550}
                    />
                    <ChangeImageButtom icon={MdOutlineNavigateBefore} size={45} />
                    <ChangeImageButtom icon={MdOutlineNavigateNext} size={45} />

                </section>
                <section>
                    {galleryImages.map((image) => (
                        <ImageRenderer
                            path={image.thumbnailImage}
                            key={image.id}
                            width={110}
                        />
                    ))}
                </section>
            </div>
        </Styled.Modal>
    );
}

type ChangeImageButtomProps = Pick<AddToCartButtomProps, "OnClick" | "color" | "icon" | "size">
function ChangeImageButtom({ icon: Icon, OnClick, color, size }: ChangeImageButtomProps) {
    return (<Styled.ImageChangerButton onClick={OnClick} >
        {Icon ? <Icon size={size} color={color} /> : <></>}
    </Styled.ImageChangerButton>

    );
}