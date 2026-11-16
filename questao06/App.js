import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [votosC1, setVotosC1] = useState(0);
  const [votosC2, setVotosC2] = useState(0);
  const [votosC3, setVotosC3] = useState(0);

  const totalVotos = votosC1 + votosC2 + votosC3;

  const obterResultado = () => {
    if (totalVotos === 0) return 'Nenhum voto registado até ao momento.';

    const max = Math.max(votosC1, votosC2, votosC3);
    const lideres = [];

    if (votosC1 === max) lideres.push('Candidato A');
    if (votosC2 === max) lideres.push('Candidato B');
    if (votosC3 === max) lideres.push('Candidato C');

    if (lideres.length > 1) {
      return `Empate na liderança entre: ${lideres.join(' e ')} (${max} votos cada).`;
    }

    return `Mais votado: ${lideres[0]} com ${max} voto(s).`;
  };

  const reiniciarVotacao = () => {
    setVotosC1(0);
    setVotosC2(0);
    setVotosC3(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Eleição Estudantil</Text>

      <View style={styles.candidatoBox}>
        <Text style={styles.nomeCandidato}>Candidato A</Text>
        <Text style={styles.votosText}>Votos: {votosC1}</Text>
        <Button title="Votar em Candidato A" onPress={() => setVotosC1(votosC1 + 1)} />
      </View>

      <View style={styles.candidatoBox}>
        <Text style={styles.nomeCandidato}>Candidato B</Text>
        <Text style={styles.votosText}>Votos: {votosC2}</Text>
        <Button title="Votar em Candidato B" onPress={() => setVotosC2(votosC2 + 1)} />
      </View>

      <View style={styles.candidatoBox}>
        <Text style={styles.nomeCandidato}>Candidato C</Text>
        <Text style={styles.votosText}>Votos: {votosC3}</Text>
        <Button title="Votar em Candidato C" onPress={() => setVotosC3(votosC3 + 1)} />
      </View>

      <View style={styles.resumoBox}>
        <Text style={styles.totalText}>Total Geral de Votos: {totalVotos}</Text>
        <Text style={styles.resultadoText}>{obterResultado()}</Text>
      </View>

      <Button title="Reiniciar Eleição" color="#777" onPress={reiniciarVotacao} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  candidatoBox: { backgroundColor: '#f9f9f9', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#eee' },
  nomeCandidato: { fontSize: 18, fontWeight: 'bold' },
  votosText: { fontSize: 14, marginVertical: 5, color: '#555' },
  resumoBox: { backgroundColor: '#e8f5e9', padding: 15, borderRadius: 8, marginBottom: 15, alignItems: 'center' },
  totalText: { fontSize: 16, fontWeight: 'bold', color: '#2e7d32' },
  resultadoText: { fontSize: 15, fontWeight: '600', marginTop: 5, textAlign: 'center', color: '#1b5e20' },
});
