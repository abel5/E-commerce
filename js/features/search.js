import { hideSomething, removeClass } from "../utils/helpers.js";
import { openProductDetail, renderSearchedProduct } from "../features/products.js";
import { navigateProducts, hideSections, showSectionTwo } from "./dealCategories.js";
import { getApiProducts } from "../features/products.js";

const searchBox = document.querySelector(".search-box");
const searchBar = document.querySelector(".search-bar");
const deals = document.querySelector(".deals");
const newThing = document.querySelector(".new-thing");
const delivery = document.querySelector(".delivery");
const popularCategoriesSection = document.querySelector(".popular-categories-section");
const categories = document.querySelector(".categories");
const categoryArrow = document.querySelector(".category-arrow");
const searchResultSection = document.querySelector(".search-results-section");
const searchIcon = document.querySelector(".search-icon");
const weeklyPopularProductsList = document.querySelector(".weekly-popular-products-lists");


const apiProducts = await getApiProducts();

const allProducts = apiProducts;

export function resetSearchBar() {

    if (searchBar) {
        searchBar.value = "";
    }

}


if (searchIcon) {

    searchIcon.addEventListener("click", (e) => {

        e.stopPropagation();

        const searchedText =
            searchBar.value.trim().toLowerCase();


        if (searchedText === "") {

            window.alert("please fill the field!");

            searchBar.focus();

            searchBar.classList.add("border-color");

            return;
        }


        searchBar.classList.remove("border-color");


        const matchedProducts = allProducts.filter(product => {

            const productName = (product.name || "").toLowerCase();

            const productBrand = (product.brand || "").toLowerCase();

            const productCategory = (product.category || "").toLowerCase();

            const productType = (product.type || "").toLowerCase();


            return (productName.includes(searchedText) || productBrand.includes(searchedText) ||
                productCategory.includes(searchedText) || productType.includes(searchedText));

        });


        if (matchedProducts.length === 0) {

            window.alert("Product not found!");

            searchBar.focus();

            return;
        }

        navigateProducts();

        hideSections();

        showSectionTwo();

        resetSearchBar();


        searchResultSection.classList.remove("search-result-display");

        if (weeklyPopularProductsList) {

            weeklyPopularProductsList.classList.add("weekly-popular-on-detail");

            weeklyPopularProductsList.classList.remove("weekly-popular-product-lists");
        }


        openProductDetail(matchedProducts[0]);

    });

}

function searchProducts(searchedText) {

    if (searchedText === "") {

        popularCategoriesSection.classList.add("pop-cat-section-display");

        searchResultSection.classList.remove("search-result-display");

        searchResultSection.innerHTML = "";

        return;
    }


    popularCategoriesSection.classList.remove("pop-cat-section-display");

    popularCategoriesSection.classList.remove("display-agin-popular-category");

    categoryArrow.textContent = "keyboard_arrow_down";


    const matchedProducts = allProducts.filter(product => {

        const productName = (product.name || "").toLowerCase();

        const productBrand = (product.brand || "").toLowerCase();

        const productCategory = (product.category || "").toLowerCase();

        const productType = (product.type || "").toLowerCase();


        const matchesName = productName.includes(searchedText);

        const matchesBrand = productBrand.includes(searchedText);

        const matchesCategory = productCategory.includes(searchedText);

        const matchesType = productType.includes(searchedText);


        return (matchesName || matchesBrand || matchesCategory || matchesType);

    });

    searchResultSection.innerHTML = "";


    if (
        matchedProducts.length === 0
    ) {

        searchResultSection.innerHTML = `
   
        <p class="no-result">No products found</p>
   
        `;

        return;

    }


    renderSearchedProduct(matchedProducts, searchResultSection);


    searchResultSection.classList.add("search-result-display");

}


if (searchBar) {

    searchBar.addEventListener("input", () => {

        const searchedText = searchBar.value.trim().toLowerCase();

        searchProducts(searchedText);

    })

};


if (searchBar) {

    searchBar.addEventListener("click", () => {

        hideSomething(deals);

        hideSomething(newThing);

        hideSomething(delivery);

        searchBox.classList.add(
            "search-box-new-width"
        );

        const searchText = searchBar.value.trim().toLowerCase();

        if (searchText === "") {

            popularCategoriesSection.classList.add("pop-cat-section-display");

            searchResultSection.classList.remove("search-result-display");

        } else {

            searchProducts(searchText);

        }

    }
    )

};


window.addEventListener("click", event => {

    if (searchResultSection && searchBar && !searchResultSection.contains(event.target)
        && !searchBar.contains(event.target)) {

        searchResultSection.classList.remove("search-result-display");

    }

});

if (categories) {

    categories.addEventListener("click", () => {

        popularCategoriesSection.classList.toggle("display-agin-popular-category");

        if (
            popularCategoriesSection.classList.contains("display-agin-popular-category")) {

            categoryArrow.textContent = "keyboard_arrow_up";

        } else {

            categoryArrow.textContent = "keyboard_arrow_down";

        }

    }

    )

};


window.addEventListener("click", (e) => {

    if (categories && popularCategoriesSection &&
        categoryArrow && !categories.contains(e.target)) {

        popularCategoriesSection.classList.remove("display-agin-popular-category");

        categoryArrow.textContent = "keyboard_arrow_down";

    }

})


window.addEventListener("click", event => {

    if (popularCategoriesSection && searchBar &&
        !popularCategoriesSection.contains(event.target) && !searchBar.contains(event.target)) {

        removeClass(popularCategoriesSection);

    }

});

window.addEventListener("click", event => {

    if (searchBox && !searchBox.contains(event.target)) {

        searchBox.classList.remove("search-box-new-width");

        removeClass(deals);

        removeClass(newThing);

        removeClass(delivery);

    }

});

const emptyCartMessage = document.querySelector(".empty-cart-message");


export function checkEmptyCart(cartProducts) {

    if (!emptyCartMessage) return;

    if (cartProducts.length === 0) {

        emptyCartMessage.style.display = "block";

    } else {

        emptyCartMessage.style.display = "none";

    }

}


const checkOutBtn = document.querySelector(".checkout-btn");


export function updatePayButton(cartProducts) {

    if (!checkOutBtn) return;

    if (cartProducts.length === 0) {

        checkOutBtn.disabled = true;

    } else {

        checkOutBtn.disabled = false;

    }

}


const translations = {

    en: {

        welcome: "Shopping And Department Store.",

        description: "Shopping is a bit of relaxing hobby for me which is somethimes troubling for the bank balance.",

        shopNow: "Shop Now"

    },


    fr: {

        welcome: "Shopping et grand magasin.",

        description: "Le shopping est un passe-temps plutôt relaxant pour moi, même s’il met parfois mon budget bancaire à rude épreuve.",

        shopNow: " En savoir plus."

    },


    am: {

        welcome: "ግዢ እና የገበያ ሱቅ።",

        description: "ግዢ ለእኔ ትንሽ ዘና የሚያደርግ የትርፍ ጊዜ ማሳለፊያ ነው፤ አንዳንድ ጊዜ ግን የባንክ ሂሳቤን ይፈትነዋል።",

        shopNow: "ተጨማሪ ይወቁ"

    }

};


const languageSelect = document.querySelector("#language-select");

languageSelect.addEventListener("change", () => {

    const language = languageSelect.value;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        element.textContent = translations[language][key];

    });

});

const menuIcon = document.querySelector(".menu-icon");

const mainNavList = document.querySelector(".main-nav-list");

menuIcon.addEventListener("click", () => {

    mainNavList.classList.toggle("active");

})

