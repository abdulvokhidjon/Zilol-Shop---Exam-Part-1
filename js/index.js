import { getData } from "./request.js";

const tempPopular = document.getElementById("temp-popular");
const tempDiscount = document.getElementById("temp-discount");
const popularCard = document.getElementById("popular-card");
const discountCard = document.getElementById("discount-card");

const updateUI = (products) => {
  products
    .sort((a, b) => {
      return b.rating - a.rating;
    })
    .slice(0, 4)
    .forEach((prod) => {
      const clonePopular = tempPopular.content.cloneNode(true);
      const popularImg = clonePopular.querySelector(".card-img");
      const popularTitle = clonePopular.querySelector(".card-title");
      const popularPrice = clonePopular.querySelector(".price");
      const popularRating = clonePopular.querySelector(".rating");

      popularImg.src = prod.thumbnail;
      popularTitle.textContent = prod.title;
      popularPrice.textContent = prod.price;
      popularRating.textContent = prod.rating;
      popularCard.appendChild(clonePopular);
    });
  products
    .sort((a, b) => {
      return b.discountPercentage - a.discountPercentage;
    })
    .slice(0, 4)
    .forEach((prod) => {
      const cloneDiscount = tempDiscount.content.cloneNode(true);
      const popularImg = cloneDiscount.querySelector(".card-img");
      const popularTitle = cloneDiscount.querySelector(".card-title");
      const popularOldPrice = cloneDiscount.querySelector(".old-price");
      const popularNewPrice = cloneDiscount.querySelector(".new-price");
      const popularRating = cloneDiscount.querySelector(".rating");
      const discountPercent = cloneDiscount.querySelector(".discount-percent");

      discountPercent.textContent = `Disc${Math.round(
        prod.discountPercentage
      )}%`;
      popularImg.src = prod.thumbnail;
      popularTitle.textContent = prod.title;
      popularOldPrice.textContent = prod.price;
      popularNewPrice.textContent =
        (prod.price / 100) * (100 - prod.discountPercentage);
      discountCard.appendChild(cloneDiscount);
    });
};

getData("https://dummyjson.com/products/?limit=194")
  .then((data) => {
    updateUI(data.products);
    console.log(data.products);
  })
  .catch((error) => {
    console.log(error);
  });
