  document.getElementById('gerarLink').addEventListener('click', function() {
    const ddd = document.getElementById('ddd').value;
    const numero = document.getElementById('numero').value;
    const mensagem = encodeURIComponent(document.getElementById('mensagem').value);

    if (ddd && numero && mensagem) {
      const link = `https://wa.me/${ddd}${numero}?text=${mensagem}`;
      document.querySelector('.text-link').innerHTML = `<p><a href="#" id="generatedLink">${link}</a></p>`;
    } else {
      alert('Please fill in all the required fields.');
      document.querySelector('.text-link').innerHTML = '<p>Link (Click to copy)</p>';
    }
  });

  document.querySelector('.text-link').addEventListener('click', function(event) {
    if (event.target.id === 'generatedLink') {
      const tempInput = document.createElement('input');
      tempInput.value = event.target.textContent;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('Link copied to clipboard.');
    }
  });