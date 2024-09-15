
const arrSP = [
    {ma:"SP9", ten:"Bộ quần áo bóng đá CLBReal Madrid 2024-2025", hinh:"sp9.jpg", gia:"120.000 VND"},
    {ma:"SP10", ten:"Bộ quần áo bóng đá CLB Real Xám 2024-2025", hinh:"sp10.jpg", gia:"120.000 VND"},
    {ma:"SP11", ten:"Bộ quần áo bóng đá CLB Real Madrid Cam 2024–2025", hinh:"sp11.jpg", gia:"120.000 VND"},
    {ma:"SP12", ten:"Bộ quần áo bóng đá CLB Real Đen Dragon 2024", hinh:"sp12.jpg", gia:"120.000 VND"},
    {ma:"SP13", ten:"Bộ quần áo bóng đá CLB Barca trắng hồng 2024", hinh:"sp13.jpg", gia:"120.000 VND"},
    {ma:"SP14", ten:"Bộ quần áo bóng đá CLB Real Madrid Trắng 2023", hinh:"sp14.jpg", gia:"120.000 VND"},
    {ma:"SP15", ten:"Bộ quần áo bóng đá CLB Real Xám 2024-2025", hinh:"sp15.jpg", gia:"120.000 VND"},
    {ma:"SP16", ten:"Bộ quần áo bóng đá CLB Real Madrid Trắng 2023", hinh:"sp16.jpg", gia:"120.000 VND"},
];

var str = "";
for (let i = 0; i < arrSP.length; i++) {
    var obj = JSON.stringify(arrSP[i]);
    str += `
        <div class="cartegory-right-content-item">
            <a href="product${i + 9}.html"><img src="./images/${arrSP[i].hinh}" alt=""></a>
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