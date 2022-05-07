
// 点击p1对象,其字体颜色变成红色;
function dop1(){
	// console.log(1)
	document.getElementById('p1').style.color = "red";

}
// 点击p2对象,将h1的内容变成当前的日期,其格式为 yyyy-mm-dd ;
document.getElementById("p2").onclick=function(){
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth()+1;
	let day = date.getDate();
	let time = year + "-" + month +"-" + day;
	document.getElementById("p2").innerHTML=time;
};
// 点击p3对象,将其父对象的li元素增加 fn-active 类;
document.getElementById("p3").onclick=function(){
	document.getElementById('p3').classList.add("fn-active");
};
// 点击p4对象,删除表格的p8元素;
document.getElementById("p4").onclick=function(){
	var parent=document.getElementById("ul1");
  	var child=document.getElementById("p8");
  	console.log(1);
 	parent.removeChild(child);
};
// 点击p5对象,打开一个新窗口,里面显示淘宝主页;
document.getElementById("p5").onclick=function(){
	window.open("https://www.taobao.com");
};
// 点击p6对象,在 ul 的最后添加一个 li 元素，其内容是 p9;
document.getElementById("p6").onclick=function(){
	var para=document.createElement("li");
  	var node=document.createTextNode("p9");
  	para.appendChild(node);
  	var element=document.getElementById("ul1");
  	element.appendChild(para);
};
// 点击li对象, 弹出 alert 对话框显示当前点击 li 的序号;
var liList = document.querySelectorAll('li');
for(var i = 0; i < liList.length; i++) {
	// liList[i].onclick = function(k) {
	// 	return function(){
	// 		alert(k);
	// 	}
	// }
    var item = liList[i];
    item.addEventListener('click', showMsg)
}
function showMsg(e) {
    var item = e.target
    // console.log(item)
    if (item.innerHTML.length > 2)
    	alert("2");
    else
    	alert(item.innerHTML[1])
    console.log(item.innerHTML);
}

// 点击p7对象,将 m-box 的宽度设置到屏幕宽度;
document.getElementById("p7").onclick=function(){
	// var wid = window.width;
	// console.log(wid)
    document.getElementById("m").style.width ="100%";
};