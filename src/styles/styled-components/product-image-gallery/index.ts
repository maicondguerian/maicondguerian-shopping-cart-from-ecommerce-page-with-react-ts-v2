import styled from "styled-components";

export const ProductImageGalleryWrapper = styled.div`
    display: flex;

    section:first-of-type{
        display: flex;
        flex-direction: column;

        img{
            margin: 0 10px 10px;

            &:hover{
              opacity: .6;
            }
        }
        .currentImage{
            opacity: .6;
            border: 3px solid ${({ theme }) => theme.colors.orange}; opacity: 1;
        }
    }
`;