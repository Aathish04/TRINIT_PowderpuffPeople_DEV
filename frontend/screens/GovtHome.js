import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../Components/Header';
import Card from '../Components/Card';
import { useNavigation } from '@react-navigation/native';


export default function GovtHome() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card
        imgSrc={require('../assets/warning-sign.png')}
        onPress={() => navigation.navigate('Earlywarn')}
        />
        <Card
        imgSrc={require('../assets/ambulance.png')}
        onPress={() => navigation.navigate('RescueActivitiesTracking')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});


