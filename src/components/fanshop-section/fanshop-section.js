const counter = function () {
   const btns = document.querySelectorAll(".counter__btn");
 
   btns.forEach((btn) => {
     btn.addEventListener("click", function () {
       const direction = this.dataset.direction;
       const inp = this.parentElement.querySelector(".counter__value");
       let currentValue = +inp.value;
       let newValue;
 
       if (direction === "plus") {
         newValue = currentValue + 1;
       } else {
         newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
       }
 
       inp.value = newValue;
 
       // Добавляем или убираем атрибут disabled в зависимости от значения
       const minusBtn = document.querySelector(
         '.counter__btn[data-direction="minus"]'
       );
       if (newValue === 0) {
         minusBtn.setAttribute("disabled", "disabled");
       } else {
         minusBtn.removeAttribute("disabled");
       }
     });
   });
 };
 
 counter();
 