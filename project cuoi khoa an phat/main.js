
//trang dang nhap (login)



let login_form = document.getElementById('login-form');
if (login_form) {
    login_form.addEventListener('submit', function () {
        // lấy input
        let email = document.querySelector('.email-input').value;
        let password = document.querySelector('.password-input').value;

        // Lấy data từ local storage
        let user_email_list = localStorage.getItem("user_email_list");
        user_email_list = JSON.parse(user_email_list);

        let user_password_list = localStorage.getItem("user_password_list");
        user_password_list = JSON.parse(user_password_list);

        for (key in user_email_list) {
            if (email == user_email_list[key] && password == user_password_list[key]) {
                alert('Đăng nhập thành công');
            }
        }

        alert("Đăng nhập không thành công");
    })

}



//trang dang ky (register)



let register_form = document.getElementById('register-form');
if (register_form) {
    register_form.addEventListener('submit', function (e) {
        e.preventDefault();
        // lấy input
        let email = document.querySelector('.email-input').value;
        let password = document.querySelector('.password-input').value;
        let repassword = document.querySelector('.repassword-input').value;

        // Lấy data từ local storage
        let user_email_list = localStorage.getItem("user_email_list");
        user_email_list = JSON.parse(user_email_list);

        let user_password_list = localStorage.getItem("user_password_list");
        user_password_list = JSON.parse(user_password_list);

        if (email == '' || password == '' || repassword == '') {
            noti('Vui lòng điền đầy đủ thông tin', email, password, repassword, 0);
            return;
        }

        if (password != repassword) {
            noti('Mật khẩu không trùng khớp', email, password, repassword, 0);
            return;
        }

        if (user_email_list == '' && user_password_list == '') {
            user_email_list = [email];
            user_password_list = [password];
            localStorage.setItem("user_email_list", JSON.stringify(user_email_list));
            localStorage.setItem("user_password_list", JSON.stringify(user_password_list));
        } else {
            for (key in user_email_list) {
                if (email == user_email_list[key]) {
                    noti('Email đã tồn tại', email, password, repassword, 0);
                    return;
                }
            }
            user_email_list.push(email);
            user_password_list.push(password);
            localStorage.setItem("user_email_list", JSON.stringify(user_email_list));
            localStorage.setItem("user_password_list", JSON.stringify(user_password_list));
            noti('Đăng ký thành công', email, password, repassword, 1);

        }
    })

    function noti(message, email, password, repassword, status) {
        document.querySelector('.email-input').value = email;
        document.querySelector('.password-input').value = password;
        document.querySelector('.repassword-input').value = repassword;
        let noti = document.querySelector('#noti-mess')
        noti.innerHTML = message;
        if (status == 1) {
            noti.style.color = 'green';
            document.querySelector('.email-input').value = '';
            document.querySelector('.password-input').value = '';
            document.querySelector('.repassword-input').value = '';
        } else {
            noti.style.color = 'red';
        }
        noti.style.opacity = 1;

    }

}







//trang chu





// async function logJSONData() {
//     const response = await fetch("https://testapi.io/api/trietphan3103/bikes");
//     const jsonData = await response.json();
//     return jsonData;
//   }

var products = ''

fetch(`https://testapi.io/api/trietphan3103/bikes`)
    .then(response => response.json())
    .then((data) => {

        console.log(data)

        let products = data.data   
        for (let key in products) {

            let items = products[key]

            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<div class="image-container">
                        <img src="${items.image}">
                        </div>
                        <div class="container">
                        <h5 class="product-name">${items.name}</h5>
                        <p class="product-content">${items.content}</p>
                        <h6><b>Price:</b>${items.price}</h6>
                        <button onclick="addToCart(${key})">Thêm vào giỏ hàng</button>
                        </div>`
            let productslist = document.getElementById("products")
            if (productslist) {
                document.getElementById("products").appendChild(card);
            }



        }


        for (let i in products) {
            if (localStorage.product) {
                let product = JSON.parse(localStorage.product)
                product.push({
                    name: items.name,
                    price: items.price,
                    content: items.content,
                    images: items.image
                })

                localStorage.setItem("product", JSON.stringify(product))
            }

        }
    })




for (let key in products.data) {

    let items = products.data[key]



    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="image-container">
            <img src="${items.image}">
            </div>
            <div class="container">
            <h5 class="product-name">${items.name}</h5>
            <p class="product-content">${items.content}</p>
            <h6><b>Price:</b>${items.price}</h6>
            <button onclick="addToCart(${key})">Thêm vào giỏ hàng</button>
            </div>`
    let productslist = document.getElementById("products")
    if (productslist) {
        document.getElementById("products").appendChild(card);
    }



}


for (let i in products.data) {
    if (localStorage.product) {
        let product = JSON.parse(localStorage.product)
        product.push({
            name: items.name,
            price: items.price,
            content: items.content,
            images: items.image
        })

        localStorage.setItem("product", JSON.stringify(product))
    }

}


const addToCart = () => {

}

//trang gioi thieu

let infor = {
    data: [
        {
            image: "../    ",
            main_content: "chu de chinh",
            content: "noi dung cua thong tin"
        },

        {
            image: "../    ",
            main_content: "chu de chinh",
            content: "noi dung cua thong tin"
        },

        {
            image: "../    ",
            main_content: "chu de chinh",
            content: "noi dung cua thong tin"
        },
    ]
}
for (let key_2 in infor.data) {

    let items_2 = infor.data[key_2]



    let card_2 = document.createElement('div');
    card_2.classList.add('card_2');
    card_2.innerHTML = `<div class="image-container-infor">
            <img src="${items_2.image}">
            </div>
            <div class="container-infor">
            <h5 class="infor-name">${items_2.main_content}</h5>
            <p class="infor-content">${items_2.content}</p>
            </div>`
    let inforlist = document.getElementById("infor")
    if (inforlist) {
        document.getElementById("infor").appendChild(card_2);
    }

}