import { getProducts } from "../api/products.js"

const CATEGORY_NAME = "guitars";

const addToCart = (data) => {
  const name = "cart_list";
  let cartList = JSON.parse(localStorage.getItem(name)) || [];
  
  if (cartList.some(item => item.id === data.id)) return;
  
  cartList.push({...data,  quantity: 1});
  localStorage.setItem(name, JSON.stringify(cartList));
};

const createNode = ({ id, name, price, image }) => {
  const liItem = document.createElement("li");
  liItem.className = "products-list__item";

  const aItem = document.createElement("a");
  aItem.href = "#";

  const divItem = document.createElement("div");
  divItem.className = "products-item__image _img";

  const imgItem = document.createElement("img");
  imgItem.src = image;

  const nameItem = document.createElement("h3");
  nameItem.className = "products-item__name";
  nameItem.innerText = name;

  const priceItem = document.createElement("h3");
  priceItem.className = "products-item__name";
  priceItem.innerText = "$" + price;

  const buttonItem = document.createElement("h3");
  buttonItem.className = "products-item__button";
  buttonItem.innerText = "Add to cart";
  buttonItem.onclick = () => addToCart({ id, name, price, image });

  divItem.appendChild(imgItem);

  aItem.appendChild(divItem);
  aItem.appendChild(nameItem);
  aItem.appendChild(priceItem);
  aItem.appendChild(buttonItem);

  liItem.appendChild(aItem);

  return liItem;
}

const renderProducts = (data) => {
  const container = document.querySelector(".products-content__list")
  data.forEach(item => {
    container.appendChild(createNode(item));
  });
}

getProducts()
  .then(data => {
    console.log(data);
    renderProducts(data.find(item => item.name === CATEGORY_NAME).products || []);
  })
  .catch(err => {
    console.log("guitars.js getProducts Err", err);
  });