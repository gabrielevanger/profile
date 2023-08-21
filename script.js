function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  //pegar a tag img
  const img = document.querySelector('#profile img');
  //Substituir a imagem
  if (html.classList.contains('light')) {
    //se tiver light mod, adicionar a imagem light
    img.setAttribute('src', './assets/profile.png');
  } else {
    // se tiver sem light mode manter img normal
    img.setAttribute('src', './assets/profile2.png');
  }
}
