document.addEventListener("DOMContentLoaded", function () {
    const buyButton = document.getElementById("buyButton");
    const orderModal = document.getElementById("orderModal");
    const closeButton = document.getElementById("closeButton");

    buyButton.addEventListener("click", function () {
        orderModal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        orderModal.style.display = "none";
    });
});
