const palestrantesInternacionais = [
  {
    name: "José Pacheco (Portugal)",
    titulo: "Profº",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/jose-pacheco.png",
    description:
      "Mestre em Ciências da Educação pela Universidade do Porto - Portugal. Fundador da Escola da Ponte, em Portugal, referência mundial em inovação. Coordenou o projeto “Fazer a Ponte”, de 1976 a 2004. 1º Prêmio do “Concurso Experiências Inovadoras no Ensino”, promovido pelo Ministério da Educação. Coordenador Pedagógico da EcoHabitare Projetos, empresa social que visa promover uma educação conectada com as necessidades sociais do Século XXI. Autor de inúmeros livros e artigos sobre educação e dinamizador da gestão democrática.",
  },
  {
    name: "Joaquim Melro (Portugal)",
    titulo: "Profº",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/joaquim-melro.png",
    description:
      "Licenciado em Filosofia. Mestre e Doutor em Educação na Universidade de Lisboa. Exerce o cargo de diretor do Centro de Formação de Escolas António Sérgio, em Lisboa. Doutoramento sobre inclusão de estudantes adultos surdos em escolas do ensino regular. É docente e investigador de Filosofia na Escola Artística António Arroio. Publicações nestas áreas, neste link https://lisboa.academia.edu/JoaquimMelro. Atualmente faz parte dos órgãos sociais da Associação Portuguesa para a Cultura e Educação Permanente – APCEP, Lisboa em Portugal.",
  },
];

const root = document.querySelector("#palestrantes");

const divDataInter = document.createElement("div");
divDataInter.classList.add("divData");

const marcadorInter = document.createElement("div");
marcadorInter.classList.add("divMarcador");

const newTextInter = document.createElement("p");
newTextInter.textContent = "Palestrantes Internacionais";

divDataInter.append(marcadorInter, newTextInter);
root.append(divDataInter);

// palestrantesInternacionais.sort(function (a, b) {
//   var nomeA = a.name.toUpperCase();
//   var nomeB = b.name.toUpperCase();
//   if (nomeA < nomeB) {
//     return -1;
//   }
//   if (nomeA > nomeB) {
//     return 1;
//   }
//   return 0;
// });

palestrantesInternacionais.forEach(function (palestranteInter) {
  const cardInter = document.createElement("div");
  cardInter.classList.add("card");

  const imageInter = document.createElement("img");
  imageInter.src = palestranteInter.image;

  const infoInter = document.createElement("div");
  infoInter.classList.add("info");

  const nameInter = document.createElement("h2");
  nameInter.textContent = palestranteInter.name;

  const descriptionInter = document.createElement("p");
  descriptionInter.textContent = palestranteInter.description;

  infoInter.append(nameInter, descriptionInter);
  cardInter.append(imageInter, infoInter);
  root.append(cardInter);
});

const palestrantesNacionais = [
  {
    name: "Luzi Borges",
    titulo: "Profª",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/luzi_borges.jpg",
    description:
      "Doutora em Educação – UERJ. Mestre em Educação e Contemporaneidade e Pedagoga pela Universidade do Estado da Bahia. Professora Adjunta da Universidade Estadual de Santa Cruz. Líder do Grupo de pesquisa: Ciberxirè - Estudos e Pesquisas em Redes Educativas, Gêneros, Sexualidades, Religiosidades Afro  e Cibercultura. Vice-coordenadora do Programa de Pós-graduação em Educação – PPGE/UESC e Coordenadora Institucional do Programa Residência Pedagógica da CAPEs.",
  },
  {
    name: "Carla Vilaronga",
    titulo: "Profª",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/carla_vilaronga.JPG",
    description:
      "Pedagoga – UNESP. Mestrado em Educação - UNESP. Doutora – UFSCar. Docente no Instituto Federal de São Paulo, Campus São Carlos. Tem se dedicado em pesquisas relacionadas à Formação de Professores, Formação de Professores em Educação Especial e Ensino Colaborativo.",
  },
  {
    name: "Cristiano Bahia",
    titulo: "Profº",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/cristiano_bahia.png",
    description:
      "Graduado em Educação Física. Mestre em Cultura e Turismo – UESC. Doutor em Educação Física – UFSC. Professor adjunto da Universidade Estadual de Santa Cruz, no curso de Educação Física. Pró-Reitor de Extensão – UESC.",
  },
  {
    name: "Sheila de Quadros Uzêda",
    titulo: "Profª Dra.",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/sheila_de_quadros.png",
    description:
      "PhD em Educação pela Universidade Federal do Espírito Santo. Docente de Educação Especial na Universidade Federal da Bahia. Membro do Núcleo Integrado de Estudos e Pesquisas sobre Infâncias e Educação Infantil (NEPESSI/UFBA).",
  },
  {
    name: "Tomé de Pádua Frutoso",
    titulo: "Profº",
    image: "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/tome.png",
    description:
      "Mestre em educação pelo Programa de Mestrado Profissional em Educação Profissional e Tecnológica em rede nacional – PROFEPT, com foco na curricularização da extensão. Bacharel em Geografia pela Universidade de Brasília (2013). Servidor técnico administrativo em educação no Instituto Federal de Santa Catarina - IFSC. Extensionista. Um dos autores do livro ''Caminhos para Curricularização da Extensão''.",
  },
  {
    name: "Mille Caroline Fernandes - Profª Educação Básica",
    titulo: "Profª",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/mille-caroline.png",
    description:
      "Doutora e Mestre em Educação e Contemporaneidade (PPGEduc/UNEB). Professora de História da África no Ensino Fundamental II do Município de Nazaré/BA. Pesquisadora do Grupo Memória da Educação na Bahia (PROMEBA/ PPGEduc/UNEB). É membro e vice-coordenadora do Núcleo de Estudos Africanos e Afrobrasileiros em Línguas e Culturas (NGEAALC/UNEB).",
  },
  {
    name: "Neurivaldo José de Guzzi Filho",
    titulo: "Profº",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/neurivaldo.png",
    description:
      "Licenciatura em Química – UFSCar. Mestrado em Química – UFSCar. Doutor em Química – UESP. Professor titular – UESC atua nas áreas de ensino de química com ênfase em educação não formal e divulgação científica. Atuando no Caminhão com Ciência (Ciência Móvel). Coordena Projeto Cais ConsCiência. Pró-Reitor de Extensão – UESC,  2020 a 2023. Atualmente ocupa o cargo de Pró-reitor de Extensão da UESC. Coordenador do Departamento de Ciências Exatas – DCET/UESC.",
  },
  {
    name: "Núbia Regina Moreira",
    titulo: "Profª",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/nubia.png",
    description:
      "Graduada em Ciências Sociais – UFRJ; Mestra em Sociologia pela UECAMP; Doutora em Sociologia – UNB. Professora Titular da Universidade Estadual do Sudoeste da Bahia - UESB. Líder do Grupo de Pesquisa Oju Obinrin Observatório de Mulheres Negras (UESB). Autora do livro A Organização das Feministas Negras no Brasil já em 2ª ed. (2018).",
  },
  {
    name: "Luzia Gonçalves Oliveira Silva",
    titulo: "Profª",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/luzia.png",
    description:
      "Doutoranda em Letras Linguagens e Representações pela Universidade Estadual de Santa Cruz – UESC; Mestre em Inovação Pedagógica - Universidade da Madeira em Portugal, especialista em Formação Pedagógica para a Educação Inclusiva pela UESC. Pedagoga – UESC. Aperfeiçoamento em Atendimento Educacional Especializado na área de Educação de Surdo. Professora na Educação Básica da SEC de Una/BA. Vice-diretora da Unidade da SEC de Itabuna - Bahia.",
  },
  {
    name: "Rosemary Lopes Soares da Silva",
    titulo: "",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/rosemary.png",
    description:
      "PhD em Políticas Públicas e Formação Humana pelo PPFH/UERJ. Doutorado em Políticas Públicas e Formação Humana pelo PPFH/UERJ. Mestrado em Políticas Públicas e Desenvolvimento Regional – UFBA. Pedagogia. Coordena o Grupo de Estudos, Pesquisas e Experimentações Educacionais – GEPEE, da Diretoria de Formação e Experimentação dos Profissionais da Educação do Instituto Anísio Teixeira – IAT/DIRFE/SEC-BA.",
  },
  {
    name: "Cristiane Batista da Silva Santos",
    titulo: "",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/cristiane-batista.png",
    description:
      "Doutora em Estudos Étnicos e Africanos – CEAO / UFBA. Mestre em Cultura e Memória – UNEB. Professora do Departamento de Ciências da Educação – DCIE e do Mestrado Profissional em Educação - PPGE. Integra o Grupo de Pesquisa em Política e História da Educação – GRUPPHED. E neste coordena a Linha III. População negra na Bahia: História da Educação e Ensino de História. Como pesquisadora desenvolve o projeto de Pesquisa nas Histórias da Educação, Racialização e Trabalho entre a escravidão e o pós-abolição no sul da Bahia: dos Soares Lopes à produção de narrativas para sala de aula?",
  },
  {
    name: "José Arlen Beltrão",
    titulo: "",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/jose-arlen.png",
    description:
      "Graduado em Educação Física pela Universidade Estadual de Montes Claros. Mestre em Educação Física pela Universidade de Trás-os-Montes e Alto Douro e doutor em Educação pela Universidade Federal da Bahia (UFBA). Professor da rede básica de educação de Minas Gerais. Docente do Centro de Formação de Professores - CFP, da Universidade Federal do Recôncavo da Bahia - UFRB.",
  },
  {
    name: "José Valdir Santana",
    titulo: "Dr.",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/jose-valdir.png",
    description:
      "Doutor em Antropologia Social pela Universidade Federal de São Carlos; Professor Titular da Universidade Estadual do Sudoeste da Bahia (UESB); professor nos Programas de Pós-Graduação em Ensino e Programa de Pós-graduação em Relações Étnicas e Contemporaneidade, pesquisa sobre: antropologia e educação, interculturalidade e educação, educação e relações étnicas, educação escolar indígena.",
  },
  {
    name: "Ivana Calheira Sampaio",
    titulo: "",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/ivana-calheira.png",
    description:
      "Graduanda em Licenciatura Plena em História pela UESC. Atuou como bolsista PIBID. Membro no Grupo de Pesquisa em Política e História da Educação - GRUPPHED. Integrante do projeto de Iniciação Científica ''Histórias da Educação, Racialização e Trabalho entre a escravidão e o pós-abolição no sul da Bahia''.",
  },
  {
    name: "Adriana Vitória Cardoso Lopes",
    titulo: "",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/adriana-vitoria.png",
    description:
      "Mestre em Educação (UESC), Professora do Instituto Federal de Educação Ciência e Tecnologia Baiano – IF Baiano, integrante do Grupo de Pesquisa em Educação Física Escolar e Esporte (UESC).",
  },
  {
    name: "Maria de Fátima de Andrade Ferreira",
    titulo: "",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/maria-de-fatima.png",
    description:
      "Pós-Doutora em Antropologia Social e Doutora em Educação (UFBA); Professora Titular da Universidade Estadual do Sudoeste da Bahia (UESB); Docente  do Programa de Pós-Graduação Doutorado em Ensino da Rede Nordeste de Ensino (RENOEN) e do Programa de Pós-Graduação Mestrado em Ensino (PPGEN); Coordena o Núcleo de Pesquisa e Extensão Gestão em Educação e Estudos Transdisciplinares (NUGEET).",
  },
  {
    name: "Ezequiel Westphal",
    titulo: "",
    image:
      "https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/ezequiel-westphal.png",
    description:
      "Doutor e Pós-Doutor em Sociologia - UFPR. Mestre em Ciências Sociais Aplicadas - UEPG. Especialista em História do Brasil: cultura e poder - UFPR. Bacharel e Licenciado em Ciências Sociais - PUCPR. Licenciado em História - UFPR. Superintendente da Educação Profissional e Tecnológica na Secretaria da Educação do Estado da Bahia.",
  },
];

const divData = document.createElement("div");
divData.classList.add("divData");

const marcador = document.createElement("div");
marcador.classList.add("divMarcador");

const newText = document.createElement("p");
newText.textContent = "Palestrantes Nacionais";

divData.append(marcador, newText);
root.append(divData);

palestrantesNacionais.sort(function (a, b) {
  var nomeA = a.name.toUpperCase();
  var nomeB = b.name.toUpperCase();
  if (nomeA < nomeB) {
    return -1;
  }
  if (nomeA > nomeB) {
    return 1;
  }
  return 0;
});

palestrantesNacionais.forEach(function (palestrante) {
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
