const nameInput = document.getElementById('name');
const feedback = document.getElementById('feedback');

nameInput.addEventListener('input', function() {
    feedback.textContent = nameInput.value; 
});
