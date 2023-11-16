export function PriceFormatter(price: number) {
    const formatToCurrency = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
    }).format(price);

    return formatToCurrency;
}