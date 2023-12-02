const filterBtns = document.querySelectorAll(".filter__button");
const products = document.querySelectorAll(".products__item");

filterBtns.forEach((btn) => {
btn.addEventListener("click", () => {
    const activeBtn = document.querySelector(".filter__button.filter__button--active");
    if (activeBtn !== btn) {
        if (activeBtn) {
            activeBtn.classList.remove("filter__button--active");
        }
        btn.classList.add("filter__button--active");
    }

    const category = btn.textContent;

    products.forEach((product) => {
    const productCategory = product.querySelector(".products__description").textContent;
    if (category === "Усі") {
        product.style.display = "block";
    }
    else if (category === "Веб-сайти" && productCategory.includes("Веб-сайт")) {
        product.style.display = "block";
    } 
    else if (category === "Додатки" && productCategory.includes("Додаток")) {
        product.style.display = "block";
    } 
    else if (category === "Дизайн" && productCategory.includes("Дизайн")) {
        product.style.display = "block";
    } 
    else if (category === "Маркетинг" && productCategory.includes("Маркетинг")) {
        product.style.display = "block";
    } 
    else {
        product.style.display = "none";
    }
    });
    });
});
