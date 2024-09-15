
const arrSP = [
    {ma:"SP57", ten:"GKVN 4 Mùa - Đông", hinh:"g1", gia:"650.000 VND"},
    {ma:"SP58", ten:"GKVN 4 Mùa - Thu", hinh:"g2", gia:"650.000 VND"},
    {ma:"SP59", ten:"GKVN 4 Mùa - Hạ", hinh:"g3", gia:"650.000 VND"},
    {ma:"SP60", ten:"Găng Tay Thủ Môn GKVN Futsal", hinh:"g4", gia:"450.000 VND"},
    {ma:"SP61", ten:"GKVN 4 Mùa - Xuân", hinh:"g5", gia:"650.000 VND"},
    {ma:"SP62", ten:"Găng Tay Thủ Môn GKVN - Esele Trắng", hinh:"g6", gia:"750.000 VND"},
    {ma:"SP63", ten:"Găng Tay Thủ Môn GKVN - Esele Đỏ", hinh:"g7", gia:"750.000 VND"},
    {ma:"SP64", ten:"Găng Tay Thủ Môn Phá Special Contact - Tím", hinh:"g8", gia:"750.000 VND"},
];

var str = "";
for (let i = 0; i < arrSP.length; i++) {
    var obj = JSON.stringify(arrSP[i]);
    str += `
        <div class="cartegory-right-content-item">
            <a href="product${i + 57}.html"><img src="./images/${arrSP[i].hinh}" alt=""></a>
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