// =====================================
// NORMAL PRODUCT CARD
// =====================================


export function createProductCard(product) {


const productCard =
    document.createElement("div");

productCard.classList.add(
    "product-card"
);


productCard.innerHTML = `

    <div class="product-card-header">

        <img
            src="images/${product.image}"
            class="product-card-image"
            alt="${product.name}"
        >

        <span class="material-symbols-outlined love-icon">
            favorite
        </span>

    </div>


    <div class="product-card-body">

        <div class="product-card-body-header">

            <h5>
                ${product.name}
            </h5>

            <h5>

                <sup>$</sup>
                ${product.price}
                <sup>00</sup>

            </h5>

        </div>


        <div class="product-card-body-body">

            <p>
                ${product.description}
            </p>


            <div class="rate-and-review">

                <div class="rates">

                    <p>
                        ${product.rating}
                    </p>

                    <span class="material-symbols-outlined">
                        star
                    </span>

                </div>


                <p class="num-of-pep-rate">

                    (${product.reviews})
                    reviews

                </p>

            </div>


            <div class="review-and-add-to-cart-btn">

                <button
                    class="add-to-cart-btn btn"
                >
                    Add to Cart
                </button>

            </div>

        </div>

    </div>

`;


return productCard;


}

// =====================================
// POPULAR CATEGORY CARD
// =====================================

export function creatPopularCard(product) {


const popularCategory =
    document.createElement("div");


popularCategory.classList.add(
    "popular-category"
);


popularCategory.innerHTML = `

    <img
        src="images/${product.image}"
        alt="${product.name}"
    >


    <div class="name-and-quantity">

        <h4>
            ${product.name}
        </h4>

        <h6>
            ${product.quantity}
            Items Available
        </h6>

    </div>

`;


return popularCategory;


}

// =====================================
// SEARCHED PRODUCT CARD
// =====================================

export function createSearchedCard(product) {


const searchedItem =
    document.createElement("div");


searchedItem.classList.add(
    "searched-item"
);


searchedItem.innerHTML = `

    <div class="searched-item-left">

        <img
            src="images/${product.image}"
            alt="${product.name}"
        >

        <div>

            <h4>
                ${product.name}
            </h4>

            <p>
                ${product.category}
            </p>

        </div>

    </div>


    <div class="searched-item-middle">

        <div class="searched-item-rating">

            <p>
                ${product.rating}
            </p>

            <span class="material-symbols-outlined product-Stars">
                star
            </span>

        </div>


        <p>

            (${product.reviews})
            reviews

        </p>

    </div>


    <h5>

        <sup>$</sup>
        ${product.price}
        <sup>00</sup>

    </h5>

`;


return searchedItem;


}



export function createspecificProductPage(product) {

    const specificProductContainer =
        document.createElement("div");

    specificProductContainer.classList.add(
        "specific-product-detail-container"
    );


    const subImages = product.images.map(image => {

        const img = document.createElement("img");

        img.src = `images/${image}`;
        img.alt = product.name;

        return img;

    });


    // =====================================
    // CREATE PRODUCT HTML
    // =====================================

    specificProductContainer.innerHTML = `

        <div class="specific-product-header">

            <p>
                ${product.category}/Shop
                ${product.category} by type/${product.name}
            </p>

        </div>


        <div class="specific-product-contents">


            <!-- ==========================
                 PRODUCT GALLERY
            =========================== -->

            <div class="specific-product-gallery">

                <div class="specific-product-main-image">

        <img class="main-image"src="images/${product.image}"alt="${product.name}" >

                </div>


                <div class="specific-product-sub-image">

                </div>

            </div>


            <!-- ==========================
                 PRODUCT INFORMATION
            =========================== -->

            <div class="specific-product-propertiy-section">


                <div class="propertiy-header">

                    <h2 class="specific-product-name">${product.name}</h2>

            <p class="specific-product-discription">${product.description}</p>

         <p class="specific-product-rating-and-viewes">⭐${product.rating}
                        (${product.reviews})</p>

                </div>


                <div class="payment-suggestion">

                    <h3>
                        $${product.price}.00
                    </h3>

                    <p>
                        Suggested payments with 6 months special financing.
                    </p>

                </div>


                <!-- COLOR BOXES -->

                <div class="color-container">

                </div>


                <!-- QUANTITY -->

                <div class="quantity-managment-box">

                    <div class="quantity-set-up">

                        <button class="sub-quantity">-</button>

                        <input type="number" class="buy-quantity" value="1">

                        <button class="add-quantity">+</button>

                    </div>


                    <p class="left-quantity">

                        Only
                        <span style="color: tomato;">
                            ${product.quantity} items
                        </span>
                        Left Don't miss it.

                    </p>

                </div>


                <!-- BUY / CART -->

                <div class="buy-add-btn-box">

                    <button class="btn buy-now-btn">
                        Buy Now
                    </button>

                    <button class="add-to-cart-btn btn"> Add to Cart</button>

                </div>

                <!-- DELIVERY -->

                <div class="delivery-link-and-logo">

                    <div class="deliver-logo">

                        <span class="material-symbols-outlined">
                            local_shipping
                        </span>

                        <p>
                            Free Delivery
                        </p>

                    </div>


                    <a href="#" class="deliver-link">
                        Enter Your Postal Code for Delivery Availability.
                    </a>

                </div>


                <div class="delivery-link-and-logo">

                    <div class="deliver-logo">

                        <span class="material-symbols-outlined">
                            storefront
                        </span>

                        <p>
                            Return Delivery
                        </p>

                    </div>


                    <p class="deliver-link">

                        Free 30days Delivery Returns.

                        <a href="#"> Details</a>

                    </p>

                </div>


            </div>

        </div>


        <!-- =====================================
             SPECIFICATIONS
        ====================================== -->

        <div class="specific-product-detail-footer">

            <h4>
                ${product.name} Full Specifications.
            </h4>


            <div class="two-tables-container">
                <!-- ==========================
                     GENERAL TABLE
                =========================== -->

                <div class="specific-product-table-container">

                    <h3> General </h3>


                    <div class="specific-product-table generals-table">

                    </div>

                </div>



                <!-- ==========================
                     DETAILS TABLE
                =========================== -->

                <div class="specific-product-table-container">

                    <h3> Product details</h3>


                    <div class="specific-product-table detail-table">

                    </div>

                </div>


            </div>

        </div>

    `;


    const colorContainer =
        specificProductContainer.querySelector(
            ".color-container"
        );


    const mainImage =
        specificProductContainer.querySelector(
            ".main-image"
        );


    const subImageContainer =
        specificProductContainer.querySelector(
            ".specific-product-sub-image"
        );

    product.color.forEach(color => {

        const colorBox =
            document.createElement("div");


        colorBox.classList.add(
            "color-box"
        );

        // One color
        if (color.colors.length === 1) {

            colorBox.style.backgroundColor =
                color.colors[0];

        }

        // Two colors
        else {

            colorBox.style.background =
                `linear-gradient(
                    30deg,
                    ${color.colors[0]} 50%,
                    ${color.colors[1]} 50%
                )`;

        }

        // COLOR CLICK

        colorBox.addEventListener( "click", () => {
                // Remove previous color active

                const activeColor =colorContainer.querySelector(".active-color-for-color");

                if (activeColor) 
                    {activeColor.classList.remove("active-color-for-color");

                }
                // Remove sub-image active

                const activeImage =subImageContainer.querySelector(".active-color");

                if (activeImage) {
                           activeImage.classList.remove("active-color");

                }
                // Activate this color

                colorBox.classList.add("active-color-for-color");
                // Change main image

                mainImage.src =`images/${color.image}`;

            }
        );

        colorContainer.appendChild(colorBox);

    });

    subImages.forEach(image => {
        subImageContainer.appendChild(image);
        image.addEventListener("click",() => {
                // Change main image
                mainImage.src =image.src;
                // Remove previous image active

    const activeImage =subImageContainer.querySelector(".active-color");

                if (activeImage) {
                     activeImage.classList.remove("active-color");

                }
                // Remove color active

    const activeColor =colorContainer.querySelector(".active-color-for-color");
                if (activeColor) {

                    activeColor.classList.remove("active-color-for-color");
                }
                // Activate this image
                image.classList.add("active-color");

            }
        );

    });


    const generalTable =
        specificProductContainer.querySelector(
            ".generals-table"
        );

    const detailTable =
        specificProductContainer.querySelector(
            ".detail-table"
        );

    function formatSpecificationName(name) {

    // Add a space before every capital letter
    let formattedName = name.replace(/([A-Z])/g, " $1");

 
    formattedName=formattedName.charAt(0).toUpperCase() +
    formattedName.slice(1);

    return formattedName;
}

    function createSpecificationRow(key,value) {
        const row =document.createElement("div");
        row.classList.add("table-contents");
        row.innerHTML = `

            <p>${formatSpecificationName(key)} </p>

            <p>${value}</p>

        `;

        return row;

    }

    Object.entries(product.specifications.general).forEach(([key, value]) => {

        const row =createSpecificationRow(key,value);
        generalTable.appendChild(row);

    });


    Object.entries(product.specifications.details).forEach(([key, value]) => {
        const row =createSpecificationRow(key,value);
        detailTable.appendChild(row);

    });
    let productQuantity = 1;
    const subQuantity =specificProductContainer.querySelector(".sub-quantity");
    const buyQuantity =specificProductContainer.querySelector(".buy-quantity");
    const addQuantity =specificProductContainer.querySelector(".add-quantity");

    subQuantity.addEventListener("click",() => {
            if (productQuantity > 1) {
                productQuantity--;
                buyQuantity.value=productQuantity;

            }
        }
    );


    addQuantity.addEventListener("click",() => {
            if (productQuantity<product.quantity) {
                productQuantity++;
                buyQuantity.value=productQuantity;
            }
        }
    );

    return specificProductContainer;

}