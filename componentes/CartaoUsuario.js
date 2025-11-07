import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import fotos from '../img/fotos';

export default function CartãoUsuario({ nome, idade, rede_social, endereco, img }) {
    return (
        <View style={estilos.cartao}>
            <Image source={fotos[img]} style={estilos.foto} />
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.idade}>{idade}</Text>
            <Text style={estilos.rede_social}>{rede_social}</Text>
            <Text style={estilos.endereco}>{endereco}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({

    cartao: {
        backgroundColor: '#a8bd5bff',
        display: 'table-caption',
        display:'flex',
        padding: 5,
        marginTop: 20,
        borderRadius: 200,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 5.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 15,
        elevation: 15,
    },
    foto: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },

    nome: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    endereco: {
        fontSize: 14,
        color: '#000000ff',
        textAlign: 'center',
    },
});