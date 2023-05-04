const addServicoBtn = document.getElementById('addServico');
const valorInput = document.getElementById('valorInput');
const servicoInput = document.getElementById('servicoInput');
const valorElement = document.getElementById('valor');
const dataElement = document.getElementById('data');
const gerarReciboBtn = document.getElementById('gerarRecibo');

let valorTotal = 0;
let servicosPrestados = [];

function adicionarServico() {
  const servico = servicoInput.value.trim();
  const valor = Number(valorInput.value.trim());

  if (servico === '' || isNaN(valor) || valor <= 0) {
    alert('Por favor, preencha um serviço válido e um valor maior que zero.');
    return;
  }

  servicosPrestados.push({ servico, valor });
  atualizarValorTotal();
  servicoInput.value = '';
  valorInput.value = '';
}

function atualizarValorTotal() {
  valorTotal = servicosPrestados.reduce((total, servico) => total + servico.valor, 0);
  valorElement.textContent = `$${valorTotal.toFixed(2)}`;
}

function gerarRecibo() {
  const nome = document.getElementById('nomeInput').value.trim();
  const assinatura = document.getElementById('assinaturaInput').value.trim();
  const data = new Date().toLocaleDateString();

  if (nome === '' || assinatura === '') {
    alert('Por favor, preencha seu nome e assinatura.');
    return;
  }

  const html = `
    <html>
      <head>
        <title>Recibo de Pagamento</title>
        <meta charset="UTF-8">
      </head>
      <body>
        <h1>Recibo de Pagamento</h1>
        <p>Recebi de ${nome}, a importância de $${valorTotal.toFixed(2)} referente aos serviços prestados abaixo listados:</p>
        <ul>
          ${servicosPrestados.map(servico => `<li>${servico.servico} - $${servico.valor.toFixed(2)}</li>`).join('')}
        </ul>
        <p>Este recibo somente é válido mediante apresentação do comprovante de transferência bancária.</p>
        <p>Localidade: ${document.getElementById('localidadeInput').value.trim()}</p>
        <p>Data: ${data}</p>
        <div class="signature">
          <label>Assinatura:</label>
          <input type="text" id="assinatura" value="${assinatura}" readonly>
        </div>
        <div class="company">
          <p>Empresa: ${document.getElementById('empresaInput').value.trim()}</p>
          <p>Representante: ${document.getElementById('representanteInput').value.trim()}</p>
        </div>
      </body>
    </html>
  `;

  const win = window.open('', '_blank');
  win.document.write(html);
  win.document.close();
  
  const printBtn = document.createElement('button');
  printBtn.textContent = 'Imprimir';
  printBtn.addEventListener('click', () => win.print());
  
  win.document.body.appendChild(printBtn);