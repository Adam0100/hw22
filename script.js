function showProducts(products) {
    const listProducts = document.querySelector('.listProducts')
    for (product of products) {
        let item = document.createElement('div')
        item.className = 'item'
        item.innerHTML = ` 
            <div class=img> 
            <img src="${product.image}" alt="Вещь 1">
            </div>
            <div class="desc">
            <h2>${product.title}</h2>
            <p class="description">${product.description}</p>
            <p class="price">Цена: $${product.price}</p>
            <button>Купить</button>
            </div>
        `
        listProducts.appendChild(item);
    }
}



async function getProducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products/')
        let request = await response.json();
        console.log(request)
        showProducts(request)
    }
    catch (e) { console.log(e + ' error') }
}
getProducts()