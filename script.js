let listaTimes = [


    {
        "nome": "Palmeiras",
        "img": "palmeiras.png",
        "descricao": "A Sociedade Esportiva Palmeiras, comumente conhecida como Palmeiras, é um dos clubes de futebol mais populares e tradicionais do Brasil. Fundado em 26 de agosto de 1914, o Palmeiras tem sua sede na cidade de São Paulo, no estado de São Paulo. As cores do clube são o verde e o branco, e seus torcedores são chamados de palmeirenses."
    },

    {
        "nome": "Santos",
        "img": "santos.png",
        "descricao": "O Santos Futebol Clube, geralmente referido como Santos FC, é um dos clubes de futebol mais famosos e bem-sucedidos do Brasil. O clube foi fundado em 14 de abril de 1912 e tem sua sede na cidade de Santos, no estado de São Paulo. O Santos é conhecido por suas cores preto e branco e é chamado carinhosamente de Peixe por seus torcedores."
    },

    {
        "nome": "São Paulo",
        "img": "saopaulo.png",
        "descricao": "O São Paulo Futebol Clube, comumente conhecido como São Paulo FC ou simplesmente São Paulo, é um dos clubes de futebol mais importantes e bem-sucedidos do Brasil. O clube foi fundado em 25 de janeiro de 1930 e tem sede na cidade de São Paulo, no estado de São Paulo. O São Paulo FC é conhecido por suas cores vermelho, preto e branco e é um dos clubes mais vitoriosos do país."
    },

]
//estrutura de repetição
listaTimes.map((times, posicao) => {
    let cardTimes = document.getElementById("cards");
    cardTimes.innerHTML += `
    <div class="col-md-4">
    <div class="card m-2">
        <img src="${times.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${times.nome}</h5>
          
          <a href="#" class="btn btn-secondary" onClick= "zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
        </div>
    </div>
</div>
    `
})

function zoomImg(posicao) {
    let timeSelecionado = listaTimes[posicao];
    document.getElementById("nomeTime").innerHTML = timeSelecionado.nome;
    document.getElementById("descricaoTime").innerHTML = timeSelecionado.descricao;
    document.getElementById("imgModal").src = timeSelecionado.img;


    new bootstrap.Modal('#zoomImg').show();

}

function alteralTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema == "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill" ></i>`
    }
}

