let cartList = [];
let totalHTMLNode;

const setTotal = () => {
  let total = 0;
  cartList.forEach(item => {
    total += item.price * item.quantity;
  });
  totalHTMLNode.innerText = `Total price: ${total}`;
}

const saveCart = () => {
  localStorage.setItem("cart_list", JSON.stringify(cartList));
}

const createNode = (item) => {
  const liItem = document.createElement("li");
  liItem.className = "cart-list__item";

  const div1Item = document.createElement("div");
  div1Item.className = "cart-item__image _img";

  const div2Item = document.createElement("div");
  div2Item.className = "cart-item__info";

  const div3Item = document.createElement("div");
  div3Item.className = "cart-item__actions";

  const imgItem = document.createElement("img");
  imgItem.src = item.image;

  const nameItem = document.createElement("h3");
  nameItem.className = "cart-item__name";
  nameItem.innerText = item.name;

  const priceItem = document.createElement("h3");
  priceItem.className = "cart-item__name";
  priceItem.innerText = "$" + item.price;

  const incItem = document.createElement("span");
  const decItem = document.createElement("span");
  const qtyItem = document.createElement("div");
  incItem.className = "cart-item__inc";
  decItem.className = "cart-item__dec";
  qtyItem.className = "cart-item__qty";
  incItem.innerText = "+";
  decItem.innerText = "-";
  qtyItem.innerText = item.quantity;
  incItem.onclick = () => {
    item.quantity++;
    qtyItem.innerText = item.quantity;
    saveCart();
    setTotal();
  };
  decItem.onclick = () => {
    if (item.quantity < 2) return;
    item.quantity--;
    qtyItem.innerText = item.quantity;
    saveCart();
    setTotal();
  };

  div1Item.appendChild(imgItem);

  div2Item.appendChild(nameItem);
  div2Item.appendChild(priceItem);

  div3Item.appendChild(decItem);
  div3Item.appendChild(qtyItem);
  div3Item.appendChild(incItem);

  liItem.appendChild(div1Item);
  liItem.appendChild(div2Item);
  liItem.appendChild(div3Item);

  return liItem;
}

const renderCart = () => {
  const container = document.querySelector(".cart-content__list");
  cartList = JSON.parse(localStorage.getItem("cart_list")) || [];
  if (cartList.length === 0) {
    container.innerText = "Cart is empty";
    return;
  }
  cartList.forEach(item => {
    container.appendChild(createNode(item));
  });
  totalHTMLNode = document.querySelector(".cart-content__total");
  setTotal();
}

renderCart();