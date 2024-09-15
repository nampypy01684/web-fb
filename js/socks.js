
const arrSP = [
    {ma:"SP65", ten:"Tất chống trơn lửng xanh chuối non", hinh:"t1.jpg", gia:"49.000 VND"},
    {ma:"SP66", ten:"Tất chống trơn lửng vàng", hinh:"t2.jpg", gia:"49.000 VND"},
    {ma:"SP67", ten:"Tất chống trơn lửng đen", hinh:"t6.jpg", gia:"49.000 VND"},
    {ma:"SP68", ten:"Tất chống trơn lửng đỏ", hinh:"t4.jpg", gia:"49.000 VND"},
    {ma:"SP69", ten:"Tất chống trơn lửng xanh dương", hinh:"t5.jpg", gia:"49.000 VND"},
    {ma:"SP70", ten:"Tất chống trơn lửng đen", hinh:"t6.jpg", gia:"49.000 VND"},
    {ma:"SP71", ten:"Tất chống trơn lửng xanh chuối non", hinh:"t7.jpg", gia:"49.000 VND"},
    {ma:"SP72", ten:"Tất chống trơn lửng vàng", hinh:"t8.jpg", gia:"49.000 VND"},
];

var str = "";
for (let i = 0; i < arrSP.length; i++) {
    var obj = JSON.stringify(arrSP[i]);
    str += `
        <div class="cartegory-right-content-item">
            <a href="product${i + 65}.html"><img src="./images/${arrSP[i].hinh}" alt=""></a>
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