const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome:'Valéria Cabral',
    imagem:'https://photos.fife.usercontent.google.com/pw/AP1GczMi82Gxh5HO9SH3bBxThczrsY5-oPgFM4nY5k3aCCViR3G4B0Zkf9itU-YhkmMyC4PS1m1KjWummN3noceBKac-rVOd9w=w854-h641-s-no-gm?authuser=0',
    minibio:'Desenvolvedora e protetora'
 })
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)