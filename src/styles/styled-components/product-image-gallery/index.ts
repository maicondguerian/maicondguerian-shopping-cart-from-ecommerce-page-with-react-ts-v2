import styled from "styled-components";

export const ProductImageGalleryWrapper = styled.div`
    display: flex;

    section:first-of-type{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img{
            margin: 0 10px 10px;
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