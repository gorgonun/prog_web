/* eslint-disable no-console */
// @flow
import dotenv from 'dotenv'

dotenv.config()

// Variáveis de ambiente, acessadas via process.env, devem ser
// definidas no arquivo .env.

// verificar se todas as variáveis de ambiestão definidas

let todasDefinidas = true

if (process.env.PORTA === undefined) {
  console.log('Falta definir variável PORTA no arquivo .env')
  todasDefinidas = false
}

if (process.env.BD_URL === undefined) {
  console.log('Falta definir variável BD_URL no arquivo .env')
  todasDefinidas = false
}

if (process.env.SENHA_JWT === undefined) {
  console.log('Falta definir variável SENHA_JWT no arquivo .env')
  todasDefinidas = false
}

if (process.env.LIMITE_IMAGEM === undefined) {
  console.log('Falta definir variável LIMITE_IMAGEM no arquivo .env')
  todasDefinidas = false
}
if (process.env.DURACAO_TOKEN === undefined) {
  console.log('Falta definir variável DURACAO_TOKEN no arquivo .env')
  todasDefinidas = false
}

if (!todasDefinidas) {
  process.exit(1)
}
