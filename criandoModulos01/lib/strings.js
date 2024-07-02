const meuNome = "Gabriel";

function imprimeNome() {
  console.log(`Meu nome é ${meuNome}`);
}
// EXPORTAÇÃO IMEDIATA
export function caixaAlta(nome) {
  return nome.toUpperCase();
}
// EXPORTAÇÃO IMEDIATA
export function caixaBaixa(nome) {
  return nome.toLowerCase();
}
// EXPORTAÇÃO DEFAULT (PADRÃO)
function separarPorHifen(nome) {
  return nome.split("").join("-");
}
export default separarPorHifen;
// EXPORTAÇÃO POSTERIOR DE VALORES
export { meuNome, imprimeNome };
