import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './app/navigation/Navigation';
import { app } from './app/utils/firebase';

export default function App() {
  return (
      <Navigation/>
  );
}

const styles = StyleSheet.create({});
