import { createReviewItem, resetCart, showToast } from "../components/productCard.js";
import { switchCartHeader, switchCartSections, switchSteps } from "../utils/helpers.js";

const orderSubmitPopUpBox = document.querySelector(".order-submit-pop-up-box");
const popUpContainer = document.querySelector(".pop-up-container");
const continueShopingBtn = document.querySelector(".continue-shoping-btn");
const numberOfProductsInCart = document.getElementById("products-in-cart");

const deliveryContainers = document.querySelectorAll(".delivery-information-container");
const cartMainContentsContainer = document.querySelector(".cart-main-contents-container");
const savedCartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

deliveryContainers.forEach(container => {

    const myCheckbox = container.querySelector(".my-checkbox");
    const deliveryInfoInShort = container.querySelector(".delivery-info-in-short");
    const labHide = container.querySelectorAll(".lab-hide");
    const saveInfo = container.querySelector(".save-info");
    const form = container.querySelector(".delivery-info-formes");

    function showSavedInfo() {

        labHide.forEach(lab => {
            lab.style.display = "none";
        });

        saveInfo.textContent = "Edit";
        deliveryInfoInShort.style.display = "flex";
        myCheckbox.checked = true;
    }

    function showForm() {

        labHide.forEach(lab => {
            lab.style.display = "flex";
        });

        saveInfo.textContent = "Save Information";
        deliveryInfoInShort.style.display = "none";
        myCheckbox.checked = false;
    }

    myCheckbox.addEventListener("change", () => {

        if (myCheckbox.checked) {

            if (!form.checkValidity()) {
                form.reportValidity();
                myCheckbox.checked = false;
                return;
            }

            showSavedInfo();

        } else {

            showForm();
        }
    });

    saveInfo.addEventListener("click", () => {

        if (myCheckbox.checked) {
            showForm();
            return;
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        showSavedInfo();
    });

});

const orderSummaryBoxes = document.querySelectorAll(".order-summery-box");

if (orderSummaryBoxes) {

    orderSummaryBoxes.forEach(container => {

        const paymentRadios = container.querySelectorAll(
            '.payment-detail-container-body input[type="radio"]'
        );

        const paymentForm = container.querySelector(".payment-details-form");

        const payBtn = container.querySelector(".pay-btn");

        if (!payBtn) {
            return;
        }

        paymentForm.style.display = "none";


        paymentRadios.forEach(radio => {

            radio.addEventListener("change", () => {

                if (radio.value === "cash") {
                    paymentForm.style.display = "none";
                } else {
                    paymentForm.style.display = "block";
                }

            });

        });


        payBtn.addEventListener("click", () => {

            const selectedPayment = container.querySelector(
                '.payment-detail-container-body input[type="radio"]:checked'
            );

            if (!selectedPayment) {
                alert("Please select a payment method.");
                return;
            }

            if (selectedPayment.value === "cash") {
                showOrderPopup();
                return;
            }

            if (!paymentForm.checkValidity()) {
                paymentForm.reportValidity();
                return;
            }

            showOrderPopup();

        });

    })
};

function showOrderPopup() {

    popUpContainer.style.display = "flex";
    orderSubmitPopUpBox.style.display = "flex";

}

function hideOrderPopup() {

    popUpContainer.style.display = "none";
    orderSubmitPopUpBox.style.display = "none";
}

function resetCheckoutForms() {
    document.querySelectorAll(".delivery-information-container").forEach(container => {

        const checkbox = container.querySelector(".my-checkbox");
        const shortInfo = container.querySelector(".delivery-info-in-short");
        const labels = container.querySelectorAll(".lab-hide");
        const saveInfo = container.querySelector(".save-info");
        const form = container.querySelector(".delivery-info-formes");

        form.reset();

        checkbox.checked = false;

        labels.forEach(label => {
            label.style.display = "flex";
        });

        shortInfo.style.display = "none";

        saveInfo.textContent = "Save Information";
    });

    document.querySelectorAll(".payment-details-form").forEach(form => {
        form.reset();
        form.style.display = "none";
    });

    document.querySelectorAll('.payment-detail-container-body input[type="radio"]'
    ).forEach(radio => {
        radio.checked = false;
    });
}

window.addEventListener("click", (e) => {

    if (e.target === orderSubmitPopUpBox) {
        hideOrderPopup();
    }

});

const buyNowPayBtn = document.querySelector(".buy-now-pay-btn");

if (buyNowPayBtn) {
    buyNowPayBtn.addEventListener("click", () => {

        const deliveryContainer = document.querySelector(".buy-now-delivery");

        const deliveryForm = deliveryContainer.querySelector(".delivery-info-formes");

        if (!deliveryForm.checkValidity()) {
            deliveryForm.reportValidity();
            return;
        }

        showOrderPopup();
    });
}

function resetBuyNow() {

    const deliveryContainer = document.querySelector(".buy-now-delivery");

    if (!deliveryContainer) {
        return;
    }
    const deliveryForm = deliveryContainer.querySelector(".delivery-info-formes");

    deliveryForm.reset();

    const checkbox = deliveryContainer.querySelector(".my-checkbox");
    const shortInfo =deliveryContainer.querySelector(".delivery-info-in-short");
    const labels =deliveryContainer.querySelectorAll(".lab-hide");
    const saveInfo =deliveryContainer.querySelector(".save-info");

    checkbox.checked = false;

    labels.forEach(label => {
        label.style.display = "flex";
    });

    shortInfo.style.display = "none";
    saveInfo.textContent = "Save Information";


    const orderSummary =document.querySelector(".buy-now-order-summary");

    const paymentForm =orderSummary.querySelector(".payment-details-form");

    paymentForm.reset();

    paymentForm.style.display = "none";

    orderSummary
        .querySelectorAll('input[type="radio"]')
        .forEach(radio => {
            radio.checked = false;
        });


    // =========================
    // RESET PRICE SUMMARY
    // =========================

    document.getElementById("sub-total").textContent = "$0.00";
    document.getElementById("tax").textContent = "$0.00";
    document.getElementById("coupon-discount").textContent = "-$0.00";
    document.getElementById("shipping-cost").textContent = "-$0.00";
    document.getElementById("total-price").textContent = "=$0.00";


    // =========================
    // RESET PAY BUTTON
    // =========================

    const buyNowPayBtn = document.querySelector(".buy-now-pay-btn");

    buyNowPayBtn.textContent = "Pay";
}
const buyNowOrderSummary = document.querySelector(".buy-now-order-summary");

if (buyNowOrderSummary) {

    const buyNowPaymentRadios = buyNowOrderSummary.querySelectorAll('input[type="radio"]');
    const buyNowPaymentForm =buyNowOrderSummary.querySelector(".payment-details-form");

    if (buyNowPaymentForm) {
        buyNowPaymentForm.style.display = "none";
    }

    buyNowPaymentRadios.forEach(radio => {

        radio.addEventListener("change", () => {

            if (radio.value === "cash") {

                buyNowPaymentForm.style.display = "none";

            } else {

                buyNowPaymentForm.style.display = "block";

            }

        });

    });
}

if (continueShopingBtn) {
    continueShopingBtn.addEventListener("click", () => {

        hideOrderPopup();

        resetCart();
        resetBuyNow();
        resetCheckoutForms();

        switchCartHeader(yourCartContainer);
        switchCartSections(yourCartContents);
        switchSteps(checkoutYourCart);


    })
};

let currentOrder = null;

export function renderReviewItems(product, container, selectedColor,
    selectedImage, productQuantity) {
    if (!container) return;

    currentOrder = {
        product,
        selectedColor,
        selectedImage,
        productQuantity
    };

    container.innerHTML = "";
    const reviewProduct = createReviewItem(product, selectedColor,
        selectedImage, productQuantity);
    container.appendChild(reviewProduct);

}

export function renderCartProduct(product, container, cartProducts) {
    if (!container) return;

    const cartProduct = createCartProducts(product, cartProducts);

    container.appendChild(cartProduct);
    updateCartSummary(cartProducts);
}

const emptyCartMessage = document.querySelector(".empty-cart-message");
const checkOutBtn = document.querySelector(".checkout-btn");

function checkEmptyCart(cartProducts) {
    if (!emptyCartMessage) return;

    if (cartProducts.length === 0) {
        emptyCartMessage.style.display = "block";
    } else {
        emptyCartMessage.style.display = "none";
    }
}

function updatePayButton(cartProducts) {
    if (!checkOutBtn) return;

    if (cartProducts.length === 0) {
        checkOutBtn.disabled = true;
    } else {
        checkOutBtn.disabled = false;
    }
}

function createCartProducts(product, cartProducts) {
    const cartLeftMiddleContents = document.createElement("div");


    cartLeftMiddleContents.classList.add(
        "cart-left-middle-contents"
    );

    const imageSrc = product.image?.startsWith("http")
        ? product.image
        : `images/${product.image}`;

    const colorName = product.color?.[0]?.name || "N/A";

    cartLeftMiddleContents.innerHTML = `
    
        <div class="left-side-contents">

            <img src="${imageSrc}" alt="${product.name}">

            <div class="product-details-text">

                <h5>${product.name}</h5>

                <h6>Color: ${colorName}</h6>

                <h6>Quantity: ${product.quantity}</h6>

            </div>

        </div>

        <div class="middle-side-contents">

            <div class="left-middle">

                <p>Qty:</p>

                <p class="sub-qty-in-cart qty-in-cart">-</p>

               <input type="number"class="product-qty-in-cart" data-product-id="${product.id}"
                value="${product.cartQuantity}" min="1" max="${product.quantity}">

                <p class="add-qty-in-cart qty-in-cart">+</p>

            </div>

            <div class="right-middle">

             <p  class="cart-product-price" data-product-id="${product.id}">
                    $${(product.cartQuantity * product.price).toFixed(2)}
                </p>

                <p class="remove-product">X</p>

            </div>

        </div>
    `;
    const productQtyInCart = cartLeftMiddleContents.querySelector(".product-qty-in-cart");
    const subQuantityInCart = cartLeftMiddleContents.querySelector(".sub-qty-in-cart");
    const addQuantityInCart = cartLeftMiddleContents.querySelector(".add-qty-in-cart");
    const removeProduct = cartLeftMiddleContents.querySelector(".remove-product");
    const cartProductPrice = cartLeftMiddleContents.querySelector(".cart-product-price");

    function updateCartTotal(cartProducts) {

        const total = cartProducts.reduce(
            (total, product) => total + product.cartQuantity,
            0
        );

        numberOfProductsInCart.textContent = total;
    }

    subQuantityInCart.addEventListener("click", () => {

        if (product.cartQuantity > 1) {

            product.cartQuantity--;
            updateCartSummary(cartProducts);
            localStorage.setItem(
                "cartProducts",
                JSON.stringify(cartProducts)
            );
            productQtyInCart.value = product.cartQuantity;
            cartProductPrice.textContent =`$${product.cartQuantity * product.price.toFixed(2)}`;

            updateCartTotal(cartProducts);

        }
    });

    productQtyInCart.addEventListener("input", () => {

        let newQuantity = Number(productQtyInCart.value);

        if (newQuantity > product.quantity) {
            newQuantity = product.quantity;
            productQtyInCart.value = newQuantity;
        }

        if (newQuantity >= 1) {

            product.cartQuantity = newQuantity;
            updateCartSummary(cartProducts);

            cartProductPrice.textContent =`$${(product.cartQuantity * product.price).toFixed(2)}`;

            updateCartTotal(cartProducts);
            updateCartSummary(cartProducts);

            localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
        }
    });

    addQuantityInCart.addEventListener("click", () => {

        if (product.cartQuantity < product.quantity) {

            product.cartQuantity++;
            updateCartSummary(cartProducts);
            localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
            productQtyInCart.value = product.cartQuantity;
            cartProductPrice.textContent =`$${product.cartQuantity * product.price.toFixed(2)}`;

            updateCartTotal(cartProducts);
        }

    });

    removeProduct.addEventListener("click", () => {

        const productIndex = cartProducts.findIndex(
            item => item.id === product.id
        );

        if (productIndex !== -1) {

            cartProducts.splice(productIndex, 1);
            showToast("Removed From cart!");

            localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
        }

        cartLeftMiddleContents.remove();
        checkEmptyCart(cartProducts);
        updatePayButton(cartProducts);

        updateCartSummary(cartProducts);
    });


    return cartLeftMiddleContents;
}

const cartSubTotal = document.querySelector(".cart-sub-total");
const cartShipping = document.querySelector(".cart-shipping");
const cartTax = document.querySelector(".cart-tax");
const cartDiscount = document.querySelector(".cart-discount");
const cartTotal = document.querySelector(".cart-total")

export function updateCartSummary(cartProducts) {
    if ( !cartSubTotal || !cartShipping || !cartTax || !cartDiscount || !cartTotal) {
        return;
    }

    const subTotal = cartProducts.reduce(
        (total, product) => total + (product.price * product.cartQuantity),
        0
    );

    const taxRate = 0.10;
    const alltax = subTotal * taxRate;
    const shipping = 0;
    const discount = 0;

    const totalPrice = subTotal + shipping + alltax - discount;

    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartShipping.textContent = `$${shipping.toFixed(2)}`;
    cartTax.textContent = `$${alltax.toFixed(2)}`;
    cartDiscount.textContent = `$${discount.toFixed(2)}`;
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

}

if (cartMainContentsContainer) {

    savedCartProducts.forEach(product => {
     renderCartProduct( product, cartMainContentsContainer, savedCartProducts);
    });

    updateCartSummary(savedCartProducts);
    updatePayButton(savedCartProducts);
}

const yourCartContainer = document.querySelector(".your-cart-container");
const shippingDetailContainer = document.querySelector(".shipping-detail-container");
const paymentSectionContainer = document.querySelector(".payment-section-container");

const yourCartContents = document.querySelector(".your-cart-contents");
const shippingDetailContents = document.querySelector(".shipping-detail-contents");
const paymentContents = document.querySelector(".payment-contents");

const checkoutBtn = document.querySelector(".checkout-btn");
const continueToPayment = document.querySelector(".continue-to-payment");


const backToCartBtn = document.querySelector(".back-to-cart-btn");
const backToShippingBtn = document.querySelector(".back-to-shipping-btn");

const checkoutYourCart = document.querySelector(".checkout-your-cart");
const checkoutShipping = document.querySelector(".checkout-shipping");
const checkoutpayment = document.querySelector(".checkout-payment");


function validateDeliveryForm() {

    const deliveryForm = shippingDetailContents.querySelector(".delivery-info-formes");

    if (!deliveryForm.checkValidity()) {
        deliveryForm.reportValidity();
        return false;
    }

    return true;
}


if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        switchCartHeader(shippingDetailContainer);
        switchCartSections(shippingDetailContents);
        switchSteps(checkoutShipping);
    });
}


if (continueToPayment) {
    continueToPayment.addEventListener("click", () => {
        if (!validateDeliveryForm()) {
            return;
        }

        switchCartHeader(paymentSectionContainer);
        switchCartSections(paymentContents);
        switchSteps(checkoutpayment);
    });
}


if (backToCartBtn) {
    backToCartBtn.addEventListener("click", () => {
        switchCartHeader(yourCartContainer);
        switchCartSections(yourCartContents);
        switchSteps(checkoutYourCart);
    });
}

if (backToShippingBtn) {
    backToShippingBtn.addEventListener("click", () => {
        switchCartHeader(shippingDetailContainer);
        switchCartSections(shippingDetailContents);
        switchSteps(checkoutShipping);
    });
}


