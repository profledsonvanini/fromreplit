const fs = require('fs');
const path = require('path');

function criarPasta(nomePasta) {
  if (!fs.existsSync(path.join(__dirname, nomePasta))) {
    fs.mkdirSync(path.join(__dirname, nomePasta))
    console.log("--- CRIADO COM SUCESSO ---")
    return true
  } else {
    console.log(`A Pasta "${nomePasta}" já existe`)
    return false
  }
}
function criarArquivo(pasta, arquivo, conteudo) {
  try {
    if (!fs.existsSync(path.join(__dirname, arquivo))) {
      fs.writeFileSync(path.join(pasta, arquivo), conteudo)
      console.log("--- CRIADO COM SUCESSO ---")
    } else {
      console.log(`O arquivo "${arquivo}" já existe`)
    }
  } catch (err) {
    console.log("eeeee..." + err)
  }

}

function rawPath(pasta) {
  if(!fs.exists(pasta)) {
    fs.mkdir(pasta, err => { console.log() })
    console.log(`Pasta ${pasta} criada com sucesso`)
  } else {
    console.log(`Pasta ${pasta} já existe`)
  }
}

module.exports = { rawPath, criarPasta, criarArquivo }