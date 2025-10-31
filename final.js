/* =========================
   SPA Básico
========================= */
const links = document.querySelectorAll('nav a');
const conteudo = document.querySelector('#conteudo');

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
if(form) {
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
   Menu Hambúrguer
========================= */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

/* =========================
   Modo Escuro / Alto Contraste
========================= */
const modoBtn = document.querySelector('#modoBtn');

if(modoBtn) {
    modoBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
          }
