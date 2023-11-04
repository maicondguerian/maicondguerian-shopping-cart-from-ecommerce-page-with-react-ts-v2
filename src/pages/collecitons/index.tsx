import { Styled } from "@/src/styles";
import { ProductCarrousekImageComponent } from "@/src/ui/components/product-iimages";
import ProductDetails from "@ui/product-details";

export default function Colections() {

    return (
        <Styled.Page>
            <ProductCarrousekImageComponent />
            <ProductDetails />
        </Styled.Page>
    );
}
