
const arrSP = [
    {ma:"SP17", ten:"Bộ quần áo bóng đá CLB Juventus Sọc 2024-2025", hinh:"sp17.jpg", gia:"120.000 VND"},
    {ma:"SP18", ten:"Bộ quần áo bóng đá CLB AC Milan Đỏ Sọc 2024-2025", hinh:"sp18.jpg", gia:"120.000 VND"},
    {ma:"SP19", ten:"Bộ quần áo bóng đá CLB Inter Miami Hồng 2024", hinh:"sp19.jpg", gia:"120.000 VND"},
    {ma:"SP20", ten:"Bộ quần áo bóng đá CLB INTER Trắng 2024", hinh:"sp20.jpg", gia:"120.000 VND"},
    {ma:"SP21", ten:"Bộ quần áo bóng đá CLB AC Milan Hồng 2023–2024", hinh:"sp21.jpg", gia:"120.000 VND"},
    {ma:"SP22", ten:"Bộ quần áo bóng đá CLB AC Milan Trắng 2023–2024", hinh:"sp22.jpg", gia:"120.000 VND"},
    {ma:"SP23", ten:"Bộ quần áo bóng đá CLB Juvetus Sọc 2023", hinh:"sp23.jpg", gia:"120.000 VND"},
    {ma:"SP24", ten:"Bộ quần áo bóng đá CLB AC Milan Đỏ Sọc 2023", hinh:"sp24.jpg", gia:"120.000 VND"},
];

var str = "";
for (let i = 0; i < arrSP.length; i++) {
    var obj = JSON.stringify(arrSP[i]);
    str += `
        <div class="cartegory-right-content-item">
            <a href="product${i + 17}.html"><img src="./images/${arrSP[i].hinh}" alt=""></a>
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