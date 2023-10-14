import { ProductCarrousekImageComponent } from "@/src/ui/components/thumbnail-image-carrousel";
import ProductDetails from "@ui/product-details";

export default function Colections() {
    const styledPage = {
        margin: " 0 200px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    };
    return (
        <div style={styledPage}>
            <ProductCarrousekImageComponent />
            <ProductDetails />
        </div>
    );
}
