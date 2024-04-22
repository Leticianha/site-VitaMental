// Seleciona todos os links <a> dentro do menu de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    // Adiciona um ouvinte de evento de clique a cada link
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Previne o comportamento padrão de clicar no link (scroll brusco)
      
      const targetId = this.getAttribute('href'); // Obtém o ID da seção de destino
      const targetElement = document.querySelector(targetId); // Seleciona o elemento de destino
      
      if (targetElement) {
        // Calcula a posição do elemento de destino em relação ao topo da página
        const offsetTop = targetElement.offsetTop;
        
        // Rola suavemente até a posição do elemento de destino
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth' // Comportamento de rolagem suave
        });
      }
    });
  });
