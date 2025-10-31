/* =========================
   SPA Básico
========================= */
const links = document.querySelectorAll('nav a');
const conteudo = document.querySelector('#conteudo'); // div onde o conteúdo muda

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pagina = e.target.getAttribute('href');
        fetch(pagina)
            .then(res => res.text())
            .then(html => {
                conteudo.innerHTML = html;
            });
    });
});

/* =========================
   Validação de Formulário
========================= */
const form = document.querySelector('form');
if(form) { // verifica se existe formulário na página
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;

        if(nome === '' || email === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if(!email.includes('@')) {
            alert('Digite um email válido!');
            return;
        }

        alert('Formulário enviado com sucesso!');
    });
}

/* =========================
   Menu Hambúrguer (Mobile)
========================= */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
                  }
