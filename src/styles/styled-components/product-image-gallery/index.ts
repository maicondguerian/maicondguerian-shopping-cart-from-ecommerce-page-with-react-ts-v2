import { darken } from "polished";
import styled from "styled-components";

type ProductImageGalleryWrapper = {
    openModal: boolean
}
export const ProductImageGalleryWrapper = styled.div<ProductImageGalleryWrapper>`
    /* display: ${props => props.openModal ? "grid" : "grid"}; */
    display: flex;
    align-items: center;
    grid-gap: calc(${({ theme }) => theme.spacing.sm} + 1px); 

    section:first-of-type{
        display: flex;
        flex-direction: column;
        row-gap:${({ theme }) => theme.spacing.xs};
        justify-content: center;
        
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

    @media screen and (max-width: 1111px) {
        section:last-of-type{
          display: none;
        }
        section:first-of-type{
            display: none;

        }
    }
`;

ProductImageGalleryWrapper.shouldForwardProp = (prop) => prop !== "openModal";
