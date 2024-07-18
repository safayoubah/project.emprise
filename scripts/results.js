const product = document.getElementsByClassName("grid");
const produits = [
  {
    id: 1,
    remise: "30%",
    img: "../images/Photo.png",
    titre: "Mountain Hiking Tour",
    description: "Hiking Tour | Stoke on Trent",
    prix: "$895.00",
  },
  {
    id: 2,
    remise: "30%",
    img: "../images/Photo (2).png",
    titre: "Forest Wild Life",
    description: "Hiking Tour | Stoke on Trent",
    prix: "$895.00",
  },
  {
    id: 3,
    remise: "30%",
    img: "../images/Photo (2).png",
    titre: "Forest Wild Life",
    description: "Hiking Tour | Stoke on Trent",
    prix: "$895.00",
  },
  {
    id: 4,
    remise: "30%",
    img: "../images/Photo (2).png",
    titre: "Forest Wild Life",
    description: "Hiking Tour | Stoke on Trent",
    prix: "$895.00",
  },
  {
    id: 5,
    remise: "30%",
    img: "../images/Photo (2).png",
    titre: "Forest Wild Life",
    description: "Hiking Tour | Stoke on Trent",
    prix: "$895.00",
  },
  {
    id: 6,
    remise: "30%",
    img: "../images/Photo (2).png",
    titre: "Forest Wild Life",
    description: "Hiking Tour | Stoke on Trent",
    prix: "$895.00",
  },
  {
    id: 7,
    remise: "30%",
    img: "../images/Photo (2).png",
    titre: "Forest Wild Life",
    description: "Hiking Tour | Stoke on Trent",
    prix: "$895.00",
  },
  {
    id: 8,
    remise: "30%",
    img: "../images/Photo (2).png",
    titre: "Forest Wild Life",
    description: "Hiking Tour | Stoke on Trent",
    prix: "$895.00",
  },
  {
    id: 9,
    remise: "30%",
    img: "../images/Photo (2).png",
    titre: "Forest Wild Life",
    description: "Hiking Tour | Stoke on Trent",
    prix: "$895.00",
  },
  {
    id: 10,
    remise: "30%",
    img: "../images/Photo (2).png",
    titre: "Forest Wild Life",
    description: "Hiking Tour | Stoke on Trent",
    prix: "$895.00",
  },

];


produits.forEach((produit) => {
  let html = `
  <div class="trending-items">
         <div class="parsent">
           ${produit.remise ? `<p>${produit.remise}</p> ` : ""}
         </div>
          <img src="${produit.img}" alt="">
         <div class="mountain">
          <div>
            <h3>${produit.titre}</h3>
          <p>Hiking Tour | Stoke on Trent</p>
          </div>
           <div>
            <i class="fa-regular fa-heart"></i>
           </div>
         </div>
         <div class="prize">
          <div>
            <p>from</p>
          <h2>${produit.prix}</h2>
          <p>*Price varies</p>
          </div>
          <div>
            <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <p>4.7 (108)</p>
          </div>
         </div>
          <div class="clock">
            <i class="fa-regular fa-clock"></i>
             <p>7 Days</p>
          </div>
          <div class="correct">
          <div class="new">
            <i class="fa-solid fa-check"></i>
            <p>Free Cancellation</p>
          </div>
          <div class="new">
            <i class="fa-solid fa-check"></i>
          <p>New on Entrada</p>
          </div>
          </div>
         </div>
    `;
  Array.prototype.forEach.call(product, (element) => {
    element.innerHTML += html;
  });
});

const focus = document.getElementById("grid");





document.addEventListener("DOMContentLoaded", function() {
  const rangeInput = document.getElementById("range");
  const minValueInput = document.getElementById("minValue");
  const maxValueInput = document.getElementById("maxValue");

  // Update text inputs when the range input changes
  rangeInput.addEventListener("input", function() {
      const value = rangeInput.value;
      minValueInput.value = value;
      maxValueInput.value = value;
  });

  // Update range input when the minimum value input changes
  minValueInput.addEventListener("input", function() {
      const value = minValueInput.value;
      if (value >= rangeInput.min && value <= rangeInput.max) {
          rangeInput.value = value;
      }
  });

  // Update range input when the maximum value input changes
  maxValueInput.addEventListener("input", function() {
      const value = maxValueInput.value;
      if (value >= rangeInput.min && value <= rangeInput.max) {
          rangeInput.value = value;
      }
  });
});


