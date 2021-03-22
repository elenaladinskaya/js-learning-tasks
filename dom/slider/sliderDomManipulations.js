const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (direction, e) => {
  e.preventDefault();

  if (direction == rightBtn) {
    itemsList.appendChild(itemsList.firstElementChild);
  } else {
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
  }
};

rightBtn.addEventListener('click', (e) => {
  loop("rightBtn", e);
});

leftBtn.addEventListener('click', (e) => {
  loop("leftBtn", e);
});