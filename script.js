// Recupera carrinho salvo ou cria vazio
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Adicionar produto
function adicionarAoCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(produto + " foi adicionado ao carrinho!");
}

// Remover produto pelo índice
function removerDoCarrinho(index) {
  carrinho.splice(index, 1); // tira 1 item na posição "index"
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho(); // atualiza lista na tela
}

// Mostrar carrinho (usado no carrinho.html)
function carregarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalElement = document.getElementById("total");
  let total = 0;

  lista.innerHTML = ""; // limpa lista

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.produto} — R$ ${item.preco.toFixed(2)}`;

    // Botão de remover
    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.style.marginLeft = "10px";
    btn.onclick = () => removerDoCarrinho(index);

    li.appendChild(btn);
    lista.appendChild(li);

    total += item.preco;
  });

  totalElement.textContent = total.toFixed(2);
}
