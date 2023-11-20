
  let answers = [];
  function nextQuestion() {
    const currentQuestion = document.querySelector(`#question${answers.length + 1}`);
    currentQuestion.style.display = 'none';
    const selectedOption = document.querySelector(`input[name="q${answers.length + 1}"]:checked`);
    if (selectedOption) {
      answers.push(selectedOption.value);
      const nextQuestion = document.querySelector(`#question${answers.length + 1}`);
      nextQuestion.style.display = 'block';
    } else {
      alert('Please select an option!');
      currentQuestion.style.display = 'block';
    }
  }

  function showResults() {
  const result = document.getElementById('result');
  const answersDiv = document.getElementById('answers');
  const correctAnswers = ['Paris', 'Leonardo da Vinci', 'Jupiter'];
  let score = 0;
  let html = '<h3>Correct Answers:</h3>';
  
  for (let i = 0; i < correctAnswers.length; i++) {
    html += `<p>Question ${i + 1}: ${correctAnswers[i]}</p>`;
    if (answers[i] && answers[i].trim().toLowerCase() === correctAnswers[i].toLowerCase()) {
      score++;
    }
  }
  
  html += '<h3>Your Answers:</h3>';
  for (let i = 0; i < answers.length; i++) {
    if (answers[i]) {
      html += `<p>Question ${i + 1}: ${answers[i]}</p>`;
    }
  }
  
  result.textContent = `You scored ${score} out of ${correctAnswers.length}!`;
  answersDiv.innerHTML = html;
  const resultsDiv = document.getElementById('results');
  resultsDiv.style.display = 'block';
}
