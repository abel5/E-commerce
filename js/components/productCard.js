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


export function createspecificProductPage(product){
    const specificProductContainer=document.createElement("div");
    specificProductContainer.classList.add("specific-product-detail-container");


     const subImages = product.images.map(image => {

        const img = document.createElement("img");
        //img.classList.add("sub-image")

        img.src = `images/${image}`;
        img.alt = product.name;

        return img;

    });

    specificProductContainer.innerHTML=`
    
  
                <div class="specific-product-header">
                    <p>Electornics/Audio/Headphones/Shop Headphones by type/airpoad-max</p>
                </div>
                <div class="specific-product-contents">
                    <div class="specific-product-gallery">

                        <div class="specific-product-main-image">
                            <img class="main-image"src="images/${product.image}" >
                        </div>
                        <div class="specific-product-sub-image">
                           
                        </div>

                    </div>

                    <div class="specific-product-propertiy-section">
                        <div class="propertiy-header">
                            <h2 class="specific-product-name">Airpoad-Max</h2>
                            <p class="specific-product-discription">a perfect balance of exhilarating
                                high-fidelity audio and the effortless magic of Airpoad.
                            </p>
                            <p class="specific-product-rating-and-viewes">⭐⭐⭐⭐⭐(${product.reviews})</p>
                        </div>

                        <div class="payment-suggestion">
                            <h3>$549.00 or 99.99/month</h3>
                            <p>Suggested payments with 6 months special financing.</p>
                        </div>
                        <div class="color-container">
                            <div class="color-box blac-color"></div>
                            <div class="color-box red-color"></div>
                            <div class="color-box white-color"></div>
                            <div class="color-box blue-color"></div>
                        </div>
                        <div class="quantity-managment-box">
                            <div class="quantity-set-up">
                                <button class="sub-quantity">-</button>
                                <input type="number" class="buy-quantity" value="1"></input>
                                <button class="add-quantity">+</button>
                            </div>
                            <p class="left-quantity">Only <span style="color: tomato;">12 items</span> Left Don't miss it</p>
                        </div>

                        <div class="buy-add-btn-box">
                            <button class="btn buy-now-btn ">Buy Now</button>
                            <button class="add-to-cart-btn btn"> Add to Cart </button>
                        </div>
                        <div class="delivery-link-and-logo">

                            <div class="deliver-logo">
                                <span class="material-symbols-outlined">
                                    local_shipping
                                </span>
                                <p>Free Delivery</p>
                            </div>
                            <a href="#" class="deliver-link">Enter Your Postal Code for Delivery Availability.</a>
                        </div>

                        <div class="delivery-link-and-logo">

                            <div class="deliver-logo">
                                <span class="material-symbols-outlined">
                                    storefront
                                </span>
                                <p>Return Delivery</p>
                            </div>
                            <p class="deliver-link">Free 30days Delivery Returns.<a href="#">Details</a></p>
                        </div>
                    </div>

                </div>
            
                <div class="specific-product-detail-footer">
                    <h4>Apple Airpoad-Max wireless Headphone Full Specifications.</h4>
                    <div class="two-tables-container">

                      <div class="specific-product-table-container">
                           <h3>General</h3>
                           <div class="specific-product-table generals-table">

                             <div class="table-contents">
                                <p >Brand</p>
                                <p class="product-brand">Apple</p>
                             </div>

                              <div class="table-contents">
                                <p >Model</p>
                                <p class="product-model">Airpoad-Max</p>
                             </div>

                              <div class="table-contents">
                                <p >Price</p>
                                <p class="product-price">$549.00</p>
                             </div>
                             
                             <div class="table-contents">
                                <p >Release data</p>
                                <p class="product-release-date">December 2020</p>
                             </div> 
                             
                             <div class="table-contents">
                                <p >Model Number</p>
                                <p class="product-model-number">max-30</p>
                             </div> 
                             
                             <div class="table-contents">
                                <p >Headphone Type</p>
                                <p class="product-type">Over-Ear</p>
                             </div>

                              <div class="table-contents">
                                <p >Connectivity</p>
                                <p class="product-connectivity">Wireless</p>
                             </div>

                           </div>

                      </div>

                     
                        <div class="specific-product-table-container">
                           <h3>Product details</h3>
                           <div class="specific-product-table detail-table">

                             <div class="table-contents">
                                <p >Microphone</p>
                                <p class="product-supports">Yes</p>
                             </div>

                              <div class="table-contents">
                                <p >Driver Type</p>
                                <p class="product-driver">Daynamic</p>
                             </div>

                              <div class="table-contents">
                                <p >Driver Size(mm)</p>
                                <p class="product-driver-size">60</p>
                             </div>
                             
                             <div class="table-contents">
                                <p >Number of Drivers</p>
                                <p class="product-driver-number">1</p>
                             </div> 
                             
                             <div class="table-contents">
                                <p >Water Resistanc</p>
                                <p class="product-water-resistance">No</p>
                             </div> 
                             
                             <div class="table-contents">
                                <p >Weight(g)</p>
                                <p class="product-weight">385.00</p>
                             </div>

                              <div class="table-contents">
                                <p >Battery Life(Hrs)</p>
                                <p class="product-connectivity">20</p>
                             </div>

                           </div>

                      </div>

                    </div>


                </div>

    
    `

     const mainImage =
        specificProductContainer.querySelector(".main-image");

    const subImageContainer =
        specificProductContainer.querySelector(".specific-product-sub-image");


    // Add thumbnails to the container
    subImages.forEach(image => {

        subImageContainer.appendChild(image);

        image.addEventListener("click", () => {

            mainImage.src = image.src;

        });

    });
    return specificProductContainer;

}


