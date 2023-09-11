document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const previewImage = document.querySelector('.preview img');

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function () {
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const imageUrl = this.querySelector('img').src;
        previewImage.src = imageUrl;
      });
    });

    thumbnails[0].classList.add('active');
    previewImage.src = thumbnails[0].querySelector('img').src;
});