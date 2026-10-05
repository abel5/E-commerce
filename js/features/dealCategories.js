
const gadgetLink = document.querySelector(".gadget-link");
const fashionLink = document.querySelector(".fashion-link");
const toyLink = document.querySelector(".toy-link");
const educationLink = document.querySelector(".education-link");
const beautyLink = document.querySelector(".beauty-link");
const fitnessLink = document.querySelector(".fitness-link");
const furnitureLink = document.querySelector(".furniture-link");
const sneakerLink = document.querySelector(".sneaker-link");

const dealLinks = document.querySelectorAll(".deal-links");
const allBestDealLinks = document.querySelector(".all-best-deal-links");
const toyListsContainer = document.querySelector(".toy-lists-container");
const educationListsContainer = document.querySelector(".education-lists-container");
const beautyListsContainer = document.querySelector(".beauty-lists-container");
const fitnessListsContainer = document.querySelector(".fitness-lists-container");
const furnitureListsContainer = document.querySelector(".furniture-lists-container");
const sneakerListsContainer = document.querySelector(".sneaker-lists-container");
const gadgetListsContainer = document.querySelector(".gadget-lists-container");
const fashionListsContainer = document.querySelector(".fashion-lists-container");

const homePage = document.querySelector(".home-page");
const topCategoriesContainer = document.querySelector(".top-categories-container");
const bestDealsContainer = document.querySelector(".best-deals-container");
const descountShowContainer = document.querySelector(".descount-show-container");
const cashBackSectionOne = document.querySelector(".cash-back-section-1");
const allBestDealListsContainer = document.querySelector(".all-best-deal-lists-container");
const cashBackSectionTwo = document.querySelector(".cash-back-section-2");
const mostSellingProductContainer = document.querySelector(".most-selling-product-container");
const trendingProductsContainer = document.querySelector(".trending-products-container");
const productsDetailSection = document.querySelector(".products-detail-section");
const weeklyPopularProductsContainer = document.querySelector(".weekly-popular-products");
const specificProductDetailSection = document.querySelector(".specific-product-detail-section");
const serviceToHelpContainer = document.querySelector(".service-to-help-container");
const homeContainerFooter = document.querySelector(".home-container-footer");
const productCheckoutSection = document.querySelector(".product-checkout-section");

const arrowBackIcon = document.querySelector(".arrow-back-icon");
const learnMoreAboutPage = document.querySelector(".learn-more-about-page");
const learnMoreOnTwoHundred = document.querySelector(".learn-more-on-200");
const learnMoreFivePercent = document.querySelector(".learn-more-five-percent");
const homePageContentsBtn = document.querySelector(".home-page-contents-btn");
const learnMoreBtn2 = document.querySelector(".learn-more-btn-2");
const learnMoreBtn3 = document.querySelector(".learn-more-btn-3");
const learnMoreBtn4 = document.querySelector(".learn-more-btn-4");
const favoriteSection = document.querySelector(".favorite-section");
const homeContainer = document.querySelector(".home-container");

const homeSections = [
    homePage,
    topCategoriesContainer,
    bestDealsContainer,
    descountShowContainer,
    cashBackSectionOne,
    allBestDealListsContainer,
    cashBackSectionTwo,
    mostSellingProductContainer,
    trendingProductsContainer,
    weeklyPopularProductsContainer,
    serviceToHelpContainer
].filter(Boolean);


const allPageSections = [
    homePage,
    topCategoriesContainer,
    bestDealsContainer,
    descountShowContainer,
    cashBackSectionOne,
    allBestDealListsContainer,
    cashBackSectionTwo,
    mostSellingProductContainer,
    trendingProductsContainer,
    productsDetailSection,
    weeklyPopularProductsContainer,
    specificProductDetailSection,
    serviceToHelpContainer,
    productCheckoutSection,
    favoriteSection,
    learnMoreAboutPage,
    learnMoreOnTwoHundred,
    learnMoreFivePercent
].filter(Boolean);


function updateBackButton() {

    if (!arrowBackIcon) return;

    const currentIndex = window.history.state?.appHistoryIndex ?? 0;
    const hasPreviousAppPage =currentIndex > 0;

    arrowBackIcon.disabled =!hasPreviousAppPage;

    arrowBackIcon.classList.toggle("disable-arrow-back",!hasPreviousAppPage);

}

export function navigateTo(page, url, data = {}) {

    if (!page) return;

    const currentIndex = window.history.state?.appHistoryIndex ?? 0;

    const nextIndex =currentIndex + 1;

    const state = { navigation: true, page, appHistoryIndex: nextIndex, ...data };

    history.pushState(state,"",url);

    renderPage(state);

    updateBackButton();

}

function renderPage(state) {

    if (!state || !state.page) {

        showHomePage();

        return;

    }

    if (state.page === "home") {

        showHomePage();

    }

    else if (state.page === "products") {

        showProductsPage();

    }

    else if (state.page === "product") {

        showSpecificProductPage(
            state.productId
        );

    }

    else if (state.page === "favorites") {

        showFavoritePage();

    }

    else if (state.page === "checkout") {

        showCheckoutPage();

    }

    else if (state.page === "learn-more-about") {

        showLearnMorePage(learnMoreAboutPage);
    }

    else if (state.page === "learn-more-200") {

        showLearnMorePage( learnMoreOnTwoHundred);

    }

    else if (state.page === "learn-more-5") {

        showLearnMorePage(learnMoreFivePercent);
    }

    else if (state.page === "home-section") {

        showHomePage();

        if (state.section === "gadget") {

            displaySection(gadgetListsContainer);

        }


        else if (state.section === "fashion") {

            displaySection(fashionListsContainer);

        }


        else if (state.section === "toy") {

            displaySection(toyListsContainer);

        }

        else if (state.section === "education") {

            displaySection(educationListsContainer);

        }

        else if (state.section === "beauty") {

            displaySection(beautyListsContainer);

        }
        else if (state.section === "fitness") {

            displaySection(fitnessListsContainer);

        }

        else if (state.section === "furniture") {

            displaySection(furnitureListsContainer);

        }
        else if (state.section === "sneaker") {

            displaySection(sneakerListsContainer);

        }

        else if (state.section === "discount") {

            if (descountShowContainer) {

                descountShowContainer.style.display ="block";

            }

        }

    }

    else {

        showHomePage();

    }

}

window.addEventListener("popstate", (event) => {
    renderPage(event.state);
    updateBackButton();

});

if (arrowBackIcon) {

    arrowBackIcon.addEventListener("click", () => {

        if (!arrowBackIcon.disabled) {
            history.back();

        }

    });

}

export function displaySection(section) {

    if (!section) return;


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

        if (item) {

            item.style.display = "none";

        }

    });

    section.style.display = "grid";

}


if (gadgetLink) {

    gadgetLink.addEventListener("click", () => {

        navigateTo("home-section","#home/gadgets",
            {
                section: "gadget"
            }
        );

    });

}


if (fashionLink) {

    fashionLink.addEventListener("click", () => {

        navigateTo( "home-section", "#home/fashion",
            {
                section: "fashion"
            }
        );

    });

}


if (toyLink) {

    toyLink.addEventListener("click", () => {

        navigateTo("home-section","#home/toys",
            {
                section: "toy"
            }
        );

    });

}


if (educationLink) {

    educationLink.addEventListener("click", () => {

        navigateTo("home-section","#home/education",
            {
                section: "education"
            }
        );

    });

}


if (beautyLink) {

    beautyLink.addEventListener("click", () => {

        navigateTo("home-section","#home/beauty",
            {
                section: "beauty"
            }
        );

    });

}


if (fitnessLink) {

    fitnessLink.addEventListener("click", () => {

        navigateTo("home-section","#home/fitness",
            {
                section: "fitness"
            }
        );

    });

}


if (furnitureLink) {

    furnitureLink.addEventListener("click", () => {

        navigateTo("home-section","#home/furniture",
            {
                section: "furniture"
            }
        );

    });

}


if (sneakerLink) {

    sneakerLink.addEventListener("click", () => {

        navigateTo("home-section","#home/sneakers",
            {
                section: "sneaker"
            }
        );

    });

}


// ========================================
// DEAL ACTIVE LINK
// ========================================

dealLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (!allBestDealLinks) return;

        const selectedLink =allBestDealLinks.querySelector(".active-link");

        if (selectedLink) {

            selectedLink.classList.remove("active-link");

        }

        link.classList.add("active-link");

    });

});

function hideSectionsList(sections) {

    sections.forEach(section => {

        if (section) {

            section.style.display = "none";

        }

    });

}


function showSectionsList(sections, displayType = "block") {

    sections.forEach(section => {

        if (section) {

            section.style.display = displayType;

        }

    });

}


function showHomePage() {

    hideSectionsList(allPageSections);
    showSectionsList( homeSections,"flex");

    showSectionsList([homeContainerFooter],"flex");

    if (homeContainer) {

        homeContainer.style.display = "block";

    }

}


function showProductsPage() {

    hideSectionsList(allPageSections);


    if (homeContainer) {

        homeContainer.style.display = "block";

    }


    if (productsDetailSection) {

        productsDetailSection.style.display = "block";

    }

    if (weeklyPopularProductsContainer) {

        weeklyPopularProductsContainer.style.display ="block";

    }

    if (homeContainerFooter) {

        homeContainerFooter.style.display ="flex";

    }

}


function showSpecificProductPage(productId) {

    hideSectionsList(allPageSections);


    if (homeContainer) {

        homeContainer.style.display = "block";

    }


    if (specificProductDetailSection) {

        specificProductDetailSection.style.display ="block";

    }


    if (homeContainerFooter) {

        homeContainerFooter.style.display ="flex";

    }

}

export function showFavoritePage() {

    hideSectionsList(allPageSections);

    if (homeContainer) {

        homeContainer.style.display = "none";

    }

    if (favoriteSection) {

        favoriteSection.style.display = "flex";

    }

}


// ========================================
// SHOW CHECKOUT PAGE
// ========================================

function showCheckoutPage() {

    hideSectionsList(allPageSections);

    if (homeContainer) {

        homeContainer.style.display = "block";

    }
    if (productCheckoutSection) {

        productCheckoutSection.style.display ="block";

    }

}


function showLearnMorePage(page) {

    hideSectionsList(allPageSections);


    if (homeContainer) {

        homeContainer.style.display = "none";

    }


    if (page) {

        page.style.display = "block";

    }

}

export function navigateHome() {

    navigateTo("home","#home");

}

export function navigateProducts() {
    navigateTo("products","#products");

}

export function navigateProduct(productId) {

    navigateTo("product",`#products/${productId}`,{productId}
    );

}

export function navigateFavorites() {

    navigateTo("favorites","#favorites");

}

export function navigateCheckout() {

    navigateTo("checkout","#checkout");

}

export function navigateLearnMoreAbout() {

    navigateTo("learn-more-about","#learn-more");

}

export function navigateLearnMore200() {

    navigateTo("learn-more-200","#learn-more/200");

}

export function navigateLearnMore5() {

    navigateTo("learn-more-5","#learn-more/5");

}


if (homePageContentsBtn) {

    homePageContentsBtn.addEventListener("click",() => {

            navigateLearnMoreAbout();
        }
    );

}


if (learnMoreBtn2) {

    learnMoreBtn2.addEventListener("click",() => {

            navigateLearnMore200();

        }
    );

}


if (learnMoreBtn3) {
    learnMoreBtn3.addEventListener("click",() => {

            navigateLearnMore5();

        }
    );

}


if (learnMoreBtn4) {

    learnMoreBtn4.addEventListener("click",() => {

            navigateLearnMore5();

        }
    );

}

export function hideSections() {

    hideSectionsList(allPageSections);

}

export function hideSectionsTwo() {

    hideSectionsList(homeSections);

}


export function hideSectionsThree() {

    hideSectionsList(
        [
            productsDetailSection,
            specificProductDetailSection
        ]
    );

}


export function hideSectionsFour() {

    hideSectionsList(
        [
            productCheckoutSection,
            favoriteSection,
            learnMoreAboutPage,
            learnMoreOnTwoHundred,
            learnMoreFivePercent
        ]
    );

}


export function showSectionTwo(section = productsDetailSection,displayType = "block") {

    if (!section) return;

    section.style.display =displayType;

}



if (!history.state ||history.state.appHistoryIndex === undefined) {

    history.replaceState(
        {
            navigation: false,
            page: "home",

            appHistoryIndex: 0

        },
        "",
        window.location.href
    );

}

updateBackButton();

