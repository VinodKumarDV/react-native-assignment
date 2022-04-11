import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Groups from './components/Groups';
import Home from './components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Groups /> */}
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
