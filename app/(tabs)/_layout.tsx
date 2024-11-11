import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Image, Modal } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white", // Couleur active des icônes
        tabBarInactiveTintColor: "black", // Couleur inactive des icônes
        tabBarStyle: {
          backgroundColor: "#ff2832", // Couleur de fond de la barre d'onglets
          borderTopWidth: 0, // Enlève la bordure du haut si vous préférez
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          padding:10,
        },
        headerShown: false, // Cache l'en-tête de chaque écran
      }}
    >
      <Tabs.Screen
        name="profil"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'body' : 'body-outline'} color={color} />
          ),
        }}
      />

<Tabs.Screen 
      name="match"
      options={{
        title: '',
        tabBarIcon: ({ color, focused }) => (
          focused ? (
            <Image
              source={require('../../assets/images/logo.png')} // Remplacez par le chemin de votre logo
              style={{ width: 47, height: 47, tintColor: color }} // Taille et couleur
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require('../../assets/images/logo.png')}
              style={{ width: 47, height: 47, tintColor: color }}
              resizeMode="contain"
            />
          )
        ),
      }}
    />

      <Tabs.Screen
        name="message"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
