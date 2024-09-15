
//------------------------------------Menu-item-------------------
const toP = document.querySelector(".top")
window.addEventListener("scroll",function(){
    const X = this.pageYOffset;
  if(X>1){toP.classList.add("active")}
  else {
      toP.classList.remove("active")
  }
})
//------------------------------------Menu-SLIDEBAR-CARTEGORY-------------------
const itemSlidebar = document.querySelectorAll(".cartegory-left-li")
itemSlidebar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})
//------------------------------------PRODUCT-------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")

smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click", function(){
        console.log(imgItem)
         bigImg.src = imgItem.src
    })
})

const baoQuan = document.querySelector(".baoquan")
const chiTiet = document.querySelector(".chitiet")
const savedState = localStorage.getItem('productState');
let currentState = savedState || 'chitiet';
const chitietContent = document.querySelector(".product-content-right-bottom-content-chitiet");
const baoquanContent = document.querySelector(".product-content-right-bottom-content-baoquan");

chitietContent.style.display = currentState === 'chitiet' ? 'block' : 'none';
baoquanContent.style.display = currentState === 'baoquan' ? 'block' : 'none';
if(baoQuan){
    baoQuan.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"    
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
        localStorage.setItem('productState', 'baoquan');
})
}
if(chiTiet){
    chiTiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"    
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
        localStorage.setItem('productState', 'chitiet');
            })
}


const buTton = document.querySelector(".product-content-right-bottom-top")
if(buTton){
    buTton.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
        })
}

function directCart() {
    location.href = "cart.html";
}



