// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal functionality
const modal = document.getElementById('signup-modal');
const joinBtn = document.getElementById('join-btn');
const closeModal = document.querySelector('.close-modal');

joinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Event registration buttons
const registerBtns = document.querySelectorAll('.register-btn');

registerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // You could either open a modal or redirect to a registration page
        alert('Registration form will open here!');
    });
});

// Forum topic click
const topics = document.querySelectorAll('.topic');

topics.forEach(topic => {
    topic.addEventListener('click', () => {
        // Redirect to the topic page
        alert('This would take you to the full topic page!');
    });
});

// Newsletter form submission
const subscribeForm = document.querySelector('.subscribe-form');

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = subscribeForm.querySelector('input').value;
    alert(`Thank you for subscribing with ${email}! You will now receive our newsletter.`);
    subscribeForm.reset();
});

// Get involved form submission
const signupForm = document.querySelector('.modal-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your interest in Bell Busk Community Action! We\'ll be in touch soon.');
    modal.style.display = 'none';
    signupForm.reset();
});