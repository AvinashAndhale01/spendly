// main.js — students will add JavaScript here as features are built

// Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('demo-modal');
    const openBtn = document.getElementById('open-demo-modal');
    const closeBtn = document.getElementById('close-demo-modal');
    const video = document.getElementById('demo-video');

    const videoUrl = "https://www.youtube.com/embed/-Lt-ntUDj-g"; // Corrected to embed format

    if (openBtn && modal) {
        openBtn.addEventListener('click', () => {
            video.src = videoUrl;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }

    const closeModal = () => {
        modal.style.display = 'none';
        video.src = ""; // Stop video by clearing src
        document.body.style.overflow = '';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
