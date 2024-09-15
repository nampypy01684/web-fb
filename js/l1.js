
const arrSP = [
    {ma:"SP25", ten:"Bộ quần áo bóng đá CLB AC Paris xanh đen 2024-2025", hinh:"sp25.jpg", gia:"120.000 VND"},
    {ma:"SP26", ten:"Bộ quần áo bóng đá CLB Paris Kem 2024", hinh:"sp26.jpg", gia:"120.000 VND"},
    {ma:"SP27", ten:"Bộ quần áo bóng đá CLB Paris Trắng mùa giải 2023-2024", hinh:"sp27.jpg", gia:"120.000 VND"},
    {ma:"SP28", ten:"Bộ quần áo bóng đá CLB Paris Xanh sân nhà năm 2023", hinh:"sp28.jpg", gia:"120.000 VND"},
    {ma:"SP29", ten:"Bộ quần áo bóng đá CLB AC Paris xanh đen 2024-2025", hinh:"sp29.jpg", gia:"120.000 VND"},
    {ma:"SP30", ten:"Bộ quần áo bóng đá CLB Paris Kem 2024", hinh:"sp30.jpg", gia:"120.000 VND"},
    {ma:"SP31", ten:"Bộ quần áo bóng đá CLB Paris Trắng mùa giải 2023-2024", hinh:"sp31.jpg", gia:"120.000 VND"},
    {ma:"SP32", ten:"Bộ quần áo bóng đá CLB Paris Xanh sân nhà năm 2023", hinh:"sp32.jpg", gia:"120.000 VND"},
];

var str = "";
for (let i = 0; i < arrSP.length; i++) {
    var obj = JSON.stringify(arrSP[i]);
    str += `
        <div class="cartegory-right-content-item">
            <a href="product${i + 25}.html"><img src="./images/${arrSP[i].hinh}" alt=""></a>
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