// =======================
// ログイン
// =======================

function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    let savedUser =
        localStorage.getItem("user");

    let savedPass =
        localStorage.getItem("pass");

    if (
        username === savedUser &&
        password === savedPass
    ) {

        localStorage.setItem(
            "loginUser",
            username
        );

        alert("ログイン成功");

        location.href =
            "menu.html";

    } else {

        alert(
            "ユーザー名またはパスワードが違います"
        );
    }
}

// =======================
// 会員登録
// =======================

function register() {

    let user =
        document.getElementById("newUser").value;

    let pass =
        document.getElementById("newPass").value;

    let email =
        document.getElementById("email").value;

    if (
        user === "" ||
        pass === "" ||
        email === ""
    ) {
        alert("全て入力してください");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    localStorage.setItem("email", email);

    alert("登録完了");

    location.href = "login.html";
}

// =======================
// カート追加
// =======================

function addToCart() {

    let menu =
        document.getElementById("menu");

    let itemName =
        menu.options[
            menu.selectedIndex
        ].text;

    let price =
        Number(menu.value);

    let count =
        Number(
            document.getElementById("count").value
        );

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cart.push({
        name: itemName,
        price: price,
        count: count
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("カートに追加しました");
}

// =======================
// カート表示
// =======================

window.onload = function () {

    let cartList =
        document.getElementById("cartList");

    if (cartList) {

        let cart =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];

        let html = "";
        let total = 0;

        for (let i = 0; i < cart.length; i++) {

            let item = cart[i];

            let subtotal =
                item.price * item.count;

            total += subtotal;

            html +=
                "<li>" +
                item.name +
                " × " +
                item.count +
                "個 = " +
                subtotal +
                "円</li>";
        }

        html +=
            "<h3>合計：" +
            total +
            "円</h3>";

        cartList.innerHTML = html;
    }

    let result =
        document.getElementById("result");

    if (result) {

        let orderData =
            JSON.parse(
                localStorage.getItem("orderData")
            );

        if (orderData) {

            result.innerHTML = `
            <h3>注文内容</h3>

            お名前：${orderData.name}<br>
            住所：${orderData.address}<br>
            電話：${orderData.phone}<br>
            支払方法：${orderData.payment}<br>
            配達日：${orderData.date}<br>
            配達時間：${orderData.time}
            `;
        }
    }
};

// =======================
// 注文画面へ
// =======================

function goOrder() {

    location.href = "order.html";
}

// =======================
// 注文確定
// =======================

function completeOrder() {

    let customerName =
        document.getElementById("customerName").value;

    let address =
        document.getElementById("address").value;

    let phone =
        document.getElementById("phone").value;

    let payment =
        document.getElementById("payment").value;

    let date =
        document.getElementById("date").value;

    let time =
        document.getElementById("time").value;

    let orderData = {

        name: customerName,
        address: address,
        phone: phone,
        payment: payment,
        date: date,
        time: time
    };

    localStorage.setItem(
        "orderData",
        JSON.stringify(orderData)
    );

    let sales =
        Number(
            localStorage.getItem("sales")
        ) || 0;

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        total +=
            cart[i].price *
            cart[i].count;
    }

    sales += total;

    localStorage.setItem(
        "sales",
        sales
    );

    alert("注文が完了しました");

    location.href =
        "complete.html";
}

// =======================
// ダークモード
// =======================

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark"
    );
}

// =======================
// ログアウト
// =======================

function logout() {

    localStorage.removeItem(
        "loginUser"
    );

    location.href =
        "login.html";
}
