const locationOptions = document.querySelector(".location-options");

if (locationOptions) {

    const savedLocation = localStorage.getItem("location");

    if (savedLocation) {
        locationOptions.value = savedLocation;
    }

    locationOptions.addEventListener("change", () => {

        if (locationOptions.value === "") {
            localStorage.removeItem("location");
            return;
        }

        localStorage.setItem("location",locationOptions.value);
    });
}