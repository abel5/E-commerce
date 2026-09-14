import { createProductCard } from "../components/productCard.js";
import { hideSectionsTwo } from "./dealCategories.js";
import { renderSpecificProductPage } from "./specificProduct.js";



const pagination = document.querySelector(".pagination");
const prevBtn = document.querySelector(".prev-btn");
const pageNumbers = document.querySelector(".page-numbers");
const nextBtn = document.querySelector(".next-btn");
const specificProductDetailSection=document.querySelector(".specific-product-detail-section");


let currentPage = 1;
const productsPerPage = 4;

export function resetCurrentPage(){
    currentPage=1;
}

export function renderFoundProducts(products, container) {

    if (!container) return;

    container.innerHTML = "";

    const totalPages = Math.ceil(products.length / productsPerPage);

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;

    const pageProducts = products.slice(start, end);


    pageProducts.forEach(product => {

        const productCard = createProductCard(product);
        
        productCard.addEventListener("click",()=>{
           hideSectionsTwo(specificProductDetailSection);
           renderSpecificProductPage(product,specificProductDetailSection);
        })
        container.appendChild(productCard);

    });


    // PAGE NUMBERS

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

        });


        pageNumbers.appendChild(button);

    }


    // PREVIOUS BUTTON

    prevBtn.disabled = currentPage === 1;
    if(totalPages===1){
        pagination.style.display="none";
    }else{
    pagination.style.display="flex";
    }

   
    prevBtn.onclick = () => {

        if (currentPage > 1) {

            currentPage--;

            renderFoundProducts(products, container);

        }

    };


    // NEXT BUTTON

    nextBtn.disabled = currentPage === totalPages;

    nextBtn.onclick = () => {

        if (currentPage < totalPages) {

            currentPage++;

            renderFoundProducts(products, container);

        }

    };

}

export function renderTodayBest(products,container){

    if(!container) return;
    container.innerHTML="";
const filteredProducts=products.filter(product=>product.rating>=4.5);
    const chosenProduct=[...filteredProducts].sort(()=>Math.random()-0.5).slice(0,4);
    chosenProduct.forEach(product=>{
        const todayProductCard=createProductCard(product);
           todayProductCard.addEventListener("click",()=>{
             hideSectionsTwo(specificProductDetailSection);
             renderSpecificProductPage(product,specificProductDetailSection);
           })
        container.appendChild(todayProductCard);
        
    })

}

export function renderMostSellingProducts(products,container){
    if(!container) return;
    container.innerHTML="";
    const filteredProducts=products.filter(product=>product.reviews>=1000);
    const chosenProduct=[...filteredProducts].sort(()=>Math.random()-0.5).slice(0,4);

    chosenProduct.forEach(product=>{
        const mostSellingCard=createProductCard(product);
               
        mostSellingCard.addEventListener("click",()=>{
            hideSectionsTwo(specificProductDetailSection);
            renderSpecificProductPage(product,specificProductDetailSection);
        })
        container.appendChild(mostSellingCard);
    })

}

export function renderWeeklyPopularProduct(products,container){
if(!container) return;
container.innerHTML="";

const filteredProducts=products.filter(product=>product.reviews>=1200);
const chosedProduct=[...filteredProducts].sort(()=>Math.random()-1).slice(0,4);
chosedProduct.forEach(product=>{
    const weeklyPopularProducts=createProductCard(product);

       weeklyPopularProducts.addEventListener("click",()=>{
         hideSectionsTwo(specificProductDetailSection);
         renderSpecificProductPage(product,specificProductDetailSection);
       })

    container.appendChild(weeklyPopularProducts);
})
}