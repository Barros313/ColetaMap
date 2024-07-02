import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';

import MainComponent from './components/MainComponent';
import Authentication from "./components/Authentication";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);

    setIsAuthenticated(true);
  }


  return (
    <>
      {isAuthenticated ? (
        <MainComponent user={user} />
      ) : (
        <Authentication onLogin={handleLogin} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
