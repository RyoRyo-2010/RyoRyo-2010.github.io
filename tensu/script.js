const calcData = 
{
	"数学1A": {
		Ka: 200,
		Ryou: 250,
		Yuu: 300
	},
	"数学1B": {
		Ka: 200,
		Ryou: 250,
		Yuu: 300
	},
	"化学基礎": {
		Ka: 240,
		Ryou: 280,
		Yuu: 320
	},
	"物理基礎": {
		Ka: 100,
		Ryou: 125,
		Yuu: 150
	},
	"政治・経済": {
		Ka: 200,
		Ryou: 250,
		Yuu: 300
	},
	"保健": {
		Ka: 120,
		Ryou: 140,
		Yuu: 160
	},
	"基礎コンピュータ工学": {
		Ka: 200,
		Ryou: 250,
		Yuu: 300
	}
};

function readValue(subject) {
	let result = [
		Number(document.querySelector("#Ten0").value),
		Number(document.querySelector("#Ten1").value),
		Number(document.querySelector("#Ten2").value)
	];
	if(subject == "物理基礎" || subject == "保健") {
		result[0] = 0;
		result[1] = 0;
	}
	return result;
}

function updateTable() {
	let subject = document.querySelector('input[name="subject"]:checked').value;
	let values = readValue(subject);
	let sum = values[0] + values[1] + values[2];
	document.querySelector("#TestSum").innerText  = sum;
	document.querySelector("#KaScore").innerText   = calcData[subject].Ka - sum;
	document.querySelector("#RyouScore").innerText = calcData[subject].Ryou - sum;
	document.querySelector("#YuuScore").innerText  = calcData[subject].Yuu - sum;
	document.querySelector("#Subject").innerText = subject;
}

window.addEventListener("load",()=>{
	document.querySelector("#subjectForm").onchange = updateTable;
	document.querySelector("#Ten0").onchange = updateTable;
	document.querySelector("#Ten1").onchange = updateTable;
	document.querySelector("#Ten2").onchange = updateTable;
});