
import { createProductCard } from "../components/productCard.js";
import { navigateProduct, hideSectionsTwo } from "./dealCategories.js";
import { renderSpecificProductPage } from "./specificProduct.js";


const pagination = document.querySelector(".pagination");
const prevBtn = document.querySelector(".prev-btn");
const pageNumbers = document.querySelector(".page-numbers");
const nextBtn = document.querySelector(".next-btn");
const specificProductDetailSection = document.querySelector(".specific-product-detail-section");
const arrowBackIcon = document.querySelector(".arrow-back-icon");

let currentPage = 1;
const productsPerPage = 4;

export function resetCurrentPage() {

    currentPage = 1;

}

export function renderFoundProducts(products, container) {

    if (!container) {
        return;
    }

    if (!Array.isArray(products)) {
        return;
    }

    const totalPages = Math.ceil(products.length / productsPerPage);

    if (totalPages === 0) {

        currentPage = 1;

        container.innerHTML = "";

        if (pagination) {
            pagination.style.display = "none";
        }

        return;
    }

    if (currentPage > totalPages) {
        currentPage = 1;
    }


    if (currentPage < 1) {
        currentPage = 1;
    }

    container.innerHTML = "";

    const start = (currentPage - 1) * productsPerPage;

    const end = start + productsPerPage;

    const pageProducts = products.slice(start, end);

    pageProducts.forEach(product => {

        const productCard = createProductCard(product);

        if (!productCard) {
            return;
        }


        productCard.addEventListener("click", () => {

            navigateProduct(product.id);

            hideSectionsTwo(specificProductDetailSection);

            renderSpecificProductPage(product, specificProductDetailSection);

        }
        );

        container.appendChild(productCard);

    });

    if (pageNumbers) {

        pageNumbers.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {

            const button = document.createElement("button");
            button.textContent = i;
            if (i === currentPage) {
                button.classList.add("active");

            }

            button.addEventListener("click", () => {
                currentPage = i;
                renderFoundProducts(products, container);

            }
            );

            pageNumbers.appendChild(
                button
            );

        }

    }

    if (pagination) {

        pagination.style.display = totalPages > 1 ? "flex" : "none";

    }

    if (prevBtn) {

        prevBtn.disabled = currentPage === 1;

        prevBtn.onclick = () => {

            if (currentPage > 1) {

                currentPage--;

                renderFoundProducts(products, container);

            }

        };

    }

    if (nextBtn) {

        nextBtn.disabled = currentPage === totalPages;

        nextBtn.onclick = () => {

            if (
                currentPage < totalPages
            ) {

                currentPage++;

                renderFoundProducts(products, container);

            }

        };

    }

}

export function renderTodayBest(products, container) {

    if (!container) {
        return;
    }

    if (!Array.isArray(products)) {
        return;
    }

    container.innerHTML = "";

    const chosenProduct = [...products].sort(() => Math.random() - 0.5).slice(0, 4);

    chosenProduct.forEach(product => {

        const todayProductCard = createProductCard(product);

        if (!todayProductCard) {
            return;
        }

        todayProductCard.addEventListener("click", () => {
            if (arrowBackIcon) {

                arrowBackIcon.classList.add("disable-arrow-back");

            }

            navigateProduct(product.id);

            hideSectionsTwo(specificProductDetailSection);

            renderSpecificProductPage(product, specificProductDetailSection);

        }
        );

        container.appendChild(todayProductCard);

    });

}


export function renderMostSellingProducts(products, container) {

    if (!container) {
        return;
    }

    if (!Array.isArray(products)) {
        return;
    }

    container.innerHTML = "";

    const chosenProduct = [...products].sort(() => Math.random() - 0.5).slice(0, 4);
    chosenProduct.forEach(product => {

        const mostSellingCard = createProductCard(product);

        if (!mostSellingCard) {
            return;
        }

        mostSellingCard.addEventListener("click", () => {

            if (arrowBackIcon) {
                arrowBackIcon.classList.add("disable-arrow-back");

            }
            navigateProduct(product.id);

            hideSectionsTwo(specificProductDetailSection);

            renderSpecificProductPage(product, specificProductDetailSection);

        }
        );


        container.appendChild(mostSellingCard);

    });

}

export function renderWeeklyPopularProduct(products, container) {

    if (!container) {
        return;
    }

    if (!Array.isArray(products)) {
        return;
    }

    container.innerHTML = "";

    const chosenProduct = [...products].sort(() => Math.random() - 0.5).slice(0, 4);
    chosenProduct.forEach(product => {

        const weeklyPopularProduct = createProductCard(product);

        if (!weeklyPopularProduct) {
            return;
        }

        weeklyPopularProduct.addEventListener("click", () => {

            if (arrowBackIcon) {

                arrowBackIcon.classList.add("disable-arrow-back");

            }
            navigateProduct(product.id);

            hideSectionsTwo(specificProductDetailSection);

            renderSpecificProductPage(product, specificProductDetailSection);

        }
        );


        container.appendChild(weeklyPopularProduct);

    });

}

