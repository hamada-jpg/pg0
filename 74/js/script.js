let textarea = document.getElementById("memo");
let addButton = document.getElementById("addButton");
let newButton = document.getElementById("newButton");
let memoList = document.getElementById("memoList");
let statu = document.getElementById("status");

let memos = [];
let currentMemoId = null;

let saved = localStorage.getItem("memos");
if (saved) {
  memos = JSON.parse(saved);
  render();

  if (memos.length > 0) {
    let latestMemo = memos[memos.length - 1];
    loadMemo(latestMemo);
    statu.textContent = "保存されたメモを読み込みました";
  }
}

addButton.addEventListener("click", () => {
  if (textarea.value.trim() === "") return;

  let memo = {
    id: Date.now(),
    text: textarea.value,
    createdAt: new Date().toLocaleString()
  };

  memos.push(memo);
  save();
  render();

  textarea.value = "";
  textarea.readOnly = false;
  currentMemoId = null;

  statu.textContent = "メモを追加しました";
});

newButton.addEventListener("click", () => {
  textarea.value = "";
  textarea.readOnly = false;
  currentMemoId = null;
  statu.textContent = "新規メモ作成モード";
});

function save() {
  localStorage.setItem("memos", JSON.stringify(memos));
}

function render() {
  memoList.innerHTML = "";

  memos.forEach(memo => {
    let li = document.createElement("li");

    let text = document.createElement("span");
    text.textContent = memo.text;
    text.className = "memo-text";


    text.addEventListener("click", () => {
      loadMemo(memo);
    });

    let del = document.createElement("span");
    del.textContent = "削除";
    del.className = "delete";
    del.addEventListener("click", () => {
      deleteMemo(memo.id);
    });

    li.appendChild(text);
    li.appendChild(del);
    memoList.appendChild(li);
  });
}


function loadMemo(memo) {
  textarea.value = memo.text;
  textarea.readOnly = true;
  currentMemoId = memo.id;
  statu.textContent = `閲覧中：${memo.createdAt}`;
}

function deleteMemo(id) {
  memos = memos.filter(memo => memo.id !== id);
  save();
  render();


  if (currentMemoId === id) {
    textarea.value = "";
    textarea.readOnly = false;
    currentMemoId = null;
  }

  statu.textContent = "メモを削除しました";
}
