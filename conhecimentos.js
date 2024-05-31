// Array de objetos que representam habilidades ou conhecimentos
const skills = [
  {
    id: '0', // MSDOS
    img: "https://th.bing.com/th/id/R.e6860296210853747e415f8ce713442d?rik=o9Z45mwEIS5OQw&riu=http%3a%2f%2fwww.thealmightyguru.com%2fWiki%2fimages%2fthumb%2f3%2f39%2fMS-DOS_-_Logo.svg%2f600px-MS-DOS_-_Logo.svg.png&ehk=1Zp%2fqRPfd6nlSIVGILoW3uRQHL05bqYEGzob%2bm5O%2bss%3d&risl=&pid=ImgRaw&r=0", 
    titulo: 'MS DOS', 
    descricao: 'O sistema operacional "MS-DOS" foi criado originalmente pela "Seattle Computer Projects"em meados de 1980 com o nome de QDOS, tendo seu sistema operacional comprado pela Microsoft no ano seguinte em 1981 onde teve sua nomenclatura alterada para a vigente.', 
    dom: 'Lançamento: Meados de 1981', 
    segundaImg: "https://media.licdn.com/dms/image/D4D12AQHg4enzmwJatw/article-cover_image-shrink_600_2000/0/1709128178303?e=2147483647&v=beta&t=jBiSHkDD6g5T70DSNBTZKmCkMMvHLgiZY9nV-hkbEI4"
    
  },
  {
    id: '1', //WINDOWS
    img: "https://th.bing.com/th/id/R.96f372af44370c18c5fd7b46f795ad9b?rik=2mCvOdSna6un5w&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fWindows-Logo.png&ehk=GUU5dtq3QpNLGqKXJJzipTP56BwO5N4shpMgSAoDb3k%3d&risl=&pid=ImgRaw&r=0",
    titulo: 'Windows',
    descricao: '  O windows é um sistema operacional de multitarefas para computadores e dispositivos móveis desenvolvido pela Microsoft. Esse sistema começou a ser projetado em 1981 mas somente em 1993 sua primeira versão foi oficialmente lançada e atualmente é o  sistema operacional mais utilizado. A função do windows é facilitar o acesso do usuário ao computador através de uma interface eficiente, atrativa e fácil de utilizar, além de utilizar softwares mais rápidos e eficazes.',
    dom: 'Lançamento: Agosto de 1993',
    segundaImg: "https://media.licdn.com/dms/image/D4D12AQHg4enzmwJatw/article-cover_image-shrink_600_2000/0/1709128178303?e=2147483647&v=beta&t=jBiSHkDD6g5T70DSNBTZKmCkMMvHLgiZY9nV-hkbEI4"
    
  },
  {
    id: '2',
    img: "https://www.compassis.com/downloads/2021/12/logo-linux_1.png",
    titulo: 'Linux/Unix',
    descricao: 'A relação entre o Unix e o Linux está ligada ao Minix, uma versão gratuita do Unix com código-fonte disponível, criada originalmente para fins educacionais. Linus Torvalds, um estudante de Ciências da Computação da Universidade de Helsinki, desenvolveu o Linux em 1991 como um projeto pessoal para criar um sistema mais poderoso que o Minix. O Linux é um sistema operacional livre e uma re-implementação das especificações POSIX, o que o torna semelhante ao Unix, embora tenha sido desenvolvido independentemente.',
    dom: 'Lançamento: Outubro de 1991',
    segundaImg: "https://sempreupdate.com.br/wp-content/uploads/2017/04/diferencas-entre-unix-e-linux.png"
  },
  {
    id: '3',
    img: "https://www.kindpng.com/picc/m/172-1724310_mac-os-logo-png-transparent-png.png",
    titulo: 'Mac OS',
    descricao: 'O Mac OS "clássico" é um sistema operacional puramente gráfico, sem linha de comando, conhecido por sua simplicidade de uso. No entanto, é criticado por sua multitarefa cooperativa, que possui gerenciamento de memória deficiente e é propenso a conflitos de extensão.',
    dom: 'Lançamento: 1984',
    segundaImg: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSUwpBNVEBDkNcf3fiW9LlaO1DnWWDtpIuTvGFMoNtUt1rnoxsdxkd9zfwYoWeVphaYuNiQB5NFDGtTtxtQ0MZG7RhVuNW5Un0GrsvZx8D8oLIM1WhGctqN0L6VuxeynHO3lsmJ1EWUJM/s1600/macOSX.jpg"
  },
  {
    id: '4',
    img: "https://seeklogo.com/images/I/ios-logo-3075579597-seeklogo.com.png",
    titulo: 'IOS',
    descricao: 'O iOS, lançado pela Apple Inc em 2007, surgiu com o advento do iPhone, marcando o início de uma nova era na computação móvel. O iPhone introduziu uma abordagem revolucionária para interação com dispositivos móveis, oferecendo uma interface de usuário inovadora e gestos intuitivos que mudaram fundamentalmente a forma como as pessoas interagem com a tecnologia. ',
    dom: 'Lançament0: 2007',
    segundaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69e9VPW3dnZc1M7R3amTkpU547KOW04Y7TA&s"
  },
  {
    id: '5',
    img: "https://www.logo.wine/a/logo/Google_Chrome/Google_Chrome-Logo.wine.svg",
    titulo: 'Google Crome',
    descricao: 'Com o google vendo o sucesso dos navegadores como Internet Explorer e Mozilla Firefox, o Google Chrome teve seu desenvolvimento iniciado em no final de 2006, tendo sua devida versão beta em setembro de 2008',
    dom: 'Lançamento: 2008',
    segundaImg: "https://conteudo.imguol.com.br/c/noticias/8e/2021/01/15/asus-chromebook-1610726754771_v2_900x506.png"
  }, 
  {
    id: '6',
    img: "https://th.bing.com/th/id/OIP.yInMfznW_tbDrFW9TJklgAHaHa?rs=1&pid=ImgDetMain",
    titulo: 'Android',
    descricao: 'Criado em 2007 o sistema operacional Android é o mais usado no mundo, projetado pela google este sistema está presente em vários aparelhos de diferentes fabricantes como Samsung, Motorola, LG, e Sony, e no Linux. Inicialmente em 2003. Andy Rubin, seu criador, começou desenvolvendo o sistema operacional para câmeras digitais. Porém, ele percebeu que o mercado para câmeras não era assim tão grande e focou o sistema para os smartphones.',
    dom: 'Lançamento: 2007',
    segundaImg: "https://t2.tudocdn.net/105704?w=646&h=284"
  }
];

// Função para mostrar a descrição de uma habilidade
function mostrarDescricao(id) {
  // Seleciona os elementos do DOM onde a descrição será exibida
  const titulo = document.querySelector('#tituloConhecimento');
  const descricao = document.querySelector('#descricaoConhecimento');
  const dom = document.querySelector('#domConhecimento');
  const imagemExibida = document.querySelector('#imagemExibida');

  // Atualiza o conteúdo dos elementos selecionados com a informação da habilidade correspondente
  titulo.textContent = skills[id].titulo;
  descricao.textContent = skills[id].descricao;
  dom.textContent = skills[id].dom;
  imagemExibida.src = skills[id].segundaImg; // Define a URL da segunda imagem
  imagemExibida.alt = skills[id].titulo; // Define o texto alternativo da segunda imagem
}



function renderizarSkills() {
  // Seleciona o elemento do DOM onde as habilidades serão exibidas
  const ImgBloco = document.querySelector('.ImgBloco');
  ImgBloco.innerHTML = '';

  // Para cada habilidade...
  skills.forEach(skill => {
    // Cria um novo elemento de imagem
    const img = document.createElement('img');
    img.src = skill.img; // Define a URL da imagem
    img.alt = skill.titulo; // Define o texto alternativo da imagem
    img.classList.add('conhecimentoImg');// Adiciona uma classe ao elemento de imagem
  

    // Adiciona um ouvinte de evento de clique à imagem que chama a função mostrarDescricao com o id da habilidade
    img.addEventListener('click', () => {
      mostrarDescricao(skill.id);
      // Exibe a div que contém a imagem exibida
      document.querySelector('.ImgExibicao').style.display = 'block';

    });

    // Adiciona a imagem ao elemento ImgBloco
    ImgBloco.appendChild(img);
  });
}

// Chama a função renderizarSkills para exibir as habilidades na página
renderizarSkills();