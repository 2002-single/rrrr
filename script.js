function sum() {
    let inputX = document.getElementsByName("x") [0]
    let a = inputX.value 
    let inputY = document.getElementsByName("y") [0]
    let b = inputY.value

    let c = Number(a) + Number(b)
    let span = document.getElementById("calcResult")
    span.innerHTML = "Результат: " + c
    return c
}

function substruct() {
    let inputX = document.getElementsByName("x") [0]
    let a = inputX.value 
    let inputY = document.getElementsByName("y") [0]
    let b = inputY.value

    let c = Number(a) - Number(b)
    let span = document.getElementById("calcResult")
    span.innerHTML = "Результат: " + c
    return c
}

function multiple() {
    let inputX = document.getElementsByName("x") [0]
    let a = inputX.value 
    let inputY = document.getElementsByName("y") [0]
    let b = inputY.value

    let c = Number(a) *  Number(b)
    let span = document.getElementById("calcResult")
    span.innerHTML = "Результат: " + c
    return c
}

function divide() {
    let inputX = document.getElementsByName("x")[0];
    let a = inputX.value 
    let inputY = document.getElementsByName("y")[0];
    let b = inputY.value
    let span = document.getElementById("calcResult");

if (b == 0) {
    span.innerHTml = "На ноль делить нельзя";
} else {
        let c = Number(a) / Number (b);
        span.innerHTML = `Результат:` + c;
    }


}
function saleStep(){
let step = document.getElementById("step").value
let sale = document.getElementById("sale")
sale.innerHTML= step + "%"
}





function CourcePrise() {
    let step = document.getElementById("step").value
    let courseName = document.getElementById("courseName").value;
    let coursePrice = document.getElementById('price');
    const PYTHON_PRICE = 1200000;
    const FRONT_PRICE = 1400000;
    const UX_PRICE = 1600000;
    let bestPrice;

    if(courseName=="Python") {
       bestPrice = PYTHON_PRICE;
    } else if (courseName =="Front") {
       bestPrice = FRONT_PRICE;
    } else if (courseName =="Ux") {
       bestPrice = UX_PRICE;
    } else {
        coursePrice.value = "";
    }
let finalPrice = bestPrice * (100 - step) / 100;
coursePrice.value = finalPrice;
saleStep()
console.log(finalPrice);
}
