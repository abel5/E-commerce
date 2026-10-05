import { createspecificProductPage } from "../components/productCard.js";

export function renderSpecificProductPage(product, container) {

    if (!container) return;

    container.innerHTML = "";

    if (!product) {
        console.log("Product not found:", product);
        return;
    }

    container.appendChild(createspecificProductPage(product));
}
