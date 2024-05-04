function handan() {
    //縦のビンゴの判断
    var maru = true;
    for (let ii = 0; ii <= 4; ii++) {
        for (let i = 0; i <= 20; i += 5) {

            var button = document.getElementById(ii + i);
            if (button.value != "〇") {
                maru = false;
            }
        }
        if (maru) {
            alert("ビンゴ！\nおめでとうございます！");
        }
        maru = true;
    }

    maru = true;
    for (let i = 0; i <= 20; i += 5) {
        for (let ii = 0; ii <= 4; ii++) {
            var button = document.getElementById(ii + i);
            if (button.value != "〇") {
                maru = false;
            }
        }
        if (maru) {
            alert("ビンゴ！\nおめでとうございます！");
        }
        maru = true;
    }
    maru = true;
    //右下斜め
    for (let i = 0; i <= 24; i += 6) {
        var button = document.getElementById(i);
        if (button.value != "〇") {
            maru = false;
        }
    }
    if (maru) {
        alert("ビンゴ！\nおめでとうございます！");
    }
    maru = true;
    //左下斜め
    for (let i = 4; i <= 20; i += 4) {
        var button = document.getElementById(i);
        if (button.value != "〇") {
            maru = false;
        }
    }
    if (maru) {
        alert("ビンゴ！\nおめでとうございます！");
    }
}