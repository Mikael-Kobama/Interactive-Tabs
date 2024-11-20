// Função que altera o conteúdo da aba ativa e do conteúdo visível
function getTab(e) {
    // 1. Seleciona o elemento com a classe "active", que é a aba atualmente ativa
    const active = document.querySelector(".active");
  
    // 2. Seleciona o elemento com a classe "content-visible", que é o conteúdo da aba visível
    const visible = document.querySelector(".content-visible");
  
    // 3. Pega o ID do conteúdo da aba clicada. `e.href.split("#")[1]` extrai o ID após o `#` no href
    // O ID do conteúdo da aba é usado para buscar o elemento correspondente
    const tabContent = document.getElementById(e.href.split("#")[1]);
  
    // 4. Remove a classe "active" da aba que estava ativa
    active.classList.toggle("active");
  
    // 5. Remove a classe "content-visible" do conteúdo que estava visível
    visible.classList.toggle("content-visible");
  
    // 6. Adiciona a classe "active" à aba que foi clicada, tornando-a ativa
    e.classList.add("active");
  
    // 7. Adiciona a classe "content-visible" ao conteúdo da aba clicada, tornando-o visível
    tabContent.classList.add("content-visible");
  }
  
  // Adiciona um ouvinte de evento para ouvir cliques no documento
  document.addEventListener("click", (e) => {
    // 1. Verifica se o clique foi em um link dentro de um item de aba
    if (e.target.matches(".tab-item a")) {
      // 2. Se for, chama a função `getTab` passando o link clicado como argumento
      getTab(e.target);
    }
  });
  