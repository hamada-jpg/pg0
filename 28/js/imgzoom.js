// 要素を取得　..①
const zoom = document.querySelectorAll(".zoom");
const zoomback = document.getElementById("zoomback");
const zoomimg = document.getElementById("zoomimg");

// 一括でイベントリスナ　..②
zoom.forEach(function(value) {
      value.addEventListener("click",kakudai);
      });

function kakudai(e) {

// 拡大領域を表示　..③
zoomback.style.display = "flex";
// 押された画像のリンクを渡す　..④
zoomimg.setAttribute("src",e.target.getAttribute("src"));
}


// 元に戻すイベントリスナを指定　..⑤
zoomback.addEventListener("click",modosu);

// 拡大領域を無きものに　..⑥
function modosu() {

zoomback.style.display = "none";
}