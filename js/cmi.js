
const arrSP = [
    {ma:"SP49", ten:"Bộ quần áo bóng đá tuyển Argentina Xanh 2024", hinh:"sp49.jpg", gia:"120.000 VND"},
    {ma:"SP50", ten:"Bộ quần áo bóng đá tuyển Argentina Sọc 2024", hinh:"sp50.jpg", gia:"120.000 VND"},
    {ma:"SP51", ten:"Bộ quần áo bóng đá tuyển Brazil Vàng 2024", hinh:"sp51.jpg", gia:"120.000 VND"},
    {ma:"SP52", ten:"Bộ quần áo bóng đá tuyển Argentina Đen Cam Xanh 2023", hinh:"sp52.jpg", gia:"120.000 VND"},
    {ma:"SP53", ten:"Bộ quần áo bóng đá tuyển Argentina Xanh 2024", hinh:"sp49.jpg", gia:"120.000 VND"},
    {ma:"SP54", ten:"Bộ quần áo bóng đá tuyển Argentina Sọc 2024", hinh:"sp50.jpg", gia:"120.000 VND"},
    {ma:"SP55", ten:"Bộ quần áo bóng đá tuyển Brazil Vàng 2024", hinh:"sp51.jpg", gia:"120.000 VND"},
    {ma:"SP56", ten:"Bộ quần áo bóng đá tuyển Argentina Đen Cam Xanh 2023", hinh:"sp52.jpg", gia:"120.000 VND"},
];

var str = "";
for (let i = 0; i < arrSP.length; i++) {
    var obj = JSON.stringify(arrSP[i]);
    str += `
        <div class="cartegory-right-content-item">
            <a href="product${i + 49}.html"><img src="./images/${arrSP[i].hinh}" alt=""></a>
            <h1 class="tensp">${arrSP[i].ten}</h1>
            <p class="giasp">${arrSP[i].gia}</p>
            <button class="btnAddCart" onclick="addCart('${arrSP[i].ma}');">Thêm vào giỏ hàng</button>
        </div>         
        `;
}
document.querySelector(".cartegory-right-content.row").innerHTML = str;

let soluong = 0;
const arrCart = [];

function addCart(ma) {
var item;
var flag = false;
for (let i = 0; i < arrSP.length; i++) {
    if (arrSP[i].ma == ma) {
        item = arrSP[i];
        break;
    }
}

for (let i = 0; i < arrCart.length; i++) {
    if (arrCart[i].sp.ma == ma) {
        arrCart[i].qty++;
        flag = true;
        break;
    }
}
if (!flag) {
    let cartItem = {sp: item, qty: 1};
    arrCart.push(cartItem);
}

// Tăng số lượng tổng số sản phẩm trong giỏ hàng
soluong++;
document.querySelector(".cartNo").innerText = soluong;

console.log(arrCart);
}