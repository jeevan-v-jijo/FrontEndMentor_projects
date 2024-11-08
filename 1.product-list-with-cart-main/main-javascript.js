
//  This is an array datastructure in javascript
// Here it contains all the details for each card
const cardData = [
    {
        name: "Waffle",
        description: "Waffle with Berries",
        price: "6.50",
        source1: "assets/images/image-waffle-desktop.jpg",
        source2: "assets/images/image-waffle-tablet.jpg",
        source3: "assets/images/image-waffle-mobile.jpg"
    },{
        name: "Crème Brûlée",
        description: "Vanilla Bean Crème Brûlée",
        price: "7.00",
        source1: "assets/images/image-creme-brulee-desktop.jpg",
        source2: "assets/images/image-creme-brulee-tablet.jpg",
        source3: "assets/images/image-creme-brulee-mobile.jpg"
    },{
        name: "Macaron",
        description: "Macaron Mix of Five",
        price: "8.00",
        source1: "assets/images/image-macaron-desktop.jpg",
        source2: "assets/images/image-macaron-tablet.jpg",
        source3: "assets/images/image-macaron-mobile.jpg"
    },{
        name: "Tiramisu",
        description: "Classic Tiramisu",
        price: "5.50",
        source1: "assets/images/image-tiramisu-desktop.jpg",
        source2: "assets/images/image-tiramisu-tablet.jpg",
        source3: "assets/images/image-tiramisu-mobile.jpg"
    },{
        name: "Baklava",
        description: "Pistachio Baklava",
        price: "4.00",
        source1: "assets/images/image-baklava-desktop.jpg",
        source2: "assets/images/image-baklava-tablet.jpg",
        source3: "assets/images/image-baklava-mobile.jpg"
    },{
        name: "Pie",
        description: "Lemon Meringue Pie",
        price: "5.00",
        source1: "assets/images/image-meringue-desktop.jpg",
        source2: "assets/images/image-meringue-tablet.jpg",
        source3: "assets/images/image-meringue-mobile.jpg"
    },{
        name: "Cake",
        description: "Red Velvet Cake",
        price: "4.50",
        source1: "assets/images/image-cake-desktop.jpg",
        source2: "assets/images/image-cake-tablet.jpg",
        source3: "assets/images/image-cake-mobile.jpg"
    },{
        name: "Brownie",
        description: "Salted Caramel Brownie",
        price: "4.50",
        source1: "assets/images/image-brownie-desktop.jpg",
        source2: "assets/images/image-brownie-tablet.jpg",
        source3: "assets/images/image-brownie-mobile.jpg"
    },{
        name: "Panna Cotta",
        description: "Vanilla Panna Cotta",
        price: "6.50",
        source1: "assets/images/image-panna-cotta-desktop.jpg",
        source2: "assets/images/image-panna-cotta-tablet.jpg",
        source3: "assets/images/image-panna-cotta-mobile.jpg"
    }

];

//This line creates an object of the element in HTML
const cards = document.querySelector(".cards");

cardData.forEach((item) =>{
    const inHTML=`
    <div>
    <picture>
          <source media="(min-width:650px)" srcset="${item.source1}">
          <source media="(minwidth:450px)" srcset="${item.source2}">
          <source media="(minwidht:100)" srcset="${item.source3}">
          <img src="${item.source2}" alt="Waffle" style="width:auto">
        </picture>
        <h4 class="name">${item.name}</h4> 
        <p class="description">${item.description}</p>
        <p class="price">$${item.price}</p>
        <button class="add-button">Add to Cart</button>
      </div>
    `;
    cards.innerHTML += inHTML;
});