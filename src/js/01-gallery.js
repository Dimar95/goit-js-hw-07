import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery')

function onMarkupGallery(imgArray) {
    galleryRef.innerHTML = imgArray.map(img => `<a class="gallery__link" href="${img.original}">
    <img class="gallery__image" data-source="large-image.jpg" src="${img.preview}" alt="${img.description}"></a>`).join('');
}

function currentImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    const imgOriginalLink = e.target.parentNode.href;
    const instance = basicLightbox.create(`
    <div class="modal">
    <img class="gallery__image" data-source="large-image.jpg" src="${imgOriginalLink}" alt="${e.target.alt}">
    </div>`);
    instance.show();
    window.addEventListener('keydown', e => {
        
        if (e.code === 'Escape'){instance.close()}
    })
    
}

galleryRef.addEventListener('click', currentImg)
onMarkupGallery(galleryItems)


