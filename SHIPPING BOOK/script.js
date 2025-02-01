document.addEventListener("DOMContentLoaded", function () {
    let cart = [];
    const cartCount = document.getElementById("cart-count");

    // إضافة الكتب إلى السلة
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let bookTitle = this.parentElement.querySelector("h2").innerText;
            cart.push(bookTitle);
            cartCount.innerText = cart.length;
        });
    });

    // عند إرسال الطلب، إضافة بيانات السلة إلى النموذج
    document.getElementById("orderForm").addEventListener("submit", function() {
        document.getElementById("cart-data").value = cart.join(", ");
    });
});