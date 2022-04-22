const openButton = document.querySelector('#openOverlay');
const body = document.body;
const successModal = createModal('Перетащите файл с форматом .png на ваш аватар');

openButton.addEventListener('click', (e) => {
  body.appendChild(successModal);
});

function createModal(content) {
  const overlayElement = document.createElement('div');
  overlayElement.classList.add('overlay');

  overlayElement.addEventListener('click', (e) => {
    if (!e.target.classList.contains('content')) {
      closeElement.click();
    }
  });

  const containerElement = document.createElement('div');
  containerElement.classList.add('modal-container');

  const img = document.createElement('img');
  img.classList.add('img-arrow');
  img.src = '/projects/mega-chat-3/red_arrow_PNG7.png';

  const contentElement = document.createElement('div');
  contentElement.classList.add('content');

  contentElement.innerHTML = content;

  const closeElement = document.createElement('a');
  closeElement.classList.add('close');
  closeElement.textContent = 'x';
  closeElement.href = '#';

  closeElement.addEventListener('click', (e) => {
    e.preventDefault();
    body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);
  containerElement.appendChild(img);

  return overlayElement;
}
