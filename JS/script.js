const catalogo = [
  {
    id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama"],
    nota: 9.2,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 9.5,
    assistido: true
  },
  {
    id: 3,
    titulo: "Vingadores: Ultimato",
    tipo: "filme",
    ano: 2019,
    generos: ["ação"],
    nota: 8.8,
    assistido: true
  },
  {
    id: 4,
    titulo: "The Witcher",
    tipo: "serie",
    ano: 2019,
    generos: ["fantasia", "aventura"],
    nota: 8.2,
    assistido: false
  },
  {
    id: 5,
    titulo: "Matrix",
    tipo: "filme",
    ano: 1999,
    generos: ["ação", "ficção científica"],
    nota: 9.0,
    assistido: true
  },
  {
    id: 6,
    titulo: "Dark",
    tipo: "serie",
    ano: 2017,
    generos: ["mistério"],
    nota: 8.7,
    assistido: false
  }
];

console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos[1]) {
  console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
  console.log("O terceiro item não possui segundo gênero.");
}

console.log("Lista de títulos:");
catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em caixa alta:", titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log("Quantidade não assistidos:", naoAssistidos.length);

const topFilme = catalogo.find(item => item.nota >= 9);
if (topFilme) {
  console.log("Filme com nota >= 9:", topFilme.titulo, topFilme.nota);
} else {
  console.log("Nenhum item com nota >= 9 encontrado.");
}

const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));

const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Existe item antes de 2000?", temAntigo);
console.log("Todos têm gênero?", todosTemGenero);

const total = catalogo.length;
const filmes = catalogo.filter(i => i.tipo === "filme").length;
const series = catalogo.filter(i => i.tipo === "serie").length;

const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
  <h3>Resumo</h3>
  <p>Total de itens: ${total}</p>
  <p>Filmes: ${filmes} | Séries: ${series}</p>
  <p>Não assistidos: ${naoAssistidos.length}</p>
  <p>Média geral: ${mediaGeral.toFixed(2)}</p>

  <h4>Top 3:</h4>
  <ul>
    ${ranking.map(item => `<li>${item.titulo} - ${item.nota}</li>`).join("")}
  </ul>
`;