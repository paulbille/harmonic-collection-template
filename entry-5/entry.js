
  let answers = [];
  function nextQuestion() {
    const currentQuestion = document.querySelector(`#question${answers.length + 1}`);
    currentQuestion.style.display = 'none';
    answers.push(document.getElementById(`answer${answers.length + 1}`).value);
    const nextQuestion = document.querySelector(`#question${answers.length + 1}`);
    nextQuestion.style.display = 'block';
  }

  function showResults() {
    answers.push(document.getElementById('answer3').value);
    const result = document.getElementById('result');
    const answersDiv = document.getElementById('answers');
    const correctAnswers = ['Paris', 'Leonardo da Vinci', 'Jupiter'];
    let score = 0;
    let html = '<h3>Correct Answers:</h3>';
    for (let i = 0; i < correctAnswers.length; i++) {
      html += `<p>Question ${i + 1}: ${correctAnswers[i]}</p>`;
      if (answers[i].trim().toLowerCase() === correctAnswers[i].toLowerCase()) {
        score++;
      }
    }
    html += '<h3>Your Answers:</h3>';
    for (let i = 0; i < answers.length; i++) {
      html += `<p>Question ${i + 1}: ${answers[i]}</p>`;
    }
    result.textContent = `You scored ${score} out of ${correctAnswers.length}!`;
    answersDiv.innerHTML = html;
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
  }
