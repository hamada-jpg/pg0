function checkAnswer() {
  const input = document.getElementById('answerBox').value.trim().toLowerCase();
  const correctAnswer = 'time'; // 正解の文字列
  const nextPage = 'js/hide-html/correct.html';   // 遷移先のページ

  if (input === correctAnswer) {
    window.location.href = nextPage;
  } else {
    document.getElementById('error').textContent = '答えが違います。もう一度試してください。';
  }
}