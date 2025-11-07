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
        backgroundColor: '#e1f7f7',
        display: 'table-caption',
        display:'flex',
        justifyContent: 'right',
        padding: 20,
        marginTop: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
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

    descricao: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },
});