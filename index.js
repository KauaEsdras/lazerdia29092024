document.getElementById('age').addEventListener('input', function() {
    const age = parseInt(this.value);
    const guardianInfo = document.getElementById('guardianInfo');

    if (age < 18) {
        guardianInfo.classList.remove('hidden');
        document.getElementById('guardianName').setAttribute('required', true);
        document.getElementById('guardianPhone').setAttribute('required', true);
    } else {
        guardianInfo.classList.add('hidden');
        document.getElementById('guardianName').removeAttribute('required');
        document.getElementById('guardianPhone').removeAttribute('required');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    const formData = new FormData(this); // Captura os dados do formulário
    fetch(this.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Se a resposta for bem-sucedida, redireciona para o WhatsApp
            window.location.href = 'https://chat.whatsapp.com/LQfh6uibQaiEeNnvaR1pRs';
        } else {
            throw new Error('Erro ao enviar o formulário.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Houve um problema ao enviar o formulário. Tente novamente mais tarde.');
    });
});
