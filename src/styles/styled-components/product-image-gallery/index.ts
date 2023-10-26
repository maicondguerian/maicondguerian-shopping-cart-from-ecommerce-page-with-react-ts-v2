import { darken } from "polished";
import styled from "styled-components";

type ProductImageGalleryWrapper = {
    openModal: boolean
}
export const ProductImageGalleryWrapper = styled.div<ProductImageGalleryWrapper>`
    display: ${props => props.openModal ? "grid" : "grid"};
    grid-template-columns:100px 1fr;
    grid-gap: calc(${({ theme }) => theme.spacing.sm} + 1px);
    
    section:first-of-type{
        display: grid;
        row-gap:${({ theme }) => theme.spacing.xs};

        img{
            &:hover{
              opacity: .6;
            }
        }

        .currentImage{
            opacity: .6;
            border: solid 3px ${({ theme }) => darken(.1, theme.colors.orange)};;
        }
    }
`;

ProductImageGalleryWrapper.shouldForwardProp = (prop) => prop !== "openModal";
