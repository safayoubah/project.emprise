const number = document.getElementById("number");
const culture = document.getElementById("culture");

const transformeText = (text) => text.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const produits = [
  {
    image: "https://mljziq84s4la.i.optimole.com/cb:nwkX.43d31/w:auto/h:auto/q:mauto/f:best/ig:avif/https://africa-horn-travel.com/wp-content/uploads/2019/11/Arta-randonnee.jpg",
    title: "Randonnée à Ali Sabieh",
    category: "Randonnée",
    price: 150,
    isPriceVariable: false,
    rating: {
      stars: 4,
      reviews: 25,
    },
    duration: 2,
    isFreeCancellation: true,
    isNew: false,
    discount: 10,
    isFavorite: true,
    place: "Ali Sabieh",
    date: "2024-07-19",
  },
  {
    image: "https://mljziq84s4la.i.optimole.com/cb:nwkX.43d31/w:auto/h:auto/q:mauto/f:best/ig:avif/https://africa-horn-travel.com/wp-content/uploads/2019/11/Arta-randonnee.jpg",
    title: "Activités de plage à Arta",
    category: "Plage",
    price: 100,
    isPriceVariable: true,
    rating: {
      stars: 5,
      reviews: 40,
    },
    duration: 1,
    isFreeCancellation: true,
    isNew: true,
    discount: 20,
    isFavorite: false,
    place: "Arta",
    date: "2024-07-19",
  },
  {
    image: "https://mljziq84s4la.i.optimole.com/cb:nwkX.43d31/w:auto/h:auto/q:mauto/f:best/ig:avif/https://africa-horn-travel.com/wp-content/uploads/2019/11/Arta-randonnee.jpg",
    title: "Safari animalier à Dikhil",
    category: "Safari",
    price: 300,
    isPriceVariable: false,
    rating: {
      stars: 5,
      reviews: 15,
    },
    duration: 3,
    isFreeCancellation: false,
    isNew: true,
    discount: 25,
    isFavorite: true,
    place: "Dikhil",
    date: "2024-07-19",
  },
  {
    image: "https://mljziq84s4la.i.optimole.com/cb:nwkX.43d31/w:auto/h:auto/q:mauto/f:best/ig:avif/https://africa-horn-travel.com/wp-content/uploads/2019/11/Arta-randonnee.jpg",
    title: "Visite de la ville de Djibouti",
    category: "Visite",
    price: 50,
    isPriceVariable: true,
    rating: {
      stars: 3,
      reviews: 30,
    },
    duration: 1,
    isFreeCancellation: true,
    isNew: false,
    discount: 5,
    isFavorite: false,
    place: "Djibouti",
    date: "2024-07-19",
  },
  {
    image: "https://mljziq84s4la.i.optimole.com/cb:nwkX.43d31/w:auto/h:auto/q:mauto/f:best/ig:avif/https://africa-horn-travel.com/wp-content/uploads/2019/11/Arta-randonnee.jpg",
    title: "Pêche à Obock",
    category: "Pêche",
    price: 200,
    isPriceVariable: false,
    rating: {
      stars: 4,
      reviews: 20,
    },
    duration: 2,
    isFreeCancellation: true,
    isNew: true,
    discount: 15,
    isFavorite: true,
    place: "Obock",
    date: "2024-07-19",
  },
  {
    image: "https://mljziq84s4la.i.optimole.com/cb:nwkX.43d31/w:auto/h:auto/q:mauto/f:best/ig:avif/https://africa-horn-travel.com/wp-content/uploads/2019/11/Arta-randonnee.jpg",
    title: "Plongée en apnée à Tadjourah",
    category: "Plongée en apnée",
    price: 250,
    isPriceVariable: true,
    rating: {
      stars: 5,
      reviews: 50,
    },
    duration: 1,
    isFreeCancellation: false,
    isNew: false,
    discount: 30,
    isFavorite: false,
    place: "Tadjourah",
    date: "2024-07-19",
  },
  {
    image: "https://mljziq84s4la.i.optimole.com/cb:nwkX.43d31/w:auto/h:auto/q:mauto/f:best/ig:avif/https://africa-horn-travel.com/wp-content/uploads/2019/11/Arta-randonnee.jpg",
    title: "Randonnée à Ali Sabieh",
    category: "Randonnée",
    price: 180,
    isPriceVariable: false,
    rating: {
      stars: 4,
      reviews: 35,
    },
    duration: 2,
    isFreeCancellation: true,
    isNew: true,
    discount: 20,
    isFavorite: true,
    place: "Ali Sabieh",
    date: "2024-07-19",
  },
  {
    image: "https://mljziq84s4la.i.optimole.com/cb:nwkX.43d31/w:auto/h:auto/q:mauto/f:best/ig:avif/https://africa-horn-travel.com/wp-content/uploads/2019/11/Arta-randonnee.jpg",
    title: "Activités de plage à Arta",
    category: "Plage",
    price: 120,
    isPriceVariable: true,
    rating: {
      stars: 5,
      reviews: 45,
    },
    duration: 1,
    isFreeCancellation: false,
    isNew: false,
    discount: 10,
    isFavorite: false,
    place: "Arta",
    date: "2024-07-19",
  },
  {
    image: "https://mljziq84s4la.i.optimole.com/cb:nwkX.43d31/w:auto/h:auto/q:mauto/f:best/ig:avif/https://africa-horn-travel.com/wp-content/uploads/2019/11/Arta-randonnee.jpg",
    title: "Safari animalier à Dikhil",
    category: "Safari",
    price: 320,
    isPriceVariable: false,
    rating: {
      stars: 5,
      reviews: 20,
    },
    duration: 3,
    isFreeCancellation: true,
    isNew: true,
    discount: 25,
    isFavorite: true,
    place: "Dikhil",
    date: "2024-07-19",
  },
  {
    image: "https://mljziq84s4la.i.optimole.com/cb:nwkX.43d31/w:auto/h:auto/q:mauto/f:best/ig:avif/https://africa-horn-travel.com/wp-content/uploads/2019/11/Arta-randonnee.jpg",
    title: "Visite de la ville de Djibouti",
    category: "Visite de la ville",
    price: 60,
    isPriceVariable: true,
    rating: {
      stars: 3,
      reviews: 35,
    },
    duration: 1,
    isFreeCancellation: false,
    isNew: false,
    discount: 5,
    isFavorite: false,
    place: "Djibouti",
    date: "2024-07-19",
  },
];

const focus = document.getElementById("grid");

const urlParams = new URLSearchParams(window.location.search);
const destination = urlParams.get("destination");
const activity = urlParams.get("activity");
const date = urlParams.get("date");

const result = produits.filter((product) => 
  transformeText (product.place) === destination &&
  transformeText(product.category) === activity &&
  product.date === date
);
culture.innerHTML = activity

const isFilterEmpty = urlParams.get("destination") && urlParams.get("activity") && urlParams.get("date");

if(isFilterEmpty){
  number.innerHTML = result.length;
  result.map((produit) => {
    let html = `
    <div class="trending-items">
           <div class="parsent"> 
             ${produit.remise ? `<p>${produit.remise}</p> ` : ""}
           </div>
            <img src="${produit.image}" alt="">
           <div class="mountain">
            <div>
              <h3>${produit.title}</h3>
            <p class"text-grey">${produit.category}</p>
            </div>
             <div>
              <i class="fa-regular fa-heart"></i>
             </div>
           </div>
           <div class="prize">
            <div>
              <p>from</p>
            <h2>${produit.price} FDJ</h2>
            <p>${produit.isPriceVariable}</p>
            </div>
            <div>
              <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>${produit.rating.stars} (${produit.rating.reviews} reviews)</p>
            </div>
           </div>
            <div class="clock">
              <i class="fa-regular fa-clock"></i>
               <p class"text-grey">${produit.duration}</p>
            </div>
            <div class="correct">
            <div class="new">
              <i class="fa-solid fa-check"></i>
              <p class"text-grey">${produit.isFreeCancellation}</p>
            </div>
            <div class="new">
              <i class="fa-solid fa-check"></i>
            <p class"text-grey">${produit.isNew}</p>
            </div>
            </div>
           </div>
      `;
      focus.innerHTML += html;
  });
}else {
  number.innerHTML = produits.length;
  produits.map((produit) => {
    let html = `
    <div class="trending-items">
           <div class="parsent"> 
             ${produit.remise ? `<p>${produit.remise}</p> ` : ""}
           </div>
            <img src="${produit.image}" alt="">
           <div class="mountain">
            <div>
              <h3>${produit.title}</h3>
            <p class"text-grey">${produit.category}</p>
            </div>
             <div>
              <i class="fa-regular fa-heart"></i>
             </div>
           </div>
           <div class="prize">
            <div>
              <p>from</p>
            <h2>${produit.price} FDJ</h2>
            <p>${produit.isPriceVariable}</p>
            </div>
            <div>
              <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>${produit.rating.stars} (${produit.rating.reviews} reviews)</p>
            </div>
           </div>
            <div class="clock">
              <i class="fa-regular fa-clock"></i>
               <p class"text-grey">${produit.duration}</p>
            </div>
            <div class="correct">
            <div class="new">
              <i class="fa-solid fa-check"></i>
              <p class"text-grey">${produit.isFreeCancellation}</p>
            </div>
            <div class="new">
              <i class="fa-solid fa-check"></i>
            <p class"text-grey">${produit.isNew}</p>
            </div>
            </div>
           </div>
      `;
      focus.innerHTML += html;
  });
}

const sortByPrice = document.getElementById("sortByPrice");
sortByPrice.addEventListener("change", (e) => {
const value = e.target.value;
const priceFilter = isFilterEmpty ? result : produits;
const lesProduitOrdenne = select(priceFilter, value);
focus.innerHTML ="";
number.innerHTML = lesProduitOrdenne.length;
lesProduitOrdenne.map((produit) => {
    let html = `
    <div class="trending-items">
           <div class="parsent"> 
             ${produit.remise ? `<p>${produit.remise}</p> ` : ""}
           </div>
            <img src="${produit.image}" alt="">
           <div class="mountain">
            <div>
              <h3>${produit.title}</h3>
            <p class"text-grey">${produit.category}</p>
            </div>
             <div>
              <i class="fa-regular fa-heart"></i>
             </div>
           </div>
           <div class="prize">
            <div>
              <p>from</p>
            <h2>${produit.price} FDJ</h2>
            <p>${produit.isPriceVariable}</p>
            </div>
            <div>
              <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>${produit.rating.stars} (${produit.rating.reviews} reviews)</p>
            </div>
           </div>
            <div class="clock">
              <i class="fa-regular fa-clock"></i>
               <p class"text-grey">${produit.duration}</p>
            </div>
            <div class="correct">
            <div class="new">
              <i class="fa-solid fa-check"></i>
              <p class"text-grey">${produit.isFreeCancellation}</p>
            </div>
            <div class="new">
              <i class="fa-solid fa-check"></i>
            <p class"text-grey">${produit.isNew}</p>
            </div>
            </div>
           </div>
      `;
      focus.innerHTML += html;
  });

})
const select = (leproduit, ordre) => {
  return leproduit.sort((a, b) =>{
    if(ordre === "asc") {
      return a.price - b.price;
    }else if (ordre === "desc") {
      return b.price - a.price;
    } 
  });
};

const free = document.getElementById("free");
free.addEventListener("click", () => {
  const filterCancelation = isFilterEmpty ? result : produits;
  const resultCancelation = filterCancelation.filter((product) => product.isFreeCancellation);
  focus.innerHTML ="";
number.innerHTML = resultCancelation.length;
resultCancelation.map((produit) => {
    let html = `
    <div class="trending-items">
           <div class="parsent"> 
             ${produit.discount ? `<p>${produit.discount}</p> ` : ""}
           </div>
            <img src="${produit.image}" alt="">
           <div class="mountain">
            <div>
              <h3>${produit.title}</h3>
            <p class"text-grey">${produit.category}</p>
            </div>
             <div>
              <i class="fa-regular fa-heart"></i>
             </div>
           </div>
           <div class="prize">
            <div>
              <p>from</p>
            <h2>${produit.price} FDJ</h2>
            <p>${produit.isPriceVariable}</p>
            </div>
            <div>
              <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>${produit.rating.stars} (${produit.rating.reviews} reviews)</p>
            </div>
           </div>
            <div class="clock">
              <i class="fa-regular fa-clock"></i>
               <p class"text-grey">${produit.duration}</p>
            </div>
            <div class="correct">
            <div class="new">
              <i class="fa-solid fa-check"></i>
              <p class"text-grey">${produit.isFreeCancellation}</p>
            </div>
            <div class="new">
              <i class="fa-solid fa-check"></i>
            <p class"text-grey">${produit.isNew}</p>
            </div>
            </div>
           </div>
      `;
      focus.innerHTML += html;
  });
}) 

const discount = document.getElementById("discount");
discount.addEventListener("click", () => {
  const filterDiscount = isFilterEmpty ? result : produits;
  const resultDiscount = filterDiscount.filter((product)  => product.discount);
  focus.innerHTML ="";
  number.innerHTML = resultDiscount.length;
  resultDiscount.map((produit) => {
      let html = `
      <div class="trending-items">
             <div class="parsent"> 
               ${produit.discount ? `<p>${produit.discount}</p> ` : ""}
             </div>
              <img src="${produit.image}" alt="">
             <div class="mountain">
              <div>
                <h3>${produit.title}</h3>
              <p class"text-grey">${produit.category}</p>
              </div>
               <div>
                <i class="fa-regular fa-heart"></i>
               </div>
             </div>
             <div class="prize">
              <div>
                <p>from</p>
              <h2>${produit.price} FDJ</h2>
              <p>${produit.isPriceVariable}</p>
              </div>
              <div>
                <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>${produit.rating.stars} (${produit.rating.reviews} reviews)</p>
              </div>
             </div>
              <div class="clock">
                <i class="fa-regular fa-clock"></i>
                 <p class"text-grey">${produit.duration}</p>
              </div>
              <div class="correct">
              <div class="new">
                <i class="fa-solid fa-check"></i>
                <p class"text-grey">${produit.isFreeCancellation}</p>
              </div>
              <div class="new">
                <i class="fa-solid fa-check"></i>
              <p class"text-grey">${produit.isNew}</p>
              </div>
              </div>
             </div>
        `;
        focus.innerHTML += html;
    });
})




const entrada = document.getElementById("new");
entrada.addEventListener("click", () => {
  const filterNew = isFilterEmpty ? result : produits;
  const resultNew = filterNew.filter((product)  => product.isNew);
  focus.innerHTML ="";
  number.innerHTML = resultNew.length;
  resultNew.map((produit) => {
      let html = `
      <div class="trending-items">
             <div class="parsent"> 
               ${produit.discount ? `<p>${produit.discount}%</p> ` : ""}
             </div>
              <img src="${produit.image}" alt="">
             <div class="mountain">
              <div>
                <h3>${produit.title}</h3>
              <p class"text-grey">${produit.category}</p>
              </div>
               <div>
                <i class="fa-regular fa-heart"></i>
               </div>
             </div>
             <div class="prize">
              <div>
                <p>from</p>
              <h2>${produit.price} FDJ</h2>
              <p>${produit.isPriceVariable}</p>
              </div>
              <div>
                <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>${produit.rating.stars} (${produit.rating.reviews} reviews)</p>
              </div>
             </div>
              <div class="clock">
                <i class="fa-regular fa-clock"></i>
                 <p class"text-grey">${produit.duration}</p>
              </div>
              <div class="correct">
              <div class="new">
                <i class="fa-solid fa-check"></i>
                <p class"text-grey">${produit.isFreeCancellation}</p>
              </div>
              <div class="new">
                <i class="fa-solid fa-check"></i>
              <p class"text-grey">${produit.isNew}</p>
              </div>
              </div>
             </div>
        `;
        focus.innerHTML += html;
    });
})





















 