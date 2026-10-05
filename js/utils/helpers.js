export function hideSomething(item) {
item.classList.add("hide-something");
}

export function removeClass(item) {
item.classList.remove("hide-something");
item.classList.remove("pop-cat-section-display");
}

const yourCartContents=document.querySelector(".your-cart-contents");
const shippingDetailContents=document.querySelector(".shipping-detail-contents");
const paymentContents=document.querySelector(".payment-contents");

const yourCartContainer=document.querySelector(".your-cart-container");
const shippingDetailContainer=document.querySelector(".shipping-detail-container");
const paymentSectionContainer=document.querySelector(".payment-section-container");

const  checkoutYourCart=document.querySelector(".checkout-your-cart");
const checkoutShipping=document.querySelector(".checkout-shipping");
const checkoutpayment=document.querySelector(".checkout-payment");

export function switchCartHeader(section){
    [yourCartContainer,shippingDetailContainer,paymentSectionContainer].forEach(item=>{
        item.classList.remove("active-head")
    })
    section.classList.add("active-head");
}

export function switchSteps(section){
    [checkoutYourCart,checkoutShipping,checkoutpayment].forEach(item=>{
        item.classList.remove("active-step")
    })
    section.classList.add("active-step");
}

export function switchCartSections(section){
    [yourCartContents,shippingDetailContents,paymentContents].forEach(item=>{
        item.style.display="none";
    })
    section.style.display="flex";
}