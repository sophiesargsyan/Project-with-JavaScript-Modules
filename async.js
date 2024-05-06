'use strict';

let fetchVar = fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
    data.forEach(product => {
      console.log(`Product: ${product.title}, Price: ${product.price}`);
    });
});

async function getItem(id) {
    const response = await fetch(`https://fakestoreapi.com/products/` + " " + id);
    const data = await response.json();
    alert(`You have selected ${data.title}, the price of which is ${data.price}`);
}
  
getItem(1);

export {fetchVar, getItem}