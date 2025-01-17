// Variáveis de controle
const maxImagens = 20;
let imagensCarregadas = 0;

// Seletores
const uploadInput = document.getElementById("upload-imagem");
const uploadBtn = document.getElementById("upload-btn");
const uploadMsg = document.getElementById("upload-msg");
const galeria = document.getElementById("galeria");

// Função para carregar imagens
uploadBtn.addEventListener("click", function() {
    const files = uploadInput.files;
    if (files.length + imagensCarregadas > maxImagens) {
        uploadMsg.textContent = `Você só pode enviar até ${maxImagens} imagens.`;
        return;
    }

    for (let i = 0; i < files.length; i++) {
        if (imagensCarregadas >= maxImagens) {
            break;
        }

        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            galeria.appendChild(img);
            imagensCarregadas++;
        }

        reader.readAsDataURL(file);
    }

    if (imagensCarregadas >= maxImagens) {
        uploadMsg.textContent = "Limite de imagens atingido!";
    } else {
        uploadMsg.textContent = `${imagensCarregadas} imagens carregadas com sucesso.`;
    }
});

// Formulário de feedback
document.getElementById("form-feedback").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let feedback = document.getElementById("feedback-text").value;
    if (feedback) {
        alert("Obrigado pelo seu feedback!");
    } else {
        alert("Por favor, escreva seu feedback.");
    }
});
