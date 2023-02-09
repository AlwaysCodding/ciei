const palestrantes = [
  {
    name: "Luzi Borges",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/luzi_borges.jpg",
    description:
      "Mulher negra, mãe solo de duas  meninas pretas, Kolabá de Xangô no Ilé Axé Odé Aladé Ijexá. Doutora em Educação pela Universidade do Estado do Rio de Janeiro(UERJ), Mestre em Educação e Contemporaneidade, Especialista em Metodologia do Ensino Superior e Pedagoga pela Universidade do Estado da Bahia. Líder do Grupo de pesquisa: Ciberxirè - Estudos e Pesquisas em Redes Educativas, Gêneros, Sexualidades, Religiosidades Afro  e Cibercultura. Vice-coordenadora do Programa de Pós-graduação em Educação da UESC e Coordenadora Institucional do Programa Residência Pedagógica da Capes.",
  },
  {
    name: "Carla Vilaronga",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/carla_vilaronga.JPG",
    description:
      "Pedagoga (UNESP), Mestrado em Educação (UNESP), Doutorada pelo Programa de pós em Educação Especial pela UFSCar De 2009 até 2015 trabalhou como pedagoga no Curso de Licenciatura em Educação Especial na Universidade Federal de São Carlos- UFSCar. Desde dezembro de 2015 é docente no Instituto Federal de São Paulo, Campus São Carlos. em se dedicado em pesquisas relacionadas a Formação de Professores, Formação de Professores em Educação Especial e Ensino Colaborativo.",
  },
  {
    name: "Dr. Cristiano Bahia",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/cristiano_bahia.png",
    description:
      "Possui graduação em Educação Física pela Faculdade de Educação Física Montenegro (1996), graduação em Economia pela Universidade Estadual de Santa Cruz (2002), mestrado em Cultura & Turismo pela Universidade Estadual de Santa Cruz (2009) e doutorado em Educação Física pela Universidade Federal de Santa Catarina (2016). Atuou como professor de Educação Física Escolar na rede estadual da Bahia durante 14 anos e coordenador de Educação Física Escolar e Esporte da Diretoria Regional durante 04 anos. Redator e consultor das Orientações Curriculares da Educação Básica do Estado da Bahia. Avaliador de curso do Conselho Estadual de Educação da Bahia e do INEP. Atualmente é professor adjunto da Universidade Estadual de Santa Cruz, no curso de Educação Física. Foi Diretor do Departamento de Saúde da UESC de 2016 a 2020 e de 2022-2023. Professor orientador do Mestrado Profissional em Educação e do Mestrado Profissional em Educação Física em Rede da UESB.",
  },
];

const root = document.querySelector("#programacao");

const newText = document.createElement("p");
newText.textContent = "Dia 12/04/2023";

root.append(newText);

palestrantes.forEach((palestrante) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = palestrante.image;

  const info = document.createElement("div");
  info.classList.add("info");

  const name = document.createElement("h2");
  name.textContent = palestrante.name;

  const description = document.createElement("p");
  description.textContent = palestrante.description;

  info.append(name, description);
  card.append(image, info);
  root.append(card);
});
