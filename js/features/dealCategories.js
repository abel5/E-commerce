const gadgetLink =document.querySelector(".gadget-link");

const fashionLink =document.querySelector(".fashion-link");

const toyLink =document.querySelector(".toy-link");

const educationLink =document.querySelector(".education-link");

const beautyLink =document.querySelector(".beauty-link");

const fitnessLink =document.querySelector(".fitness-link");

const furnitureLink =document.querySelector(".furniture-link");

const sneakerLink =document.querySelector(".sneaker-link");

const dealLinks =document.querySelectorAll(".deal-links");

const allBestDealLinks =document.querySelector(".all-best-deal-links");

const toyListsContainer =document.querySelector(".toy-lists-container");

const educationListsContainer =document.querySelector(".education-lists-container");

const beautyListsContainer =document.querySelector(".beauty-lists-container");

const fitnessListsContainer =document.querySelector(".fitness-lists-container");

const furnitureListsContainer =document.querySelector(".furniture-lists-container");

const sneakerListsContainer =document.querySelector(".sneaker-lists-container");

const gadgetListsContainer =document.querySelector(".gadget-lists-container");

const fashionListsContainer =document.querySelector(".fashion-lists-container");



dealLinks.forEach(link => {
    link.addEventListener("click", () => {

    const selectedLink =
        allBestDealLinks.querySelector(".active-link");


    if (selectedLink) {

        selectedLink.classList.remove(
            "active-link"
        );

    }


    link.classList.add("active-link");

});


});

export function displaySection(section) {


[
    fashionListsContainer,
    gadgetListsContainer,
    toyListsContainer,
    educationListsContainer,
    fitnessListsContainer,
    beautyListsContainer,
    furnitureListsContainer,
    sneakerListsContainer
].forEach(item => {

    item.style.display="none";

});

section.style.display="flex";



}


gadgetLink.addEventListener("click", () => {
displaySection(gadgetListsContainer);
});

fashionLink.addEventListener("click", () => {
displaySection(fashionListsContainer);
});

toyLink.addEventListener("click", () => {
displaySection(toyListsContainer);
});

educationLink.addEventListener("click", () => {
displaySection(educationListsContainer);
});

beautyLink.addEventListener("click", () => {
displaySection(beautyListsContainer);
});

fitnessLink.addEventListener("click", () => {
displaySection(fitnessListsContainer);
});

furnitureLink.addEventListener("click", () => {
displaySection(furnitureListsContainer);
});

sneakerLink.addEventListener("click", () => {
displaySection(sneakerListsContainer);
});

const homePage=document.querySelector(".home-page");
const topCategoriesContainer=document.querySelector(".top-categories-container");
const bestDealsContainer=document.querySelector(".best-deals-container");
const chooseByBrandContainer=document.querySelector(".choose-by-brand-container");
const descountShowContainer=document.querySelector(".descount-show-container");
const cashBackSectionOne=document.querySelector(".cash-back-section-1");
const allBestDealListsContainer=document.querySelector(".all-best-deal-lists-container");
const cashBackSectionTwo=document.querySelector(".cash-back-section-2");
const mostSellingProductContainer=document.querySelector(".most-selling-product-container");
const trendingProductsContainer=document.querySelector(".trending-products-container");
const bestSeelingStoreContainer=document.querySelector(".best-seeling-store-container");
const productsDetailSection =document.querySelector(".products-detail-section");
const weeklyPopularProductsContainer=document.querySelector(".weekly-popular-products");
export function hideSections(section){
    [homePage,topCategoriesContainer,bestDealsContainer,
     chooseByBrandContainer,descountShowContainer,
     cashBackSectionOne,allBestDealListsContainer,
     cashBackSectionTwo,mostSellingProductContainer,
     trendingProductsContainer,bestSeelingStoreContainer, 
    
    ].forEach(item=>{
       item.style.display="none";
    })
    section.style.display="block";
}

export function hideSectionsTwo(section){
     [homePage,topCategoriesContainer,bestDealsContainer,
     chooseByBrandContainer,descountShowContainer,
     cashBackSectionOne,allBestDealListsContainer,
     cashBackSectionTwo,mostSellingProductContainer,
     trendingProductsContainer,bestSeelingStoreContainer,  
      weeklyPopularProductsContainer, productsDetailSection
    ].forEach(item=>{
       item.style.display="none";
    })
    section.style.display="flex";

}

