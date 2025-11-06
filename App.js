import React from "react";
import { ScrollView } from 'react-native';
import Titulo from "./componentes/Titulo"
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from "./componentes/FotoPerfil";
import CartaoUsuario from "./componentes/CartaoUsuario";

export default function App() {
  return <ScrollView>
    <Titulo />
    <Saudacao nome='nego trufa' />
    <FotoPerfil />

    <CartaoUsuario
      nome='Marcelinho Carioca'
      idade='21'
      rede_social='@marcelinho.carioca_22'
      endereco='Rua valinhos Nº 78'
      img='perfil00'
    />

     <CartaoUsuario
      nome='Marília Mendonça'
      idade='38'
      rede_social='@marilia.pontos'
      endereco='Rua Douros Nº 788'
      img='perfil01'
    />

     <CartaoUsuario
      nome='Laurinha do Camarão'
      idade='17'
      rede_social='@laurinha_do_camarao$'
      endereco='Rua Praieros Nº 256'
      img='perfil02'
    />

     <CartaoUsuario
      nome='Willian'
      idade='25'
      rede_social='@willianmarcador_06dobglh'
      endereco='Rua Cabeção Florença Nº 21 '
      img='perfil03'
    />

     <CartaoUsuario
      nome='Jerson'
      idade='35'
      rede_social='jerson.padeiro244'
      endereco='Rua Cagador Malha Nº 48'
      img='perfil04'
    />
  </ScrollView>


}
