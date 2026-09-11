
const searchBox=document.querySelector(".search-box");
const searchBar=document.querySelector(".search-bar");
const deals=document.querySelector(".deals");
const newThing=document.querySelector(".new-thing");
const delivery=document.querySelector(".delivery");

const bestDealProductLists=document.querySelector(".best-deal-product-lists");
const gadgetLink=document.querySelector(".gadget-link");
const fashionLink=document.querySelector(".fashion-link");
const toyLink=document.querySelector(".toy-link");
const educationLink=document.querySelector(".education-link");
const beautyLink=document.querySelector(".beauty-link");
const fitnessLink=document.querySelector(".fitness-link");
const furnitureLink=document.querySelector(".furniture-link");
const sneakerLink=document.querySelector(".sneaker-link");
const dealLinks=document.querySelectorAll(".deal-links");
const allBestDealLinks=document.querySelector(".all-best-deal-links");

const toyListsContainer=document.querySelector(".toy-lists-container");
const educationListsContainer=document.querySelector(".education-lists-container");
const beautyListsContainer=document.querySelector(".beauty-lists-container");
const fitnessListsContainer=document.querySelector(".fitness-lists-container");
const furnitureListsContainer=document.querySelector(".furniture-lists-container");
const sneakerListsContainer=document.querySelector(".sneaker-lists-container");
const gadgetListsContainer=document.querySelector(".gadget-lists-container");
const fashionListsContainer=document.querySelector(".fashion-lists-container");
const weeklyPopularProductLists=document.querySelector(".weekly-popular-product-lists");
const mostSellingProductsList=document.querySelector(".most-selling-products-list");
const brandLists=document.querySelector(".brand-lists");



function hideSomething(item){
item.classList.add("hide-something");
}

function removeClass(item){
    item.classList.remove("hide-something");
}

searchBar.addEventListener("click",()=>{
    hideSomething(deals);
    hideSomething(newThing);
    hideSomething(delivery);
    searchBox.classList.add("search-box-new-width");
})
window.addEventListener("click",(e)=>{
    if(!searchBar.contains(e.target)){
         searchBox.classList.remove("search-box-new-width");
         removeClass(deals);
         removeClass(newThing);
         removeClass(delivery);
    }
});


const products = {

    gadgets: [
        {   id:1,
            name: "HomePod Mini",
            price: 239,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black",
            reviews:25,
            rating:4,
        },
        {   id:2,
            name: "Instax Mini",
            price: 239,
            reviews:345,
            rating:5,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        },
        {   id:3,
            name: "HomePod Mini",
            price: 239,
            reviews:67,
            rating:4,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {   id:4,
            name: "Instax Mini",
            price: 239,
            reviews:89,
            rating:4.7,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        }
    ],

    fashion: [
        {
             id:5,
            name: "HomePod Mini",
            price: 888,
            reviews:121,
            rating:4.8,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {   id:6,
            name: "Instax Mini",
            price: 239,
            reviews:398,
            rating:5,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        },
         {
            id:7,
            name: "HomePod Mini",
            price: 777,
            reviews:45,
            rating:4,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {   id:8,
            name: "Instax Mini",
            price: 239,
            reviews:56,
            rating:5,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        }
    ],

    toys: [
        {   id:9,
            name: "HomePod Mini",
            price: 239,
            reviews:345,
            rating:3.7,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {    id:10,
            name: "Instax Mini",
            price: 239,
            reviews:67,
            rating:4,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        }
    ],

    education: [
        {    id:11,
            name: "HomePod Mini",
            price: 239,
            reviews:36,
            rating:3.8,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {    id:12,
            name: "Instax Mini",
            price: 239,
            reviews:89,
            rating:4.7,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        },
         {  id:13,
            name: "HomePod Mini",
            price: 777,
            reviews:98,
            rating:5,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {   id:14,
            name: "Instax Mini",
            price: 239,
            reviews:88,
            rating:3.7,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        }
    ],

    beauty: [
        {    id:15,
            name: "HomePod Mini",
            price: 239,
            reviews:54,
            rating:5,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {    id:16,
            name: "Instax Mini",
            price: 239,
            reviews:333,
            rating:4.6,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        }
    ],

    fitness: [
        {    id:17,
            name: "HomePod Mini",
            price: 239,
            reviews:888,
            rating:4,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {    id:18,
            name: "Instax Mini",
            price: 239,
            reviews:988,
            rating:4.9,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        }, {
            id:19,
            reviews:543,
            name: "HomePod Mini",
            price: 777,
            rating:3.7,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {
            id:20,
            name: "Instax Mini",
            price: 239,
            reviews:543,
            rating:5,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        }
    ],

    furniture: [
        {   id:21,
            name: "HomePod Mini",
            price: 777,
            reviews:8976,
            rating:5,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {   id:22,
            name: "Instax Mini",
            price: 239,
            reviews:98,
            rating:4.7,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        }
    ],

    sneakers: [
        {   id:23,
            name: "HomePod Mini",
            price: 777,
            reviews:345,
            rating:3,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {   id:24,
            name: "Instax Mini",
            price: 239,
            reviews:90,
            rating:4,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        },
         {  id:25,
            name: "HomePod Mini",
            price: 777,
            reviews:87,
            rating:4.3,
            image: "headphone-removebg-preview.png",
            description: "Table with air purifier, stained veneer/black"
        },
        {   id:26,
            name: "Instax Mini",
            price: 239,
            reviews:77,
            rating:3,
            image: "headphone-removebg-preview.png",
            description: "Selfie mode and selfie mirror, macro mode"
        }
    ],
     bestDeals:[
    {   id:27,
        name:"HomePod Mini",
    price:864,
    reviews:44,
    rating:4.3,
    image:"headphone-removebg-preview.png",
    description:"Table with air purifier, stained veneer/black",

    },
    {
        id:28,
    name:"Instax Mini",
    price:239,
    reviews:43,
    rating:4.7,
    image:"headphone-removebg-preview.png",
    description:"Selfie mode and selfie mirror, macro mode",
    }
    , {  id:29,
        name:"HomePod Mini",
    price:233,
    reviews:76,
    rating:3.9,
    image:"headphone-removebg-preview.png",
    description:"Table with air purifier, stained veneer/black",

    },
    {
        id:30,
    name:"Instax Mini",
    price:239,
    reviews:876,
    rating:4.6,
    image:"headphone-removebg-preview.png",
    description:"Selfie mode and selfie mirror, macro mode",
    }
    
],

 weeklyKnownProducts:[
      {  id:31,
        name:"HomePod Mini",
    price:239,
    reviews:543,
    rating:4.7,
    image:"headphone-removebg-preview.png",
    description:"Table with air purifier, stained veneer/black",

    },
    {
        id:32,
    name:"Instax Mini",
    price:239,
    reviews:100,
    rating:3.9,
    image:"headphone-removebg-preview.png",
    description:"Selfie mode and selfie mirror, macro mode",
    }
    , { id:33,
        name:"HomePod Mini",
    price:239,
    reviews:678,
    rating:5,
    image:"headphone-removebg-preview.png",
    description:"Table with air purifier, stained veneer/black",

    },
    {
        id:34,
    name:"Instax Mini",
    price:239,
    reviews:200,
    rating:4,
    image:"headphone-removebg-preview.png",
    description:"Selfie mode and selfie mirror, macro mode",
    }
    ,{  id:35,
        name:"HomePod Mini",
    price:239,
    reviews:564,
    rating:5,
    image:"headphone-removebg-preview.png",
    description:"Table with air purifier, stained veneer/black",

    },

    
],
mostSelling:[
      {  id:36,
        name:"HomePod Mini",
    price:239,
    reviews:987,
    rating:4.3,
    image:"headphone-removebg-preview.png",
    description:"Table with air purifier, stained veneer/black",

    },
    {
        id:37,
    name:"Instax Mini",
    price:239,
    reviews:300,
    rating:3,
    image:"headphone-removebg-preview.png",
    description:"Selfie mode and selfie mirror, macro mode",
    }
    , {  id:38,
        name:"HomePod Mini",
    price:239,
    reviews:400,
    rating:5,
    image:"headphone-removebg-preview.png",
    description:"Table with air purifier, stained veneer/black",

    },
    {  id:39,
    name:"Instax Mini",
    price:239,
    reviews:900,
    rating:5.9,
    image:"headphone-removebg-preview.png",
    description:"Selfie mode and selfie mirror, macro mode",
    }
    ,{  id:40,
        name:"HomePod Mini",
    price:239,
    reviews:700,
    rating:4,
    image:"headphone-removebg-preview.png",
    description:"Table with air purifier, stained veneer/black",

    },
    { id:41,
    name:"Instax Mini",
    price:239,
    reviews:543,
    rating:4.5,
    image:"headphone-removebg-preview.png",
    description:"Selfie mode and selfie mirror, macro mode",
    }

    
],

};

function createProductCard(product) {

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

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
                <h4>${product.name}</h4>

                <h4>
                    <sup>$</sup>${product.price}.<sup>00</sup>
                </h4>
            </div>

            <div class="product-card-body-body">

                <p>${product.description}</p>
                  <div class="rate-and-review">
                <div class="rates">

                   <p>${product.rating} <p/> <span class="material-symbols-outlined">
                        star
                    </span>
                    

                </div>
                   <div>
                 <p class="num-of-pep-rate">
                        (${product.reviews}) reviews
                    </p>
                    </div>
                </div>
                      
                    <div class="review-and-add-to-cart-btn">
                        
                <button class="add-to-cart-btn btn">
                    Add to Cart
                </button>
                </div>
                

            </div>

        </div>
    `;

    return productCard;
}

function renderProducts(products, container) {
        container.innerHTML = "";

    products.forEach(product => {
        container.appendChild(createProductCard(product));
    });
}

renderProducts(products.gadgets, gadgetListsContainer);
renderProducts(products.fashion, fashionListsContainer);
renderProducts(products.toys, toyListsContainer);
renderProducts(products.education,educationListsContainer);
renderProducts(products.beauty,beautyListsContainer);
renderProducts(products.fitness,fitnessListsContainer);
renderProducts(products.furniture,furnitureListsContainer);
renderProducts(products.sneakers,sneakerListsContainer);
renderProducts(products.bestDeals,bestDealProductLists);
renderProducts(products.weeklyKnownProducts,weeklyPopularProductLists);
renderProducts(products.mostSelling,mostSellingProductsList);

const brandContainer=[
    {
        id:1,
        image:"target-removebg-preview.png",
        name:"Staples",
        description:"Delivery with in 24 houres"
    },
     {   id:2,
        image:"target-removebg-preview.png",
        name:"Sprouts",
        description:"Delivery with in 24 houres"
    },
     {  id:3,
        image:"target-removebg-preview.png",
        name:"Grocey outlet",
        description:"Delivery with in 24 houres"
    },
     {   id:4,
        image:"target-removebg-preview.png",
        name:"Mollies stone",
        description:"Delivery with in 24 houres"
    },
    {   id:5,
        image:"target-removebg-preview.png",
        name:"Sports Basement",
        description:"Delivery with in 24 houres"
    },
     {  id:6,
        image:"target-removebg-preview.png",
        name:"Container Store",
        description:"Delivery with in 24 houres"
    },
     {   id:7,
        image:"target-removebg-preview.png",
        name:"Target",
        description:"Delivery with in 24 houres"
    },
     {   id:8,
        image:"target-removebg-preview.png",
        name:"Bevmo!",
        description:"Delivery with in 24 houres"
    }
];



brandContainer.forEach(brand=>{
    const brandList=document.createElement("div");
    brandList.classList.add("brand-list");
       
    brandList.innerHTML=`
              <img src="images/${brand.image}" class="brand-image">
                    <div class="brand-texts">
                        <h3>${brand.name}</h3>
                        <h6>${brand.description}</h6>
                    </div>


    `

    brandList.addEventListener("click", () => {

        // Remove border from the previous selected brand
        const currentSelected = brandLists.querySelector(".brand-list-border");

        if (currentSelected) {
            currentSelected.classList.remove("brand-list-border");
        }

        // Add border to the clicked brand
        brandList.classList.add("brand-list-border");
    });
    brandLists.appendChild(brandList);
   

})




dealLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        const selectedLink=allBestDealLinks.querySelector(".active-link");
    
    if(selectedLink){
        selectedLink.classList.remove("active-link");
    }
    link.classList.add("active-link");
    })
})




function displaySection(section){
    [fashionListsContainer,
      gadgetListsContainer,
      toyListsContainer,
      educationListsContainer,
      fitnessListsContainer,
      beautyListsContainer,
      furnitureListsContainer,
      sneakerListsContainer  
    ].forEach(item=>{
        item.style.display="none";
    });
    section.style.display="flex";
}




gadgetLink.addEventListener("click",()=>{
    displaySection(gadgetListsContainer);
    
});

fashionLink.addEventListener("click",()=>{
    displaySection(fashionListsContainer);
});
toyLink.addEventListener("click",()=>{
displaySection(toyListsContainer);
});
educationLink.addEventListener("click",()=>{
    displaySection(educationListsContainer);
});
beautyLink.addEventListener("click",()=>{
    displaySection(beautyListsContainer);
});

fitnessLink.addEventListener("click",()=>{
    displaySection(fitnessListsContainer);
});
furnitureLink.addEventListener("click",()=>{
    displaySection(furnitureListsContainer);
});
sneakerLink.addEventListener("click",()=>{
    displaySection(sneakerListsContainer);
})


