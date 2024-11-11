// MatchChatScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'them';
}

const MatchChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hello! Prêt pour une partie ?', sender: 'them' },
    { id: '2', text: 'Bien sûr, j\'attends ça !', sender: 'me' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = { id: Date.now().toString(), text: inputText, sender: 'me' };
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Liste des messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sender === 'me' ? styles.myMessage : styles.theirMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        style={styles.messageList}
        inverted
      />

      {/* Champ de saisie pour un nouveau message */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Écrivez un message..."
          placeholderTextColor="#84594b"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  messageList: {
    flex: 1,
    paddingVertical: 10,
  },
  messageContainer: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    maxWidth: '75%',
  },
  myMessage: {
    backgroundColor: '#2eb387',
    alignSelf: 'flex-end',
  },
  theirMessage: {
    backgroundColor: '#ff2832',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#ffffff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#84594b',
    backgroundColor: '#121212',
  },
  input: {
    flex: 1,
    backgroundColor: '#fec54d',
    color: '#121212',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#ff2832',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  sendButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default MatchChatScreen;
