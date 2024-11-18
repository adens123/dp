const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cate: "Dress"
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cate: "Dress"
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cate: "Sport"
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cate: "Luxury"
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cate: "Sport"
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cate: "Casual"
  }
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoreisContainer = document.querySelector(".cates");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = filteredProducts => {
  productsContainer.innerHTML = filteredProducts
    .map(
      product => `<div class="product">
            <img
              src=${product.img}
              alt="" />
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
          </div>
        </div>`
    )
    .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", e => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter(item => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCates = data.map(item => item.cate);
  const categories = [
    "All",
    ...allCates.filter((item, i) => allCates.indexOf(item) === i)
  ];

  categoreisContainer.innerHTML = categories
    .map(cate => `<span class="cate">${cate}</span>`)
    .join("");

  categoreisContainer.addEventListener("click", e => {
    const selectedCate = e.target.textContent;

    selectedCate === "All"
      ? displayProducts(data)
      : displayProducts(data.filter(item => item.cate === selectedCate));
  });
};

const setPrices = () => {
  const priceList = data.map(item => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", e => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter(item => item.price <= e.target.value));
  });
};

setCategories();
setPrices();
