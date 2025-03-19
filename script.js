// When the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const button = document.getElementById('showMessage');
    const message = document.getElementById('message');

    // Handle button click
    button.addEventListener('click', () => {
        if (message.style.display === 'none' || message.style.display === '') {
            message.style.display = 'block';
            setTimeout(() => {
                message.classList.remove('hidden');
            }, 10);
        } else {
            message.classList.add('hidden');
            setTimeout(() => {
                message.style.display = 'none';
            }, 500);
        }
    });
});
