const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

if (inputCheck && elemento) {
  inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light';
    elemento.setAttribute('data-bs-theme', modo);
  });
} else {
  console.error('Elemento inputCheck ou elemento body não encontrado.');
}
