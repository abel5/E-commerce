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


