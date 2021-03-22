const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = getComputedStyle(items);
const itemsArr = document.querySelectorAll(".item");

const minRight = 0;
const itemWidth = getComputedStyle(itemsArr[0]).width;
const step = parseInt(itemWidth, 10);
const preShownItems = 300 / step;
const maxRight = (itemsArr.length - preShownItems) * step;
let currentRight = 0; 

items.style.right = currentRight;

rightBtn.addEventListener("click", e => {
  e.preventDefault;

  if (currentRight < maxRight) {
  currentRight += step;
  items.style.right = `${currentRight}px`;
  }

});

leftBtn.addEventListener("click", e => {
  e.preventDefault;

  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = `${currentRight}px`;
  }
})