const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var myVar;",
      "let myVar;",
      "const myVar;"
    ],
    correta: 2
  },
  {
    pergunta: "Como se refere ao primeiro elemento de um array em JavaScript?",
    respostas: [
      "array[0]",
      "array.first()",
      "array.firstElement()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "array.addEnd()",
      "array.push()",
      "array.append()"
    ],
    correta: 1
  },
  {
    pergunta: "O que o operador '===' faz em JavaScript?",
    respostas: [
      "Compara valores e tipos",
      "Atribuição",
      "Compara apenas valores"
    ],
    correta: 0
  },
  {
    pergunta: "Como você declara uma função em JavaScript?",
    respostas: [
      "function minhaFuncao()",
      "const minhaFuncao = function()",
      "ambas as opções anteriores"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
    respostas: [
      "10",
      "'55'",
      "Erro"
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'querySelector()' faz em JavaScript?",
    respostas: [
      "Seleciona um elemento pelo ID",
      "Seleciona elementos por classe",
      "Seleciona o primeiro elemento que corresponde a um seletor CSS"
    ],
    correta: 2
  },
  {
    pergunta: "O que o evento 'DOMContentLoaded' representa em JavaScript?",
    respostas: [
      "O documento HTML foi totalmente carregado e analisado",
      "Um elemento HTML foi clicado",
      "Um formulário foi enviado"
    ],
    correta: 0
  },
  {
    pergunta: "Como você converte uma string para um número em JavaScript?",
    respostas: [
      "parseInt()",
      "toNumber()",
      "stringToNumber()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a finalidade do operador 'typeof' em JavaScript?",
    respostas: [
      "Verifica se um elemento é do tipo 'object'",
      "Retorna o tipo de uma variável ou expressão",
      "Concatena dois tipos de dados"
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalPerguntas = perguntas.length
const total = document.querySelector('#acertos span')
total.textContent = corretas.size + 'de' + totalPerguntas

for(const item of perguntas){
const quizitem = template.content.cloneNode(true)
quizitem.querySelector('h3').textContent = item.pergunta

for(let respostas of item.respostas){
    const dt = quizitem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = respostas
    dt.querySelector('input').setAttribute('name' , 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(respostas)
    
    dt.querySelector('input').onchange = (event) => {
     const estacorreta = event.target.value == item.correta
     corretas.delete(item)
     if(estacorreta){
       corretas.add(item)
      }



    total.textContent = corretas.size + 'de' + totalPerguntas
    }
    
    
    
    
    
    
    
    
    
    
    quizitem.querySelector('dl').appendChild(dt)

}

quizitem.querySelector('dl dt').remove()



//pergunta tela
quiz.appendChild(quizitem)

}

