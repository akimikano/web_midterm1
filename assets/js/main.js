// let photos = document.querySelector('.photos-list')
// let itemW = document.getElementsByClassName('photo-item')[0].getBoundingClientRect().width
// let photoItems = document.getElementsByClassName('photo-item')
// let nodes = photos.childNodes
//
// let oldChildIndex = 0
// let photos_interval = setInterval(function () {
//     photos.style.left = (photos.offsetLeft - 1) + 'px';
//     if (photos.offsetLeft < -itemW) {
//         photos.style.width = (photos.style.width + 426) + 'px'
//         photos.appendChild(createPhotoItem())
//         itemW = itemW + 426;
//         oldChildIndex += 1;
//         if (oldChildIndex === photoItems.length) {
//             oldChildIndex = 0;
//         }
//     }
// }, 15)
//
// let createPhotoItem = function () {
//     let div = document.createElement('div');
//     div.className = 'photo-item';
//     let photo = document.createElement('img');
//     photo.src = 'assets/images/about-bg.jpg';
//     let h = document.createElement('h4');
//     h.textContent = 'lala';
//     div.appendChild(photo)
//     div.appendChild(h)
//     return div
// }