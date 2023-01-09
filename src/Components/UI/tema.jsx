import {
  corPrimaria,
  corPrimariaEscuro,
  fundoClaro,
  conteudoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscuro,
} from "./variaveis"

export const temaClaro = {
  header: corPrimaria,
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: "",
}

export const temaEscuro = {
  header: corPrimariaEscuro,
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)",
}
