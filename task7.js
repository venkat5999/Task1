// task 1
//  Use this API:
//  https://fakestoreapi.com/products
 // Requirements:
 // • Fetch all products.
 // • Convert response using .json().
//  let apiUrl = "https://fakestoreapi.com/products";
 
// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((products) => {
//     console.log("========== ALL PRODUCTS ==========");
 
//     // • Display:
//     // o Product title
//     // o Price
//     // o Category
 
//     products.forEach((product) => {
//       console.log(`Title: ${product.title}`);
//       console.log(`Price: $${product.price}`);
//       console.log(`Category: ${product.category}`);
//       console.log("-------------------------");
//     });
//     // • Use map() to create a new array containing only:
//     // o title
//     // o price
 
//     let productDetails = products.map((product) => {
//       return {
//         title: product.title,
//         price: product.price,
//       };
//     });
//     console.log(productDetails);
//     // • Use filter() to find products with price greater than $100.
//     let expensiveProducts = products.filter((product) => {
//       return product.price > 100;
//     });
//     console.log(expensiveProducts);
//     // • Use find() to find the first product in the "electronics" category.
//     let electronicsProduct = products.find((product) => {
//       return product.category === "electronics";
//     });
//     console.log(electronicsProduct);
//     // • Use reduce() to calculate the total price.
//     let totalPrice = products.reduce((total, product) => {
//       return total + product.price;
//     }, 0);
 
//     console.log(`Total: $${totalPrice.toFixed(2)}`);
 
//     // • Use sort() to arrange products from highest price to lowest.
//     // • Handle API errors using .catch().
//     // • Display a completion message using .finally().
//     let sortedProducts = [...products].sort((a, b) => {
//       return b.price - a.price;
//     });
 
//     console.log("HIGHEST TO LOWEST");
 
//     sortedProducts.forEach((product) => {
//       console.log(`${product.title} - $${product.price}`);
//     });
//   })
//   .catch((error) => {
//     console.log("Something went wrong!");
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("API PROCESS COMPLETED");
//   });
 
//----------------------------------------------------------------------------------------------------------------------------------------------
// Task 2 — Product Category Dashboard
 // Use:
// https://fakestoreapi.com/products
// Create a console-based dashboard.
 // Expected output:
 // ===== PRODUCT DASHBOARD =====
 
 // Total Products: 20
 
 // Electronics: 6
// Jewelery: 4
 // Men's Clothing: 6
 // Women's Clothing: 4
 
// Highest Price: $999.99
 // Lowest Price: $5.99
 // Average Price: $XXX
 // Students must use:
 // • fetch()
 // • map()
 // • filter()
 // • reduce()
 // • sort()
 // • Functions
 // • Template literals
 
// let apiUrl = "https://fakestoreapi.com/products";
 
// function showDashboard(products) {
//   console.log("");
 
//   console.log(`${products.length}`);
 
//   let electronics = products.filter((product) => {
//     return product.category === "electronics";
//   });
 
//   console.log(`Electronics: ${electronics.length}`);
 
//   let jewelery = products.filter((product) => {
//     return product.category === "jewelery";
//   });
 
//   console.log(`${jewelery.length}`);
 
//   let mensClothing = products.filter((product) => {
//     return product.category === "men's clothing";
//   });
 
//   console.log(`${mensClothing.length}`);
 
//   let womensClothing = products.filter((product) => {
//     return product.category === "women's clothing";
//   });
 
//   console.log(`${womensClothing.length}`);
 
//   console.log("");
 
//   let sortedProducts = [...products].sort((a, b) => {
//     return b.price - a.price;
//   });
 
//   let highestPrice = sortedProducts[0].price;
 
//   console.log(`$${highestPrice}`);
 
//   let lowestPrice = sortedProducts[sortedProducts.length - 1].price;
 
//   console.log(`$${lowestPrice}`);
 
//   let totalPrice = products.reduce((total, product) => {
//     return total + product.price;
//   }, 0);
 
//   let averagePrice = totalPrice / products.length;
 
//   console.log(`${averagePrice.toFixed(2)}`);
// }
 
// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((products) => {
//     showDashboard(products);
//   })
//   .catch((error) => {
//     console.log("API Error:", error);
//   });
 
//-------------------------------------------------------------------------------------------------------------------------------------------
 // Task 3 — User & Post API
 // Use these APIs:
 // https://jsonplaceholder.typicode.com/users
 // https://jsonplaceholder.typicode.com/posts
 // Requirements:
 // 1.    Fetch users.
 // 2.    Display all user names.
 // 3.    Display user name + email.
 // 4.    Find the user with ID 5.
 // 5.    Filter users from a particular city.
 // 6.    Fetch posts.
 // 7.    Display posts written by user ID 1.
 // 8.    Count how many posts user ID 1 has created.
 // 9.    Find the first post with more than 50 characters in the title.
 
// let usersApi = "https://jsonplaceholder.typicode.com/users";
// let postsApi = "https://jsonplaceholder.typicode.com/posts";
 
 
// fetch(usersApi)
//     .then(response => response.json())
//     .then(users => {
 
 
//         // Display all user names
//         users.forEach(user => {
//             console.log(user.name);
//         });
 
 
//         // Display name + email
//         users.forEach(user => {
//             console.log(`Name: ${user.name}`);
//             console.log(`Email: ${user.email}`);
 
//         });
 
 
//         // Find user with ID 5
//         let user5 = users.find(user => {
//             return user.id === 5;
//         });
 
//         console.log(user5);
 
 
//         // Filter users from a particular city
//         let cityName = "Gwenborough";
 
//         let cityUsers = users.filter(user => {
//             return user.address.city === cityName;
//         });
 
//         cityUsers.forEach(user => {
//             console.log(user.name);
//         });
 
 
//         // Now fetch posts
//         return fetch(postsApi);
//     })
//     .then(response => response.json())
 
 
//         // Posts written by user ID 1
//         let userPosts = posts.filter(post => {
//             return post.userId === 1;
//         });
 
//         userPosts.forEach(post => {
//             console.log(`Title: ${post.title}`);
//         });
 
 
//         // Count posts
//         console.log("");
//         console.log(` ${userPosts.length} posts`);
 
 
//         // First post with title > 50 characters
//         let longTitlePost = posts.find(post => {
//             return post.title.length > 50;
//         });
 
 
//         console.log(longTitlePost);
 
//     })
//     .catch(error => {
 
//         console.log("API Error:");
//         console.log(error);
 
//     });
 
 
 
 
//----------------------------------------------------------------------------------------------------------------
// Task 4 — API + Search
 // Use:
 // https://fakestoreapi.com/products
 // Ask the user:
 // Enter product category:
 // Example:
 // electronics
 // Then display only products belonging to that category.
 // Also ask:
 // Enter maximum price:
 // Example:
 // 500
 // Display products matching both conditions:
 // Category = electronics
 // Price <= 500
 // Concepts: prompt(), fetch(), filter(), conditions, functions.
 
// let apiUrl = "https://fakestoreapi.com/products";
 
// let category = prompt("Enter product category:");
 
// let maximumPrice = Number(prompt("Enter maximum price:"));
 
 
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(products => {
 
//         let filteredProducts = products.filter(product => {
 
//             return product.category === category &&
//                    product.price <= maximumPrice;
 
//         });
 
 
 
 
//         if (filteredProducts.length === 0) {
 
//             console.log("No products found.");
 
//         } else {
 
//             filteredProducts.forEach(product => {
 
//                 console.log(`${product.title}`);
//                 console.log(` ${product.category}`);
//                 console.log(` $${product.price}`);
   
 
//             });
 
//         }
 
//     })
//     .catch(error => {
 
   
//         console.log(error);
 
//     });
 
//----------------------------------------------------------------------------------------------------------------
 // Task 5 — API Shopping Cart
// Use:
 // https://fakestoreapi.com/products
 // Fetch the products and create a shopping cart.
 // The student should:
 // 1.    Display available products.
// 2.    Select products using their IDs.
// 3.    Add selected products to an array.
 // 4.    Calculate cart total using reduce().
 // 5.    Apply discount:
 // o Above $100 → 10%
 // o Above $200 → 20%
 // 6.    Display final amount.
 // Example:
 // ===== CART =====
 
// // Product 1: Laptop
// // Price: $999
 
// // Product 2: Mouse
// // Price: $50
 
// // Total: $1049
// // Discount: 20%
// // Final Amount: $839.20
 
// let apiUrl = "https://fakestoreapi.com/products";
 
 
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(products => {
 
 
//         products.forEach(product => {
 
//             console.log(
//                 `ID: ${product.id} | ${product.title} | $${product.price}`
//             );
 
//         });
 
 
//         // Ask user for product IDs
//         let input = prompt(
//             "Enter product IDs separated by commas\nExample: 1,3,5"
//         );
 
 
//         // Convert input into array
//         let selectedIds = input.split(",").map(id => {
//             return Number(id.trim());
//         });
 
 
//         // Find selected products
//         let cart = products.filter(product => {
 
//             return selectedIds.includes(product.id);
 
//         });
 
 
 
 
//         // Display cart
//         cart.forEach((product, index) => {
 
//             console.log(` ${index + 1}: ${product.title}`);
//             console.log(`$${product.price}`);
       
 
//         });
 
 
//         // Calculate total
//         let total = cart.reduce((sum, product) => {
 
//             return sum + product.price;
 
//         }, 0);
 
 
//         // Discount
//         let discount = 0;
 
//         if (total > 200) {
 
//             discount = 20;
 
//         } else if (total > 100) {
 
//             discount = 10;
 
//         }
 
 
//         // Calculate discount amount
//         let discountAmount = total * discount / 100;
 
 
//         // Final amount
//         let finalAmount = total - discountAmount;
 
 
//         console.log(` $${total.toFixed(2)}`);
//         console.log(`${discount}%`);
//         console.log(`$${finalAmount.toFixed(2)}`);
 
//     })
//     .catch(error => {
 
//         console.log("API Error:");
//         console.log(error);
 
//     });
 
// ---------------------------------------------------------------------------------------------------------------
// // ⭐ Task 6 — FakeStore Product Report
// // This is the best intermediate assignment for your current syllabus.
// // API:
// // https://fakestoreapi.com/products
// // Create a complete product report.
// // Students must implement:
// // 1. Fetch API
// // fetch(apiLink)
// // 2. Convert response
// // response.json()
// // 3. Display all products
// // Use:
// // forEach()
// // 4. Create product names array
// // Use:
// // map()
// // 5. Filter expensive products
// // price > 100
// // Use:
// // filter()
// // 6. Find electronics product
// // Use:
// // find()
// // 7. Calculate total price
// // Use:
// // reduce()
// // 8. Check products
// // Use:
// // some()
// // every()
// // 9. Sort
// // Highest price → lowest price.
// // 10. Error handling
// // Use:
// // .catch()
// // .finally()
// // Expected final output
// // ========== PRODUCT REPORT ==========
 
// // Total Products: 20
 
// // Product Names:
// // - Fjallraven Backpack
// // - Mens Casual Premium Slim Fit T-Shirts
// // - Mens Cotton Jacket
// // ...
 
// // Products Above $100:
// // ...
 
// // Electronics Product:
// // ...
 
// // Total Product Value:
// // $XXXX
 
// // Any Product Above $500:
// // true
 
// // All Products Above $1:
// // true
 
// // Highest → Lowest:
// // ...
// // This stays within the concepts actually present in your student's code, especially the API flow using fetch(), .json(),
// //  .then(), .catch() and .finally().
 
 
let apiUrl = "https://fakestoreapi.com/products";
 
 
fetch(apiUrl)
    .then(response => response.json())
    .then(products => {
 
        console.log("");
 
 
        // 1. Total products
        console.log(` ${products.length}`);
 
 
 
        // 2. Product names using map()
        let productNames = products.map(product => {
            return product.title;
        });
 
 
 
        productNames.forEach(name => {
            console.log(`- ${name}`);
        });
 
        console.log("");
 
 
        // 3. Products above $100 using filter()
        let expensiveProducts = products.filter(product => {
            return product.price > 100;
        });
 
 
 
        expensiveProducts.forEach(product => {
            console.log(`${product.title} - $${product.price}`);
        });
 
        console.log("");
 
 
        // 4. Find electronics product
        let electronicsProduct = products.find(product => {
            return product.category === "electronics";
        });
 
 
        console.log("Electronics Product:");
 
        if (electronicsProduct) {
 
            console.log(electronicsProduct.title);
            console.log(`Price: $${electronicsProduct.price}`);
 
        }
 
        console.log("");
 
 
        // 5. Calculate total price using reduce()
        let totalPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);
 
 
     
        console.log(`$${totalPrice.toFixed(2)}`);
 
 
 
        // 6. some()
        let productAbove500 = products.some(product => {
            return product.price > 500;
        });
 
 
        console.log(productAbove500);
       
 
 
        // 7. every()
        let allProductsAbove1 = products.every(product => {
            return product.price > 1;
        });
 
 
     
        console.log(allProductsAbove1);
     
 
 
        // 8. sort()
        let sortedProducts = [...products].sort((a, b) => {
            return b.price - a.price;
        });
 
 
 
        sortedProducts.forEach(product => {
 
            console.log(
                `${product.title} - $${product.price}`
            );
 
        });
 
    })
    .catch(error => {
 
        console.log("Something went wrong!");
        console.log(error);
 
    })
    .finally(() => {
 
     
        console.log("PRODUCT REPORT COMPLETED ");
 
    });