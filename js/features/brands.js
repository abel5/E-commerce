import { brands } from "../data/brands.js";

const brandLists =
document.querySelector(".brand-lists");

brands.forEach(brand => {


const brandList =
    document.createElement("div");


brandList.classList.add("brand-list");


brandList.innerHTML = `

    <img
        src="images/${brand.image}"
        class="brand-image"
    >

    <div class="brand-texts">

        <h3>${brand.name}</h3>

        <h6>${brand.description}</h6>

    </div>

`;


brandList.addEventListener("click", () => {

    const currentSelected =
        brandLists.querySelector(".brand-list-border");


    if (currentSelected) {

        currentSelected.classList.remove(
            "brand-list-border"
        );

    }


    brandList.classList.add(
        "brand-list-border"
    );

});


brandLists.appendChild(brandList);


});
