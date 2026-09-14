
import {products,popularCategories} from "../data/products.js";
import {createProductCard,creatPopularCard,createSearchedCard} from "../components/productCard.js";
import { hideSections, hideSectionsTwo } from "../features/dealCategories.js";
import { categoryDetails } from "../data/products.js";
import { renderFoundProducts, renderMostSellingProducts, renderTodayBest, renderWeeklyPopularProduct } from "../features/pagination.js";
import { resetCurrentPage } from "../features/pagination.js";
import { resetSearchBar } from "./search.js";

// HOMEPAGE CONTAINERS
const gadgetListsContainer =document.querySelector(".gadget-lists-container");
const fashionListsContainer =document.querySelector(".fashion-lists-container");
const toyListsContainer =document.querySelector(".toy-lists-container");
const educationListsContainer =document.querySelector(".education-lists-container");
const beautyListsContainer =document.querySelector(".beauty-lists-container");
const fitnessListsContainer =document.querySelector(".fitness-lists-container");
const furnitureListsContainer =document.querySelector(".furniture-lists-container");
const sneakerListsContainer =document.querySelector(".sneaker-lists-container");
const popularCategoriesContainer =document.querySelector(".popular-categories-section-body");
// PRODUCT DETAIL ELEMENTS
const productsDetailSection =document.querySelector(".products-detail-section");
const detailHeaderContainer =document.querySelector(".detail-header-container");
const foundProductsList =document.querySelector(".found-products-list");
const detailTitle =document.querySelector(".product-detail-section-main-body h3");
// FILTER BUTTONS
const productTypeText =document.querySelector(".product-type-text");

const productTypeBtn =document.querySelector(".product-type");
const priceTypeBtn =document.querySelector(".price-type");
const reviewListsBtn =document.querySelector(".review-lists");
const colorTypeBtn =document.querySelector(".color-type");
const materialTypeBtn =document.querySelector(".material-type");
const offerTypeBtn =document.querySelector(".offer-type");
const sortBtn =document.querySelector(".sort-btn");
const popularCategoriesSection =document.querySelector(".popular-categories-section");
const categoryArrow =document.querySelector(".category-arrow");
const searchResultSection =document.querySelector(".search-results-section");
const bestDealProductLists=document.querySelector(".best-deal-product-lists");
const mostSellingProductsList=document.querySelector(".most-selling-products-list");
const weeklyPopularProductsList=document.querySelector(".weekly-popular-product-lists");
const specificProductDetailSection=document.querySelector(".specific-product-detail-section");

// GET ALL PRODUCTS

const allProducts=Object.values(products).flat();
let currentCategoryProducts=[];
const activeFilters={
    type: null,
    price: null,
    rating: null,
    color: null,
    material: null,
    offer: null
};
let currentSort=null;


function showCategoryHeader(category) {

    const details = categoryDetails[category];

    if (!details) return;

    detailHeaderContainer.innerHTML = `

        <div class="product-detail-header-contents">

            <h1>
                ${category} For You
            </h1>

            <p>
                ${details.description}
            </p>

            <button class="btn buy-now-btn">
                Buy Now
            </button>

        </div>


        <img
            src="images/${details.image}"
            class="product-details-header-img"
            alt="${category}"
        >

    `;

}

export function renderProducts(products,container){
    if(!container) return;
    container.innerHTML="";
    const chosedProduct=[...products].slice(0,4);
    chosedProduct.forEach(product => {
        const productCard=createProductCard(product);
         productCard.addEventListener("click",()=>{
            hideSectionsTwo(specificProductDetailSection);
         })
       
        container.appendChild(productCard);
    });

}


export function renderPopularProduct(products,container){
   if(!container) return;

   container.innerHTML="";
   products.forEach(product=>{
    const popularproduct=creatPopularCard(product);
    
    popularproduct.addEventListener("click",()=>{
       
        resetCurrentPage();
         hideSections(productsDetailSection);
        openPopularProductDetails(product);
           popularCategoriesSection.classList.remove("pop-cat-section-display");
           popularCategoriesSection.classList.remove("display-agin-popular-category");
           categoryArrow.textContent ="keyboard_arrow_down";
          

    })
    container.appendChild(popularproduct);
   })
}

export function renderSearchedProduct(products,container){
      
    if(!container) return;

    container.innerHTML="";

    products.forEach(product=>{
        const searchedCard=createSearchedCard(product);
        searchedCard.addEventListener("click",()=>{
            resetSearchBar();
            resetCurrentPage();
             hideSections(productsDetailSection);
            openProductDetail(product);
             searchResultSection.classList.remove("search-result-display");
            
        });
         container.appendChild(searchedCard);
    })
   ;
}

export function openPopularProductDetails(popularCategories){

    currentCategoryProducts = allProducts.filter(product =>
        product.category === popularCategories.category
    );

    activeFilters.price = null;
    activeFilters.color = null;
    activeFilters.offer = null;
    activeFilters.material = null;
    activeFilters.type = null;
    activeFilters.rating = null;

    currentSort = null;

    hideSections(productsDetailSection);


    if(detailTitle){
        detailTitle.textContent =
        `${popularCategories.category} For You`;
    }


    if(productTypeText){
        productTypeText.textContent =
        `${popularCategories.category} Type`;
    }


    // ADD THIS
    showCategoryHeader(popularCategories.category);


    updateFilteredProducts();

}
export function openProductDetail(product){

    currentCategoryProducts = allProducts.filter(item =>
        item.category === product.category
    );

    activeFilters.price = null;
    activeFilters.color = null;
    activeFilters.offer = null;
    activeFilters.material = null;
    activeFilters.type = null;
    activeFilters.rating = null;

    currentSort = null;

    if(productsDetailSection){
        productsDetailSection.style.display = "block";
    }

    if(detailTitle){
        detailTitle.textContent =
        `${product.category} For You.`;
    }

    if(productTypeText){
        productTypeText.textContent =
        `${product.category} Type`;
    }


    // CATEGORY HEADER
    showCategoryHeader(product.category);


    updateFilteredProducts();

}

function getUniqueValues(property) {
return [
    ...new Set(
        currentCategoryProducts
            .map(
                product =>
                    product[property]
            )
            .filter(
                value =>
                    value !== undefined
            )

    )
];
}

function getFilteredProducts(){
return currentCategoryProducts.filter(product=>{
    if((activeFilters.type!==null)&&(activeFilters.type!==product.type)){
        return false;
    }
    if((activeFilters.color!==null)&&(activeFilters.color!==product.color)){
        return false;
    }

    if((activeFilters.offer!==null)&&(activeFilters.offer<product.offer)){
        return false;
    }
    if((activeFilters.rating!==null)&&(activeFilters.rating<product.rating)){
        return false;
    }
    if((activeFilters.material!==null)&&(activeFilters.material!==product.material)){
        return false;
    }
    if(activeFilters.price!==null){
        const range=activeFilters.price;
        if(product.price<range.min){
            return false;
        }
         if (range.max !== null&&product.price >range.max) {
                return false;
            }
    }
    return true;
})

}

function sortProducts(productsArray) {

const sortedProducts =[...productsArray];
if (currentSort ==="price-low") {
    sortedProducts.sort((a, b) =>a.price -b.price);
}

if (currentSort ==="price-high") {sortedProducts.sort(
        (a, b) =>b.price -a.price);

}

if (currentSort ==="rating") {
    sortedProducts.sort((a, b) =>b.rating - a.rating);
}
return sortedProducts;
}

function updateFilteredProducts(){
    const filteredProducts=getFilteredProducts();
   const sortedProducts= sortProducts(filteredProducts);
   renderFoundProducts(sortedProducts,foundProductsList);
}

function removeAllDropdowns(){
    document.querySelectorAll(".product-filter-dropdown").forEach(element=>{
        element.remove();
    })
}

function createDropdown(button,property,filterName,formatValue){
    if(!button) return;

    button.addEventListener("click",(e)=>{
        e.stopPropagation();
     removeAllDropdowns();
        const dropdown=document.createElement("div");
        const values=getUniqueValues(property);
        dropdown.classList.add("product-filter-dropdown");
        const alloption=document.createElement("p");
        alloption.textContent="ALL";
        alloption.addEventListener("click",(e)=>{
            e.stopPropagation();
            activeFilters[filterName]=null;
            updateFilteredProducts();
            removeAllDropdowns();
        })
       
         dropdown.appendChild(alloption);
 
    values.forEach(value=>{
        const options=document.createElement("p");
        options.textContent=formatValue(value);

        options.addEventListener("click",(e)=>{
          e.stopPropagation();
          activeFilters[filterName]=value;
          updateFilteredProducts();
          removeAllDropdowns();
        })
        dropdown.appendChild(options);
    })

    button.appendChild(dropdown);

    })
}
    createDropdown(productTypeBtn,"type","type",value=>value);
    createDropdown(colorTypeBtn,"color","color",value=>value);
   createDropdown(offerTypeBtn,"offer","offer",value =>`${value}% or more`);
    createDropdown(materialTypeBtn,"material","material",value=>value);
    createDropdown(reviewListsBtn,"rating","rating",value =>`${value}+ ⭐`);

    const priceRanges=[
                {label:"UNDER 50$",min:0,max:49},
                {label:"50$-100$",min:50,max:99},
                {label:"100-300$",min:100,max:299},
                {label:"300-500",min:300,max:449},
                {label:"MORE THAN 500$",min:500,max:null}  
            ];

    if(priceTypeBtn)priceTypeBtn.addEventListener("click",(e)=>{
            e.stopPropagation();
            removeAllDropdowns();
            const dropdown=document.createElement("div");
            dropdown.classList.add("product-filter-dropdown");
            const alloption=document.createElement("p");
            alloption.textContent="ALL";
            alloption.addEventListener("click",(e)=>{
                e.stopPropagation();
                activeFilters.price=null;
              updateFilteredProducts();
               removeAllDropdowns();
            })
            dropdown.appendChild(alloption);
            

           priceRanges.forEach(range=>{
            const options=document.createElement("p");
            options.textContent=range.label;
            options.addEventListener("click",(e)=>{
                e.stopPropagation();
                activeFilters.price=range;
                updateFilteredProducts();
                 removeAllDropdowns();
            })
            dropdown.appendChild(options);
           })

           priceTypeBtn.appendChild(dropdown);
            
        })

        if(sortBtn) sortBtn.addEventListener("click",(e)=>{
            e.stopPropagation();
            removeAllDropdowns();
            const dropdown=document.createElement("div");
            dropdown.classList.add("product-filter-dropdown");
             const sortOptions = [{label:"Default",value:null},
            {   label:"Price: Low to High",
                value:"price-low"},
            {  label: "Price: High to Low",
                value:"price-high"},
            {   label:"Highest Rated",
                value:"rating"}

        ];

    sortOptions.forEach(sort=>{
        const options=document.createElement("p");
        options.textContent=sort.label;

        options.addEventListener("click",(e)=>{
            e.stopPropagation();
            currentSort=sort.value;
            updateFilteredProducts();
             removeAllDropdowns();
        })
        dropdown.appendChild(options);
    })
    sortBtn.appendChild(dropdown);

        })

        window.addEventListener("click",()=>{
            removeAllDropdowns();
        })
    

renderWeeklyPopularProduct(allProducts,weeklyPopularProductsList);
renderMostSellingProducts(allProducts,mostSellingProductsList);
renderTodayBest(allProducts,bestDealProductLists);        
renderPopularProduct(popularCategories,popularCategoriesContainer);
renderProducts(products.gadgets,gadgetListsContainer);
renderProducts(products.fashion,fashionListsContainer);
renderProducts(products.toys,toyListsContainer);
renderProducts(products.education,educationListsContainer);
renderProducts(products.beauty,beautyListsContainer);

renderProducts(products.fitness,fitnessListsContainer);
renderProducts(products.furniture,furnitureListsContainer);
renderProducts(products.sneakers,sneakerListsContainer);