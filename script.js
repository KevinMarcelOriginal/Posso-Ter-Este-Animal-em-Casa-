var animais = {
  domesticos:['gato','cachorro','tartaruga','hamster','papagaio','peixe'],
  selvagens:['onça','capivara','lontra','rinoceronte','leão','morcego','tamanduá','tigre','cobra'],
  depende:['rato','cavalo','pato','galinha','cabra','macaco','papagaio'],
}
function resposta() {
var pergunta = document.getElementById('pergunta').value.toLowerCase();
if (animais.domesticos.includes(pergunta)){
   alert('sim');
  }else if (animais.selvagens.includes(pergunta)){
  alert('não');
  }else if (animais.depende.includes(pergunta)){
  alert('depende da situação');
}
}