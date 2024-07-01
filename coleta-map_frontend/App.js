import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';

import MainComponent from './components/MainComponent';
import Authentication from "./components/Authentication";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <MainComponent />
      ) : (
        <Authentication onLogin={() => setIsAuthenticated(true)}/>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
