
const serviceHelpData = {

    faq: {
        title: "Frequently Asked Questions",

        content: `
            <h3>How can I place an order?</h3>
            <p>
                Browse our products, select the item you want,
                choose the available options, and add it to your
                shopping cart. When you are ready, continue to
                checkout and complete your order.
            </p>

            <h3>Can I cancel my order after placing it?</h3>
            <p>
                You can request to cancel your order as long as
                it has not been processed for shipping. Once the
                order has been shipped, cancellation may no longer
                be available.
            </p>

            <h3>Can I change the quantity of a product?</h3>
            <p>
                Yes. You can adjust the quantity of an item directly
                from your shopping cart before completing checkout.
                The total price will update automatically.
            </p>

            <h3>How can I check my order information?</h3>
            <p>
                After placing an order, you can review your order
                details and purchased products from your account
                or the available order information.
            </p>
        `
    },


    payment: {
        title: "Online Payment Process",

        content: `
            <h3>What payment methods can I use?</h3>
            <p>
                During checkout, you can choose from the available
                payment methods provided for your order. Select the
                option that is most convenient for you and follow
                the instructions to complete your payment.
            </p>

            <h3>Is my online payment secure?</h3>
            <p>
                Your payment information is handled through a secure
                checkout process. Always make sure you are using the
                official checkout page when entering your payment
                details.
            </p>

            <h3>When will my payment be confirmed?</h3>
            <p>
                Your payment confirmation depends on the payment
                method you select. Once the payment has been
                successfully processed, your order can continue
                through the checkout process.
            </p>

            <h3>What should I do if my payment fails?</h3>
            <p>
                If your payment does not go through, check that your
                payment information is correct and try again. You can
                also choose another available payment method if the
                problem continues.
            </p>
        `
    },


    delivery: {
        title: "Home Delivery",

        content: `
            <h3>How long does home delivery take?</h3>
            <p>
                Delivery time can vary depending on your location,
                the product you order, and the delivery option you
                select during checkout. Estimated delivery details
                will be provided when available.
            </p>

            <h3>How can I check the status of my order?</h3>
            <p>
                You can review your order information from your
                account to check the current status of your purchase
                and available delivery details.
            </p>

            <h3>Can I change my delivery address?</h3>
            <p>
                If your order has not been processed for shipping,
                you may be able to update the delivery information.
                Contact support as soon as possible if you need to
                make a change.
            </p>

            <h3>What happens if I am not available for delivery?</h3>
            <p>
                If you are unavailable when your order arrives, the
                delivery service may arrange another delivery attempt
                or provide instructions for receiving your package.
            </p>
        `
    }

};

const serviceHelpCards =document.querySelectorAll(".service-to-help-card");

serviceHelpCards.forEach(card => {

    card.addEventListener("click", () => {

        const helpType =card.dataset.help;

        window.location.href =`help-center.html?topic=${helpType}`;

    });

});

const helpCenterContent =document.querySelector(".help-center-content");


if (helpCenterContent) {

    const params = new URLSearchParams(window.location.search);

    const topic = params.get("topic");

    const helpData = serviceHelpData[topic];


    if (helpData) {

        helpCenterContent.innerHTML = `

            <h1>${helpData.title}</h1>

            <div class="help-content">${helpData.content} </div>

        `;

    } else {

        helpCenterContent.innerHTML = `

            <h1>Help Center</h1>

            <p>Select a help topic to learn more. </p>

        `;

    }

}