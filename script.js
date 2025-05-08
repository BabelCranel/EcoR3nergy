document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".navbar-collapse");

    toggler.addEventListener("click", function () {
        if (menu.classList.contains("show")) {
            // Adiciona a transição ao fechar
            menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            menu.style.opacity = "0";
            menu.style.transform = "translateY(-10px)";

            // Remove classe e estilos após a transição
            setTimeout(() => {
                menu.classList.remove("show");
                menu.style.transition = "";
                menu.style.opacity = "";
                menu.style.transform = "";
            }, 300); // Tempo da animação
        } else {
            // Adiciona a classe antes de aplicar os estilos para abrir
            menu.classList.add("show");
            menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            menu.style.opacity = "0";
            menu.style.transform = "translateY(-10px)";

            // Aplica a transição suavemente
            setTimeout(() => {
                menu.style.opacity = "1";
                menu.style.transform = "translateY(0)";
            }, 10); // Delay para permitir a transição
        }

        // Alterna o estado do botão
        toggler.classList.toggle("active");
    });
});

document.getElementById('add-comment-btn').addEventListener('click', function () {
    const name = document.getElementById('user-name').value.trim();
    const comment = document.getElementById('user-comment').value.trim();

    if (!name || !comment) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Seleciona o container dos depoimentos
    const testimonialsContainer = document.querySelector('.testimonials');

    // Cria o novo depoimento
    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial');
    newTestimonial.innerHTML = `
      <p>"${comment}"</p>
      <span>- ${name}</span>
    `;

    // Adiciona o novo depoimento no final da lista
    testimonialsContainer.appendChild(newTestimonial);

    // Limpa os campos de entrada
    document.getElementById('user-name').value = '';
    document.getElementById('user-comment').value = '';
  });