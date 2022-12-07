// DECLARAÇÃO DE VARIÁVEIS
const setaRetorno = document.querySelector('.setaRetorno');
const botaoDetalhes = document.querySelectorAll('.botaoShow');
const conteudoDetalhes = document.querySelectorAll('.conteudo');
const botaoCopiar = document.querySelectorAll('.copiar');
const codigoCopiar = document.querySelectorAll('.codigo');
const imgCopiar = document.querySelectorAll('.imgCopiar');
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