import { ProductCarrousekImageComponent } from "@/src/ui/components/thumbnail-image-carrousel";
import ProductDetails from "@ui/product-details";

export default function Colections() {
    const styledPage = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
    };
    return (
        <div style={styledPage}>
            <ProductCarrousekImageComponent />
            <ProductDetails />
        </div>
    );
}
