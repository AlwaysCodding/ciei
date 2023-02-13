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
      "Possui graduação em Educação Física pela Faculdade de Educação Física Montenegro (1996), graduação em Economia pela Universidade Estadual de Santa Cruz (2002), mestrado em Cultura & Turismo pela Universidade Estadual de Santa Cruz (2009) e doutorado em Educação Física pela Universidade Federal de Santa Catarina (2016). Atuou como professor de Educação Física Escolar na rede estadual da Bahia durante 14 anos e coordenador de Educação Física Escolar e Esporte da Diretoria Regional durante 04 anos. Redator e consultor das Orientações Curriculares da Educação Básica do Estado da Bahia. Avaliador de curso do Conselho Estadual de Educação da Bahia e do INEP. Atualmente é professor adjunto da Universidade Estadual de Santa Cruz, no curso de Educação Física. Foi Diretor do Departamento de Saúde da UESC de 2016 a 2020 e de 2022-2023. Professor orientador do Mestrado Profissional em Educação e do Mestrado Profissional em Educação Física em Rede da UESB. Atualmente está como Pró-Reitor de Extensão. Participou como membro da equipe colaboradora do Programa Segundo Tempo do Ministério do Esporte. Coordenou o curso de Especialização em Educação Física e Esporte da UESC em parceria com a Secretaria de Educação Estadual da Bahia. Atua como coordenador do Projeto de extensão Pintando o Esporte de iniciação esportiva, desde 2007. Pesquisador da rede CEDES (Projeto aprovado no Ministério do Esporte/Secretaria Nacional de Esporte, Educação, Lazer e Inclusão Social).Tem experiência na área de Educação, com ênfase em Educação Física, atuando principalmente nos seguintes temas: Educação Física Escolar; Esporte; Formação Continuada.",
  },
  {
    name: "Profa. Dra. Sheila de Quadros Uzêda",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/sheila_de_quadros.png",
    description:
      "PhD em Educação pela Universidade Federal do Espírito Santo. Docente de Educação Especial na Universidade Federal da Bahia. Membro do Núcleo Integrado de Estudos e Pesquisas sobre Infâncias e Educação Infantil (NEPESSI/UFBA).",
  },
  {
    name: "Prof. Tomé",
    image: "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/tome.png",
    description:
      "Servidor técnico administrativo em educação no Instituto Federal de Santa Catarina - IFSC. Extensionista, mestre em educação pelo Programa de Mestrado Profissional em Educação Profissional e Tecnológica em rede rede nacional - PROFEPT (2020), com foco na curricularização da extensão. Bacharel em Geografia pela Universidade de Brasília (2013). Diretor de extensão no IFSC nos anos de 2018 e 2019. Chefe do Departamento de Assuntos Estudantis do IFSC câmpus Florianópolis-Continente. Um dos autores do livro ''Caminhos para Curricularização da Extensão''. Tem ministrado palestras em diversas instituições de ensino superior do país sobre Extensão e Curricularização da Extensão.",
  },
  {
    name: "Dra. Mille Caroline Fernandes",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/mille-caroline.png",
    description:
      "Ativista do Movimento Quilombola da Bahia. Pós-Doutoranda em Educação (IEA/USP). Doutora em Educação e Contemporaneidade (PPGEduc/UNEB). Fez Doutorado Sanduíche no Instituto Superior de Ciências da Educação-ISCED/Luanda, como bolsista PDSE/CAPES. Formada em Pedagogia. Professora de História da África no Ensino Fundamental II do Município de Nazaré/BA. Professora Colaboradora no Departamento de Línguas e Literaturas Africanas-ISCED/Luanda; da Cátedra UNESCO de Estudios Afro-Andinos de la Universidad Andina Simón Bolívar (UASB/Quito) e da Universidad Nacional de Mar Del Plata (UNMDP/Argentina).",
  },
  {
    name: "Prof. Neurivaldo José de Guzzi Filho",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/neurivaldo.png",
    description:
      "Licenciatura em Química – UFSCar. Mestrado em Química – UFSCar. Doutor em Química – UESP. Professor titular – UESC atua nas áreas de ensino de química com ênfase em educação não formal e divulgação científica. Atuando no Caminhão com Ciência (Ciência Móvel). Coordena Projeto Cais ConsCiência. Pró-Reitor de Extensão – UESC,  2020 a 2023. Atualmente ocupa o cargo de Pró-reitor de Extensão da UESC. Coordenador do Departamento de Ciências Exatas – DCET/UESC.",
  },
  {
    name: "Profa. Núbia Regina Moreira",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/nubia.png",
    description:
      "Graduada em Ciências Sociais – UFRJ; Mestra em Sociologia pela UECAMP; Doutora em Sociologia – UNB. Professora Titular da Universidade Estadual do Sudoeste da Bahia - UESB. Líder do Grupo de Pesquisa Oju Obinrin Observatório de Mulheres Negras (UESB). Autora do livro A Organização das Feministas Negras no Brasil já em 2ª ed. (2018).",
  },
];

const root = document.querySelector("#programacao");

const divData = document.createElement("div");
divData.classList.add("divData");

const marcador = document.createElement("div");
marcador.classList.add("divMarcador");

const newText = document.createElement("p");
newText.textContent = "Quinta-Feira, 13 de Abril de 2023";

divData.append(marcador, newText);
root.append(divData);

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
