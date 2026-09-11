import { createProductCard } from "../components/productCard.js";


const pagination = document.querySelector(".pagination");
const prevBtn = document.querySelector(".prev-btn");
const pageNumbers = document.querySelector(".page-numbers");
const nextBtn = document.querySelector(".next-btn");


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