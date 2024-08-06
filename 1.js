let isLoggedIn = true; 


const products = [
    { id: 1, name: 'Laptop', price: 899.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Headphones', price: 199.99 }
];


let cart = [];


function displayProducts() {
    console.log('Available Products:');
    products.forEach(product => {
        console.log(`ID: ${product.id} - Name: ${product.name} - Price: $${product.price.toFixed(2)}`);
    });
}


function addToCart(productId) {
    if (!isLoggedIn) {
        console.log('You need to be logged in to add items to the cart.');
        return;
    }

    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        console.log(`${product.name} has been added to your cart.`);
    } else {
        console.log('Product not found.');
    }
}


function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}


function showCart() {
    if (cart.length === 0) {
        console.log('Your cart is empty.');
        return;
    }

    console.log('Your Cart:');
    cart.forEach(item => {
        console.log(`Name: ${item.name} - Price: $${item.price.toFixed(2)}`);
    });

    console.log(`Total Cost: $${calculateTotal().toFixed(2)}`);
}


displayProducts();
addToCart(1); 
addToCart(2); 
showCart();