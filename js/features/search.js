import { hideSomething, removeClass } from "../utils/helpers.js";

import { products} from "../data/products.js";

import {renderSearchedProduct} from "../features/products.js";

// =====================================
// SEARCH ELEMENTS
// =====================================

const searchBox =document.querySelector(".search-box");

const searchBar =document.querySelector(".search-bar");

const deals =document.querySelector(".deals");

const newThing =document.querySelector(".new-thing");

const delivery =document.querySelector(".delivery");

const popularCategoriesSection =document.querySelector(".popular-categories-section");

const categories =document.querySelector(".categories");

const categoryArrow =document.querySelector(".category-arrow");

const searchResultSection =document.querySelector(".search-results-section");

const allProducts=Object.values(products).flat();


function searchProducts(searchedText){

if (searchedText === "") {
        popularCategoriesSection.classList.add("pop-cat-section-display");
        searchResultSection.classList.remove("search-result-display");
        searchResultSection.innerHTML ="";

        return;
    }

    // HIDE POPULAR CATEGORIES
    popularCategoriesSection.classList.remove("pop-cat-section-display");
    popularCategoriesSection.classList.remove("display-agin-popular-category");
    categoryArrow.textContent ="keyboard_arrow_down";

   const matchedProducts= allProducts.filter(product=>{
        const productName=product.name.toLocaleLowerCase();
        const productBrand=product.brand.toLocaleLowerCase();
        const productCategory=product.category.toLocaleLowerCase();
        const productType=product.type.toLocaleLowerCase();

        const matchesName=productName.includes(searchedText);
        const matchesBrand=productBrand.includes(searchedText);
        const matchesCategory=productCategory.includes(searchedText);
        const matchesType=productType.includes(searchedText);

        return (matchesName||matchesBrand||matchesCategory||matchesType);

    });

    
    searchResultSection.innerHTML ="";
       if (
           matchedProducts.length === 0
       ) {
   
           searchResultSection.innerHTML = `
   
           <p class="no-result">
   
               No products found
   
           </p>
   
       `;
   
       } else {
   
           renderSearchedProduct(matchedProducts,searchResultSection);
   }
     searchResultSection.classList.add("search-result-display");
}

export function resetSearchBar(){
    searchBar.value="";
}

searchBar.addEventListener("input",()=>{
    const searchedText=searchBar.value.trim().toLowerCase();

    searchProducts(searchedText);
})

searchBar.addEventListener("click",() => {
        hideSomething(deals);
        hideSomething(newThing);
        hideSomething(delivery);
        searchBox.classList.add("search-box-new-width");
        const searchText =searchBar.value.trim().toLowerCase();
        if (searchText === "") {
            popularCategoriesSection.classList.add("pop-cat-section-display");
            searchResultSection.classList.remove("search-result-display");
            
        } else {

            searchProducts(searchText);

        }

    }
);

window.addEventListener("click",event => {
        if (
            !searchResultSection.contains(event.target)
            &&
            !searchBar.contains(event.target)
        ) {

            searchResultSection.classList.remove("search-result-display");

        }

    }
);
// =====================================
// CATEGORY BUTTON
// =====================================

categories.addEventListener("click",() => {
        popularCategoriesSection.classList.toggle("display-agin-popular-category");
        if (
            popularCategoriesSection.classList.contains("display-agin-popular-category")
        ) {

            categoryArrow.textContent ="keyboard_arrow_up";

        } else {

            categoryArrow.textContent ="keyboard_arrow_down";

        }

    }


);
window.addEventListener("click",(e)=>{
    if(!categories.contains(e.target)){
            popularCategoriesSection.classList.remove("display-agin-popular-category");
            categoryArrow.textContent ="keyboard_arrow_down";
    }
})


// =====================================
// CLOSE POPULAR CATEGORIES
// =====================================

window.addEventListener("click",event => {
        if (
            !popularCategoriesSection.contains(event.target)
            &&
            !searchBar.contains(event.target)

        ) {

            removeClass(popularCategoriesSection);
            

        }

    }


);

// =====================================
// RESET SEARCH BOX
// =====================================

window.addEventListener("click",event => {
        if (

            !searchBox.contains(event.target)

        ) {

            searchBox.classList.remove("search-box-new-width");
            removeClass(deals);

            removeClass(newThing);

            removeClass(delivery);

        }

    }


);
