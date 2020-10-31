
function change1() {
    var msg = document.getElementById("msg");
    msg.innerHTML = "";
    var num1 = document.getElementById("number1").value;
    if (isNaN(num1)) {
        msg.innerHTML = "Giá trị nhập ở ô <i>Số thứ nhất</i> không phải là số"
        msg.style.color = "red";
        return false;
    }
    return true;
}

function change2() {
    var msg = document.getElementById("msg");
    msg.innerHTML = "";
    var num2 = document.getElementById("number2").value;
    if (isNaN(num2)) {
        msg.innerHTML = "Giá trị nhập ở ô <i>Số thứ hai</i> không phải là số"
        msg.style.color = "red";
        return false;
    }
    return true;
}
var form = document.getElementById("input");
console.log(form)
form.addEventListener("submit", (event) =>{
    event.preventDefault()
    OnClickCal()
}
)
function OnClickCal() {
    var msg = document.getElementById("msg");
    msg.innerHTML = "";
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(num1) || isNaN(num2)) {
        msg.innerText = "Bạn chưa nhập 2 số hợp lệ!";
        msg.style.color = "red";
        return false
    }
    
   
    var result = document.getElementById("result");
    result.value = ""

    var choices = document.getElementsByName("choice");
    var choice = null
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value
        }
    }
    if (!choice) {
        msg.innerHTML = "Bạn chưa chọn phép tính!"
        msg.style.color = "red";
        return false
    }
    if (choice == "div" && num2 == 0) {
        msg.innerHTML = "Không thể chia cho 0"
        msg.style.color = "red";
        result.value = NaN
        return false
    }

    const data = { num1, num2, choice }

    fetch("https://coherent-grandiose-objective.glitch.me", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json",
        }
    }).then((response) => response.json())
        .then((response) => {
            var result = document.getElementById("result");
            result.value = response.rs
        })


}