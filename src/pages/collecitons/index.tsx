import ProductDetails from "@ui/product-details";

export default function Colections() {
    const styledPage = {
        display: "flex",
        justifyContent: "last-baseline",
        alignItems: "center",
        gap: "5rem",
    };
    return (
        <div style={styledPage}>
            <ProductDetails />
            <ProductDetails />
        </div>
    );
}
