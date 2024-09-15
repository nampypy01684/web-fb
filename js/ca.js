
const arrSP = [
    {ma:"SP33", ten:"Bộ quần áo bóng đá Tuyển Nhật Bản Xanh 2024", hinh:"sp33.jpg", gia:"120.000 VND"},
    {ma:"SP34", ten:"Bộ quần áo bóng đá Tuyển Nhật Bản Trắng 2024", hinh:"sp34.jpg", gia:"120.000 VND"},
    {ma:"SP35", ten:"Bộ quần áo bóng đá Tuyển Hàn Quốc Đỏ 2024", hinh:"sp35.jpg", gia:"120.000 VND"},
    {ma:"SP36", ten:"Bộ quần áo bóng đá Tuyển Hàn Quốc Đen 2024", hinh:"sp36.jpg", gia:"120.000 VND"},
    {ma:"SP37", ten:"Áo Thi Đấu Đội Tuyển Việt Nam đỏ 2023", hinh:"sp37.png", gia:"120.000 VND"},
    {ma:"SP38", ten:"Áo Thi Đấu Đội Tuyển Việt Nam trắng 2023", hinh:"sp38.png", gia:"120.000 VND"},
    {ma:"SP39", ten:"Bộ quần áo đội tuyển Nhật Bản 22 23 anime", hinh:"sp39.jpg", gia:"120.000 VND"},
    {ma:"SP40", ten:"Bộ quần áo đội tuyển nhật bản japan màu xanh in hình sóng biển mới 2023", hinh:"sp40.jpg", gia:"120.000 VND"},
];

var str = "";
for (let i = 0; i < arrSP.length; i++) {
    var obj = JSON.stringify(arrSP[i]);
    str += `
        <div class="cartegory-right-content-item">
            <a href="product${i + 33}.html"><img src="./images/${arrSP[i].hinh}" alt=""></a>
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