function keisan() {
    let aki_box = 0;
    let a_number = document.querySelector("#a_number").value;
    let b_number = document.querySelector("#b_number").value;
    let c_number = document.querySelector("#c_number").value;

    if(a_number === "") {
        aki_box++;
    }
    if(b_number === "") {
        aki_box++;
    }
    if(c_number === "") {
        aki_box++;
    }

    if(aki_box >= 2) {
        alert("入力された値だけでは計算できません。最低でも2つは必要です。")
        return;
    }

    let a = Number(a_number);
    let b = Number(b_number);
    let c = Number(c_number);

    // 空いている部分を計算する
    if(a_number === "") {
        a = Math.sqrt(c ** 2 - b ** 2)
    }

    if(b_number === "") {
        b = Math.sqrt(c ** 2 - a ** 2);
    }

    if(c_number === "") {
        c = Math.sqrt(a ** 2 + b ** 2);
    }

    console.log(a, b, c);

    // 割って計算
    document.querySelector("#sin_result").innerText = b / c;
    document.querySelector("#cos_result").innerText = a / c;
    document.querySelector("#tan_result").innerText = b / a;
}

document.querySelector("#keisan_button").addEventListener("click",keisan)