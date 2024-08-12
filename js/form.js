document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('quiz-form');
  const questionField = document.getElementById('question');
  const answerField = document.getElementById('answer');
  const questionCounter = document.getElementById('question-counter');
  const answerCounter = document.getElementById('answer-counter');
  const maxChars = 150;

  function updateCounter(field, counter) {
      const remaining = maxChars - field.value.length;
      counter.textContent = `${remaining} characters left`;
  }

 
  questionField.addEventListener('input', () => updateCounter(questionField, questionCounter));
  answerField.addEventListener('input', () => updateCounter(answerField, answerCounter));

  updateCounter(questionField, questionCounter);
  updateCounter(answerField, answerCounter);

  form.addEventListener('submit', function (event) {
      event.preventDefault(); 

      const question = questionField.value.trim();
      const answer = answerField.value.trim();
      const tag = document.getElementById('tag').value.trim();

      if (question && answer && tag) {


         const card = document.createElement('div');
          card.classList.add('card');

          const cardQuestion = document.createElement('h2');
          cardQuestion.textContent = question;
          card.appendChild(cardQuestion);

          const cardAnswer = document.createElement('p');
          cardAnswer.textContent = answer;
          card.appendChild(cardAnswer);

          const cardTag = document.createElement('span');
          cardTag.textContent = `Tag: ${tag}`;
          cardTag.classList.add('tag');
          card.appendChild(cardTag);

          const cardsContainer = document.getElementById('cards-container');
          cardsContainer.insertBefore(card, cardsContainer.firstChild);

          questionField.value = '';
          answerField.value = '';
          document.getElementById('tag').value = '';
          updateCounter(questionField, questionCounter);
          updateCounter(answerField, answerCounter);
      } else {
          alert('Please fill out all fields!');
      }
  });
});
