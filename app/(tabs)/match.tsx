import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface PlayerProfile {
  id: string;
  name: string;
  rank: string;
  playerType: string;
  mainAgent: string;
  image: any;
}

const MatchmakingScreen: React.FC = () => {
  const [profiles] = useState<PlayerProfile[]>([
    {
      id: '1',
      name: 'PlayerOne',
      rank: 'Diamant',
      playerType: 'Stratégique',
      mainAgent: 'Jett',
      image: require('../../assets/images/logo.png'),
    },
    {
      id: '2',
      name: 'PlayerTwo',
      rank: 'Immortel',
      playerType: 'Fraggeur',
      mainAgent: 'Reyna',
      image: require('../../assets/images/logo.png'),
    },
    {
      id: '3',
      name: 'PlayerThree',
      rank: 'Platine',
      playerType: 'Support',
      mainAgent: 'Sage',
      image: require('../../assets/images/logo.png'),
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProfile = profiles[currentIndex];

  const handleLike = () => {
    alert(`Vous avez aimé le profil de ${currentProfile.name}!`);
    nextProfile();
  };

  const handlePass = () => {
    nextProfile();
  };

  const nextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <View style={styles.container}>
      {/* Carte Profil */}
      <View style={styles.profileCard}>
        <Image source={currentProfile.image} style={styles.profileImage} />
        <Text style={styles.name}>{currentProfile.name}</Text>
        <Text style={styles.rank}>Rang : {currentProfile.rank}</Text>
        <Text style={styles.playerType}>Type de joueur : {currentProfile.playerType}</Text>
        <Text style={styles.mainAgent}>Agent principal : {currentProfile.mainAgent}</Text>
      </View>

      {/* Boutons de Matchmaking */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.passButton} onPress={handlePass}>
          <MaterialCommunityIcons name="close" size={28} color="#FFFFFF" />
          <Text style={styles.buttonText}>Passer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
          <MaterialCommunityIcons name="heart" size={28} color="#FFFFFF" />
          <Text style={styles.buttonText}>J'aime</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 30,
    width: '90%',
    borderColor: '#3A5160',
    borderWidth: 1,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4655',
    marginBottom: 8,
  },
  rank: {
    fontSize: 18,
    color: '#FEC54D',
    marginBottom: 5,
  },
  playerType: {
    fontSize: 18,
    color: '#3A5160',
    marginBottom: 5,
  },
  mainAgent: {
    fontSize: 18,
    color: '#72CDF3',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  passButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3A5160',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginHorizontal: 5,
    width: '40%',
    justifyContent: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF4655',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginHorizontal: 5,
    width: '40%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default MatchmakingScreen;
