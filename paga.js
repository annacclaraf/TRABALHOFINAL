
let total = localStorage.getItem("cartTotal");


if (total) {
    document.getElementById("total-preco").textContent = Number(total).toFixed(2);
}


const radios = document.querySelectorAll("input[name='pay']");
const cartaoForm = document.getElementById("cartao-form");
const pixForm = document.getElementById("pix-form");


radios.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.value === "cartao") {
            cartaoForm.classList.remove("hidden");
            pixForm.classList.add("hidden");
        } else {
            cartaoForm.classList.add("hidden");
            pixForm.classList.remove("hidden");
        }
    });
});


document.querySelector(".btn-confirmar").addEventListener("click", () => {
    alert("Pagamento realizado com sucesso! Obrigado por comprar na Inova Joias ✨");

  
    localStorage.removeItem("cart");
    localStorage.removeItem("cartTotal");

  
    window.location.href = "index.html";
});
