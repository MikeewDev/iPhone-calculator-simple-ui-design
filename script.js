document.getElementById('gerarLink').addEventListener('click', function() {
  const ddd = document.getElementById('ddd').value;
  const numero = document.getElementById('numero').value;
  const mensagem = encodeURIComponent(document.getElementById('mensagem').value);

  const link = `https://wa.me/${ddd}${numero}?text=${mensagem}`;

  window.location.href = link;
});