import { renderReviewItems, renderCartProduct, updateCartSummary } from "../features/checkout.js";
import { navigateFavorites, navigateCheckout, hideSectionsThree } from "../features/dealCategories.js";
import { renderProducts } from "../features/products.js";

const productCheckoutSection = document.querySelector(".product-checkout-section");
const reviewItemShippingContainer = document.querySelector(".review-item-shipping-container-box");
const cartMainContentsContainer = document.querySelector(".cart-main-contents-container");
const numberOfProductsInCart = document.getElementById("products-in-cart");
const favCounter = document.querySelector(".fav-counter");

let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
let favProducts = JSON.parse(localStorage.getItem("favProducts")) || [];
let quantityInCart = cartProducts.reduce(
    (total, product) => total + product.cartQuantity,
    0
);

let quantityInFav = favProducts.length;

if (favCounter) {
    favCounter.textContent = quantityInFav;
}

if (numberOfProductsInCart) {
    numberOfProductsInCart.textContent = quantityInCart;
}

export function resetCart() {
    cartProducts.length = 0;
    quantityInCart = 0;

    if (numberOfProductsInCart) {
        numberOfProductsInCart.textContent = "0";
    }
}

export function showToast(message) {

    const toast = document.createElement("div");

    toast.classList.add("toast");
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 2000);
}

export function createProductCard(product) {
    const productCard = document.createElement("div");

    productCard.classList.add("product-card");
    productCard.innerHTML = `

    <div class="product-card-header">
        <img src="${product.image}" class="product-card-image" alt="${product.name}">
        <span class="material-symbols-outlined love-icon"> favorite</span>
    </div>

    <div class="product-card-body">

        <div class="product-card-body-header">
            <h5>${product.name}</h5>
            <h5><sup>$</sup>${product.price}<sup>00</sup></h5>
        </div>

        <div class="product-card-body-body">

            <p> ${product.description}</p>

            <div class="rate-and-review">

                <div class="rates">
                    <p>${product.rating}</p>

                <span class="material-symbols-outlined">star</span>

                </div>

                <p class="num-of-pep-rate">(${product.reviews})reviews</p>

            </div>
            <div class="review-and-add-to-cart-btn">
                <button class="add-to-cart-btn btn">Add to Cart</button>
            </div>

        </div>

    </div>

`;

    const addToCartBtn = productCard.querySelector(".add-to-cart-btn");
    const loveIcon = productCard.querySelector(".love-icon");

    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", (e) => {

            e.stopPropagation();

            showToast("Added to cart!");
            const alreadyIn = cartProducts.find(item => item.id === product.id);
            if (alreadyIn) {
                alreadyIn.cartQuantity++;
                quantityInCart++;
                updateCartSummary(cartProducts);

                const input = cartMainContentsContainer?.querySelector(
                    `.product-qty-in-cart[data-product-id="${product.id}"]`);

                const price = cartMainContentsContainer?.querySelector(
                    `.cart-product-price[data-product-id="${product.id}"]`);

                if (input) { input.value = alreadyIn.cartQuantity };

                if (price) {
                    price.textContent = `$${alreadyIn.cartQuantity * alreadyIn.price}`;
                }

            } else {

                const cartItem = { ...product, cartQuantity: 1 };

                cartProducts.push(cartItem);
                quantityInCart++;

                renderCartProduct(cartItem, cartMainContentsContainer, cartProducts);
            }
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

            if (numberOfProductsInCart) {
                numberOfProductsInCart.textContent = quantityInCart;
            }

        })
    };

    const alreadyFavorite = favProducts.some(item => item.id === product.id);

    if (alreadyFavorite) {
        loveIcon.classList.add("fav");
    }

    loveIcon.addEventListener("click", (e) => {

        e.stopPropagation();

        const alreadyFavorite = favProducts.find(item => item.id === product.id);

        if (alreadyFavorite) {

            favProducts = favProducts.filter(item => item.id !== product.id);
            loveIcon.classList.remove("fav");
            showToast("Removed from favorites");

        } else {

            favProducts.push(product);
            loveIcon.classList.add("fav");
            showToast("Added to favorites");

        }

        localStorage.setItem("favProducts", JSON.stringify(favProducts));
        quantityInFav = favProducts.length;
        if (favCounter) {
            favCounter.textContent = quantityInFav;
        }
        if (favProductContainer) {

            renderProducts(favProducts, favProductContainer);
        }

    });

    return productCard;

}

const favoriteSection = document.querySelector(".favorite-section");

const newThing = document.querySelector(".new-thing");

const homeContainer = document.querySelector(".home-container");

const favProductContainer = document.querySelector(".fav-product-container");

if (newThing) {

    newThing.addEventListener("click", () => {
        navigateFavorites();

        if (homeContainer) {
            homeContainer.style.display = "none";
        }
        if (favoriteSection) {
            favoriteSection.style.display = "flex";
        }

        if (favProductContainer) {
            renderProducts(
                favProducts,
                favProductContainer
            );
        }

    });

}

export function creatPopularCard(product) {

    const popularCategory = document.createElement("div");

    popularCategory.classList.add("popular-category");
    popularCategory.innerHTML = `

    <img src="images/${product.image}" alt="${product.name}">

    <div class="name-and-quantity">

        <h4>${product.name}</h4>

        <h6>${product.quantity}Items Available</h6>

    </div>

`;

    return popularCategory;

}

export function createSearchedCard(product) {
    const searchedItem =
        document.createElement("div");

    searchedItem.classList.add("searched-item");
    searchedItem.innerHTML = `
    <div class="searched-item-left">
        <img src="${product.image}" alt="${product.name}">
        <div><h4>${product.name}</h4>
       <p> ${product.category}</p>

        </div>

    </div>

    <div class="searched-item-middle">
        <div class="searched-item-rating">
            <p>${product.rating}</p>

            <span class="material-symbols-outlined product-Stars">star</span>
        </div>

        <p>(${product.reviews})reviews </p>

    </div>

    <h5><sup>$</sup>${product.price}<sup>00</sup></h5>

`;
    return searchedItem;

}

export function createspecificProductPage(product) {
    let productQuantity = 1;
    const specificProductContainer = document.createElement("div");
    specificProductContainer.classList.add("specific-product-detail-container");

    const subImages = product.images.map(image => {
        const img = document.createElement("img");
        img.src = image.startsWith("http") ? image : `images/${image}`;

        img.alt = product.name;

        img.dataset.image = image;

        return img;
    });

    specificProductContainer.innerHTML = `
        <div class="specific-product-header">

            <p>${product.category}/Shop${product.category} by type/${product.name}</p>

        </div>

        <div class="specific-product-contents">

            <div class="specific-product-gallery">

                <div class="specific-product-main-image">

                    <img class="main-image" src="${product.image.startsWith("http")
            ? product.image : `images/${product.image}`

        }" alt="${product.name}">

                </div>

                <div class="specific-product-sub-image">

                </div>

            </div>

            <div class="specific-product-propertiy-section">

                <div class="propertiy-header">

                    <h2 class="specific-product-name">
                        ${product.name}
                    </h2>

                    <p class="specific-product-discription">
                        ${product.description}
                    </p>

                    <p class="specific-product-rating-and-viewes">
                        ⭐${product.rating}
                        (${product.reviews})
                    </p>

                </div>

                <div class="payment-suggestion">

                    <h3>$${product.price}.00</h3>

                    <p>Suggested payments with 6 months special financing.</p>

                </div>
                <div class="color-container">

                </div>

                <div class="quantity-managment-box">

                    <div class="quantity-set-up">

                        <button class="sub-quantity"> - </button>

                        <input type="number" class="buy-quantity" value="1">

                        <button class="add-quantity"> +</button>

                    </div>


    <p class="left-quantity">Only <span style="color: tomato;">${product.quantity} items</span> 
                Left Don't miss it.
                    </p>

                </div>
                <div class="buy-add-btn-box">

                    <button class="btn buy-now-btn">Buy Now</button>

                    <button class="add-to-cart-btn btn">Add to Cart</button>

                </div>

                <div class="delivery-link-and-logo">

                    <div class="deliver-logo">

                        <span class="material-symbols-outlined">local_shipping</span>

                        <p> Free Delivery </p>

                    </div>


                    <a href="#" class="deliver-link">
                        Enter Your Postal Code for Delivery Availability.
                    </a>

                </div>


                <div class="delivery-link-and-logo">

                    <div class="deliver-logo">

                        <span class="material-symbols-outlined"> storefront</span>

                        <p> Return Delivery</p>

                    </div>


                    <p class="deliver-link">

                        Free 30days Delivery Returns.

                        <a href="#"> Details</a>

                    </p>

                </div>

            </div>

        </div>


        <div class="specific-product-detail-footer">

            <h4>
                ${product.name} Full Specifications.
            </h4>


            <div class="two-tables-container">

                <div class="specific-product-table-container">

                    <h3> General</h3>

                    <div class="specific-product-table generals-table">

                    </div>

                </div>
                <div class="specific-product-table-container">

                    <h3> Product details </h3>

                    <div class="specific-product-table detail-table">

                    </div>

                </div>

            </div>

        </div>

    `;

    const colorContainer = specificProductContainer.querySelector(".color-container");

    const mainImage = specificProductContainer.querySelector(".main-image");

    const subImageContainer = specificProductContainer.querySelector(".specific-product-sub-image");

    let selectedColor = "";

    let selectedImage = product.image;


    if (product.color && product.color.length > 0) {
        selectedColor = product.color[0].name;
        selectedImage = product.color[0].image;

        product.color.forEach(color => {

            const colorBox = document.createElement("div");

            colorBox.classList.add("color-box");

            if (color.colors.length === 1) {

                colorBox.style.backgroundColor = color.colors[0];

            }
            else {

                colorBox.style.background = `linear-gradient( 30deg, ${color.colors[0]} 50%,${color.colors[1]} 50% )`;

            }

            colorBox.addEventListener("click", () => {

                selectedColor = color.name;
                selectedImage = color.image;

                const activeColor = colorContainer.querySelector(".active-color-for-color");

                if (activeColor) {
                    activeColor.classList.remove("active-color-for-color");
                }

                colorBox.classList.add("active-color-for-color"
                );

                mainImage.src = color.image.startsWith("http") ? color.image : `images/${color.image}`;

            });

            colorContainer.appendChild(colorBox);

        });

    } else {

        colorContainer.innerHTML = "";

    }

    subImages.forEach(image => {

        subImageContainer.appendChild(
            image
        );

        image.addEventListener(
            "click",
            () => {

                mainImage.src = image.src;
                const selected = product.color?.find(color => color.image === image.dataset.image);

                if (selected) {

                    selectedColor = selected.name;

                    selectedImage = selected.image;

                }


                const activeImage = subImageContainer.querySelector(".active-color");

                if (activeImage) {

                    activeImage.classList.remove("active-color");

                }
                const activeColor = colorContainer.querySelector(".active-color-for-color");


                if (activeColor) {

                    activeColor.classList.remove("active-color-for-color");

                }

                image.classList.add("active-color");

            }
        );

    });

    const buyNowBtn = specificProductContainer.querySelector(".buy-now-btn");


    const totalPrice = document.getElementById(
        "total-price"
    );

    const subTotal = document.getElementById("sub-total");
    const payBtn = document.querySelector(".pay-btn");
    const tax = document.getElementById("tax");

    if (buyNowBtn) {
        buyNowBtn.addEventListener("click", () => {

            let sTotal = product.price * productQuantity;
            subTotal.textContent = `$${sTotal}.00`;

            let totalTax = Math.floor(sTotal * 10 / 100);

            tax.textContent = `$${totalTax}.00`;

            let totalPay = sTotal + totalTax;

            totalPrice.textContent = `=$${totalPay}.00`;

            if (payBtn) {

                payBtn.textContent = `Pay $${totalPay}.00`;

            }

            navigateCheckout();


            hideSectionsThree(productCheckoutSection);


            renderReviewItems(product, reviewItemShippingContainer, selectedColor, selectedImage, productQuantity);

        }
        );

    }

    const generalTable = specificProductContainer.querySelector(".generals-table");
    const detailTable = specificProductContainer.querySelector(".detail-table");

    function formatSpecificationName(name) {

        let formattedName = name.replace(/([A-Z])/g, " $1");


        formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

        return formattedName;

    }


    function createSpecificationRow(key, value) {

        const row = document.createElement("div");

        row.classList.add("table-contents");
        row.innerHTML = `

            <p> ${formatSpecificationName(key)} </p>

            <p>${value} </p>

        `;


        return row;

    }


    if (product.specifications?.general) {

        Object.entries(product.specifications.general).forEach(
            ([key, value]) => {
                const row = createSpecificationRow(key, value);
                generalTable.appendChild(row);

            }
        );

    }


    if (product.specifications?.details) {

        Object.entries(product.specifications.details).forEach(
            ([key, value]) => {
                const row = createSpecificationRow(key, value);
                detailTable.appendChild(row
                );

            }
        );

    }


    const subQuantity = specificProductContainer.querySelector(".sub-quantity");
    const buyQuantity = specificProductContainer.querySelector(".buy-quantity");
    const addQuantity = specificProductContainer.querySelector(".add-quantity");

    subQuantity.addEventListener("click", () => {
        if (productQuantity > 1) {
            productQuantity--;
            buyQuantity.value = productQuantity;

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

        }

    }
    );


    addQuantity.addEventListener("click", () => {

        if (productQuantity < product.quantity) {
            productQuantity++;
            buyQuantity.value = productQuantity;
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

        }

    }
    );


    const addToCartBtn = specificProductContainer.querySelector(".add-to-cart-btn");

    addToCartBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        const alreadyIn = cartProducts.find(item => item.id === product.id);

        if (alreadyIn) {

            alreadyIn.cartQuantity += productQuantity;

            quantityInCart += productQuantity;

            updateCartSummary(cartProducts);

            const input = cartMainContentsContainer.querySelector(`.product-qty-in-cart[data-product-id="${product.id}"]`);
            const price = cartMainContentsContainer.querySelector(`.cart-product-price[data-product-id="${product.id}"]`);


            if (input) {

                input.value =alreadyIn.cartQuantity;

            }

            if (price) {

                price.textContent =`${alreadyIn.cartQuantity *alreadyIn.price}`;

            }

        }

        else {

            const cartItem = {
                ...product,
                cartQuantity:productQuantity,
                selectedColor:selectedColor,
                selectedImage:selectedImage

            };

            cartProducts.push(cartItem);
            quantityInCart +=productQuantity;

            renderCartProduct(cartItem,cartMainContentsContainer,cartProducts);

        }

        localStorage.setItem("cartProducts",JSON.stringify(cartProducts)
        );


        if (numberOfProductsInCart) {
            numberOfProductsInCart.textContent =quantityInCart;

        }

    }
    );


    return specificProductContainer;
}


export function createReviewItem(product, selectedColor, selectedImage, productQuantity) {

    const reviewItemShippingContainer = document.createElement("div");

    reviewItemShippingContainer.classList.add("review-item-shipping-container");

    reviewItemShippingContainer.innerHTML = `
    
        <h5>Review Item And Shipping</h5>

        <div class="review-shpping-body">

            <div class="review-shpping-body-left">

                <img src="${selectedImage}" alt="">

                <div class="reviw-shipping-body-right-left">

                    <h4> ${product.name}</h4>

                    <p>color: ${selectedColor}</p>

                </div>

            </div>

            <div class="reviw-shipping-body-right">

                <h3>$${product.price}</h3>

                <p>Quantity: ${productQuantity}</p>

            </div>

        </div>

    `

    return reviewItemShippingContainer;

}