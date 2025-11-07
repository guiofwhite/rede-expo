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

    <CartaoUsuario
      nome='Alice Ventura'
      idade='31'
      rede_social='alice_v_design'
      endereco='Rua da Alegria, 1500'
      img='perfil05'
    />

    <CartaoUsuario
      nome='Bruno Guedes'
      idade='55'
      rede_social='bruno.guedes.jr'
      endereco='Alameda dos Pinheiros, 77, Bloco C'
      img='perfil00'
    />

    <CartaoUsuario
      nome='Clara Souza'
      idade='24'
      rede_social='clara_fotografa'
      endereco='Rua Sete de Setembro, 2024'
      img='perfil00'
    />

    <CartaoUsuario
      nome='Daniel Lima'
      idade='60'
      rede_social='dlima_invest'
      endereco='Praça Central, Ed. Ouro'
      img='perfil00'
    />

    <CartaoUsuario
      nome='Érica Freitas'
      idade='19'
      rede_social='e_freitas_musica'
      endereco='Travessa da Ponte, 120'
      img='perfil00'
   />

    <CartaoUsuario
      nome='Fábio Menezes'
      idade='38'
      rede_social='fabiom_chef'
      endereco='Rua da Gastronomia, 333'
      img='perfil00'
    />

    <CartaoUsuario
      nome='Giovana Rios'
      idade='45'
      rede_social='giovanarios_prof'
      endereco='Av. Paulista, 1000, 15º Andar'
      img='perfil00'
    />

    <CartaoUsuario
      nome='Hugo Campos'
      idade='29'
      rede_social='hugocampos_tech'
      endereco='Rua das Inovações, 404'
      img='perfil00'
    />

    <CartaoUsuario
      nome='Isabela Santos'
      idade='51'
      rede_social='isa_santos_turismo'
      endereco='Estrada do Sol, KM 5'
      img='perfil00'
    />

    <CartaoUsuario
      nome='João Pedro'
      idade='26'
      rede_social='jpedro_dev'
      endereco='Rua dos Códigos, 1011'
      img='perfil00'
    />
    <CartaoUsuario
      nome='Karina Leal'
      idade='33'
      rede_social='karina_leal_adv'
      endereco='Rua da Justiça, 987, Sala 5'
      img='perfil00'
    />
    <CartaoUsuario
      nome='Lucas Rocha'
      idade='47'
      rede_social='lucasrocha_bike'
      endereco='Av. do Esporte, 200'
      img='perfil00'
    />
    <CartaoUsuario
      nome='Mariana Alves'
      idade='22'
      rede_social='mari_alves_moda'
      endereco='Rua Fashion, 700'
      img='perfil00'
    />
    <CartaoUsuario
      nome='Nelson Pires'
      idade='68'
      rede_social='nelsonp.hobby'
      endereco='Praça da Terceira Idade, 1'
      img='perfil00'
    />
    <CartaoUsuario
      nome='Olívia Gomes'
      idade='40'
      rede_social='oliviagomes_yoga'
      endereco='Rua Zen, 11'
      img='perfil00'
    />
    <CartaoUsuario
      nome='Paulo Zeca'
      idade='20'
      rede_social='paulozeca_games'
      endereco='Av. dos Streamers, 55'
      img='perfil00'
    />
    <CartaoUsuario
      nome='Quitéria Belo'
      idade='37'
      rede_social='quiteriab_cabelo'
      endereco='Rua da Beleza, 88'
      img='perfil00'
    />
    <CartaoUsuario
      nome='Ricardo Matos'
      idade='59'
      rede_social='ricardom_eletrica'
      endereco='Av. Industrial, 2000'
      img='perfil00'
    />
    <CartaoUsuario
      nome='Sofia Teles'
      idade='27'
      rede_social='sofiate_escritora'
      endereco='Rua dos Livros, 40'
      img='perfil00'
    />
    <CartaoUsuario
      nome='Tiago Nunes'
      idade='36'
      rede_social='tiagonunes_reparos'
      endereco='Rua das Ferramentas, 99'
      img='perfil00'
    />
  </ScrollView>


}
