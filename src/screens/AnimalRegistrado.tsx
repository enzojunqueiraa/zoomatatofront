import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Animal {
    id: string;
    nome: string;
    especie: string;
    peso: number;
    altura: number;
    sexo: string;
    dieta: string;
    habitat: string;
    idade: string;
    ra: string;
}


function ListaAnimais(): React.JSX.Element {
    const [animais, setAnimais] = useState<Animal[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get<Animal[]>('http://10.137.11.226:8000/api/animais/all');
                setAnimais(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
         
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'silver',

    },

    item: {
        backgroundColor: 'black',
        padding: 45,
        marginVertical: 8,
        marginHorizontal: 13,
        borderRadius: 15,

    },
    header: {
        backgroundColor: 'black',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

    },
    image: {
        width: 190,
        height: 173,
        marginRight: 'auto',

    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic'

    },
    textNome: {
        fontWeight: 'bold',
        color: '#f6be5f',
        fontStyle: 'italic',
        marginStart: 'auto',
        fontSize: 19

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30

    },
    footerIcon: {
        width: 30,
        height: 30,

    },
    preco: {
        fontWeight: 'bold',
        color: 'yellow',
        marginLeft: 'auto',
        fontSize: 16

    },
    headerImage: {
        width: 400,
        height: 140,
        alignItems: 'center',
        marginTop: 'auto'

    },
    ingredientes: {
        color: "white",
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 'auto',
        fontFamily: 'Star Wars'

    },
    imageBg: {
        flex: 1,
        justifyContent: 'center',

    },
    quadradinho: {
        width: 300,
        height: 125,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 39,
        resizeMode: 'center',
        backgroundColor: 'red'

    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 8

    },
    addIcon: {
        width: 30,
        height: 30
    },
    addButton: {
        position: 'relative',
        right: 8,
        bottom: 10,
       
    },
    removeIcon: {
        width: 27,
        height: 30,
    
    },
    removeButton: {
        position: 'relative',
        right: 8,
        bottom: 10,
       
    },
    valor: {
        fontSize: 30,
        padding: 1,
        marginLeft: 10,
        width: 30,
        height: 30,
        position: 'relative'
    },



});

export default ListaAnimais;
