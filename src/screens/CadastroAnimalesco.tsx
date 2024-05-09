import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const CadastroAnimalesco = () => {
    const [nome, setNome] = useState('');
    const [especie, setEspecie] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [sexo, setSexo] = useState('');
    const [dieta, setDieta] = useState('');
    const [habitat, setHabitat] = useState('');
    const [idade, setIdade] = useState('');
    const [ra, setRa] = useState('');
    // Novo estado para Data de Nascimento
    const [dataNascimento, setDataNascimento] = useState('');

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro de Cliente</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={text => setNome(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Especie</Text>
                    <TextInput
                        style={styles.input}
                        value={especie}
                        onChangeText={text => setEspecie(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Peso</Text>
                    <TextInput
                        style={styles.input}
                        value={peso}
                        onChangeText={text => setPeso(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Altura</Text>
                    <TextInput
                        style={styles.input}
                        value={altura}
                        onChangeText={text => setAltura(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Sexo</Text>
                    <TextInput
                        style={styles.input}
                        value={sexo}
                        onChangeText={text => setSexo(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Dieta</Text>
                    <TextInput
                        style={styles.input}
                        value={dieta}
                        onChangeText={text => setDieta(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Habitat</Text>
                    <TextInput
                        style={styles.input}
                        value={habitat}
                        onChangeText={text => setHabitat(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Idade</Text>
                    <TextInput
                        style={styles.input}
                        value={idade}
                        onChangeText={text => setIdade(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>RA</Text>
                    <TextInput
                        style={styles.input}
                        value={ra}
                        onChangeText={text => setRa(text)}
                    />
                </View>
                {/* Novo campo para Data de Nascimento */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Data de Nascimento</Text>
                    <TextInput
                        style={styles.input}
                        value={dataNascimento}
                        onChangeText={text => setDataNascimento(text)}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
});

export default CadastroAnimalesco;
