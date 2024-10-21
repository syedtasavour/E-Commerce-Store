// Ensure all DOM elements are loaded before running scripts
window.addEventListener('DOMContentLoaded', () => {
    displayDemoProducts();
    displayProducts();
    displayDeals();
    displayRelatedProducts();
    displayCustomerReviews();
    initLiveChat();
    updateWishlist();
    displayTestimonials();
});

// Sample product data with updated names, descriptions, and specifications
window.products = [
    {
        id: 1,
        name: "Product",
        price: 639,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lorem ipsum dolor sit amet.",
        rating: 4.5,
        reviews: 20,
        stock: "In Stock",
        specifications: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet."
        ],
        customerReviews: [
            { comment: "Very comfortable and fits well.", rating: 5 },
            { comment: "Good quality fabric.", rating: 4 }
        ]
    },
    {
        id: 2,
        name: "Product",
        price: 799,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lorem ipsum dolor sit amet.",
        rating: 4.0,
        reviews: 15,
        stock: "In Stock",
        specifications: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet."
        ],
        customerReviews: [
            { comment: "Great fit and design.", rating: 4 },
            { comment: "Nice color options.", rating: 4 }
        ]
    },
    {
        id: 3,
        name: "Product",
        price: 1499,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lorem ipsum dolor sit amet.",
        rating: 4.8,
        reviews: 25,
        stock: "In Stock",
        specifications: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet."
        ],
        customerReviews: [
            { comment: "Love the fabric and fit.", rating: 5 },
            { comment: "Perfect for casual wear.", rating: 5 }
        ]
    },
    {
        id: 4,
        name: "Product",
        price: 883,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lorem ipsum dolor sit amet.",
        rating: 4.2,
        reviews: 18,
        stock: "In Stock",
        specifications: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet."
        ],
        customerReviews: [
            { comment: "Beautiful design and comfortable.", rating: 4 },
            { comment: "Great for festive occasions.", rating: 5 }
        ]
    },
    {
        id: 5,
        name: "Product",
        price: 1975,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lorem ipsum dolor sit amet.",
        rating: 4.3,
        reviews: 12,
        stock: "In Stock",
        specifications: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet."
        ],
        customerReviews: [
            { comment: "Warm and comfortable.", rating: 4 },
            { comment: "Good quality, but slightly overpriced.", rating: 3 }
        ]
    }
];

// Function to create product cards with details
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p>$${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
        <p>Rating: ${product.rating} (${product.reviews} reviews)</p>
        <p>Status: ${product.stock}</p>
        <div class="quantity-selector">
            <label for="quantity-${product.id}">Quantity:</label>
            <input type="number" id="quantity-${product.id}" name="quantity" min="1" value="1">
        </div>
        <button onclick="addToCart(${product.id})" class="btn btn-success">Add to Cart</button>
        <button onclick="addToWishlist(${product.id})" class="btn btn-primary">Add to Wishlist</button>
    `;
    return card;
}

// Function to change the main image
function changeMainImage(imageSrc) {
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
}

// Function to display products on the page
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        window.products.forEach(product => {
            productGrid.appendChild(createProductCard(product));
        });
    }
}

// Function to display related products
function displayRelatedProducts() {
    const relatedProductGrid = document.querySelector('.related-product-grid');
    if (relatedProductGrid) {
        window.products.slice(0, 3).forEach(product => {
            relatedProductGrid.appendChild(createProductCard(product));
        });
    }
}

// Function to display customer reviews
function displayCustomerReviews() {
    const reviews = [
        { user: "Alice", comment: "Great product!", rating: 5 },
        { user: "Bob", comment: "Good value for money.", rating: 4 },
        { user: "Charlie", comment: "Satisfied with the purchase.", rating: 4 }
    ];
    const reviewsContainer = document.querySelector('.reviews');
    if (reviewsContainer) {
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <p><strong>${review.user}</strong>: ${review.comment} (${review.rating} stars)</p>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    }
}

// Shopping cart functionality
let cart = [];

function addToCart(productId) {
    const product = window.products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
        alert(`${product.name} added to cart!`);
    }
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const shippingCost = 5.00; // Flat shipping cost for demonstration

    if (cartItems) {
        cartItems.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-thumbnail">
                <span>${item.name}</span>
                <input type="number" value="1" min="1" class="cart-quantity" data-id="${item.id}">
                <span>$${item.price.toFixed(2)}</span>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItems.appendChild(cartItem);
            subtotal += item.price;
        });

        if (cartSubtotal) {
            cartSubtotal.textContent = subtotal.toFixed(2);
        }

        if (cartTotal) {
            cartTotal.textContent = (subtotal + shippingCost).toFixed(2);
        }
    }
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Function to apply a discount code
function applyDiscount() {
    const discountCode = document.getElementById('discount-code').value.trim();
    const validCodes = { "SAVE10": 0.10, "SAVE20": 0.20 }; // Example discount codes
    const discount = validCodes[discountCode] || 0;
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const shippingCost = 5.00;

    if (cartSubtotal && cartTotal) {
        const subtotal = parseFloat(cartSubtotal.textContent);
        const discountAmount = subtotal * discount;
        const newSubtotal = subtotal - discountAmount;
        cartSubtotal.textContent = newSubtotal.toFixed(2);
        cartTotal.textContent = (newSubtotal + shippingCost).toFixed(2);

        if (discount > 0) {
            alert(`Discount applied! You saved $${discountAmount.toFixed(2)}`);
        } else {
            alert('Invalid discount code.');
        }
    }
}

// Event listener for quantity changes
document.addEventListener('input', (event) => {
    if (event.target.classList.contains('cart-quantity')) {
        const productId = parseInt(event.target.dataset.id, 10);
        const newQuantity = parseInt(event.target.value, 10);
        const product = cart.find(item => item.id === productId);

        if (product) {
            const priceDifference = (newQuantity - 1) * product.price;
            const cartSubtotal = document.getElementById('cart-subtotal');
            const cartTotal = document.getElementById('cart-total');
            const shippingCost = 5.00;

            if (cartSubtotal) {
                const newSubtotal = parseFloat(cartSubtotal.textContent) + priceDifference;
                cartSubtotal.textContent = newSubtotal.toFixed(2);
            }

            if (cartTotal) {
                const newTotal = parseFloat(cartSubtotal.textContent) + shippingCost;
                cartTotal.textContent = newTotal.toFixed(2);
            }
        }
    }
});

// Checkout functionality
const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    });
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Deals of the Day
const deals = [
    { id: 5, name: "Deal 1", price: 9.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, name: "Deal 2", price: 14.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 7, name: "Deal 3", price: 24.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

function createDealCard(deal) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="${deal.image}" alt="${deal.name}">
        <h3>${deal.name}</h3>
        <p>$${deal.price.toFixed(2)}</p>
        <button onclick="addToCart(${deal.id})">Add to Cart</button>
    `;
    return card;
}

function displayDeals() {
    const dealGrid = document.querySelector('.deal-grid');
    if (dealGrid) {
        deals.forEach(deal => {
            dealGrid.appendChild(createDealCard(deal));
        });
    }
}

// Search functionality
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear current products

    const filteredProducts = window.products.filter(product => product.name.toLowerCase().includes(query));
    filteredProducts.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });
});

// User account management (simplified for demonstration)
const userAccount = {
    isLoggedIn: false,
    orderHistory: [],
    savedAddresses: [],
    paymentMethods: []
};

function login() {
    userAccount.isLoggedIn = true;
    alert('Logged in successfully!');
}

function logout() {
    userAccount.isLoggedIn = false;
    alert('Logged out successfully!');
}

function viewOrderHistory() {
    if (userAccount.isLoggedIn) {
        console.log('Order History:', userAccount.orderHistory);
    } else {
        alert('Please log in to view your order history.');
    }
}

// Function to filter products
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const priceRange = document.getElementById('price-filter').value;
    const rating = parseInt(document.getElementById('rating-filter').value, 10);

    const filteredProducts = window.products.filter(product => {
        const [minPrice, maxPrice] = priceRange.split('-').map(Number);
        const matchesCategory = !category || product.name.toLowerCase().includes(category);
        const matchesPrice = !priceRange || (product.price >= minPrice && product.price <= maxPrice);
        const matchesRating = !rating || product.rating >= rating;

        return matchesCategory && matchesPrice && matchesRating;
    });

    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear current products
    filteredProducts.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });
}

// Event listeners for filters
document.getElementById('category-filter').addEventListener('change', filterProducts);
document.getElementById('price-filter').addEventListener('change', filterProducts);
document.getElementById('rating-filter').addEventListener('change', filterProducts);

// Wishlist functionality
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(productId) {
    const product = window.products.find(p => p.id === productId);
    if (product && !wishlist.some(item => item.id === productId)) {
        wishlist.push(product);
        updateWishlist();
        alert(`${product.name} added to wishlist!`);
    } else {
        alert('This product is already in your wishlist!');
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    updateWishlist();
    if (window.location.pathname.includes('wishlist.html')) {
        displayWishlistItems();
    }
}

function updateWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// // Live chat support (simplified for demonstration)
// function initLiveChat() {
//     const chatBox = document.createElement('div');
//     chatBox.classList.add('chat-box');
//     chatBox.innerHTML = `
//         <div class="chat-header">Live Chat Support</div>
//         <div class="chat-body">
//             <p>Welcome to our live chat support!</p>
//         </div>
//         <input type="text" placeholder="Type your message..." class="chat-input">
//     `;
//     document.body.appendChild(chatBox);

//     const chatInput = chatBox.querySelector('.chat-input');
//     chatInput.addEventListener('keypress', function(event) {
//         if (event.key === 'Enter') {
//             const message = chatInput.value.trim();
//             if (message) {
//                 const chatBody = chatBox.querySelector('.chat-body');
//                 chatBody.innerHTML += `<p>You: ${message}</p>`;
//                 chatInput.value = '';
//             }
//         }
//     });
// }

// Function to create demo product cards
function createDemoProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    return card;
}

// Function to display demo products on the homepage
function displayDemoProducts() {
    const demoProducts = window.products.slice(0, 3);  // Display first 3 products

    const demoProductGrid = document.getElementById('demo-products');
    if (demoProductGrid) {
        demoProducts.forEach(product => {
            demoProductGrid.appendChild(createDemoProductCard(product));
        });
    }
}

// Analytics dashboard (simplified for demonstration)
const analytics = {
    sales: 0,
    traffic: 0,
    customerBehavior: []
};

function updateAnalytics(action) {
    analytics.traffic += 1;
    analytics.customerBehavior.push(action);
    console.log('Analytics updated:', analytics);
}

// Example usage of updateAnalytics
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        updateAnalytics(`Button clicked: ${event.target.textContent}`);
    }
});

// Customer Testimonials
const testimonials = [
    { name: "User", comment: "Great products and fast shipping!", rating: 5, icon: "👤" },
    { name: "User", comment: "Love the variety of items available.", rating: 4, icon: "👤" },
    { name: "User", comment: "Excellent customer service!", rating: 5, icon: "👤" },
    { name: "User", comment: "Good quality products, will shop again.", rating: 4, icon: "👤" },
    { name: "User", comment: "Competitive prices and reliable delivery.", rating: 5, icon: "👤" }
];

function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.classList.add('testimonial-card');
    card.innerHTML = `
        <div class="testimonial-icon">${testimonial.icon}</div>
        <h3>${testimonial.name}</h3>
        <p>${testimonial.comment}</p>
        <div class="rating">Rating: ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}</div>
    `;
    return card;
}

function displayTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials');
    if (testimonialsContainer) {
        testimonials.forEach(testimonial => {
            testimonialsContainer.appendChild(createTestimonialCard(testimonial));
        });
    }
}
