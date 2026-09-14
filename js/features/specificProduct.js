import { createspecificProductPage } from "../components/productCard.js";
import { products } from "../data/products.js";


const allProducts=Object.values(products).flat();


export function renderSpecificProductPage(product,container){
    if(!container) return;
    container.innerHTML="";

   const currentProductData=allProducts.find(item=>
        item.id===product.id
    );
 
     if (!currentProductData) {
        console.log("Product not found:", product);
        return;
    }
        container.appendChild(createspecificProductPage(currentProductData));    


}

