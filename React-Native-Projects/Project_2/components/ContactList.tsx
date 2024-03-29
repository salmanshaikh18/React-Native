import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Zoya luen',
      status: 'Just an extra oridinary developer',
      // imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
      imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      uid: 2,
      name: 'Ilya Pavlov',
      status: 'I ❤️ To Code and Teach!',
      // imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
      imageUrl: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      uid: 3,
      name: 'averie woodard',
      status: 'Making your GPay smooth',
      // imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
      imageUrl: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      uid: 4,
      name: 'Ayo Ogunseinde',
      status: 'Building secure Digital banks',
      // imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
      imageUrl: 'https://images.unsplash.com/photo-1534008757030-27299c4371b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];
  return (
    <View style={styles.main}>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: 'salmon',
  },
  main: {
    marginBottom: 22,
  },
  container: {
    paddingHorizontal: 5
  },
  userCard: {
    backgroundColor: '#154c79',
    margin: 5,
    borderRadius: 10,
    // padding: 10,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 200 / 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
    // textAlign: 'center'
  },
  userStatus: {
    fontSize: 15,
    color: '#fff',
    // textAlign: 'center'
  },
});
