import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import gamerTag from '../configuration';


const ProfileScreen: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [fgamerTag, setGamerTag] = useState(gamerTag.name);
  const [rank, setRank] = useState("Diamant");
  const [mainAgent, setMainAgent] = useState('Raze');
  const [bio, setBio] = useState('Joueur passionné de FPS, toujours prêt pour un défi !');
  const [playerType, setPlayerType] = useState('Stratégique');
  const [availability, setAvailability] = useState('Soirées et week-ends');
  const [gameGoals, setGameGoals] = useState('Compétitif, Classement');
  const [preferredModes, setPreferredModes] = useState('Compétitif, Spike Rush');

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header avec GamerTag et Rang */}
      <View style={styles.headerCard}>
        <Image source={require('../../assets/images/profil.png')} style={styles.profileImage} />
        <View style={styles.infoContainer}>
          {isEditing ? (
            <TextInput
              value={fgamerTag}
              onChangeText={setGamerTag}
            />
          ) : (
            <Text style={styles.gamerTag}>{fgamerTag}</Text>
          )}
          <Text style={styles.rank}>Rang : {rank}</Text>
        </View>
        {isEditing && (
          <TouchableOpacity style={styles.editIcon} onPress={toggleEditMode}>
            <MaterialCommunityIcons name="check-circle" size={32} color="#2eb387" />
          </TouchableOpacity>
        )}
      </View>

      {/* Carte Agent Principal */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Agent Principal</Text>
        <Image source={require('../../assets/images/raze.jpg')} style={styles.mainImage} />
        <Text style={styles.detailText}>{mainAgent} - Duelliste</Text>
      </View>

      {/* Carte Objectifs de Jeu avec Badges */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Objectifs de Jeu</Text>
        <View style={styles.badgeContainer}>
          {gameGoals.split(', ').map((goal, index) => (
            <View key={index} style={styles.badge}>
              <Text style={styles.badgeText}>{goal}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Carte Bio */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Bio</Text>
        {isEditing ? (
          <TextInput
            style={[styles.bioInput]}
            value={bio}
            onChangeText={setBio}
            multiline
          />
        ) : (
          <Text style={styles.bio}>{bio}</Text>
        )}
      </View>

      {/* Carte Disponibilité avec Icone */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Disponibilité</Text>
        <View style={styles.availabilityContainer}>
          <MaterialCommunityIcons name="calendar" size={24} color="#fec54d" />
          <Text style={styles.availabilityText}>{availability}</Text>
        </View>
      </View>

      {/* Carte Modes Préférés */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Modes Préférés</Text>
        <View style={styles.badgeContainer}>
          {preferredModes.split(', ').map((mode, index) => (
            <View key={index} style={styles.badge}>
              <Text style={styles.badgeText}>{mode}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Bouton Flottant d'édition */}
      {!isEditing && (
        <TouchableOpacity style={styles.editButton} onPress={toggleEditMode}>
          <MaterialCommunityIcons name="pencil" size={24} color="#FFFFFF" />
          <Text style={styles.editButtonText}>Modifier le profil</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0F1923',
    paddingBottom: 30,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C2A3A',
    padding: 20,
    borderRadius: 10,
    margin: 15,
    position: 'relative',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  gamerTag: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4655',
  },
  rank: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 4,
  },
  editIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  sectionCard: {
    backgroundColor: '#2F4A6D',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mainImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#ECE8E1',
    marginTop: 10,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  badge: {
    backgroundColor: '#FF4655',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 5,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  bio: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 22,
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  availabilityText: {
    fontSize: 16,
    color: '#ECE8E1',
    marginLeft: 10,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4655',
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 20,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
