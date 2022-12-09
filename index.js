// DECLARAÇÃO DE VARIÁVEIS
const setaRetorno = document.querySelector('.setaRetorno');
const botaoDetalhes = document.querySelectorAll('.botaoShow');
const conteudoDetalhes = document.querySelectorAll('.conteudo');
const botaoCopiar = document.querySelectorAll('.copiar');
const codigoCopiar = document.querySelectorAll('.codigo');
const imgCopiar = document.querySelectorAll('.imgCopiar');
const caixa = document.querySelector('#menuLateralReact');
const titulos = document.querySelectorAll('.tituloSecaoReact');
const ulDoIndice = document.querySelector('.primeiraLista');
const setaMenuLateral = document.querySelector('.setaMenuLateral');
const imutavel = document.querySelector('.imutavel');
const imutavel2 = document.querySelector('.imutavel2');

// FUNÇÃO PARA O BOTÃO DETALHES ABRIR E FECHAR O CONTEÚDO
for (let i = 0; i < botaoDetalhes.length; i++) {
    botaoDetalhes[i].addEventListener('click', ()=> {
      if(conteudoDetalhes[i].classList.contains('show')){
        conteudoDetalhes[i].classList.remove('show');
        conteudoDetalhes[i].classList.add('hidden');
        botaoDetalhes[i].classList.remove('ativo');
        botaoDetalhes[i].innerHTML = 'Ver detalhes';
      } else {
        conteudoDetalhes[i].classList.remove('hidden');
        conteudoDetalhes[i].classList.add('show');
        botaoDetalhes[i].classList.add('ativo');
        botaoDetalhes[i].innerHTML = 'Fechar detalhes';
      }
    });
}
// FUNÇÃO PARA O BOTÃO COPIAR COPIAR O CÓDIGO
for (let i = 0; i < botaoCopiar.length; i++) {
    botaoCopiar[i].addEventListener('click', ()=> {
      let textoCopiado = codigoCopiar[i].innerText;

      // console.log(textoCopiado);
      navigator.clipboard.writeText(textoCopiado).then(()=>{
        imgCopiar[i].src = './img/icons/feito.png';
        setTimeout(()=>{
          imgCopiar[i].src = './img/icons/copy.png';
        },0700)
      });
    });
}

// CAIXA DE ÍNDICE


// CAPTURANDO TITULOS E INSERINDO AQUI
for (let i = 0; i < titulos.length; i++) {
  let li = document.createElement('li');
  ulDoIndice.appendChild(li);
  let a = document.createElement('a');
  li.appendChild(a);
  a.href = `#${titulos[i].id}`;
  a.innerText = titulos[i].innerText;
}

// GUARDANDO O MENU E MOVENDO A SETA
setaMenuLateral.addEventListener('click', ()=> {
  if(caixa.classList.contains('aberta')){
    caixa.classList.remove('aberta');
    caixa.classList.add('fechada');
    setaIMG.style.animationPlayState = "running";
    setaIMG.style.animationName = 'movimentoSeta';
    caixa.style.animationPlayState = 'running';
    caixa.style.animationName = 'guardandoCaixa';
  } else {
    caixa.classList.add('aberta');
    caixa.classList.remove('fechada');
    setaIMG.style.animationPlayState = "running";
    setaIMG.style.animationName = 'movimentoSeta2';
    caixa.style.animationPlayState = 'running';
    caixa.style.animationName = 'aparecendoCaixa';
  }
})

// ABRINDO E FECHANDO A CAIXA DE ÍNDICE AO CLICAR EM SETA

// transform: translate(-100%, -50%);
imutavel.innerText = `style={{color: 'red'}};`
imutavel2.innerText = `style={{backgroundColor = 'red'}};`