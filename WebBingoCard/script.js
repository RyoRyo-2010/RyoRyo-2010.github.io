function random() {
    document.getElementById("start").style = "display:none;"
    var array = [];
    var button;
    var card_data = document.getElementById("card_data");
    for (let i = 0; i < 25; i++) {

        button = document.getElementById(i);
        let random = Math.floor(Math.random() * 75 + 1);
        while (array.indexOf(random) != -1) {
            random = Math.floor(Math.random() * 75 + 1);
        }
        button.value = random;
        array.push(random);
        card_data.innerHTML += (random + ',');
    }
    document.getElementById(12).value = "〇";
    document.getElementById(12).style = "color : red;";
}

function osareta(id) {
    var button = document.getElementById(id);
    if (button.value == "〇") {
        var kakunin = window.confirm("〇が押されました。\n" + get_suuzi(id) + "にしていいですか？");
        if (kakunin) {
            button.value = get_suuzi(id);
            button.style = "color: black;";
        }
    } else {
        var kakunin = window.confirm(button.value + "が押されました。\n〇にしていいですか？");
        if (kakunin) {
            button.value = "〇";
            button.style = "color: red;";
        }
    }

    handan();
}