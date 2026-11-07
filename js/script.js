// calculadora

const formulario = document.querySelector("#calculadora-form");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const peso = Number(document.querySelector("#peso").value);
    const altura = Number(document.querySelector("#altura").value);

    if (peso <= 0 || altura <= 0) {
        resultado.innerHTML = "<p>Informe valores válidos!</p>";
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso adequado";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    resultado.innerHTML = `
        <div class="resultado-conteudo">
            <span>O seu IMC é:</span>
            <h2>${imc.toFixed(2).replace(".", ",")}</h2>
            <h3>${classificacao}</h3>
        </div>
    `;
});

// marcadores de seção

const secoes = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a[href^='#']");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            links.forEach((link) => {
                link.classList.remove("ativo");
            });

            const linkAtivo = document.querySelector(
                `nav a[href="#${entry.target.id}"]`
            );

            if (linkAtivo) {
                linkAtivo.classList.add("ativo");
            }
        }
    });
}, {
    threshold: 0.5
});

secoes.forEach((secao) => {
    observer.observe(secao);
});