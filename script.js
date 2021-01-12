
//let plus=document.querySelectorAll(".plus");
//let inc=document.querySelectorAll(".quantityp");

//console.log(plus);

//for(let i=0; i<plus.length;i++){
    //plus[i].addEventListener('click',function() {
        //inc[i].innerHTML= Number(inc[i].innerHTML)+1;
    //} )
//}
//let minus=document.querySelectorAll(".minus");
//for(let i=0; i<minus.length;i++){
    //minus[i].addEventListener('click',function() {
        //if(Number(inc[i].innerHTML)>0)
        //inc[i].innerHTML= Number (inc[i].innerHTML)-1;
    //} )
//}

// heart //
//let heart =document.querySelectorAll(".fa-heart");
//console.log(heart);
//for( let i=0; i < heart.length;i++){
    //heart[i].addEventListener('click ',function() {
       // heart[i].style.color="red";

    //}) 
//} 
let favs = Array.from(document.querySelectorAll(".fa-heart"))
let deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"))
let cards = Array.from(document.querySelectorAll(".wrapper"))
let plusBtns = Array.from(document.querySelectorAll(".plus"))
let minusBtns = Array.from(document.querySelectorAll(".minus"))
let totalPrice = document.querySelector(".total-price")



// Favourites Part
for (let fav of favs) {
    fav.addEventListener("click", function () {
        fav.style.color === 'red' ? fav.style.color = '#212529' : fav.style.color = 'red'
    })
}

// Remove button Part
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function () {
        // deleteBtns[i].parentNode.parentNode.parentNode.remove()
        cards[i].remove()
        total()
    })
}

// Add button
for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click", function () {
        plusBtn.nextElementSibling.innerHTML++;
        total()
    })
}


// Minus button
for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click", function () {
        minusBtn.previousElementSibling.innerHTML > 0 ? minusBtn.previousElementSibling.innerHTML-- : null;
        total()
    })

}


// Total price
function total() {
    let quantities = Array.from(document.querySelectorAll(".quantityp"))
    let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
    let s = 0;
    for (let i in unitPrices) {
        s = s + (+unitPrices[i].innerHTML) * (+quantities[i].innerHTML)
    }
    totalPrice.innerHTML = s
}