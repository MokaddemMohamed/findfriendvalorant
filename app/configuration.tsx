import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Image, Modal } from 'react-native';
import { useRouter } from 'expo-router';

const Configuration: React.FC = () => {
  const [step, setStep] = useState(1);
  const [gamerTag, setGamerTag] = useState('');
  const [rank, setRank] = useState('');
  const [gameGoals, setGameGoals] = useState('');
  const [playerType, setPlayerType] = useState('');
  const [mainAgent, setMainAgent] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();
  const totalSteps = 5;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: step / totalSteps,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [step]);

  const nextStep = () => {
    if (
      (step === 1 && gamerTag === '') ||
      (step === 2 && rank === '') ||
      (step === 3 && gameGoals === '') ||
      (step === 4 && playerType === '') ||
      (step === 5 && mainAgent === '')
    ) {
      setShowAlert(true); // Affiche l'alerte si un choix n'est pas fait
      return;
    }

    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      router.push('./(tabs)/profil');
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuration de votre Profil</Text>

      {/* Modal pour l'alerte personnalisée */}
      <Modal
        visible={showAlert}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowAlert(false)}
      >
        <View style={styles.alertBackground}>
          <View style={styles.alertContainer}>
            <Text style={styles.alertTitle}>Il manque quelque chose 🤔</Text>
            <Text style={styles.alertMessage}>Tu as oublié de faire ton choix.</Text>
            <TouchableOpacity
              style={styles.alertButton}
              onPress={() => setShowAlert(false)}
            >
              <Text style={styles.alertButtonText}>J'ai compris</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Barre de progression animée */}
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBarFill,
            {
              width: progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>

      {/* Choix de l’étape selon `step` */}
      <View style={styles.stepContainer}>
        {step === 1 && (
          <View style={styles.stepContent}>
            <Text style={styles.label}>Entrez votre Gamer Tag :</Text>
            <TextInput
              style={styles.input}
              value={gamerTag}
              onChangeText={setGamerTag}
              placeholder="Votre Gamer Tag"
              placeholderTextColor="#ccc"
            />
          </View>
        )}

        {step === 2 && (
          <View style={styles.stepContent}>
            <Text style={styles.label}>Quel est votre Rang ?</Text>
            <View style={styles.optionsContainer}>
              {['Fer', 'Bronze', 'Argent', 'Or', 'Platine', 'Diamant', 'Immortel', 'Rayonnant'].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[styles.optionButton, rank === option && styles.optionSelected]}
                  onPress={() => setRank(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {step === 3 && (
          <View style={styles.stepContent}>
            <Text style={styles.label}>Quels sont vos Objectifs de jeu ?</Text>
            <View style={styles.optionsContainer}>
              {['Compétitif', 'Casual', 'Classement', 'Entraînement'].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[styles.optionButton, gameGoals === option && styles.optionSelected]}
                  onPress={() => setGameGoals(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {step === 4 && (
          <View style={styles.stepContent}>
            <Text style={styles.label}>Quel est votre Style de jeu ?</Text>
            <View style={styles.optionsContainer}>
              {['Stratégique', 'Support', 'Fraggeur', 'Polyvalent'].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[styles.optionButton, playerType === option && styles.optionSelected]}
                  onPress={() => setPlayerType(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {step === 5 && (
          <View style={styles.stepContent}>
            <Text style={styles.label}>Choisissez votre Agent Principal :</Text>
            <View style={styles.optionsContainer}>
              {[
                { name: 'Astra', image: require('../assets/images/agents/astra.png') },
                { name: 'Breach', image: require('../assets/images/agents/breach.png') },
                { name: 'Brimstone', image: require('../assets/images/agents/brimstone.png') },
                { name: 'Chamber', image: require('../assets/images/agents/chamber.png') },
                { name: 'Cypher', image: require('../assets/images/agents/cypher.png') },
                { name: 'Fade', image: require('../assets/images/agents/fade.png') },
                { name: 'Harbor', image: require('../assets/images/agents/harbor.png') },
                { name: 'Jett', image: require('../assets/images/agents/jett.png') },
                { name: 'KAYO', image: require('../assets/images/agents/kayo.png') },
                { name: 'Killjoy', image: require('../assets/images/agents/killjoy.png') },
                { name: 'Neon', image: require('../assets/images/agents/neon.png') },
                { name: 'Omen', image: require('../assets/images/agents/omen.png') },
                { name: 'Phoenix', image: require('../assets/images/agents/phoenix.png') },
                { name: 'Raze', image: require('../assets/images/agents/raze.png') },
                { name: 'Reyna', image: require('../assets/images/agents/reyna.png') },
                { name: 'Sage', image: require('../assets/images/agents/sage.png') },
                { name: 'Skye', image: require('../assets/images/agents/skye.png') },
                { name: 'Sova', image: require('../assets/images/agents/sova.png') },
                { name: 'Viper', image: require('../assets/images/agents/viper.png') },
                { name: 'Yoru', image: require('../assets/images/agents/yoru.png') },
              ].map((agent) => (
                <TouchableOpacity
                  key={agent.name}
                  style={[styles.optionButton, mainAgent === agent.name && styles.optionSelected]}
                  onPress={() => setMainAgent(agent.name)}
                >
                  <Image source={agent.image} style={styles.agentImage} />
                  <Text style={styles.optionText}>{agent.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </View>

      {/* Boutons de navigation */}
      <View style={styles.navigationContainer}>
        {step > 1 && (
          <TouchableOpacity onPress={prevStep} style={styles.navButton}>
            <Text style={styles.navButtonText}>Précédent</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={nextStep} style={styles.navButton}>
          <Text style={styles.navButtonText}>{step === totalSteps ? 'Terminer' : 'Suivant'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles de la modal d'alerte personnalisée et autres éléments de l'interface
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1923',
    paddingTop: 60,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    position: 'absolute',
    top: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4655',
  },
  progressBarContainer: {
    position: 'absolute',
    top: 60,
    width: '90%',
    height: 8,
    backgroundColor: '#1C2A3A',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#FF4655',
    borderRadius: 4,
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  stepContent: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: '#1C2A3A',
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  optionButton: {
    backgroundColor: '#1C2A3A',
    borderRadius: 8,
    margin: 5,
    alignItems: 'center',
    padding: 5,
  },
  optionSelected: {
    backgroundColor: '#FF4655',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },
  agentImage: {
    width: 63,
    height: 50,
    borderRadius: 8,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  navButton: {
    backgroundColor: '#FF4655',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  alertBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#1C2A3A',
    borderRadius: 10,
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4655',
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  alertButton: {
    backgroundColor: '#FF4655',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  alertButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Configuration;
