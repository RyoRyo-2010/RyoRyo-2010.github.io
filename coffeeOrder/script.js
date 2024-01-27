loadJSON();

function changeCount(button,isPlus) {
    let thisitem = button.parentElement.parentElement;
    let countE = thisitem.querySelector(".itemCounter");
    let count = Number(countE.getAttribute("count"));
    if(isPlus) {
        count++;
    }else if(count > 0){
        count--;
    }
    countE.setAttribute("count",count)
    countE.innerText = `個数:${count}個`;

    //集計
    let items = document.querySelectorAll(".item");
    let sum = 0;
    for(let item of items) {
        sum += Number(item.querySelector(".itemCounter").getAttribute("count")) * Number(item.getAttribute("price"));
    }
    document.querySelector("#sum").innerText = sum;
}

function plus(itemID) {
    let countE = document.getElementById(`countItem,${itemID}`);
    //増やす
    let count = countE.getAttribute("count");
    count = Number(count);
    count++;
    countE.setAttribute("count",count)
    countE.innerText = `個数:${count}個`;
}

function minus(itemID) {
    let countE = document.getElementById(`countItem,${itemID}`);
    //増やす
    let count = countE.getAttribute("count");
    count = Number(count);
    count--;
    if(count < 0) {
        count = 0;
    }
    countE.setAttribute("count",count)
    countE.innerText = `個数:${count}個`;
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
            // content.querySelector(".item").id = ""
            content.querySelector(".itemImage").src = item.image_src;
            content.querySelector(".itemImage").alt = `${item.name}の画像`;
            content.querySelector(".itemCounter").id = `countItem,${index}`;
            // content.querySelector(".plusButton").onclick = `plus(${index})`;
            // content.querySelector(".minusButton").onclick = `minus(${index})`;
            content.querySelector(".itemName").innerHTML = `${item.name} (${item.price}円)`;
            content.querySelector(".item").setAttribute("price",item.price);
            document.getElementById("selectItem").appendChild(content);
            index++;
        }
      };
    xhr.send();
}