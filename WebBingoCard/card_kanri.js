function get_suuzi(id) {
    var data = document.getElementById("card_data").innerHTML;
    var datas = data.split(',');
    return datas[id];
}