const openButton = document.querySelector("#openOverlay");
const body = document.body;
const successModal = createModal("Hello, <b>world!</b>");

openButton.addEventListener("click", e => {
  body.appendChild(successModal);
});

// функция создания модалки
function createModal(content) {
  
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
  
    overlayElement.addEventListener("click", e => {
      if (!e.target.classList.contains("content")) {//проверка на отсутствие класса
        closeElement.click();
      }
  
      // if (e.target == overlayElement) {// проверка по элементу
      //   closeElement.click(); // клик по кнопке "Закрыть"        
      // }
    })
  
    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");
  
    const contentElement = document.createElement("div");
    contentElement.classList.add("content");
  
    contentElement.innerHTML = content;
  
    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";
  
    closeElement.addEventListener("click", e => {
      e.preventDefault();
      body.removeChild(overlayElement);
    })
  
    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);
    
    return overlayElement; //возвращает разметку получившегося оверлея 
}
