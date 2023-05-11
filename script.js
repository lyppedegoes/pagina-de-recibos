function gerarRecibo() {
  document.getElementById('recebedor-nome-ok').innerHTML = document.getElementById('recebedor-nome').value;
  document.getElementById('valor-ok').innerHTML = document.getElementById('valor').value;
  document.getElementById('emitente-nome-ok').innerHTML = document.getElementById('emitente-nome').value;
  document.getElementById('emitente-doc-ok').innerHTML = document.getElementById('emitente-doc').value;
  document.getElementById('emitente-empresa-ok').innerHTML = document.getElementById('emitente-empresa').value;
  document.getElementById('data-ok').innerHTML = document.getElementById('data').value;
  document.getElementById('descricao-ok').innerHTML = document.getElementById('descricao').value;

    // Redirecionar para a página recibo.html após a execução da função
    window.location.href = "recibo.html";

    var recebedorNome = document.getElementById('recebedor-nome').value

console.log(recebedorNome)
}