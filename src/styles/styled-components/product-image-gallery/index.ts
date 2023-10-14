import { darken } from "polished";
import styled from "styled-components";

export const ProductImageGalleryWrapper = styled.div`
    display: flex;
    height: 425px;
    overflow-y: hidden;

    section:first-of-type{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:${({ theme }) => theme.spacing.sm};
        margin-right: ${({ theme }) => theme.spacing.sm};

        img{
            &:hover{
              opacity: .6;
            }
        }
        .currentImage{
            opacity: .6;
            border: solid 3px ${({ theme }) => darken(.3, theme.colors.orange)};;
        }
    }
`;