document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");

    if (window.location.pathname.includes("review.html")) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem("reviewCount", reviewCount);

        const displayElement = document.getElementById("review-display");
        if (displayElement) {
            displayElement.textContent = `Total reviews submitted: ${reviewCount}`;
        }
    }
});
