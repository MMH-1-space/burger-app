// =======================
// ログイン
// =======================

function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if (username === "admin" &&
        password === "1234") {

        localStorage.setItem(
            "loginUser",
            username
        );

        alert("ログイン成功");

        location.href = "menu.html";

    } else {

        alert(
            "ユーザー名：admin\nパスワード：1234"
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

    localStorage.setItem(
        "user",
        user
    );

    localStorage.setItem(
        "pass",
        pass
    );

    localStorage.setItem(
        "email",
        email
    );

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
            document.getElementById("count")
            .value
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
        document.getElementById(
            "cartList"
        );

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
                item.price *
                item.count;

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
        document.getElementById(
            "result"
        );

    if (result) {

        let orderData =
            JSON.parse(
                localStorage.getItem(
                    "orderData"
                )
            );

        if (orderData) {

            result.innerHTML =
                `
                <h3>注文内容</h3>

                お名前：
                ${orderData.name}
                <br>

                住所：
                ${orderData.address}
                <br>

                電話：
                ${orderData.phone}
                <br>

                支払方法：
                ${orderData.payment}
                <br>

                配達日：
                ${orderData.date}
                <br>

                配達時間：
                ${orderData.time}
                `;
        }
    }
};

// =======================
// 注文画面へ
// =======================

function goOrder() {

    location.href =
        "order.html";
}

// =======================
// 注文確定
// =======================

function completeOrder() {

    let customerName =
        document.getElementById(
            "customerName"
        ).value;

    let address =
        document.getElementById(
            "address"
        ).value;

    let phone =
        document.getElementById(
            "phone"
        ).value;

    let payment =
        document.getElementById(
            "payment"
        ).value;

    let date =
        document.getElementById(
            "date"
        ).value;

    let time =
        document.getElementById(
            "time"
        ).value;

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
            localStorage.getItem(
                "sales"
            )
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

    alert(
        "注文が完了しました"
    );

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
}// =======================
// ログイン
// =======================

function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if (username === "admin" &&
        password === "1234") {

        localStorage.setItem(
            "loginUser",
            username
        );

        alert("ログイン成功");

        location.href = "menu.html";

    } else {

        alert(
            "ユーザー名：admin\nパスワード：1234"
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

    localStorage.setItem(
        "user",
        user
    );

    localStorage.setItem(
        "pass",
        pass
    );

    localStorage.setItem(
        "email",
        email
    );

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
            document.getElementById("count")
            .value
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
        document.getElementById(
            "cartList"
        );

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
                item.price *
                item.count;

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
        document.getElementById(
            "result"
        );

    if (result) {

        let orderData =
            JSON.parse(
                localStorage.getItem(
                    "orderData"
                )
            );

        if (orderData) {

            result.innerHTML =
                `
                <h3>注文内容</h3>

                お名前：
                ${orderData.name}
                <br>

                住所：
                ${orderData.address}
                <br>

                電話：
                ${orderData.phone}
                <br>

                支払方法：
                ${orderData.payment}
                <br>

                配達日：
                ${orderData.date}
                <br>

                配達時間：
                ${orderData.time}
                `;
        }
    }
};

// =======================
// 注文画面へ
// =======================

function goOrder() {

    location.href =
        "order.html";
}

// =======================
// 注文確定
// =======================

function completeOrder() {

    let customerName =
        document.getElementById(
            "customerName"
        ).value;

    let address =
        document.getElementById(
            "address"
        ).value;

    let phone =
        document.getElementById(
            "phone"
        ).value;

    let payment =
        document.getElementById(
            "payment"
        ).value;

    let date =
        document.getElementById(
            "date"
        ).value;

    let time =
        document.getElementById(
            "time"
        ).value;

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
            localStorage.getItem(
                "sales"
            )
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

    alert(
        "注文が完了しました"
    );

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
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>ログイン</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="container">

<h1>🔑 ログイン</h1>

<input type="text" id="username" placeholder="ユーザー名">

<br><br>

<input type="password" id="password" placeholder="パスワード">

<br><br>

<button onclick="login()">ログイン</button>

<br><br>

<a href="register.html">新規会員登録はこちら</a>

</div>

<script src="script.js"></script>

</body>
</html>
/* ===== 全体 ===== */

body{
    margin:0;
    padding:20px;
    font-family:"Yu Gothic",sans-serif;

    background:#000;
    background-image:
        radial-gradient(circle at top left,#00ffff33,transparent 40%),
        radial-gradient(circle at bottom right,#ff00ff33,transparent 40%);
    min-height:100vh;
    color:white;
}

.container{
    max-width:800px;
    margin:auto;
    background:rgba(20,20,20,0.95);
    padding:30px;
    border-radius:15px;

    box-shadow:
        0 0 10px #00ffff,
        0 0 20px #00ffff,
        0 0 40px #00ffff;
    text-align:center;
}

/* ===== タイトル ===== */

h1{
    color:#00ffff;

    text-shadow:
        0 0 5px #00ffff,
        0 0 10px #00ffff,
        0 0 20px #00ffff,
        0 0 40px #00ffff;

    margin-bottom:20px;
}

h2{
    color:#ffffff;

    text-shadow:
        0 0 5px #ff00ff,
        0 0 10px #ff00ff;
}

/* ===== 入力欄 ===== */

input,
select,
textarea{
    width:80%;
    padding:10px;

    background:#111;
    color:white;

    border:2px solid #00ffff;
    border-radius:8px;

    font-size:16px;

    box-shadow:
        0 0 5px #00ffff;
}

textarea{
    resize:none;
}

/* ===== ボタン ===== */

button{
    background:#111;
    color:#00ffff;

    border:2px solid #00ffff;

    padding:12px 25px;
    border-radius:10px;
    font-size:16px;
    cursor:pointer;
    margin:5px;

    box-shadow:
        0 0 10px #00ffff;
}

button:hover{
    background:#00ffff;
    color:black;

    box-shadow:
        0 0 10px #00ffff,
        0 0 20px #00ffff,
        0 0 40px #00ffff;
}

/* ===== リンク ===== */

a{
    text-decoration:none;
    color:#00ffff;
    font-weight:bold;
}

a:hover{
    color:#ff00ff;

    text-shadow:
        0 0 10px #ff00ff;
}

/* ===== カート ===== */

#cartList{
    list-style:none;
    padding:0;
}

#cartList li{
    background:#111;
    margin:5px;
    padding:10px;
    border-radius:8px;

    border:1px solid #00ffff;

    box-shadow:
        0 0 10px #00ffff;
}

/* ===== 注文結果 ===== */

#result{
    background:#111;

    padding:20px;
    border-radius:10px;
    margin-top:20px;

    border:2px solid #ff00ff;

    box-shadow:
        0 0 15px #ff00ff;
}

/* ===== 売上 ===== */

#sales{
    font-size:24px;
    font-weight:bold;
    color:#00ff00;

    text-shadow:
        0 0 10px #00ff00,
        0 0 20px #00ff00;
}

/* ===== 画像 ===== */

img{
    border-radius:10px;

    box-shadow:
        0 0 10px #00ffff,
        0 0 20px #00ffff;
}

/* ===== 区切り線 ===== */

hr{
    margin:30px 0;
    border:none;
    height:2px;
    background:#00ffff;

    box-shadow:
        0 0 10px #00ffff;
}

/* ===== ダークモード ===== */

.dark{
    background:#000;
    color:white;
}

.dark .container{
    background:#111;
}

.dark input,
.dark select,
.dark textarea{
    background:#222;
    color:white;
}

.dark a{
    color:#00ffff;
}

.dark #cartList li{
    background:#222;
}

.dark #result{
    background:#222;
}

/* ===== スマホ対応 ===== */

@media screen and (max-width:600px){

    .container{
        width:95%;
        padding:15px;
    }

    input,
    select,
    textarea{
        width:95%;
    }

    button{
        width:95%;
    }
}
select{
    background:#111;
    color:white;
    border:2px solid #00ffff;
}

option{
    background:#111;
    color:white;
}
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>会員登録</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="container">

<h1>📝 会員登録</h1>

<input type="text" id="newUser" placeholder="ユーザー名">

<br><br>

<input type="password" id="newPass" placeholder="パスワード">

<br><br>

<input type="email" id="email" placeholder="メールアドレス">

<br><br>

<button onclick="register()">登録</button>

<br><br>

<a href="login.html">ログインへ戻る</a>

</div>

<script src="script.js"></script>

</body>
</html>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>商品一覧</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="container">

<h1>🍔 商品一覧 🍟</h1>

<select id="menu">
<option value="500">ハンバーガー (500円)</option>
<option value="300">ポテト (300円)</option>
<option value="200">ジュース (200円)</option>
    
</select>

<br><br>

<input type="number" id="count" value="1" min="1">

<br><br>

<input type="text" id="coupon" placeholder="クーポンコード">

<br><br>

<button onclick="addToCart()">🛒 カート追加</button>

<br><br>

<a href="cart.html">カートを見る</a>

</div>

<script src="script.js"></script>

</body>
</html>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>カート</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="container">

<h1>🛒 カート</h1>

<ul id="cartList"></ul>

<br>

<button onclick="goOrder()">
注文へ進む
</button>

<br><br>

<a href="menu.html">
商品一覧へ戻る
</a>

</div>

<script src="script.js"></script>

</body>
</html>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>注文確認</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="container">

<h1>📋 注文確認</h1>

名前<br>
<input type="text" id="customerName">

<br><br>

住所<br>
<input type="text" id="address">

<br><br>

電話番号<br>
<input type="tel" id="phone">

<br><br>

支払方法<br>

<select id="payment">
<option>現金</option>
<option>クレジットカード</option>
<option>PayPay</option>
</select>

<br><br>

配達日<br>
<input type="date" id="date">

<br><br>

配達時間<br>
<input type="time" id="time">

<br><br>

<textarea
id="message"
rows="5"
cols="40"
placeholder="ご要望"
></textarea>

<br><br>

<button onclick="completeOrder()">
注文確定
</button>

</div>

<script src="script.js"></script>

</body>
</html>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>注文完了</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="container">

<h1>🎉 注文完了</h1>

<h2>
ご注文ありがとうございました！
</h2>

<div id="result"></div>

<br>

<a href="menu.html">
もう一度注文する
</a>

</div>

<script src="script.js"></script>

</body>
</html>