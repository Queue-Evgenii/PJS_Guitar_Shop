import { loadImage } from "../api/images.js";

const createImgNode = (imgPath) => {
  const newBrandItem = document.createElement("li");
  newBrandItem.className = " ";

  const newBrandlink = document.createElement("a");
  newBrandlink.className = "brands-list__item _img";
  newBrandlink.href = "/";

  const brandImage = document.createElement("img");
  brandImage.src = imgPath;

  newBrandlink.appendChild(brandImage);
  newBrandItem.appendChild(newBrandlink);

  return newBrandItem;
}

const loadImages = (basePath, length = 0) => {
  const childNodes = [], promises = [];
  for (let i = 1; i < length + 1; ++i) {
    promises.push(
      loadImage(`${basePath}/${i}.webp`)
        .then(data => {
          childNodes.push(createImgNode(data.url));
        })
        .catch(err => {
          console.error("loadImage Err:", err);
        })
    )
  }
  return Promise.all(promises).then(() => childNodes);
}

const brandsListRef = document.querySelector("#brands-list");
const brandsNotFoundRef = document.querySelector("#brands-not-found");
const brandsLoaderRef = document.querySelector("#brands-loader");
loadImages("../../assets/images/brands", 15)
  .then(data => {
    if (data.length) {
      data.forEach(node => {
        brandsListRef.appendChild(node);
      });
      brandsListRef.classList.remove("_hidden");
      return;
    }
    brandsNotFoundRef.classList.remove("_hidden");
  })
  .finally(() => {
    brandsLoaderRef.classList.add("_hidden");
    setupPopup();
  });

const setupPopup = () => {
  const popup = document.querySelector(".popup");
  const popupImg = document.querySelector(".popup__image");
  document
    .querySelectorAll(".brands-list__item")
    .forEach(item => {
      const img = item.querySelector("img");
      img.addEventListener("click", (e) => {
        e.preventDefault();
        popupImg.src = img.src;
        popup.style.display = 'flex';
      })
    });

  popup.addEventListener("click", () => popup.style.display = 'none');
}