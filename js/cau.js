
const arrSP = [
    {ma:"SP41", ten:"Bộ quần áo bóng đá Tuyển Anh Trắng Đỏ 2024", hinh:"sp41.jpg", gia:"120.000 VND"},
    {ma:"SP42", ten:"Bộ quần áo bóng đá tuyển Bỉ Đỏ 2024", hinh:"sp42.jpg", gia:"120.000 VND"},
    {ma:"SP43", ten:"Bộ quần áo bóng đá Tuyển Pháp Trắng 2024", hinh:"sp43.jpg", gia:"120.000 VND"},
    {ma:"SP44", ten:"Bộ quần áo bóng đá Bồ Đào Nha Đỏ 2024", hinh:"sp44.jpg", gia:"120.000 VND"},
    {ma:"SP45", ten:"Bộ quần áo bóng đá tuyển Hà Lan Cam 2024", hinh:"sp45.jpg", gia:"120.000 VND"},
    {ma:"SP46", ten:"Bộ quần áo bóng đá Tuyển Pháp Xanh 2024", hinh:"sp46.jpg", gia:"120.000 VND"},
    {ma:"SP47", ten:"Bộ quần áo bóng đá, đá banh đội tuyển Đức Trắng 2024", hinh:"sp47.jpg", gia:"120.000 VND"},
    {ma:"SP48", ten:"Bộ quần áo bóng đá Tuyển Anh Trắng 2024", hinh:"sp48.jpg", gia:"120.000 VND"},
];

var str = "";
for (let i = 0; i < arrSP.length; i++) {
    var obj = JSON.stringify(arrSP[i]);
    str += `
        <div class="cartegory-right-content-item">
            <a href="product${i + 41}.html"><img src="./images/${arrSP[i].hinh}" alt=""></a>
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