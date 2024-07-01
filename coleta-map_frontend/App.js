import { StyleSheet, Text, View } from 'react-native';

// import Map from './components/Map';
import SidebarMenu from './components/SidebarMenu';
import Authentication from "./components/Authentication";

export default function App() {
  return (
    <>
      <Authentication />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
