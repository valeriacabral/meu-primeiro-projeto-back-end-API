const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Valéria Cabral',
        imagem: 'https://photos.fife.usercontent.google.com/pw/AP1GczMi82Gxh5HO9SH3bBxThczrsY5-oPgFM4nY5k3aCCViR3G4B0Zkf9itU-YhkmMyC4PS1m1KjWummN3noceBKac-rVOd9w=w854-h641-s-no-gm?authuser=0',
        minibio: 'Desenvolvedora e protetora'
    },

    {

        nome: 'Simara Conceição',
     
        imagem: 'https://bit.ly/3LJIyOF',
     
        minibio: 'Desenvolvedora e instrutora',
     
    },
     
    {
     
        nome: 'Iana Chan',
     
        imagem: 'https://bit.ly/3JCXBqP',
     
        minibio: 'CEO & Founder da PrograMaria',
     
      },
     
      {
     
        nome: 'Luana Pimentel',
     
        imagem: 'https://bit.ly/3FKpFaz',
     
        minibio: 'Senior Staff Software Engineer',
     
      }

]
function mostraMulheres(requere, response) {


}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)