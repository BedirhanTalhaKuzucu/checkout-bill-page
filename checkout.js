let productPanel = document.getElementById("product-painel");
let quantity = document.getElementById("product-quantity");
let subTotal = document.getElementById("cart-subtotal").children[1];
let ProductTotal = document.querySelectorAll(".product-line-price");
let tax = document.getElementById("cart-tax").children[1];
let shipping = document.getElementById("cart-shipping").children[1];
let netTotal = document.getElementById("cart-total").children[1];


productPanel.addEventListener("click", (e)=> {
    if (e.target.className == "fas fa-plus") {
        let quantity = e.path[2].children[1];
        quantity.innerHTML = +quantity.innerHTML + 1;
        let productTotal = e.path[3].children[4];
        let productPrice = e.path[3].children[1].children[0].children[0];
        productTotal.innerHTML = (+quantity.innerHTML * +productPrice.innerHTML).toFixed(2);
        
    }else if(e.target.className == "fas fa-minus"){
        let quantity = e.path[2].children[1];
        quantity.innerHTML = +quantity.innerHTML - 1;
        if (quantity.innerHTML == 0) {
            alert("Are you sure you want to delete the product?")
            e.path[4].remove()
        }
        let productTotal = e.path[3].children[4];
        let productPrice = e.path[3].children[1].children[0].children[0];
        productTotal.innerHTML = (+quantity.innerHTML * +productPrice.innerHTML).toFixed(2);
        
    }else if(e.target.className == "remove-product") {
        e.path[2].children[4].innerHTML = 0;
        e.path[3].remove();
        console.log(e.path[2].children[4].innerHTML);

    };
    bill();
});

function bill() {
    let sum = 0;
    ProductTotal.forEach(price => {
        sum += (+price.innerText)
    });
    subTotal.innerHTML = sum.toFixed(2);
    tax.innerHTML = ((subTotal.innerHTML*18) / 100).toFixed(2);
    shipping.innerHTML = (subTotal.innerText !== "0.00") ? 15 : 0;
    netTotal.innerHTML = (+subTotal.innerHTML + +tax.innerHTML + +shipping.innerHTML).toFixed(2)
}