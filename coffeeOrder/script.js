loadJSON();

function changeCount(button,isPlus) {
    let thisitem = button.parentElement.parentElement;
    let countE = thisitem.querySelector(".itemCounter");
    let count = Number(countE.innerText);
    if(isPlus) {
        count++;
    }else if(count > 0){
        count--;
    }
    countE.innerText = count;

    //集計
    let items = document.querySelectorAll(".item");
    let sum = 0;
    for(let item of items) {
        sum += Number(item.querySelector(".itemCounter").innerText) * Number(item.querySelector(".itemPrice").innerText);
    }
    document.querySelector("#sum").innerText = sum;
}

function loadJSON() {
    //JSON読み込む
    var xhr = new XMLHttpRequest();
    xhr.open("GET","./items.json");
    xhr.onload = () => {
        // リクエストの終了。ここの処理を実行します。
        //JSONをオブジェクトに変換
        let itemsObj = JSON.parse(xhr.responseText);
        let index = 0;
        for(let item of itemsObj.Items) {
            console.log(item);
            //テンプレートコピー
            const template = document.getElementById("itemTemplate");
            const content = template.content.cloneNode(true);
            content.querySelector(".itemName").innerText = item.name;
            content.querySelector(".itemPrice").innerText = item.price;
            content.querySelector(".itemImage").src = item.image_src;
            content.querySelector(".itemImage").alt = `${item.name}の画像`;

            document.getElementById("itemList").appendChild(content);
            index++;
        }

        //フッター分浮かせる
        document.querySelector("#onFooter").setAttribute("style",`height : ${document.querySelector("#sumFooter").offsetHeight}px;`);
      };
    xhr.send();
}

function reset() {
    let items = document.querySelectorAll(".itemCounter");
    for(let item of items) {
        item.innerText = 0;
    }
    document.querySelector("#sum").innerText = 0;

}