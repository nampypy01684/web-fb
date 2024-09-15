
const arrSP = [
    {ma:"SP1", ten:"Bộ quần áo bóng đá CLB Arsenal Đen 2024-2025", hinh:"sp1.jpg", gia:"120.000 VND"},
    {ma:"SP2", ten:"Bộ quần áo bóng đá CLB Arsenal Đỏ sân nhà 2024-2025", hinh:"sp2.jpg", gia:"120.000 VND"},
    {ma:"SP3", ten:"Bộ quần áo bóng đá CLB Mancity Biển 2024-2025", hinh:"sp3.jpg", gia:"120.000 VND"},
    {ma:"SP4", ten:"Bộ quần áo bóng đá CLB Tottenham Trắng 2024", hinh:"sp4.jpg", gia:"120.000 VND"},
    {ma:"SP5", ten:"Bộ quần áo bóng đá CLB Liverpool Đỏ 2024", hinh:"sp5.jpg", gia:"120.000 VND"},
    {ma:"SP6", ten:"Bộ quần áo bóng đá CLB Mancity xanh biển mùa giải 2023-2024", hinh:"sp6.jpg", gia:"120.000 VND"},
    {ma:"SP7", ten:"Bộ quần áo bóng đá CLB Arsenal Đỏ sân nhà 2023", hinh:"sp7.jpg", gia:"120.000 VND"},
    {ma:"SP8", ten:"Bộ quần áo bóng đá CLB Mancity Đen 2023", hinh:"sp8.jpg", gia:"120.000 VND"},
];

    var str = "";
    for (let i = 0; i < arrSP.length; i++) {
        var obj = JSON.stringify(arrSP[i]);
        str += `
            <div class="cartegory-right-content-item">
                <a href="product${i + 1}.html"><img src="./images/${arrSP[i].hinh}" alt=""></a>
                <h1 class="tensp">${arrSP[i].ten}</h1>
                <p class="giasp">${arrSP[i].gia}</p>
                <button class="btnAddCart" onclick="addCart('${arrSP[i].ma}');">Thêm vào giỏ hàng</button>
            </div>         
            `;
    }
    document.querySelector(".cartegory-right-content.row").innerHTML = str;

    let soluong = localStorage.getItem("totalQty");
    if (soluong == null) {
        soluong = 0;
    }
    document.querySelector(".cartNo").innerText = soluong;

    let arrCart = localStorage.getItem("myCart");
    if(arrCart == null) {
        arrCart = [];
    }else {
        arrCart = JSON.parse(localStorage.getItem("myCart"));
    }
    console.log(soluong);
    
// function addCart(ma) {
//     var item;
//     var flag = false;
//     for (let i = 0; i < arrSP.length; i++) {
//         if (arrSP[i].ma == ma) {
//             item = arrSP[i];
//             break;
//         }
//     }

//     for (let i = 0; i < arrCart.length; i++) {
//         if (arrCart[i].sp.ma == ma) {
//             arrCart[i].qty++;
//             flag = true;
//             break;
//         }
//     }
//     if (!flag) {
//         let cartItem = {sp: item, qty: 1};
//         arrCart.push(cartItem);
//     }

//     // Tăng số lượng tổng số sản phẩm trong giỏ hàng
//     soluong++;
//     document.querySelector(".cartNo").innerText = soluong;
//     localStorage.setItem("totalQty", soluong + "");
//     console.log(arrCart);
// }

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
    // Lưu số lượng vào localStorage
    localStorage.setItem("totalQty", soluong);
    console.log(arrCart);
    localStorage.setItem("myCart", JSON.stringify(arrCart))
}