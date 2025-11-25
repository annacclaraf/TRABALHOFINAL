
function addItemFromPage(name, price, image) {
    const product = {
        id: Date.now(),
        name,
        price,
        image,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("✔ Produto adicionado ao carrinho!");
}

if (document.getElementById("cart-items")) {
    renderCart();
}

function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${item.image}" width="60">
            <strong>${item.name}</strong><br>
            Quantidade: ${item.quantity}<br>
            Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}
            <br>
            <button onclick="removeItem(${item.id})">Remover</button>
            <hr>
        `;

        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);

  
    localStorage.setItem("cartTotal", total.toFixed(2));
}


function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}
localStorage.setItem("totalCompra", total.toFixed(2));

const hamburguer = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
});