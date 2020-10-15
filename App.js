// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


class App extends Component {
  render() {
    return (
      <WebView
        style={styles.container}
        source={{ uri: 'https://insole.com.br' }}
        style={{ marginTop: 30 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
export default App;