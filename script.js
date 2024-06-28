// script.js
document.addEventListener('DOMContentLoaded', function() {
    const profilePicture = document.querySelector('.profile-picture');
    const profileContainer = document.querySelector('.profile-container');

    profilePicture.addEventListener('click', function() {
        profileContainer.classList.add('pushed-back');

        // Return the card to normal after a delay
        setTimeout(function() {
            profileContainer.classList.remove('pushed-back');
        }, 1000); // 1 second delay
    });
});