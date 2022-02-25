import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './app/navigation/Navigation';
import { app } from './app/utils/firebase';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);
export default function App() {
  return (
      <Navigation/>
  );
}

const styles = StyleSheet.create({});
