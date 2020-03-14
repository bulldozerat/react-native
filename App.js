import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [name, setName] = useState('misho');
  const [objNames, setObjNames] = useState([
    { name: 'Ani', id: '1' },
    { name: 'Viki', id: '2' },
    { name: 'Misho', id: '3' },
    { name: 'Jana', id: '4' },
    { name: 'Top4o', id: '5' },
    { name: 'Reksi', id: '6' },
    { name: 'Neli', id: '7' },
    { name: 'Ico', id: '8' },
    { name: 'Niki', id: '9' },
    { name: 'Ivo', id: '10' }
  ]);

  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! 23</Text>
        <Text>My name iss {name}</Text>
        <TextInput placeholder='Enter yout name' style={styles.input} onChangeText={e => setName(e)} />

        <Button title='click me' onPress={() => setName('viko')} />
      </View>
      <View style={styles.container}>
        <FlatList data={objNames} renderItem={({ item }) => <Text>{item.name}</Text>} />

        <ScrollView>
          {objNames.map(obj => (
            <Text key={obj.id} style={styles.name}>
              {obj.name}
            </Text>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  name: {
    width: '100%',
    backgroundColor: 'gray',
    color: '#fff',
    height: 50,
    margin: 20
  }
});
