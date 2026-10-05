import { popularCategories } from "../data/products.js";
import { createProductCard, creatPopularCard, createSearchedCard } from "../components/productCard.js";
import { navigateProducts, navigateProduct, hideSections, hideSectionsTwo, showSectionTwo } from "../features/dealCategories.js";
import {
    renderFoundProducts, renderMostSellingProducts, renderTodayBest, renderWeeklyPopularProduct,
    resetCurrentPage
} from "../features/pagination.js";
import { renderSpecificProductPage } from "./specificProduct.js";

const apiLoading = document.querySelector(".products-api-loading");
const apiError = document.querySelector(".products-api-error");
const ecommerceContainer = document.querySelector(".e-commerce-container");

function hideApiLoading() {

    if (apiLoading) {
        apiLoading.style.display = "none";
    }

}

function showApiLoading() {

    if (apiLoading) {
        apiLoading.style.display = "flex";
    }

}

function showApiError(message) {

    if (!apiError) {
        return;
    }

    apiError.innerHTML = `
        <div class="api-error-content">

            <span class="material-symbols-outlined">error</span>

            <h3>Something went wrong</h3>

            <p>${message}</p>

            <button class="retry-api-btn">Try Again</button>

        </div>
    `;

    apiError.style.display = "flex";

    const retryButton =
        apiError.querySelector(".retry-api-btn");

    if (retryButton) {

        retryButton.addEventListener("click", () => {

            window.location.reload();

        });

    }

}

function hideApiError() {

    if (apiError) {
        apiError.style.display = "none";
    }

}


function showStore() {

    if (ecommerceContainer) {
        ecommerceContainer.style.display = "block";
    }

}

export async function getApiProducts() {

    try {

        const response =
            await fetch("https://dummyjson.com/products?limit=0");

        if (!response.ok) {

            throw new Error(
                `Server responded with status ${response.status}`
            );

        }

        const data = await response.json();

        if (
            !data ||
            !Array.isArray(data.products)
        ) {

            throw new Error(
                "Invalid product data received from the server."
            );

        }

        const apiProducts = data.products.map(apiProduct => ({

            id: apiProduct.id,

            name: apiProduct.title || "Unnamed Product",

            category: apiProduct.category || "",

            price: Number(apiProduct.price) || 0,

            image: apiProduct.thumbnail || "",

            description: apiProduct.description || "",

            reviews: Array.isArray(apiProduct.reviews) ? apiProduct.reviews.length : 0,

            rating: Number(apiProduct.rating) || 0,

            quantity: Number(apiProduct.stock) || 0,

            type: apiProduct.category || "",

            color: Array.isArray(apiProduct.color) ? apiProduct.color : [],

            images: Array.isArray(apiProduct.images) ? apiProduct.images : [],

            material: "",

            offer: Number(apiProduct.discountPercentage) || 0,

            brand: apiProduct.brand || "",

            inStock: Number(apiProduct.stock) > 0,

            specifications: {}

        }));


        return apiProducts;

    } catch (error) {

        console.error("Failed to load products:", error
        );

        return [];

    }

}

showApiLoading();

const apiProducts = await getApiProducts();


if (!apiProducts.length) {

    hideApiLoading();

    showApiError("We couldn't load the products. Please check your internet connection and try again.");

    throw new Error("No products were returned from the API.");

}

hideApiError();
hideApiLoading();
showStore();

const gadgetListsContainer = document.querySelector(".gadget-lists-container");
const fashionListsContainer = document.querySelector(".fashion-lists-container");
const toyListsContainer = document.querySelector(".toy-lists-container");
const educationListsContainer = document.querySelector(".education-lists-container");
const beautyListsContainer = document.querySelector(".beauty-lists-container");
const fitnessListsContainer = document.querySelector(".fitness-lists-container");
const furnitureListsContainer = document.querySelector(".furniture-lists-container");
const sneakerListsContainer = document.querySelector(".sneaker-lists-container");
const popularCategoriesContainer = document.querySelector(".popular-categories-section-body");

const productsDetailSection = document.querySelector(".products-detail-section");
const detailHeaderContainer = document.querySelector(".detail-header-container");
const foundProductsList = document.querySelector(".found-products-list");
const detailTitle = document.querySelector(".product-detail-section-main-body h3");

const productTypeText = document.querySelector(".product-type-text");
const productTypeBtn = document.querySelector(".product-type");
const priceTypeBtn = document.querySelector(".price-type");
const reviewListsBtn = document.querySelector(".review-lists");
const colorTypeBtn = document.querySelector(".color-type");
const materialTypeBtn = document.querySelector(".material-type");
const offerTypeBtn = document.querySelector(".offer-type");
const sortBtn = document.querySelector(".sort-btn");
const allFiltersBtn = document.querySelector(".all-filters-btn");

const popularCategoriesSection = document.querySelector(".popular-categories-section");
const categoryArrow = document.querySelector(".category-arrow");
const searchResultSection = document.querySelector(".search-results-section");
const bestDealProductLists = document.querySelector(".best-deal-product-lists");
const mostSellingProductsList = document.querySelector(".most-selling-products-list");
const weeklyPopularProductsList = document.querySelector(".weekly-popular-product-lists");
const specificProductDetailSection = document.querySelector(".specific-product-detail-section");
const searchBar = document.querySelector(".search-bar");

const allProducts = apiProducts;

let currentCategoryProducts = [];

const activeFilters = {

    type: null,

    price: null,

    rating: null,

    color: null,

    material: null,

    offer: null

};


let currentSort = null;

function showCategoryHeader(category) {

    if (!detailHeaderContainer) {
        return;
    }


    const categoryProduct = currentCategoryProducts[0];


    detailHeaderContainer.innerHTML = `

        <div class="product-detail-header-contents">

            <h1>${category} For You</h1>

            <p>${categoryProduct?.description || `Explore our collection of ${category} products.`}</p>

            <button class="btn buy-now-btn">Buy Now</button>

        </div>

        ${categoryProduct
            ? `
                    <img src="${categoryProduct.image}" class="product-details-header-img" alt="${category}">
                `
            : ""
        }

    `;

}

export function renderProducts(products, container) {

    if (!container) return;

    if (!Array.isArray(products)) return;

    container.innerHTML = "";

    const chosenProduct = [...products].slice(0, 8);

    chosenProduct.forEach(product => {

        try {

            const productCard = createProductCard(product);

            if (!productCard) return;


            productCard.addEventListener("click", () => {

                navigateProduct(product.id);

                renderSpecificProductPage(product, specificProductDetailSection);

            });

            container.appendChild(productCard);

        } catch (error) {

            console.error("Failed to render product:", error);

        }

    });

}

export function renderPopularProduct(products, container) {

    if (!container) {
        return;
    }

    if (!Array.isArray(products)) {
        return;
    }

    container.innerHTML = "";

    products.forEach(product => {

        try {

            const popularProduct = creatPopularCard(product);

            if (!popularProduct) {
                return;
            }


            popularProduct.addEventListener("click", () => {

                resetCurrentPage();

                navigateProducts();

                hideSections(productsDetailSection);

                showSectionTwo();

                openPopularProductDetails(
                    product
                );


                if (weeklyPopularProductsList) {

                    weeklyPopularProductsList.classList.add("weekly-popular-on-detail");

                    weeklyPopularProductsList.classList.remove("weekly-popular-product-lists");

                }


                if (popularCategoriesSection) {

                    popularCategoriesSection.classList.remove("pop-cat-section-display");

                    popularCategoriesSection.classList.remove("display-agin-popular-category");

                }


                if (categoryArrow) {

                    categoryArrow.textContent = "keyboard_arrow_down";

                }

            }
            );


            container.appendChild(popularProduct);

        } catch (error) {

            console.error("Failed to render popular product:", error);

        }

    });

}

export function renderSearchedProduct(products, container) {

    if (!container) {
        return;
    }

    if (!Array.isArray(products)) {
        return;
    }


    container.innerHTML = "";


    products.forEach(product => {

        try {

            const searchedCard = createSearchedCard(product);


            if (!searchedCard) {
                return;
            }
            searchedCard.addEventListener("click",
                () => {

                    if (searchBar) {
                        searchBar.value = "";

                        searchBar.classList.remove("border-color");
                    }


                    resetCurrentPage();

                    hideSections(productsDetailSection);

                    navigateProducts();

                    showSectionTwo();

                    hideSectionsTwo(specificProductDetailSection);

                    openProductDetail(product);


                    if (weeklyPopularProductsList) {

                        weeklyPopularProductsList.classList.add("weekly-popular-on-detail");

                        weeklyPopularProductsList.classList.remove("weekly-popular-product-lists");

                    }


                    if (searchResultSection) {

                        searchResultSection.classList.remove("search-result-display");

                    }

                }
            );


            container.appendChild(searchedCard);

        } catch (error) {

            console.error("Failed to render searched product:", error);

        }

    });

}

export function openPopularProductDetails(popularProduct) {

    currentCategoryProducts = allProducts.filter(product => product.category === popularProduct.category);

    activeFilters.price = null;
    activeFilters.color = null;
    activeFilters.offer = null;
    activeFilters.material = null;
    activeFilters.type = null;
    activeFilters.rating = null;

    currentSort = null;

    hideSections();

    showSectionTwo();

    if (detailTitle) {

        detailTitle.textContent = `${popularProduct.category} For You`;

    }

    if (productTypeText) {

        productTypeText.textContent = `${popularProduct.category} Type`;

    }

    showCategoryHeader(popularProduct.category);

    updateFilteredProducts();

}

export function openProductDetail(product) {

    if (!product) {
        return;
    }

    currentCategoryProducts = allProducts.filter(item => item.category === product.category);

    activeFilters.price = null;
    activeFilters.color = null;
    activeFilters.offer = null;
    activeFilters.material = null;
    activeFilters.type = null;
    activeFilters.rating = null;

    currentSort = null;

    if (productsDetailSection) {

        productsDetailSection.style.display = "block";

    }

    if (detailTitle) {

        detailTitle.textContent = `${product.category} For You.`;

    }

    if (productTypeText) {

        productTypeText.textContent = `${product.category} Type`;

    }

    showCategoryHeader(product.category);

    updateFilteredProducts();

}

function openTopCategory(category, categories) {

    if (!Array.isArray(categories)) {
        return;
    }

    currentCategoryProducts = allProducts.filter(product => categories.includes(product.category));

    activeFilters.price = null;
    activeFilters.color = null;
    activeFilters.offer = null;
    activeFilters.material = null;
    activeFilters.type = null;
    activeFilters.rating = null;

    currentSort = null;

    hideSections(productsDetailSection);

    showSectionTwo();

    if (detailTitle) {

        detailTitle.textContent = `${category} For You`;

    }


    if (productTypeText) {

        productTypeText.textContent = `${category} Type`;

    }

    showCategoryHeader(category);

    updateFilteredProducts();

}

function getUniqueValues(property) {

    return [
        ...new Set(currentCategoryProducts.map(product => product[property])
            .filter(value => value !== undefined && value !== null && value !== ""))
    ];

}

function getUniqueColor() {

    const colors = currentCategoryProducts.flatMap(
        product => {

            if (!Array.isArray(product.color)) {
                return [];
            }

            return product.color.flatMap(variant => {

                if (!variant || !Array.isArray(variant.colors)) {

                    return [];

                }

                return variant.colors;

            }
            );

        }
    );


    return [...new Set(colors)];

}


function getFilteredProducts() {

    return currentCategoryProducts.filter(product => {

        if (activeFilters.type !== null && activeFilters.type !== product.type) {

            return false;

        }

        if (
            activeFilters.color !== null
        ) {

            const hasColor = Array.isArray(product.color) && product.color.some(color => Array.isArray(color.colors) &&
                color.colors.includes(activeFilters.color)
            );


            if (!hasColor) {
                return false;
            }

        }

        if (activeFilters.offer !== null && activeFilters.offer > product.offer) {

            return false;

        }

        if (activeFilters.rating !== null && activeFilters.rating > product.rating) {

            return false;

        }

        if (activeFilters.material !== null && activeFilters.material !== product.material) {

            return false;

        }

        if (activeFilters.price !== null) {

            const range = activeFilters.price;
            if (product.price < range.min) {

                return false;

            }

            if (range.max !== null && product.price > range.max) {

                return false;

            }

        }

        return true;

    }
    );

}

function sortProducts(productsArray) {

    const sortedProducts = [...productsArray];
    if (currentSort === "price-low") {
        sortedProducts.sort((a, b) => a.price - b.price);

    }

    if (currentSort === "price-high") {

        sortedProducts.sort((a, b) => b.price - a.price);

    }

    if (currentSort === "rating") {

        sortedProducts.sort((a, b) => b.rating - a.rating);

    }


    return sortedProducts;

}

function updateFilteredProducts() {

    const filteredProducts = getFilteredProducts();

    const sortedProducts = sortProducts(filteredProducts);

    if (!foundProductsList) {

        console.warn("Found products list was not found.");

        return;

    }

    renderFoundProducts(sortedProducts, foundProductsList);

}

function removeAllDropdowns() {

    document.querySelectorAll(".product-filter-dropdown").forEach(element => {
        element.remove();

    });

}

function createDropdown(button, property, filterName, formatValue) {

    if (!button) {
        return;
    }

    button.addEventListener("click", e => {
        e.stopPropagation();

        removeAllDropdowns();

        const dropdown = document.createElement("div");

        const values = getUniqueValues(property);

        dropdown.classList.add("product-filter-dropdown");

        const allOption = document.createElement("p");

        allOption.textContent = "ALL";

        allOption.addEventListener("click", e => {

            e.stopPropagation();

            activeFilters[filterName] = null;

            updateFilteredProducts();

            removeAllDropdowns();

        }
        );


        dropdown.appendChild(allOption);


        values.forEach(value => {

            const option = document.createElement("p");

            option.textContent = formatValue(value);

            option.addEventListener("click", e => {

                e.stopPropagation();

                activeFilters[filterName] = value;

                updateFilteredProducts();

                removeAllDropdowns();

            }
            );

            dropdown.appendChild(option);

        }
        );

        button.appendChild(dropdown);

    }
    );

}

createDropdown(productTypeBtn, "type", "type", value => value);

createDropdown(offerTypeBtn, "offer", "offer", value => `${value}% or more`);

createDropdown(materialTypeBtn, "material", "material", value => value);

createDropdown(reviewListsBtn, "rating", "rating", value => `${value}+ ⭐`);


if (colorTypeBtn) {

    colorTypeBtn.addEventListener("click", e => {

        e.stopPropagation();

        removeAllDropdowns();

        const dropdown = document.createElement("div");

        const uniqueColors = getUniqueColor();

        dropdown.classList.add("product-filter-dropdown"
        );

        const allOption = document.createElement("p");

        allOption.textContent = "ALL";

        allOption.addEventListener("click", e => {

            e.stopPropagation();

            activeFilters.color = null;

            updateFilteredProducts();

            removeAllDropdowns();

        }
        );

        dropdown.appendChild(allOption);

        uniqueColors.forEach(color => {

            const option = document.createElement("p");

            option.textContent = color;

            option.addEventListener("click", e => {

                e.stopPropagation();

                activeFilters.color = color;

                updateFilteredProducts();

                removeAllDropdowns();

            }
            );

            dropdown.appendChild(option);

        }
        );


        colorTypeBtn.appendChild(dropdown);

    }
    );

}

const priceRanges = [

    { label: "UNDER 50$", min: 0, max: 49 },

    { label: "50$-100$", min: 50, max: 99 },

    { label: "100-300$", min: 100, max: 299 },

    { label: "300-500", min: 300, max: 449 },

    { label: "MORE THAN 500$", min: 500, max: null }

];


if (priceTypeBtn) {

    priceTypeBtn.addEventListener("click", e => {

        e.stopPropagation();

        removeAllDropdowns();

        const dropdown = document.createElement("div");

        dropdown.classList.add("product-filter-dropdown");

        const allOption = document.createElement("p");


        allOption.textContent = "ALL";

        allOption.addEventListener("click", e => {

            e.stopPropagation();

            activeFilters.price = null;

            updateFilteredProducts();

            removeAllDropdowns();

        }
        );

        dropdown.appendChild(allOption);

        priceRanges.forEach(range => {

            const option = document.createElement("p");

            option.textContent = range.label;

            option.addEventListener("click", e => {

                e.stopPropagation();

                activeFilters.price = range;

                updateFilteredProducts();

                removeAllDropdowns();

            }
            );

            dropdown.appendChild(option);

        }
        );


        priceTypeBtn.appendChild(dropdown);

    }
    );

}


if (sortBtn) {

    sortBtn.addEventListener("click", e => {

        e.stopPropagation();

        removeAllDropdowns();

        const dropdown = document.createElement("div");

        dropdown.classList.add("product-filter-dropdown");

        const sortOptions = [

            { label: "Default", value: null },

            { label: "Price: Low to High", value: "price-low" },

            { label: "Price: High to Low", value: "price-high" },

            { label: "Highest Rated", value: "rating" }

        ];

        sortOptions.forEach(sort => {

            const option = document.createElement("p");

            option.textContent = sort.label;

            option.addEventListener("click", e => {

                e.stopPropagation();

                currentSort = sort.value;

                updateFilteredProducts();

                removeAllDropdowns();

            }
            );

            dropdown.appendChild(option);

        }
        );


        sortBtn.appendChild(dropdown);

    }
    );

}


window.addEventListener("click", () => {

    removeAllDropdowns();

}
);


if (allFiltersBtn) {

    allFiltersBtn.addEventListener("click", e => {

        e.stopPropagation();

        removeAllDropdowns();

        const dropdown = document.createElement("div");


        dropdown.classList.add("product-filter-dropdown");

        dropdown.classList.add("all-filters-dropdown");

        const title = document.createElement("h4");

        title.textContent = "All Filters";

        dropdown.appendChild(title);

        function createFilterItem(label, button) {

            const item = document.createElement("p");

            item.textContent = label;

            item.addEventListener("click", e => {

                e.stopPropagation();

                removeAllDropdowns();

                if (button) {

                    button.click();

                }

            }
            );

            dropdown.appendChild(item);

        }

        createFilterItem("Type", productTypeBtn);

        createFilterItem("Price", priceTypeBtn);

        createFilterItem("Rating", reviewListsBtn);

        createFilterItem("Color", colorTypeBtn);

        createFilterItem("Material", materialTypeBtn);

        createFilterItem("Offer", offerTypeBtn);

        const clearButton = document.createElement("button");

        clearButton.textContent = "Clear All Filters";

        clearButton.classList.add("clear-all-filters-btn");

        clearButton.addEventListener("click", e => {

            e.stopPropagation();

            activeFilters.type = null;
            activeFilters.price = null;
            activeFilters.rating = null;
            activeFilters.color = null;
            activeFilters.material = null;
            activeFilters.offer = null;

            currentSort = null;

            updateFilteredProducts();

            removeAllDropdowns();

        }
        );

        dropdown.appendChild(clearButton);

        allFiltersBtn.appendChild(
            dropdown
        );

    }
    );

}

renderPopularProduct(popularCategories, popularCategoriesContainer);

renderMostSellingProducts(
    apiProducts.filter(product => product.quantity > 90), mostSellingProductsList);

renderWeeklyPopularProduct(
    apiProducts.filter(product => product.quantity < 80), weeklyPopularProductsList);

renderTodayBest(
    apiProducts.filter(product => product.quantity > 80), bestDealProductLists);

renderProducts(
    apiProducts.filter(product =>
        [
            "laptops",
            "smartphones",
            "tablets",
            "mobile-accessories"
        ].includes(
            product.category
        )
    ),
    gadgetListsContainer
);


renderProducts(
    apiProducts.filter(
        product =>
            [
                "mens-shirts",
                "mens-shoes",
                "mens-watches",
                "tops",
                "womens-dresses",
                "womens-shoes",
                "womens-watches",
                "womens-bags",
                "womens-jewellery"
            ].includes(
                product.category
            )
    ),
    fashionListsContainer
);

renderProducts(
    apiProducts.filter(
        product =>
            [
                "vehicle",
                "vehicle"
            ].includes(
                product.category
            )
    ),
    toyListsContainer
);


renderProducts(
    apiProducts.filter(
        product =>
            [
                "groceries"
            ].includes(
                product.category
            )
    ),
    educationListsContainer
);


renderProducts(
    apiProducts.filter(
        product =>
            [
                "beauty",
                "skin-care",
                "fragrances"
            ].includes(
                product.category
            )
    ),
    beautyListsContainer
);

renderProducts(
    apiProducts.filter(
        product =>
            [
                "sports-accessories"
            ].includes(
                product.category
            )
    ),
    fitnessListsContainer
);

renderProducts(
    apiProducts.filter(
        product =>
            [
                "furniture",
                "home-decoration"
            ].includes(
                product.category
            )
    ),
    furnitureListsContainer
);

renderProducts(
    apiProducts.filter(
        product =>
            [
                "mens-shoes",
                "womens-shoes"
            ].includes(
                product.category
            )
    ),
    sneakerListsContainer
);

const topFurniture = document.querySelector(".top-furniture");
const topHandBag = document.querySelector(".top-hand-bag");
const topBooks = document.querySelector(".top-books");
const topTech = document.querySelector(".top-tech");
const topSneakers = document.querySelector(".top-sneakers");
const topTravel = document.querySelector(".top-travel");

if (topFurniture) {

    topFurniture.addEventListener("click", () => {

        navigateProducts();

        openTopCategory("Furniture",
            [
                "furniture",
                "home-decoration"
            ]
        );

    }
    );

}


if (topHandBag) {

    topHandBag.addEventListener("click", () => {

        navigateProducts();

        openTopCategory("Hand Bag",
            [
                "womens-bags"
            ]
        );

    }
    );

}


if (topBooks) {

    topBooks.addEventListener("click", () => {

        navigateProducts();

        openTopCategory("Watches",
            [
                "mens-watches",
                "womens-watches"
            ]
        );

    }
    );

}


if (topTech) {

    topTech.addEventListener("click", () => {

        navigateProducts();

        openTopCategory("Tech",
            [
                "laptops",
                "smartphones",
                "tablets",
                "mobile-accessories"
            ]
        );

    }
    );

}

if (topSneakers) {

    topSneakers.addEventListener("click", () => {

        navigateProducts();

        openTopCategory("Sneakers",
            [
                "mens-shoes",
                "womens-shoes"
            ]
        );

    }
    );

}

if (topTravel) {

    topTravel.addEventListener("click", () => {

        navigateProducts();

        openTopCategory("Smartphones",
            [
                "smartphones"
            ]
        );

    }
    );

}

function openSavingProducts(savingAmount, categories) {

    if (!Array.isArray(categories)) {
        return;
    }

    currentCategoryProducts = allProducts.filter(product => categories.includes(product.category));

    activeFilters.type = null;
    activeFilters.price = null;
    activeFilters.rating = null;
    activeFilters.color = null;
    activeFilters.material = null;
    activeFilters.offer = null;

    currentSort = null;


    hideSections(productsDetailSection);

    showSectionTwo();

    if (detailTitle) {

        detailTitle.textContent = `Save $${savingAmount} Products`;

    }

    if (productTypeText) {

        productTypeText.textContent = `Save $${savingAmount}`;

    }

    showCategoryHeader(categories[0]);


    updateFilteredProducts();

}


const oneHundredDescount = document.querySelector(".one-hundred-descount");
const twentyNigneDescount = document.querySelector(".twenty-nigne-descount");
const sixtySevenDescount = document.querySelector(".sixty-seven-descount");
const fivtyNineDescount = document.querySelector(".fivty-nine-descount");

if (oneHundredDescount) {

    oneHundredDescount.addEventListener("click", () => {

        navigateProducts();

        openSavingProducts(100,
            [
                "furniture",
                "home-decoration"
            ]
        );

    }
    );

}


if (twentyNigneDescount) {

    twentyNigneDescount.addEventListener("click", () => {

        navigateProducts();

        openSavingProducts(29,
            [
                "motorcycle"
            ]
        );

    }
    );

}

if (sixtySevenDescount) {

    sixtySevenDescount.addEventListener("click", () => {

        navigateProducts();

        openSavingProducts(67,
            [
                "mens-shirts",
                "mens-shoes",
                "mens-watches",
                "tops",
                "womens-dresses",
                "womens-shoes",
                "womens-watches",
                "womens-bags",
                "womens-jewellery"
            ]
        );

    }
    );

}


if (fivtyNineDescount) {

    fivtyNineDescount.addEventListener("click", () => {

        navigateProducts();

        openSavingProducts(59,
            [
                "sunglasses"
            ]
        );

    }
    );

}


const shopNowBtnOne = document.querySelector(".shop-now-btn-one");
const shopNowBtnTwo = document.querySelector(".shop-now-btn-two");

if (shopNowBtnOne) {

    shopNowBtnOne.addEventListener("click", () => {

        navigateProducts();

        openTopCategory("Furniture",
            [
                "furniture",
                "home-decoration"
            ]
        );

    }
    );

}


if (shopNowBtnTwo) {

    shopNowBtnTwo.addEventListener("click", () => {

        navigateProducts();

        openTopCategory("Men's Shirts",
            [
                "mens-shirts"
            ]
        );

    }
    );

}