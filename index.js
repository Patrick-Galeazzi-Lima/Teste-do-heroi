// Variáveis para armazenar o nome e a quantidade de experiência do herói
let nomeHeroi = "Patrick";
let experienciaHeroi = 0;

// Função para adicionar experiência ao herói
function adicionarExperiencia(pontos) {
    experienciaHeroi += pontos;
}

// Função para determinar o nível do herói com base na experiência
function determinarNivel() {
    if (experienciaHeroi < 1000) {
        return "Ferro";
    } else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
        return "Bronze";
    } else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
        return "Prata";
    } else if (experienciaHeroi >= 5001 && experienciaHeroi <= 7000) {
        return "Ouro";
    } else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
        return "Platina";
    } else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
        return "Ascendente";
    } else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
        return "Imortal";
    } else if (experienciaHeroi >= 10001) {
        return "Radiante";
    }
}

// Função para exibir a mensagem final
function exibirMensagem() {
    let nivel = determinarNivel();
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}

// Simulando a adição de experiência
for (let i = 0; i < 5; i++) { // Adiciona experiência 5 vezes
    let pontosAdicionados = Math.floor(Math.random() * 2000) + 500; // Pontos aleatórios entre 500 e 2500
    console.log(`Adicionando ${pontosAdicionados} pontos de experiência.`);
    adicionarExperiencia(pontosAdicionados);
}

// Exibe a mensagem final após adicionar a experiência
exibirMensagem();
