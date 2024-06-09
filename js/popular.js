import { getData } from "./request.js";

const mmTempTop = document.getElementById("mm-temp-top");
const mmTempMidle = document.getElementById("mm-temp-middle");
const mmTempBottom = document.getElementById("mm-temp-bottom");

const mmPopularCardTop = document.getElementById("mm-popular-card-top");
const mmPopularCardMiddle = document.getElementById("mm-popular-card-middle");
const mmPopularCardBottom = document.getElementById("mm-popular-card-bottom");

const updateUI = (products) => {
  products
    .filter((prod) => prod.category === "groceries")
    .slice(0, 8)
    .forEach((prod) => {
      const cloneMmTempTop = mmTempTop.content.cloneNode(true);
      //   const mmCard = cloneMmTempTop.querySelector(".mm-card");
      const mmPercent = cloneMmTempTop.querySelector(".mm-percent");
      const mmImg = cloneMmTempTop.querySelector(".mm-card-img");
      const mmTitle = cloneMmTempTop.querySelector(".mm-card-title");
      const mmOldPrice = cloneMmTempTop.querySelector(".mm-old-price");
      const mmNewPrice = cloneMmTempTop.querySelector(".mm-new-price");
      const mmRating = cloneMmTempTop.querySelector(".mm-rating");

      mmImg.src = prod.thumbnail;
      mmPercent.textContent = `Disc${Math.round(prod.discountPercentage)}%`;
      mmTitle.textContent = prod.title;
      mmOldPrice.textContent = prod.price;
      mmNewPrice.textContent = Math.round(
        (prod.price / 100) * (100 - prod.discountPercentage)
      );
      mmRating.textContent = prod.rating;
      mmPopularCardTop.appendChild(cloneMmTempTop);
      console.log(prod);
    });

  products
    .filter((prod) => prod.category === "kitchen-accessories")
    .slice(0, 8)
    .forEach((prod) => {
      const cloneMmTempMidle = mmTempMidle.content.cloneNode(true);
      //   const mmCard = cloneMmTempTop.querySelector(".mm-card");
      const mmPercent = cloneMmTempMidle.querySelector(".mm-percent");
      const mmImg = cloneMmTempMidle.querySelector(".mm-card-img");
      const mmTitle = cloneMmTempMidle.querySelector(".mm-card-title");
      const mmOldPrice = cloneMmTempMidle.querySelector(".mm-old-price");
      const mmNewPrice = cloneMmTempMidle.querySelector(".mm-new-price");
      const mmRating = cloneMmTempMidle.querySelector(".mm-rating");

      mmImg.src = prod.thumbnail;
      mmPercent.textContent = `Disc${Math.round(prod.discountPercentage)}%`;
      mmTitle.textContent = prod.title;
      mmOldPrice.textContent = prod.price;
      mmNewPrice.textContent = Math.round(
        (prod.price / 100) * (100 - prod.discountPercentage)
      );
      mmRating.textContent = prod.rating;
      mmPopularCardMiddle.appendChild(cloneMmTempMidle);
      console.log(prod);
    });

  products
    .filter((prod) => prod.category === "smartphones")
    .slice(0, 8)
    .forEach((prod) => {
      const cloneMmTempBottom = mmTempBottom.content.cloneNode(true);
      //   const mmCard = cloneMmTempTop.querySelector(".mm-card");
      const mmPercent = cloneMmTempBottom.querySelector(".mm-percent");
      const mmImg = cloneMmTempBottom.querySelector(".mm-card-img");
      const mmTitle = cloneMmTempBottom.querySelector(".mm-card-title");
      const mmOldPrice = cloneMmTempBottom.querySelector(".mm-old-price");
      const mmNewPrice = cloneMmTempBottom.querySelector(".mm-new-price");
      const mmRating = cloneMmTempBottom.querySelector(".mm-rating");

      mmImg.src = prod.thumbnail;
      mmPercent.textContent = `Disc${Math.round(prod.discountPercentage)}%`;
      mmTitle.textContent = prod.title;
      mmOldPrice.textContent = prod.price;
      mmNewPrice.textContent = Math.round(
        (prod.price / 100) * (100 - prod.discountPercentage)
      );
      mmRating.textContent = prod.rating;
      mmPopularCardBottom.appendChild(cloneMmTempBottom);
      console.log(prod);
    });
};

getData("https://dummyjson.com/products/?limit=194")
  .then((data) => {
    updateUI(data.products);
  })
  .catch((error) => {
    console.log(error);
  });
