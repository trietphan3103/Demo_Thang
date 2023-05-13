let products = {
    data: [
        { 
            name: "M&M's Cookies & Screeem ",
            price:"69.000vnd",
            image: "https://cdn.shopify.com/s/files/1/0251/1618/0535/products/06a8086f1a6be4795541f0ee7c61c48c_384x192.jpg?v=1629199831",
           
        },

        {
            name: "Original Skittles Fruits ", 
            
            price: "179.000vnd",
            image: "https://m.media-amazon.com/images/I/71T220iLhmL.jpg"
        },

        {
            name: "Resse's big cup",
            price: "19.000vnd",
            image: "https://cdn.shopify.com/s/files/1/2395/5885/products/reesebigcupwithreesepuffs_1000x1000_1b42dafa-26cc-4ace-aed9-ce854070f2f1_1024x.webp?v=1676029467"
        },

        {
            name: "BULK KITKAT FROM FRANCE",
            price: "19.000vnd",
            image: "https://s.alicdn.com/@sc04/kf/Ue82e0a6716c4472a95a64df2d6f284301.jpg_250x250.jpg"
        },

        {
            name: " M&M'S Milk Chocolate Honey Graham Candy",
            price: "139.000vnd",
            image: "https://cdn.shopify.com/s/files/1/0258/7626/7092/products/image_4687ec25-6607-45c9-96b7-68b279e5047d_2048x2048.png?v=1643911580"
        },

        {
            name: "YumEarth Organic Candy Canes, 140g",
            price: "89.00vnd",
            image: "https://cdn.naturamarket.ca/catalog/product/cache/d4b916af0486966841056846415bf5a8/y/u/yum-earth-organic-candy-canes-s1-min.jpg"
        },

        {
            name: "Chupa Chups - Cola 16 Lollipops, 192g (6.8oz)",
            price: "139.000vnd",
            image: "https://cdn.shopify.com/s/files/1/3105/8454/products/08410031936520-h1n1-s14_540x540.jpg?v=1662466771"
        },

        {
            name: "Crunch Bar ( 100% milk chocolate) - 43g (1.55 oz)",
            price: "29.000vnd",
            image: "https://cdn.shopify.com/s/files/1/0250/7483/products/Candyfunhouse_ferrero_crunch_43g-Side-jpg-1_600x.jpg?v=1624563101"
        },

        {
            name: "Hershey's Chocolate Bar - Cookies & Creme",
            price: "19.000vnd",
            image: "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13002257_XL1_20210114.jpg?w=1200&q=70"
        },

        {
            name: "Twix  Caramel Chocolate Cookie  - 85g (3.02oz)",
            price: "29.000vnd",
            image: "https://i5.walmartimages.com/asr/d72e96b0-9c33-4657-822e-aafee91abf17.512e798aa6e7549c7b77b4012e5e6ba1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        },

        {
            name: "Oreo Ice Cream Cone Frozen Dessert Novelties, 8 Ct",
            price: "149.00vnd",
            image: "https://i5.walmartimages.com/asr/9b89a11e-f595-4adc-a0bd-fd2d50e93a79.1de4ba24c5bfeb6a5a8b99bae56c60e8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        },

        {
            name: "Snickers Fun Size Chocolate Bars, Jumbo Candy Bag",
            price: "149.00vnd",
            image: "https://i5.walmartimages.com/asr/4c6fd6ba-785d-4dec-b3cb-21a8ca85be47.4719e2a52ced5c9cde8bc4d2a820c4c1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        },

        {
            name: "SOUR PATCH KIDS Candy, Original Flavor, 1 Bag (14 oz.)",
            price: "249.000vnd",
            image: "https://i5.walmartimages.com/asr/d38f3189-dd80-4bf2-98fe-3254df18d171.b818170764ffd27c85df5017c72fdacd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        },
        {
            name: "Kinder Joy Eggs,2.1 oz each, 3 Eggs",
            price: "99.000vnd",
            image: "https://i5.walmartimages.com/asr/586999ff-b2c6-4757-86d7-71a3dbeb8b00.b86a12a35444a578062c1bb15c596ad6.jpeg"
        }, {
            name: "Feastables Mr Beast Peanut Butter Cookies, 6oz",
            price: "99.000vnd",
            image: "https://i5.walmartimages.com/asr/528dc2ee-8844-4d43-8bca-9d97ffb3aeff.71b7fa402c3668967c81fd716b4554f6.png"
        }, {
            name: "Feastables Karl Gummy Candy Sour Green Apple-3.5 oz(100g)",
            price: "99.000vnd",
            image: "https://i5.walmartimages.com/asr/4a0320a3-4cf4-4336-b734-d871bdf5c73f.59b09b7baa26a6d73a830eefb7ea6f21.jpeg"
        },
    ]
}

for (let key in products.data) {
    let items = products.data[key]

    // let card = document.createElement("div")
    // card.classList.add("card")

    // let imgContainer = document.createElement("div")
    // imgContainer.classList.add("image-container")

    // let image = document.createElement("img")
    // image.setAttribute("src", items.image)
    // imgContainer.appendChild(image)
    // card.appendChild(imgContainer)

    // let container = document.createElement("div")
    // container.classList.add("container")

    // let name = document.createElement("h5");
    // name.classList.add("product-name");
    // name.innerText = items.name.toUpperCase();
    // container.appendChild(name);

    // let price = document.createElement("h6");
    // price.innerHTML = "<b>Price:</b> " + items.price;
    // container.appendChild(price);

    // let btn = document.createElement("button")
    // btn.setAttribute("onclick", "addToCart()")
    // btn.innerHTML = "Thêm vào giỏ hàng"
    // container.appendChild(btn)
  
    // card.appendChild(container);
    
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="image-container">
        <img src="${items.image}">
        </div>
        <div class="container">
        <h5 class="product-name">${items.name}</h5>
        <h6><b>Price:</b>${items.price}</h6>
        <button onclick="addToCart(${key})">Add to cart</button>
        </div>`
    document.getElementById("products").appendChild(card);
}

for (let items of products.data){
    let product = JSON.parse(localStorage.product)
    product.push({
        name: items.name,
        price: items.price , 
        images: items.image
    })

    localStorage.setItem("product", JSON.stringify(product))
}


const addToCart = ( key ) => {
    // get item has key param
    let item = products.data[key];

    let cart = localStorage.getItem("cart")
    cart = JSON.parse(cart);
    if  ( cart == null ) {
        cart = [
            {
                product: item,
                quantity: 1
            }
        ];
        localStorage.setItem("cart", JSON.stringify(cart))
    } else {
        for ( product_item of cart ) {
            if ( product_item.product.name == item.name ) {
                // Xử lý trùng item đã thêm vào giỏ hàng
                product_item.quantity += 1;
                localStorage.setItem("cart", JSON.stringify(cart))
                return;
            }
        }
        cart.push( {
            product: item,
            quantity: 1
        } );
        localStorage.setItem("cart", JSON.stringify(cart))
    }
}
