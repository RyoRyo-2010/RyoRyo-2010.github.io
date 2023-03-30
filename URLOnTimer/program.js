function start_onclick() {
  if(document.getElementById("taiki_chenge").innerHTML == "待機中止！はできません。") {
    return;
  }
  const root = document.querySelector(':root');
  if(root.style.getPropertyValue("--on_aa_display") == "none") {
    //スタートさせる
    document.getElementById("taiki_chenge").innerHTML = "待機中止！はできません。";
    root.style.setProperty("--on_aa_display",'block');
    root.style.setProperty("--off_aa_display",'none');
    root.style.setProperty("--end_aa_display",'none');
    var timerId = setInterval(() => {
            if(kansi() == "time up!") {
              clearInterval(timerId)
              console.timeLog("clearInterval:");
              console.info("clearできたお")
              let openWindow = window.open('', '_blank')
              // open();
              openWindow.location.href = document.getElementById("url").value;
              document.getElementById("taiki_chenge").innerHTML = "待機開始！"
            }
    }, 1000);
      document.getElementById("IntervalID").innerHTML = timerId;
      document.getElementById("taiki_chenge").innerHTML = "待機中止！"
  }else{
    //とめる
    clearInterval(document.getElementById("IntervalID").innerHTML);
    root.style.setProperty("--on_aa_display",'none');
    root.style.setProperty("--off_aa_display",'block');
    root.style.setProperty("--end_aa_display",'none');
    document.getElementById("taiki_chenge").innerHTML = "待機開始！";
  }
}

function kansi() {
    var newDate = new Date();
    var setting_time = document.getElementById("time");
    let hours = setting_time.value.split(":")[0];
    let minutes = setting_time.value.split(":")[1];

    if(newDate.getHours()*60 + newDate.getMinutes() == hours*60+minutes*1) {
        console.log("ｷﾀ―――(ﾟ∀ﾟ)―――― !!");
        // clearInterval(timerId);
        const root = document.querySelector(':root');
        root.style.setProperty("--on_aa_display",'none');
        root.style.setProperty("--off_aa_display",'none');
        root.style.setProperty("--end_aa_display",'block');
            return "time up!";
    }
}
// function kansi() {

    
//     var newDate = new Date();
//     var setting_time = document.getElementById("time");
//     let hours = setting_time.value.split(":")[0];
//     let minutes = setting_time.value.split(":")[1];

//     if(newDate.getHours()*60 + newDate.getMinutes() == hours*60+minutes*1) {
//         console.log("ｷﾀ―――(ﾟ∀ﾟ)―――― !!");
//         //     return "time up!";
//     }
//     if(newDate.getHours()*60 + newDate.getMinutes() < hours*60+minutes*1) {
//         // console.log("あした！");
//         // newDate.setHours(hours);
//         // newDate.setMinutes(minutes);
//         // newDate.setDate(newDate.getDate() + 1);
//         // //比較
//         // if(newDate.getTime() <= new Date().getTime()) {
//         //     console.log("ｷﾀ―――(ﾟ∀ﾟ)―――― !!");
//         //     return "time up!";
//         // }
//         console.log("きょう！");
//         newDate.setHours(hours);
//         newDate.setMinutes(minutes);
//         if(newDate.getTime() <= new Date().getTime()) {
//             console.log("ｷﾀ―――(ﾟ∀ﾟ)―――― !!");
//             return "time up!";
//         }
//     }
// }

function open_url(url) {
  let openWindow = window.open('', '_blank')
              // open();
              openWindow.location.href = url;
}