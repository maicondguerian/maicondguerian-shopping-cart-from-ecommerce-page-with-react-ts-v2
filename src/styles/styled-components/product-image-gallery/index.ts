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
            object-fit: cover;
            &:hover{
              opacity: .6;
            }
        }
        .currentImage{
            img{
                opacity: .6;
            }
            border: solid 3px ${({ theme }) => theme.colors.orange};
        }
    }
`;