document.addEventListener('DOMContentLoaded', () => {
  // Function to toggle the visibility of the answer
  document.querySelectorAll('.quiz-section_answer-btn').forEach(button => {
    button.addEventListener('click', function() {
      const answer = this.parentElement.querySelector('.quiz-section_answer');
      if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        this.textContent = 'Hide Answer';
      } else {
        answer.classList.add('hidden');
        this.textContent = 'Show Answer';
      }
    });
  });

  document.querySelectorAll('.quiz-section_bookmark-btn').forEach(button => {
    button.addEventListener('click', () => {
      const icon = button.querySelector('i');
      icon.classList.toggle('bookmarked');
      
      const isBookmarked = icon.classList.contains('bookmarked');
      icon.setAttribute('data-bookmarked', isBookmarked);
    });
  });
});
